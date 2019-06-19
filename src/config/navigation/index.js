export const brand = "Minimal app";
export const sections = [
	{
		name: "Inicio",
		route: "/home"
	},
	{
		name: "Nosotros",
		route: "/about"
	},
  {
    name:"Ejemplo",
    sections: [{
      name: "De",
      sections: [{
        name: "Anidación",
        sections: [{
          name: "De",
          sections: [{
            name: "Menú",
            route: "/example"
          }]
        }]
      }]
    }]
  }
];