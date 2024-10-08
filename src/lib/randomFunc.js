const COLORS = {
  green: {
    bg: "bg-[#ECF7D4]",
    bgtype: "bg-[#c4db91]",
    badge: "bg-[#D6F497]",
  },
  orange: {
    bg: "bg-[#F9EFE1]",
    bgtype: "bg-[#f7a3596e]",
    badge: "bg-[#F7E0B8]",
  },
  red: {
    bg: "bg-[#FBE5E7]",
    bgtype: "bg-[#f5b3b9]",
    badge: "bg-[#FDC6C7]",
  },
};

export const getRandomColor = () => {
 const colorName = Object.keys(COLORS); //to get tye color name
  const randomIndex = Math.floor(Math.random() * colorName.length); //to get a random index
  const randomColor = colorName[randomIndex]; //to get the random color
  return COLORS[randomColor];
};