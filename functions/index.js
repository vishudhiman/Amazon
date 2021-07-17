const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HeMZ4FO6nylJz9rbTi0178oNJJSmbZ5h0j52tWOwX5HwTlx3yV9b4MoPSmiBFLTSBGgBieFdyDbQ2U9G5osFbAj00XuIKQJH6"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Recieved BOOM!!! For This Amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-fe0b5/us-central1/api
