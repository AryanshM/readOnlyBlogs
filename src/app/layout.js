import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar"
export const metadata = {
  title: "Read Only Blog",
  description: "Created by aryanshm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}

      </body>
    </html>
  );
}
