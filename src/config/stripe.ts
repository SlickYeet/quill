export const PLANS = [
  {
    name: "Free",
    slug: "free",
    quota: 10,
    pagesPerPdf: 5,
    price: {
      amount: 0,
      priceIds: {
        test: "",
        productions: "",
      },
    },
  },
  {
    name: "Pro",
    slug: "pro",
    quota: 50,
    pagesPerPdf: 25,
    price: {
      amount: 5,
      priceIds: {
        test: "price_1OHbfmCqXgDXz4MBP9mgCC3e",
        productions: "", // stripe production string (On dashboard disable Test mode)
      },
    },
  },
];
