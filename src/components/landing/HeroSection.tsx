import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Upload, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-snap-sky/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-snap-purple/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-snap-indigo/3 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-snap-sky/20 text-sm text-muted-foreground mb-8">
            <Sparkles className="w-4 h-4 text-snap-sky" />
            AI-Powered Background Removal
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Remove Backgrounds{" "}
            <span className="text-gradient-brand">Instantly</span>
            <br />
            with AI Precision
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Upload your image, let our AI do the magic. Get clean, professional
            cutouts in seconds — no design skills needed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="brand" size="lg" className="text-base px-8 py-6" asChild>
              <Link to="/register">
                <Upload className="w-5 h-5 mr-2" />
                Start Free — No Card Required
              </Link>
            </Button>
            <Button variant="brand-outline" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#features">See How It Works</a>
            </Button>
          </div>
        </motion.div>

        {/* Demo preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden neon-border">
            <div className="glass-strong rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Before */}
                <div className="flex-1 text-center">
                  <div className="rounded-xl bg-muted/30 border border-border p-6 aspect-square flex items-center justify-center relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-snap-sky/20 to-snap-purple/20 flex items-center justify-center">
                      <Upload className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <div className="absolute bottom-3 text-xs text-muted-foreground">Original</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2">
                  <div className="hidden md:flex flex-col items-center gap-1">
                    <Sparkles className="w-6 h-6 text-snap-sky animate-glow-pulse" />
                    <div className="w-px h-8 bg-gradient-brand-horizontal" />
                    <span className="text-xs text-gradient-brand font-semibold">AI</span>
                  </div>
                </div>

                {/* After */}
                <div className="flex-1 text-center">
                  <div className="rounded-xl border-2 border-dashed border-snap-sky/40 p-6 aspect-square flex items-center justify-center relative bg-[repeating-conic-gradient(hsl(var(--muted))_0%_25%,transparent_0%_50%)] bg-[length:16px_16px]">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-snap-sky/30 to-snap-purple/30 flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-snap-purple" />
                    </div>
                    <div className="absolute bottom-3 text-xs text-muted-foreground">Background Removed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
