import { useState, useCallback, useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Upload, Image, Download, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const Dashboard = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [progressMsg, setProgressMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((f: File) => {
    if (f.size > 10 * 1024 * 1024) return;
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validTypes.includes(f.type)) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  }, [handleFile]);

  const handleProcess = async () => {
    if (!file) return;
    setProcessing(true);
    setProgressMsg("Uploading and processing image...");

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Send the image strictly using the proxy to bypass CORS
      const response = await fetch("/api/webhook", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with status: ${response.status}`);
      }

      const data = await response.json();

      if (data.url) {
        try {
           const historyStr = localStorage.getItem("snapcut_history") || "[]";
           const history = JSON.parse(historyStr);
           history.unshift({
             id: Date.now().toString(),
             result: data.url,
             date: new Date().toISOString()
           });
           localStorage.setItem("snapcut_history", JSON.stringify(history.slice(0, 10)));
        } catch(e) {}
        
        setProcessedImage(data.url);
      } else {
        throw new Error("Webhook response did not contain a URL");
      }
    } catch (error: any) {
      console.error("Background removal failed:", error);
      import("sonner").then(({ toast }) => {
        toast.error(error.message || "Failed to process image. Make sure your n8n workflow is correctly set up, active, and functioning.");
      });
    } finally {
      setProcessing(false);
    }
  };

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const pastedFile = items[i].getAsFile();
          if (pastedFile) {
            handleFile(pastedFile);
            e.preventDefault();
            break;
          }
        }
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [handleFile]);

  const [historyCount, setHistoryCount] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    try {
      const historyStr = localStorage.getItem("snapcut_history") || "[]";
      const historyArr = JSON.parse(historyStr);
      setHistoryCount(historyArr.length);
      
      const dlCount = localStorage.getItem("snapcut_downloads") || "0";
      setDownloadCount(parseInt(dlCount));
    } catch (e) {}
  }, [processedImage]);

  const handleDownload = () => {
    if (processedImage) {
      const newDls = downloadCount + 1;
      setDownloadCount(newDls);
      localStorage.setItem("snapcut_downloads", newDls.toString());
      
      const link = document.createElement("a");
      link.href = processedImage;
      link.download = "snapcut-result.png";
      link.click();
    }
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
    setProcessedImage(null);
    setProgressMsg("");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-display font-bold text-3xl mb-2">
              Remove <span className="text-gradient-brand">Background</span>
            </h1>
            <p className="text-muted-foreground">Upload an image to get started</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Credits Left", value: "∞", icon: Sparkles },
              { label: "Processed Today", value: historyCount.toString(), icon: Image },
              { label: "Downloads", value: downloadCount.toString(), icon: Download },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4 text-center">
                <stat.icon className="w-5 h-5 text-snap-sky mx-auto mb-1" />
                <div className="font-display font-bold text-xl">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Upload area */}
          <AnimatePresence mode="wait">
            {!file ? (
              <motion.div
                key="upload"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={`relative rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
                  dragOver
                    ? "dashed-selection bg-snap-sky/5 glow-blue"
                    : "border-2 border-dashed border-border hover:border-snap-sky/40 hover:bg-muted/20"
                }`}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFile(f);
                    e.target.value = "";
                  }}
                />
                <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-background" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  Drop your image here
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  or click to browse — JPG, PNG, WEBP up to 10MB
                </p>
                <Button variant="brand" size="sm">Choose File</Button>
              </motion.div>
            ) : (
              <motion.div
                key="preview"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium truncate max-w-xs">{file.name}</span>
                  <button onClick={clearFile} className="text-muted-foreground hover:text-foreground">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Original */}
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Original</div>
                    <div className="rounded-xl overflow-hidden border border-border aspect-square bg-muted/30 flex items-center justify-center">
                      <img src={preview!} alt="Original" className="max-w-full max-h-full object-contain" />
                    </div>
                  </div>

                  {/* Result */}
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Result</div>
                    <div className="rounded-xl overflow-hidden border-2 border-dashed border-snap-sky/30 aspect-square bg-[repeating-conic-gradient(hsl(var(--muted))_0%_25%,transparent_0%_50%)] bg-[length:16px_16px] flex items-center justify-center relative">
                      {processing ? (
                        <div className="text-center w-full px-4">
                          <div className="w-12 h-12 rounded-full border-2 border-snap-sky border-t-transparent animate-spin mx-auto mb-3" />
                          <p className="text-sm text-foreground font-medium mb-1">{progressMsg}</p>
                          <p className="text-xs text-muted-foreground w-full break-words max-w-xs mx-auto">Sending image to cloud processing server...</p>
                        </div>
                      ) : processedImage ? (
                        <img src={processedImage} alt="Result" className="max-w-full max-h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                      ) : (
                        <p className="text-sm text-muted-foreground">Click process to start</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button variant="brand" className="flex-1" onClick={handleProcess} disabled={processing || !!processedImage}>
                    <Sparkles className="w-4 h-4 mr-2" />
                    {processing ? "Processing..." : processedImage ? "Processed" : "Remove Background"}
                  </Button>
                  <Button 
                    variant="brand-outline" 
                    disabled={!processedImage}
                    onClick={handleDownload}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
