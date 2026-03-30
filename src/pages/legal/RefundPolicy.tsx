import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/landing/FooterSection";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-24 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-8 text-gradient-brand">
          Refund and Cancellation Policy
        </h1>
        <div className="prose prose-invert max-w-none text-muted-foreground">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

          <p className="mb-4">
            Our focus is complete customer satisfaction. In the event, if you are displeased with the services provided, we will refund back the money, provided the reasons are genuine and proved after investigation. Please read the fine prints of each deal before buying it, it provides all the details about the services or the product you purchase.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Cancellation Policy</h2>
          <p className="mb-4">
            For Cancellations please contact us via our contact page. Requests received later than 7 business days prior to the end of the current service period will be treated as cancellation of services for the next service period.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Refund Policy</h2>
          <p className="mb-4">
            We will try our best to create the suitable design concepts for our clients. In case any client is not completely satisfied with our products we can provide a refund. 
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>If paid by credit card, refunds will be issued to the original credit card provided at the time of purchase.</li>
            <li>In case of Payment Gateway transfers (Razorpay), refund will be made to the same account.</li>
            <li>Refund requests must be generated within 7 days of the transaction.</li>
            <li>Refunds normally take 5-7 working days to reflect back in your account.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Exceptional Cases</h2>
          <p className="mb-4">
            Refunds will not be given for credits perfectly spent processing images, where there is no flaw or error with our service logic. We stand by the quality of our AI but results may vary based on uploaded content constraints.
          </p>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default RefundPolicy;
