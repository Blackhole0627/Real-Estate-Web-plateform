export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export const team: TeamMember[] = [
  {
    name: "Franciel Ortega",
    role: "Asesor y Fundador",
    photo: "/assets/franciel-ortega.jpg",
  },
  {
    name: "Jadielis Alcántara",
    role: "Consultora Inmobiliaria",
    photo: "/assets/jadielis-alcantara.png",
  },
  {
    name: "Sergio Javier",
    role: "Consultor Inmobiliario",
    photo: "/assets/sergio-javier.jpg",
  },
  {
    name: "Eddy Richarson",
    role: "Consultor Inmobiliario",
    photo: "/assets/eddy-richarson.jpg",
  },
];
