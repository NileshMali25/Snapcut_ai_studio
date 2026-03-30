import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/landing/FooterSection";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-24 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-8 text-gradient-brand">
          Terms & Conditions
        </h1>
        <div className="prose prose-invert max-w-none text-muted-foreground">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to SnapCut AI. These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use SnapCut AI if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on SnapCut AI's website for personal, non-commercial transitory viewing only.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on SnapCut AI's website;</li>
            <li>remove any copyright or other proprietary notations from the materials.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Limitations</h2>
          <p className="mb-4">
            In no event shall SnapCut AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SnapCut AI's website.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Revisions and Errata</h2>
          <p className="mb-4">
            The materials appearing on SnapCut AI's website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Links</h2>
          <p className="mb-4">
            SnapCut AI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SnapCut AI of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Site Terms of Use Modifications</h2>
          <p className="mb-4">
            SnapCut AI may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Payments & Billing</h2>
          <p className="mb-4">
            We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction.
          </p>

        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default TermsAndConditions;
