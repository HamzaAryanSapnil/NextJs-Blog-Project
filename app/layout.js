import localFont from "next/font/local";
import "./globals.css";
// import AuthProvider from "@/api/auth/AuthProvider/AuthProvider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const workSans = localFont({
  src: [
    {path: './fonts/WorkSans-Black.ttf', weight: "900", style: "normal"},
    {path: './fonts/WorkSans-ExtraBold.ttf', weight: "800", style: "normal"},
    {path: './fonts/WorkSans-Bold.ttf', weight: "700", style: "normal"},
    {path: './fonts/WorkSans-SemiBold.ttf', weight: "600", style: "normal"},
    {path: './fonts/WorkSans-Medium.ttf', weight: "500", style: "normal"},
    {path: './fonts/WorkSans-Regular.ttf', weight: "400", style: "normal"},
    {path: './fonts/WorkSans-Light.ttf', weight: "300", style: "normal"},
    {path: './fonts/WorkSans-Thin.ttf', weight: "200", style: "normal"},
    {path: './fonts/WorkSans-ExtraLight.ttf', weight: "100", style: "normal"},

  ],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "YC Directory",
  description: "Pitch, Vote And Grow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
        className={workSans.variable}
      >
  

        {children}
   
      </body>
    </html>
  );
}
