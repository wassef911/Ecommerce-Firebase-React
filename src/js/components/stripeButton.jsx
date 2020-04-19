import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price }) {
  const publishableKey = "pk_test_tgNtACJqPaoo7ni1g4aQFYZC00L438N0ZF";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successsful");
  };
  return (
    <>
      <StripeCheckout
        label="Pay Now"
        name="Cloth Store"
        billingAddress
        shippingAddress
        description={`Your total is ${price} DT`}
        amount={price * 100}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        ComponentClass="div"
      />
    </>
  );
}

export default StripeButton;
