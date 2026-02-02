"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
] as const

export function MobileNav({ reservarHref }: { reservarHref: string }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden text-white min-w-[44px] min-h-[44px]" aria-label="Abrir menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs bg-black border-gray-800">
        <nav className="flex flex-col gap-6 pt-8 font-poppins">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white hover:text-red-400 transition-colors text-lg py-2 min-h-[44px] flex items-center"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href={reservarHref}
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition-colors text-lg min-h-[44px] w-full"
            onClick={() => setOpen(false)}
          >
            Reservar Mesa
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
