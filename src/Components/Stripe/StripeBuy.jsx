import React, {useState, useEffect} from 'react'

import React from 'react';

const StripeBuy = () => {

const stripePublishKey= import.meta.env.VITE_STRIPE_PUBLISHABLE

    return (
        <stripe-buy-button
          buy-button-id="'{{BUY_BUTTON_ID}}'"
          publishable-key={stripePublishKey}
        >
        </stripe-buy-button>
      );
};

export default StripeBuy;