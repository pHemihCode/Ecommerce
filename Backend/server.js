const express = require("express");
const app = express();
const { resolve } = require("path");
const env = require("dotenv").config({ path: "./.env" });
const cors = require("cors"); // Import the cors middleware

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

// Enable CORS for your React app's origin
app.use(cors());

app.use(express.static(process.env.STATIC_DIR));

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/payment-intent", async (req, res) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "eur",
        amount: 1999,
        automatic_payment_methods: { enabled: true },
      });
      console.log("PaymentIntent response:", paymentIntent)
  
      // Send the clientSecret in the response
      res.setHeader('Content-Type', 'application/json');
      res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error("Error creating PaymentIntent:", error);
      res.status(500).json({ error: error.message });
    }
  });
  const port = process.env.PORT || 5252
app.listen(port, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
