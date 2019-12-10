import React, { useEffect } from "react"
import Layout from "../components/layout"
import Helmet from "../components/helmet"

const stripeTokenHandler = (token) => {
  // Insert the token ID into the form so it gets submitted to the server
  const form = document.getElementById('payment-form');
  const hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  // Submit the form
  form.submit();
}

const DonateForm = () => {
  
  useEffect(() => {

    // Custom styling can be passed to options when creating an Element.
    const style = {
      base: {
        // Add your base input styles here. For example:
        fontSize: '16px',
        color: "#32325d",
      },
    };

    const stripe = window.Stripe('pk_live_IGwgNve60rtWg5LFRobD1la100aYKjXJrj');

    // Create an instance of the card Element.
    const card = stripe.elements().create('card', {style});

    if (document.getElementById('card-element')) {
      // Add an instance of the card Element into the `card-element` <div>.
      card.mount('#card-element');


      // Create a token or display an error when the form is submitted.
      const form = document.getElementById('payment-form');
      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const {token, error} = await stripe.createToken(card);

        if (error) {
          // Inform the customer that there was an error.
          const errorElement = document.getElementById('card-errors');
          errorElement.textContent = error.message;
        } else {
          // Send the token to your server.
          stripeTokenHandler(token);
        }
      });
    }
  }, []);

  return (
    <Layout>
      <Helmet title="Donate" />
      <h1>Donations</h1>

      <form action="http://18.218.201.87" method="post" id="payment-form">
        <p style={{width: '100%'}}>100% of donations go directly to programs for a needy child.   All of our administrative costs are paid by our founders, and all overhead services (like this website) are donated.</p>

        <div className="form-row">
          <label htmlFor="paymentAuthor">
            Name
          </label><br />
          <input name="paymentAuthor" type="text" style={{marginBottom:'1rem', width: '50%'}} /><br />
          <label htmlFor="card-element">
            Credit or debit card
          </label>
          <div id="card-element" style={{marginTop: '.5rem', marginBottom: '1rem'}} />
          <div id="card-errors" role="alert" />
          <label htmlFor="paymentAmount">
            Payment Amount
          </label><br />
          <input name="paymentAmount" type="text" style={{marginBottom:'1rem', width: '50%'}} /><span style={{marginLeft: '4px'}}>$</span>
        </div>

        <button>Submit Payment</button>
      </form>
    </Layout>
  );
}


export default DonateForm;
