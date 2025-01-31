export type ColorPalette = {
    name: string;
    description: string;
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      text: string;
      tailwindClasses: {
        primary: string;
        secondary: string;
        accent: string;
        text: string;
      };
    };
  };
  
  export const coffeeColorPalettes: ColorPalette[] = [
    {
      name: "Café Tradicional",
      description: "Tonos tierra inspirados en los granos frescos y montañas cafeteras",
      colors: {
        primary: "#3E2723",    // Café oscuro intenso
        secondary: "#2E4E3F",  // Verde bosque
        accent: "#D2A679",     // Beige tostado
        text: "#F5E6D3",       // Crema suave
        tailwindClasses: {
          primary: "coffee-900",
          secondary: "green-800",
          accent: "beige-400",
          text: "cream-50"
        }
      }
    },
    {
      name: "Raíces Antiguas",
      description: "Paleta vintage con toques de madera envejecida y café añejado",
      colors: {
        primary: "#4A2C1D",    // Madera de roble
        secondary: "#8B5E3C",  // Tono ámbar
        accent: "#5C4B37",     // Cuero antiguo
        text: "#E3D5C5",       // Papiro claro
        tailwindClasses: {
          primary: "wood-800",
          secondary: "amber-600",
          accent: "leather-700",
          text: "parchment-200"
        }
      }
    },
    {
      name: "Origen Moderno",
      description: "Estilo minimalista contemporáneo con acentos de café premium",
      colors: {
        primary: "#1A1A1A",    // Negro intenso
        secondary: "#FFFFFF",  // Blanco puro
        accent: "#6B8E4E",     // Verde esmeralda
        text: "#333333",       // Gris oscuro
        tailwindClasses: {
          primary: "black-900",
          secondary: "white",
          accent: "emerald-600",
          text: "gray-800"
        }
      }
    }
  ];