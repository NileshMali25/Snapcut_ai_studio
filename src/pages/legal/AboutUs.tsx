import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/landing/FooterSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-24 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 text-gradient-brand">
            About SnapCut AI
          </h1>
          <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
            We're on a mission to make professional image editing accessible to everyone through the power of Artificial Intelligence.
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="mb-4">
                Founded in 2024, SnapCut AI started with a simple realization: editing images should not require a degree in graphic design or hours of meticulous lassoing.
              </p>
              <p>
                As AI models advanced, we saw the perfect opportunity to democratize a tool that was historically locked behind expensive software and steep learning curves. What used to take professionals 10 minutes, now takes our AI less than 3 seconds.
              </p>
            </div>
            <div className="neon-border glass p-8 rounded-2xl flex items-center justify-center text-center">
              <p className="text-2xl font-display italic font-medium text-gradient-brand">
                "AI isn't here to replace creators.<br/>It's here to empower them."
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-4">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-2">Simplicity</h3>
              <p className="text-base">We believe the best interfaces are invisible. You shouldn't have to learn how to use SnapCut.</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-2">Privacy</h3>
              <p className="text-base">We delete your images after processing. We don't train our models on your personal data.</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-2">Quality</h3>
              <p className="text-base">We obsess over the details: the stray hairs, the transparent glass, the challenging shadows.</p>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default AboutUs;
