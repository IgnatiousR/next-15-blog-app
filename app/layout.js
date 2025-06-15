import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Next App",
    description: "next app",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Header/>
                <main className="mt-12 mx-5">
                    {children}
                </main>
            </body>
        </html>
    );
}