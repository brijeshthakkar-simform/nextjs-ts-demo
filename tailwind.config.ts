import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      name: "default",
      colorBg: "#252525",
      colorBg2: "#212121",
      colorDanger: "#fe6854",
      colorGreenDark: "#27AE60",
      colorGreyDark: "#131313",
      colorGrey0: "#f8f8f8",
      colorGrey1: "#dbe1e8",
      colorGrey2: "#b2becd",
      colorGrey3: "#6c7983",
      colorGrey4: "#454e56",
      colorGrey5: "#2a2e35",
      colorGrey6: "#12181b",
      colorWhite: "#fff",
      colorPrimaryGreen: "#6FCF97",
      borderColor2: "rgba(249,249,249, 0.08)",
      shadow1: "1px 7px 12px rgba(8, 18, 69, 0.1)",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
