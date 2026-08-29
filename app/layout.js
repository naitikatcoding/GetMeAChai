import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Chai - Fund your project with chai",
  description:
    "This website helps influencers and content creators to raise funds from their fans and community",
  
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Added bg-black or slate here so the grid contrasts nicely */}
      <body className="min-h-full flex flex-col bg-black text-white relative">
        
        {/* Fixed Background Layer (Grid + Glow) */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-10 right-0 top-[-30%] md:h-175 md:w-175 rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,transparent)]"></div>
        </div>

        {/* Content Structure */}
        <Navbar />
        <main className="grow min-h-screen w-full">
          {children}
        </main>
        <Footer />
        
      </body>
    </html>
  );
}
