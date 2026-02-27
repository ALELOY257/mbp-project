import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "600", "700"]

  })

export const fonts = {
  playfair,
};