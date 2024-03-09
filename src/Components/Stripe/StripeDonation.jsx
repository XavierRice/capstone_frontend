import React from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';


const StripeDonation = () => {
    const stripeKey = import.meta.env.VITE_STRIP_PUBLISHABLE
    return (
        <div>
            <StripeProvider
                publishableKey={stripeKey}
                urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
                merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
            >
      // Your app code here
            </StripeProvider>
        </div>
    );
};

export default StripeDonation;