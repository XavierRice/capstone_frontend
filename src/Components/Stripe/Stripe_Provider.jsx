import React, {useState} from "react";
import { StripeProvider } from '@stripe/stripe-react-native';
import StripeDonation from "./StripeDonation";

function Stripe_Provider() {
  const stripePublishKey = import.meta.env.VITE_STRIP_PUBLISHABLE  
  return (
    <StripeProvider
      publishableKey={stripePublishKey}
    >
      <StripeDonation/>
    </StripeProvider>
  );
};

export default Stripe_Provider;