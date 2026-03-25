import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Trash, Download, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface HistoryItem {
  id: string;
  result: string;
  date: string;
}

const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    try {
      const h = JSON.parse(localStorage.getItem("snapcut_history") || "[]");
      setHistory(h);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("snapcut_history");
    setHistory([]);
  };

  const removeHistoryItem = (id: string) => {
    const newHistory = history.filter(h => h.id !== id);
    localStorage.setItem("snapcut_history", JSON.stringify(newHistory));
    setHistory(newHistory);
  };

  const downloadItem = (data: string) => {
    const link = document.createElement("a");
    link.href = data;
    link.download = `snapcut-result-${Date.now()}.png`;
    link.click();
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div>
              <h1 className="font-display font-bold text-3xl mb-2">
                Your <span className="text-gradient-brand">History</span>
              </h1>
              <p className="text-muted-foreground">View and manage your recent cutouts</p>
            </div>
            {history.length > 0 && (
              <Button variant="destructive" onClick={clearHistory}>
                <Trash className="w-4 h-4 mr-2" />
                Clear History
              </Button>
            )}
          </div>

          {history.length === 0 ? (
            <div className="glass rounded-2xl p-12 text-center flex flex-col items-center justify-center border-dashed">
              <div className="w-16 h-16 rounded-2xl bg-muted/50 flex flex-col items-center justify-center mb-4 text-muted-foreground">
                <ImageIcon className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">No history yet</h3>
              <p className="text-muted-foreground mb-6">Start removing backgrounds to see them here.</p>
              <Button variant="brand" asChild>
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {history.map((item) => (
                <div key={item.id} className="glass rounded-2xl overflow-hidden flex flex-col border border-border">
                  <div className="aspect-square bg-[repeating-conic-gradient(hsl(var(--muted))_0%_25%,transparent_0%_50%)] bg-[length:16px_16px] flex items-center justify-center p-4 relative group">
                    <img src={item.result} alt="History" className="max-w-full max-h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                    
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm">
                      <Button variant="brand" size="icon" onClick={() => downloadItem(item.result)}>
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => removeHistoryItem(item.id)}>
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-3 text-xs text-muted-foreground text-center border-t border-border/50">
                    {new Date(item.date).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
