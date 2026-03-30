import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/landing/FooterSection";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-24 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-8 text-gradient-brand">
          Shipping & Delivery Policy
        </h1>
        <div className="prose prose-invert max-w-none text-muted-foreground">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Digital Product Delivery</h2>
          <p className="mb-4">
            SnapCut AI provides digital services, specifically AI-based image background removal. 
            Because our services are entirely digital, there is no physical shipping involved.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Delivery Mechanism</h2>
          <p className="mb-4">
            Once you upload an image and initiate the background removal process, the processed image
            is made available for immediate download directly through your web browser on our platform.
            The delivery of the service is considered complete the moment the processed image is rendered
            on your screen and the download option becomes accessible.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Delivery Time</h2>
          <p className="mb-4">
            The processing and delivery time is typically instantaneous, usually taking a few seconds 
            depending on the size and complexity of the image uploaded, as well as your internet connection speed.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Accessing Your Processed Files</h2>
          <p className="mb-4">
            You can also access your previously processed files (subject to our data retention limits) in 
            your account history panel. Please download any files you wish to keep long-term as we clear server 
            storage routinely to maintain privacy.
          </p>
          
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Contact</h2>
          <p className="mb-4">
            If you experience any issues accessing or downloading your processed images, please contact us at support@snapcut.ai so we can assist you.
          </p>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default ShippingPolicy;
