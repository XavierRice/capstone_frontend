import React from 'react';
import React,{ useState, useEffect } from 'react';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { Card as BootstrapCard } from "react-bootstrap";


const StripePaymentEvent = () => {
    const stripe = useStripe();
    const [eventData, setEventData] = useState({})


    useEffect(() => {
        const fetchBackendEvent = async () => {
          try {
            const response = await axios.get(`${backend}/events`)
            const backendEvents = response.data.data
            setEventData(backendEvents)
          } catch (error) {
            console.error("Error fetching BackEnd Events:", error);
          } finally {
            setLoading(false);
          }
        }
        fetchBackendEvent()
      }, [])
    
    console.log(eventData)
    return (
        <div>
            <>This is the payment event card.</>
        </div>
    );
};

export default StripePaymentEvent;