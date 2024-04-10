import React, { useState, useEffect } from 'react'


const StripeBuy = ({ buyButtonId }) => {

  const stripePublishKey = import.meta.env.VITE_STRIPE_PUBLISHABLE

  return (
    <div style={{justifyContent:'center', marginLeft: '20%'}}>
      <stripe-buy-button
        buy-button-id={buyButtonId}
        publishable-key={stripePublishKey}
      >
      </stripe-buy-button>
    </div>
  );
};

export default StripeBuy;