import { StripeProvider } from '@stripe/stripe-react-native';

function Stripe_Provider() {
  const stripePublishKey = import.meta.env.VITE_STRIP_PUBLISHABLE  
  return (
    <StripeProvider
      publishableKey={stripePublishKey}
    >
      // Your app code here
    </StripeProvider>
  );
}