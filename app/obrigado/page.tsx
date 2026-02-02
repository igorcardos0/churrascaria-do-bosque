"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

function ObrigadoContent() {
  const searchParams = useSearchParams()
  const encodedUrl = searchParams.get("url")
  const [seconds, setSeconds] = useState(4)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!encodedUrl || encodedUrl.trim() === "") {
      setError("Link de redirecionamento não informado.")
      return
    }

    let targetUrl: string
    try {
      targetUrl = decodeURIComponent(encodedUrl)
      if (!targetUrl.startsWith("http") && !targetUrl.startsWith("tel:") && !targetUrl.startsWith("mailto:")) {
        setError("Link de redirecionamento inválido.")
        return
      }
    } catch {
      setError("Link de redirecionamento inválido.")
      return
    }

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          window.location.href = targetUrl
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [encodedUrl])

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold font-lora text-white">Ops!</h1>
          <p className="text-gray-400 font-poppins">{error}</p>
          <Button asChild className="bg-red-600 hover:bg-red-700 font-poppins">
            <Link href="/">Voltar ao início</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold font-lora text-white">Obrigado!</h1>
        <p className="text-xl text-gray-300 font-poppins">
          Redirecionando em <span className="text-red-500 font-bold">{seconds}</span> segundo{seconds !== 1 ? "s" : ""}...
        </p>
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-red-600 border-t-transparent animate-spin" />
        </div>
        <p className="text-sm text-gray-500 font-poppins">
          Se não for redirecionado,{" "}
          <Link href="/" className="text-red-400 hover:underline">
            clique aqui para voltar
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default function ObrigadoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-red-600 border-t-transparent animate-spin" />
        </div>
      }
    >
      <ObrigadoContent />
    </Suspense>
  )
}
