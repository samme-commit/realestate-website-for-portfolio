export type PropertyType = "villa" | "lägenhet" | "fritidshus";

export type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  priceValue: number;
  rooms: string;
  roomsValue: number;
  area: string;
  status: string;
  type: PropertyType;
  image: string;
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Svalövsvägen 10",
    location: "Björkhagen, Stockholm",
    price: "3 250 000 kr",
    priceValue: 3250000,
    rooms: "2 rum",
    roomsValue: 2,
    area: "58 kvm",
    status: "På förhand",
    type: "lägenhet",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Ängemarken 7A",
    location: "Norra Guldheden, Göteborg",
    price: "2 895 000 kr",
    priceValue: 2895000,
    rooms: "2 rum",
    roomsValue: 2,
    area: "51,5 kvm",
    status: "På förhand",
    type: "lägenhet",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Skytteholmsvägen 5B",
    location: "Solna Centrum, Solna",
    price: "3 995 000 kr",
    priceValue: 3995000,
    rooms: "2 rum",
    roomsValue: 2,
    area: "60 kvm",
    status: "På förhand",
    type: "lägenhet",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Drabantgatan 39",
    location: "T1, Linköping",
    price: "2 795 000 kr",
    priceValue: 2795000,
    rooms: "3 rum",
    roomsValue: 3,
    area: "84 kvm",
    status: "Visning",
    type: "lägenhet",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
];