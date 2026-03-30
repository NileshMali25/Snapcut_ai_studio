import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/landing/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-24 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-8 text-gradient-brand">
          Contact Us
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12 text-muted-foreground">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="mb-6">
              We'd love to hear from you. Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">Trade Name / Operations under</h3>
                <p>SnapCut AI Studio</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p>support@snapcut.ai</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p>+91 99999 99999 (Example)</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">Office Address</h3>
                <p>
                  123 AI Boulevard, Tech Park<br />
                  Mumbai, Maharashtra, 400001<br />
                  India
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl neon-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input placeholder="Your good name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input type="email" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <Textarea placeholder="How can we help?" className="min-h-[120px]" />
              </div>
              <Button className="w-full" type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default ContactUs;
