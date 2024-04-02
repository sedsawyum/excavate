import "@/styles/globals.css";
import {Inter as FontSans} from "next/font/google"

import Header from "@/components/Header"

import {cn} from "@/lib/utils"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata = {
    title: "Search Platform",
    description: "New Generation Search Platform",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
        )}>
        {/*<Header/>*/}
        {children}
        </body>
        </html>
    );
}
