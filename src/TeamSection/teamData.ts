export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Vaibhav Rahi",
    role: "Chief Executive Officer",
    description:
      "Vaibhav Rahi is a visionary CEO known for innovative leadership and a commitment to excellence. His strategic direction and collaborative approach drive organizational success.",
    image:
      "/assets/vaibhav.png",
  },
  {
    id: 2,
    name: "Vikrant P.Tathavadekar",
    role: "Chief Marketing Officer",
    description:
      " Vikrant P.Tathavadekar is a transformational sales leader and strategist, known for driving business growth and building strong partnerships. His strategic vision and results-driven approach consistently contribute to organizational success.",
    image:
      "/assets/vikrant.jpeg",
  },
];
