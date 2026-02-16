"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

function ObrigadoContent() {
  const searchParams = useSearchParams()
  const [seconds, setSeconds] = useState(4)
  const [error, setError] = useState<string | null>(null)
  const [targetUrl, setTargetUrl] = useState<string | null>(null)

  useEffect(() => {
    // Usar window.location.search para funcionar com export estático
    // Fallback para useSearchParams caso esteja disponível
    let encodedUrl: string | null = null
    
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      encodedUrl = urlParams.get("url")
    }
    
    // Fallback para useSearchParams se window.location não funcionar
    if (!encodedUrl && searchParams) {
      encodedUrl = searchParams.get("url")
    }

    if (!encodedUrl || encodedUrl.trim() === "") {
      setError("Link de redirecionamento não informado.")
      return
    }

    let decodedUrl: string
    try {
      decodedUrl = decodeURIComponent(encodedUrl)
      if (!decodedUrl.startsWith("http") && !decodedUrl.startsWith("tel:") && !decodedUrl.startsWith("mailto:")) {
        setError("Link de redirecionamento inválido.")
        return
      }
      setTargetUrl(decodedUrl)
    } catch {
      setError("Link de redirecionamento inválido.")
      return
    }
  }, [searchParams])

  useEffect(() => {
    if (!targetUrl) return

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
  }, [targetUrl])

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

  if (!targetUrl) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-12 h-12 rounded-full border-4 border-red-600 border-t-transparent animate-spin mx-auto" />
          <p className="text-gray-400 font-poppins">Carregando...</p>
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
        <div className="space-y-4">
          <Button
            onClick={() => {
              window.location.href = targetUrl
            }}
            className="bg-red-600 hover:bg-red-700 font-poppins w-full"
          >
            Continuar Agora
          </Button>
          <p className="text-sm text-gray-500 font-poppins">
            Ou{" "}
            <Link href="/" className="text-red-400 hover:underline">
              clique aqui para voltar
            </Link>
            .
          </p>
        </div>
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
