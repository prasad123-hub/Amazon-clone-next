const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  //   console.log(email);
  //   console.log(items);

  const transfromedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "gbp",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1IuCAbSJCqS6Ka1Xxjp6g7b0"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA", "IN"],
    },
    line_items: transfromedItems,
    mode: "payment",

    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
