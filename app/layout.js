import { Inter } from "next/font/google";
import "./globals.css";
import FilterState from "./context/filterState";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareerCanvas",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
          <FilterState>
            {children}
          </FilterState>
       
      </body>
    </html>
  );
}
