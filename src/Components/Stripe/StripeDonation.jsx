
import React,{ useState, useEffect } from 'react';
import {loadConnectAndInitialize} from '@stripe/connect-js';
import {
  ConnectPayments,
  ConnectComponentsProvider,
} from "@stripe/react-connect-js";

const StripeDonation = () => {

  const stripePublishKey = import.meta.env.VITE_STRIPE_PUBLISHABLE  
  const backend = import.meta.env.VITE_BACKEND_URL
  // We use `useState` to ensure the Connect instance is only initialized once
  const [stripeConnectInstance] = useState(() => {

    const fetchClientSecret = async () => {
      // Fetch the AccountSession client secret
      const response = await fetch(`${backend}/payments`, { method: "POST" });
      if (!response.ok) {
        // Handle errors on the client side here
        const {error} = await response.json();
        console.error('An error occurred: ', error);
        document.querySelector('#error').removeAttribute('hidden');
        return undefined;
      } else {
        const {client_secret: clientSecret} = await response.json();
        document.querySelector('#error').setAttribute('hidden', '');
        return clientSecret;
      }
    }

    return loadConnectAndInitialize({
      // This is your test publishable API key.
      publishableKey: stripePublishKey,
      fetchClientSecret: fetchClientSecret,
      appearance: {
        overlays: 'dialog',
        variables: {
          colorPrimary: '#625afa',
        },
      },
    })
  });

  return (
    <div className="container">
      <ConnectComponentsProvider connectInstance={stripeConnectInstance}>
        <ConnectPayments />
      </ConnectComponentsProvider>
    </div>
  )
};



export default StripeDonation;