import "@mantine/core/styles.css";
import "./globals.css";

import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Remit Circle Available Through XC Exchange | Xc Exchange",
  description: "Fast, secure international transfers with local support.",
  icons: {
    icon: "/rc-logo-1.png",
    shortcut: "/rc-logo-1.png",
    apple: "/rc-logo-1.png",
  },
};

const theme = createTheme({
  primaryColor: "brand",
  defaultRadius: "md",
  fontFamily: inter.style.fontFamily,
  headings: { fontFamily: inter.style.fontFamily, fontWeight: "700" },
  colors: {
    brand: [
      "#fff8f2",
      "#ffeede",
      "#ffd8b5",
      "#ffc289",
      "#ffad5d",
      "#f47920",
      "#d26112",
      "#ad4c0a",
      "#8a3a07",
      "#6b2d05",
    ],
    ocean: [
      "#e6f2ff",
      "#c4ddff",
      "#9dc7ff",
      "#75b0ff",
      "#4c99ff",
      "#1f7de9",
      "#1261c3",
      "#0c4ba0",
      "#07387e",
      "#03295f",
    ],
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps} className={inter.variable}>
      <head>
        <ColorSchemeScript />
      </head>
      <body style={{ fontFamily: inter.style.fontFamily }}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
