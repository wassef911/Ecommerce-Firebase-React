import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function StripeButton({ price }) {
  const PriceForStripe = price * 100;
  const publishableKey = "pk_test_tgNtACJqPaoo7ni1g4aQFYZC00L438N0ZF";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: PriceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((err) => {
        console.log("Payment error :", JSON.parse(err));
        alert(
          " There was an issue with your payment. Please make sure you use the provided credit card "
        );
      });
  };
  return (
    <>
      <StripeCheckout
        label="Pay Now"
        name="Cloth Store"
        billingAddress
        shippingAddress
        description={`Your total is ${price} DT`}
        amount={PriceForStripe}
        panelLabel="Pay Now"
        token={() => onToken()}
        stripeKey={publishableKey}
        ComponentClass="div"
      />
    </>
  );
}

export default StripeButton;
