// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const servicesList = [
  {
    id: 1,
    pName: "Websites Development",
    url: "websites-development",
    img: "",
    Technologies: [
      "React",
      "Angular",
      "Vue",
      "Next",
      "TypeSCript",
      "JavaSCript",
      "Node",
    ],
    experience: 10,
  },
  {
    id: 2,
    pName: "Mpbile Apps Development",
    url: "mobile-apps-development",
    img: "",
    Technologies: ["Android", "IOS"],
    experience: 4,
  },
  {
    id: 3,
    pName: "Cloud Data Storage",
    url: "cloud-data-storage",
    img: "",
    Technologies: ["Azure", "AWS"],
    experience: 4,
  },
  {
    id: 4,
    pName: "IT Consultation",
    url: "it-consultation",
    img: "",
    Technologies: [
      "Website Development",
      "Mobile Apps Development",
      "Cloud Data Storage",
    ],
    experience: 4,
  },
];

export default function handler(req, res) {
  res.status(200).json(servicesList);
}
