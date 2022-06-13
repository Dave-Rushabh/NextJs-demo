// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const productsList = [
  {
    id: 1,
    pName: "ERP Systems",
    url: "ERP-Systems",
    img: "/products/ERP.png",
    availableItems: 20,
    cost: 10_000,
  },
  {
    id: 2,
    pName: "HR Portals",
    url: "HR-Portals",
    img: "",
    availableItems: 10,
    cost: 1000,
  },
  {
    id: 3,
    pName: "Email Buddy",
    url: "Email-Buddy",
    img: "",
    availableItems: 4,
    cost: 5000,
  },
  {
    id: 4,
    pName: "Chat Bots",
    url: "Chat-Bots",
    img: "",
    availableItems: 11,
    cost: 4500,
  },
  {
    id: 5,
    pName: "File Managements",
    url: "File-Managements",
    img: "",
    availableItems: 9,
    cost: 250,
  },
  {
    id: 6,
    pName: "Payments Integration",
    url: "Payments-Integration",
    img: "",
    availableItems: 1,
    cost: 20_000,
  },
  {
    id: 7,
    pName: "Digitalization",
    url: "Digitalization",
    img: "",
    availableItems: 5,
    cost: 1000,
  },
  {
    id: 8,
    pName: "Business Analysters",
    url: "Business-Analysters",
    img: "",
    availableItems: 3,
    cost: 7000,
  },
];

export default function handler(req, res) {
  res.status(200).json(productsList);
}
