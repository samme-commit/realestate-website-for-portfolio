export type Agent = {
  id: number;
  name: string;
  title: string;
  area: string;
  phone: string;
  email: string;
  image: string;
};

export const agents: Agent[] = [
  {
    id: 1,
    name: "Emma Lindgren",
    title: "Fastighetsmäklare",
    area: "Stockholm",
    phone: "070-123 45 67",
    email: "emma@stadochstrand.se",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Oscar Berg",
    title: "Fastighetsmäklare",
    area: "Göteborg",
    phone: "070-234 56 78",
    email: "oscar@stadochstrand.se",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Sofia Nyström",
    title: "Ansvarig mäklare",
    area: "Piteå & Norrbotten",
    phone: "070-345 67 89",
    email: "sofia@stadochstrand.se",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
  },
];