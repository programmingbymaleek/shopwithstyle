import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

function Paymentpal() {
  return (
    <PayPalScriptProvider options={{ "client-id": "AdMfC-MxuB2P8xjyJRj063RKbC1XUD7ysec-VxlqBXXL3qv5zx3AV-Pta8ocja1m1Tjm5Ochn-6yom50", currency: "USD" }}>
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "1.99",
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  )
}

export default Paymentpal