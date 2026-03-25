import { motion } from "framer-motion";
import { Zap, Shield, Image, Download, CreditCard, Code } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Remove backgrounds in under 5 seconds with our advanced AI engine.",
  },
  {
    icon: Image,
    title: "HD Quality",
    description: "Support for images up to 5000×5000 pixels in JPG, PNG, and WEBP.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Images auto-delete after 24 hours. We never store your data permanently.",
  },
  {
    icon: Download,
    title: "Instant Download",
    description: "Download your transparent PNG immediately. No watermarks on paid plans.",
  },
  {
    icon: CreditCard,
    title: "Flexible Plans",
    description: "Free tier with 5 images/day. Unlimited processing on Pro plan.",
  },
  {
    icon: Code,
    title: "Developer API",
    description: "RESTful API with rate limiting, usage tracking, and API key management.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-brand-horizontal opacity-20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Why Choose <span className="text-gradient-brand">SnapCut AI</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Enterprise-grade AI background removal made simple for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-xl p-6 hover:glow-brand transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
