const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname));
// app.use("/images", express.static(__dirname + "/images"));
app.use("/scripts", express.static(__dirname + "/scripts"));

// viewed at based directory http://localhost:8080/
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/homepage.html"));
});

// add other routes below
app.get("/listen", function (req, res) {
  res.sendFile(path.join(__dirname + "/listen.html"));
});

app.get("/watch", function (req, res) {
  res.sendFile(path.join(__dirname + "/watch.html"));
});

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const Stripe = require("stripe");
const stripe = Stripe("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

// const product = await stripe.products.create({
//   name: "Job Unseen",
//   images: ["./styles/media/job-unseen.jpg"],
//   id: "prod_1",
//   shippable: true,
// });

// const price = await stripe.prices.create({
//   product: {product.id},
//   unit_amount: 1999,
//   currency: "usd",
// });

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Job Unseen Paperback",
          },
          unit_amount: 1949,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel",
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));

app.listen(process.env.PORT || 8080);
