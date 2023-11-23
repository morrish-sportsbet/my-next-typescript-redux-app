import { createTheme } from "@mui/material/styles";
export function createAppTheme() {
  return createTheme({
    palette: {
      primary: {
        light: "#64B5F6",
        main: "#0087CC",
        dark: "#00538E",
      },
      secondary: {
        light: "#64B5F6",
        main: "#0047CC",
      },
      error: {
        light: "#ffebee",
        main: "#b71c1c",
        dark: "#7f0000",
      },
      warning: {
        light: "#fff3e0",
        main: "#E65100",
        dark: "#ac1900",
      },
      success: {
        light: "#e8f5e9",
        main: "#2e7d32",
        dark: "#005005",
      },
      info: {
        light: "#e3f2fd",
        main: "#0091EA",
        dark: "#0069c0",
      },
      background: {
        default: "#F5F5F5",
      },
      text: {
        disabled: "rgba(0, 0, 0, 0.25)",
      },
    },
  });
}
