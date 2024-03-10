import {
    ConnectPayments,
    ConnectComponentsProvider,
  } from "@stripe/react-connect-js";
  
  return (
    <ConnectComponentsProvider connectInstance={stripeConnectInstance}>
      <ConnectPayments />
    </ConnectComponentsProvider>
  );