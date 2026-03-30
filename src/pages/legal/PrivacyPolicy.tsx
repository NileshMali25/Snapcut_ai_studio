import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/landing/FooterSection";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-24 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-8 text-gradient-brand">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none text-muted-foreground">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Information Collection</h2>
          <p className="mb-4">
            We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey, or use our background removal application. This may include your name, email address, password, or uploaded images.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Image Processing & Storage</h2>
          <p className="mb-4">
            Images uploaded to SnapCut AI are processed to remove the background. The resulting image is temporally stored on our servers to allow you to download it. We do not use your images for training of any models without explicit consent and images are automatically deleted as part of our data lifecycle process.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Use of Information</h2>
          <p className="mb-4">
            Any of the information we collect from you may be used in one of the following ways:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To personalize your experience</li>
            <li>To improve our website functionality</li>
            <li>To process transactions via Razorpay</li>
            <li>To send periodic account-related emails</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Protection of Information</h2>
          <p className="mb-4">
            We implement a variety of security measures to maintain the safety of your personal information. Your personal information is accessible only by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Cookies</h2>
          <p className="mb-4">
            We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Third-Party Disclosure</h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Your Consent</h2>
          <p className="mb-4">
            By using our site, you consent to our website privacy policy.
          </p>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default PrivacyPolicy;
