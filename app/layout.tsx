import type React from "react"
import type { Metadata } from "next"
import { Lora, Poppins } from "next/font/google"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Churrascaria do Bosque - O Melhor Churrasco de Guarulhos",
  description:
    "Há mais de 20 anos servindo o melhor churrasco de Guarulhos. Cortes nobres, buffet completo e ambiente elegante. Reserve sua mesa!",
  keywords: "churrascaria, churrasco, Guarulhos, restaurante, cortes nobres, buffet, eventos corporativos, casamentos",
  icons: {
    icon: "/images/logo-horizontal-branco.png",
    apple: "/images/logo-horizontal-branco.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${lora.variable} ${poppins.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
