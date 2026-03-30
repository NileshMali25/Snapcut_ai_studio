export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

interface RazorpayOptions {
  amount: number;
  currency?: string;
  name?: string;
  description?: string;
  image?: string;
  order_id?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
}

export const displayRazorpay = async (options: RazorpayOptions, onSuccess: (response: any) => void) => {
  const res = await loadRazorpayScript();

  if (!res) {
    alert("Razorpay SDK failed to load. Are you offline?");
    return;
  }

  const defaultOptions = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
    currency: "INR",
    name: "SnapCut AI",
    description: "Pro Upgrade",
    image: "/logo.png", // make sure we have this or it might just not show
    theme: {
      color: "#8B5CF6", // brand color
    },
    ...options,
    handler: function (response: any) {
      onSuccess(response);
    },
  };

  const paymentObject = new (window as any).Razorpay(defaultOptions);
  paymentObject.open();
};
