import { createTheme } from "@mantine/core";
import { myGreen, myGrey } from "../constants/constTheme";

export const theme = createTheme({
  headings: {
    sizes: {
      h1: {
        fontWeight: "600",
        fontSize: "32px",
      },
    },
  },
  colors: {
    myGreen,
    myGrey,
  },
  radius: {
    md: "8px",
    xl: "16px",
  },
});
