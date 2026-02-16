import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Flame,
  Calendar,
  ChefHat,
  Wine,
  Heart,
  Award,
  Instagram,
  Facebook,
  Mail,
  Beef,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

const TEL = "tel:+551124410383"
const EMAIL = "mailto:churrascaria.bosque@gmail.com"
const WHATSAPP = "https://wa.me/551124410383"
const INSTAGRAM = "https://instagram.com"
const FACEBOOK = "https://facebook.com"

function obrigadoUrl(dest: string) {
  return `/obrigado?url=${encodeURIComponent(dest)}`
}

export default function ChurrascariaBosque() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-red-900/20 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center shrink-0 min-w-0 max-w-[140px] sm:max-w-[180px]">
              <Image
                src="/images/logo-horizontal-branco.png"
                alt="Churrascaria do Bosque"
                width={180}
                height={60}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <nav className="hidden lg:flex items-center space-x-8 font-poppins">
              <Link href="#inicio" className="text-white hover:text-red-400 transition-colors">
                Início
              </Link>
              <Link href="#sobre" className="text-white hover:text-red-400 transition-colors">
                Sobre Nós
              </Link>
              <Link href="#cardapio" className="text-white hover:text-red-400 transition-colors">
                Cardápio
              </Link>
              <Link href="#servicos" className="text-white hover:text-red-400 transition-colors">
                Serviços
              </Link>
              <Link href="#avaliacoes" className="text-white hover:text-red-400 transition-colors">
                Avaliações
              </Link>
              <Link href="#contato" className="text-white hover:text-red-400 transition-colors">
                Contato
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-poppins font-semibold btn-hover hidden lg:inline-flex">
                <Link href={obrigadoUrl(WHATSAPP)}>Reservar Mesa</Link>
              </Button>
              <MobileNav reservarHref={obrigadoUrl(WHATSAPP)} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-x-hidden fade-in-up animate scroll-mt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <Image
          src="/images/fundo-site.png"
          alt="Churrasco na grelha"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12 sm:pt-28 sm:pb-16">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 font-poppins">
              <Flame className="w-4 h-4 mr-2 fire-animation" />
              Há mais de 26 anos em Guarulhos
            </Badge>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-lora leading-tight">
              O Melhor
              <span className="text-red-500 block">Churrasco</span>
              de Guarulhos
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 font-poppins leading-relaxed max-w-3xl mx-auto">
              Cortes nobres, buffet completo e ambiente elegante. Uma experiência gastronômica única que sua família e
              amigos merecem viver.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-poppins font-semibold text-lg px-8 py-6 btn-hover w-full sm:w-auto min-h-[48px]"
              >
                <Link href={obrigadoUrl(WHATSAPP)} className="flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2 shrink-0" />
                  Reservar Mesa
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-poppins font-semibold text-lg px-8 py-6 bg-transparent btn-hover w-full sm:w-auto min-h-[48px]"
              >
                <Link href={obrigadoUrl(TEL)} className="flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2 shrink-0" />
                  (11) 2441-0383
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-gray-400 font-poppins">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Aberto Todos os Dias!</span> {/* Horário atualizado */}
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Jardim Maia, Guarulhos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section
        id="sobre"
        className="py-12 md:py-16 lg:py-20 fade-in-up scroll-mt-24"
        style={{ background: "linear-gradient(90deg, #101010 0%, #221101 100%)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-600/20 text-red-400 border-red-600/30 font-poppins w-fit">
                  Nossa História
                </Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-lora text-white">
                  Tradição e Qualidade há mais de
                  <span className="text-red-500"> 26 Anos</span>
                </h2>
              </div>

              <p className="text-lg text-gray-300 font-poppins leading-relaxed">
                Localizada em Guarulhos há mais de 26 anos de história, a Churrascaria do Bosque hoje é uma referência
                em qualidade e variedades de produtos na região.
              </p>

              <p className="text-lg text-gray-300 font-poppins leading-relaxed">
                Nossa casa conta com churrasco com diversos tipos de cortes nobres, salmão grelhado, buffet completo,
                queijos importados, massas frescas preparadas na hora, comida japonesa e muito mais.
              </p>

              <p className="text-lg text-gray-300 font-poppins leading-relaxed">
                Convidamos você, sua família e amigos para conhecer nossa casa e vir aproveitar o melhor churrasco de
                Guarulhos.
              </p>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 md:pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 font-lora">26+</div>
                  <div className="text-sm text-gray-400 font-poppins">Anos de Tradição</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 font-lora">30+</div>
                  <div className="text-sm text-gray-400 font-poppins">Itens no Buffet</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 font-lora">4.5★</div>
                  <div className="text-sm text-gray-400 font-poppins">Avaliação Google</div>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-full">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/fotofachada-nova.png"
                  alt="Fachada da Churrascaria do Bosque"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-red-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl shadow-lg min-w-[140px]">
                <Award className="w-8 h-8 mb-2 text-white" />
                <div className="font-bold font-lora text-white leading-tight">Referência</div>
                <div className="text-sm font-poppins text-white/95 leading-tight">em Guarulhos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="cardapio" className="py-12 md:py-16 lg:py-20 bg-black fade-in-up scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-10 md:mb-16">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 font-poppins mx-auto">
              <ChefHat className="w-4 h-4 mr-2" />
              Nossas Especialidades
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-lora text-white">Sabores que Conquistam</h2>
            <p className="text-lg sm:text-xl text-gray-300 font-poppins max-w-3xl mx-auto px-1">
              Uma seleção especial dos melhores cortes e pratos que fazem da nossa casa única
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="bg-gray-900 border-amber-900/30 hover:border-red-600/50 transition-all duration-300 group wood-texture">
              <CardHeader className="pb-4">
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/images/carnes2.png"
                    alt="Cortes Nobres"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-white font-lora text-xl">Cortes Nobres</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 font-poppins">
                  Picanha, maminha, fraldinha e outros cortes especiais grelhados na perfeição
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-amber-900/30 hover:border-red-600/50 transition-all duration-300 group wood-texture">
              <CardHeader className="pb-4">
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/images/massas2.png"
                    alt="Massas"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-white font-lora text-xl">Massas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 font-poppins">
                  Monte seu prato de massa à vontade e com ingredientes a sua escolha
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-amber-900/30 hover:border-red-600/50 transition-all duration-300 group wood-texture">
              <CardHeader className="pb-4">
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/images/sushi2.png"
                    alt="Comida Japonesa"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-white font-lora text-xl">Comida Japonesa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 font-poppins">
                  Sushis, sashimis e pratos orientais preparados por chefs especializados
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-amber-900/30 hover:border-red-600/50 transition-all duration-300 group wood-texture">
              <CardHeader className="pb-4">
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/images/fotobuffet.png"
                    alt="Buffet Completo"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-white font-lora text-xl">Buffet Completo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 font-poppins">
                  Mais de 50 opções incluindo saladas, massas frescas e acompanhamentos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section
        id="servicos"
        className="py-12 md:py-16 lg:py-20 fade-in-up scroll-mt-24"
        style={{ background: "linear-gradient(90deg, #101010 0%, #221101 100%)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-10 md:mb-16">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 font-poppins mx-auto">Nossos Serviços</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-lora text-white">Momentos Especiais Merecem o Melhor</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-black border-amber-900/30 hover:border-red-600 transition-all duration-300 ember-glow flex flex-col">
              <CardHeader className="text-center pb-6 flex-grow">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beef className="w-8 h-8 text-white" /> {/* Ícone de carne */}
                </div>
                <CardTitle className="text-2xl font-lora text-white">Rodízio Completo</CardTitle>
                <CardDescription className="text-gray-400 font-poppins">
                  Rodizio de carnes C/ buffet de saladas e massas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <ul className="space-y-2 text-gray-300 font-poppins">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Churrasco com carnes nobres</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Buffet de saladas incluído comida japonesa</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Buffet de pratos quentes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Buffet de massas</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 font-poppins btn-hover">
                  <Link href={obrigadoUrl(WHATSAPP)}>Reservar Mesa</Link>
                </Button>
              </div>
            </Card>

            <Card className="bg-black border-amber-900/30 hover:border-red-600 transition-all duration-300 ember-glow flex flex-col">
              <CardHeader className="text-center pb-6 flex-grow">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wine className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-lora text-white">Almoços Corporativos</CardTitle>
                <CardDescription className="text-gray-400 font-poppins">
                  Espaço ideal para eventos empresariais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <ul className="space-y-2 text-gray-300 font-poppins">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Salão para mais de 200 pessoas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Preços especiais para grupos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Rodizio de carnes C/ buffet de saladas e massas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Atendimento personalizado</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 font-poppins btn-hover">
                  <Link href={obrigadoUrl(WHATSAPP)}>Solicitar Orçamento</Link>
                </Button>
              </div>
            </Card>

            <Card className="bg-black border-amber-900/30 hover:border-red-600 transition-all duration-300 ember-glow flex flex-col">
              <CardHeader className="text-center pb-6 flex-grow">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-lora text-white">Recepção para Casamentos</CardTitle>
                <CardDescription className="text-gray-400 font-poppins">
                  Torne seu dia especial inesquecível
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <ul className="space-y-2 text-gray-300 font-poppins">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Rodizio de carnes C/ buffet de saladas e massas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Espaço para casamentos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Aberto para Decoração</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Espaço para até 200 pessoas</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 font-poppins btn-hover">
                  <Link href={obrigadoUrl(WHATSAPP)}>Agendar Visita</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="py-12 md:py-16 lg:py-20 bg-black fade-in-up scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-10 md:mb-16">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 font-poppins mx-auto">
              <Star className="w-4 h-4 mr-2" />
              Avaliações Google
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-lora text-white">O que Nossos Clientes Dizem</h2>
            <div className="flex justify-center items-center space-x-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
                <Star className="w-6 h-6 text-yellow-400 fill-current opacity-50" />
              </div>
              <span className="text-xl font-bold text-white font-poppins">4.5</span>
              <span className="text-gray-400 font-poppins">(200+ avaliações)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-gray-800" style={{ backgroundColor: "#391d14" }}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 font-poppins">
                  "Excelente churrascaria! A picanha estava no ponto perfeito e o buffet é muito variado. Ambiente
                  familiar e atendimento impecável. Recomendo!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold font-poppins">MC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white font-poppins">Maria Clara</p>
                    <p className="text-sm text-gray-400 font-poppins">Cliente Google</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800" style={{ backgroundColor: "#391d14" }}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 font-poppins">
                  "Melhor churrascaria de Guarulhos! Frequento há anos e a qualidade sempre se mantém. Os cortes são
                  excelentes e o salmão é divino."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold font-poppins">RS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white font-poppins">Roberto Silva</p>
                    <p className="text-sm text-gray-400 font-poppins">Cliente Google</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800" style={{ backgroundColor: "#391d14" }}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 font-poppins">
                  "Ambiente aconchegante e comida maravilhosa! Fizemos nosso almoço de confraternização aqui e foi
                  perfeito. Super recomendo!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold font-poppins">AF</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white font-poppins">Ana Ferreira</p>
                    <p className="text-sm text-gray-400 font-poppins">Cliente Google</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-red-600 to-red-800 fade-in-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-lora text-white">Pronto para uma Experiência Única?</h2>
            <p className="text-lg sm:text-xl text-red-100 font-poppins px-1">
              Reserve sua mesa agora e descubra por que somos a churrascaria preferida de Guarulhos há mais de 26 anos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-poppins font-semibold text-lg px-8 py-6 btn-hover w-full sm:w-auto min-h-[48px]"
              >
                <Link href={obrigadoUrl(WHATSAPP)} className="flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Reservar Mesa Agora
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 font-poppins font-semibold text-lg px-8 py-6 bg-transparent btn-hover w-full sm:w-auto min-h-[48px]"
              >
                <Link href={obrigadoUrl(TEL)} className="flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  (11) 2441-0383
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-black border-t border-gray-800 py-12 md:py-16 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            <div className="space-y-4">
              <Image
                src="/images/logo-horizontal-branco.png"
                alt="Churrascaria do Bosque"
                width={200}
                height={67}
                className="h-16 w-auto"
              />
              <p className="text-gray-400 font-poppins">
                Há mais de 26 anos servindo o melhor churrasco de Guarulhos com qualidade e tradição.
              </p>
              <div className="flex space-x-4">
                <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-red-400 btn-hover min-w-[44px] min-h-[44px]">
                  <Link href={obrigadoUrl(INSTAGRAM)} aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-red-400 btn-hover min-w-[44px] min-h-[44px]">
                  <Link href={obrigadoUrl(FACEBOOK)} aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-red-400 btn-hover min-w-[44px] min-h-[44px]">
                  <Link href={obrigadoUrl(EMAIL)} aria-label="E-mail">
                    <Mail className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white font-poppins">Contato</h4>
              <ul className="space-y-3 text-gray-400 font-poppins">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-400 shrink-0" />
                  <Link href={obrigadoUrl(TEL)} className="hover:text-red-400 transition-colors">
                    (11) 2441-0383
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-red-400 shrink-0" />
                  <Link href={obrigadoUrl(EMAIL)} className="hover:text-red-400 transition-colors break-all">
                    churrascaria.bosque@gmail.com
                  </Link>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-red-400 mt-1" />
                  <span>
                    Av. Paulo Faccini, 1691
                    <br />
                    Jardim Maia, Guarulhos - SP
                    <br />
                    07111-000
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white font-poppins">Funcionamento</h4>
              <ul className="space-y-2 text-gray-400 font-poppins text-sm sm:text-base">
                <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="shrink-0">Seg - Sex:</span>
                  <span className="break-words">11h30 às 15h30 e 18h às 22h30</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="shrink-0">Sábado:</span>
                  <span>11h30 às 23h</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="shrink-0">Domingo:</span>
                  <span>11h30 às 17h</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white font-poppins">Serviços</h4>
              <ul className="space-y-3 text-gray-400 font-poppins">
                <li>
                  <Link href="#servicos" className="hover:text-red-400 transition-colors inline-block min-h-[44px] leading-[44px] py-0">
                    Rodízio - Não precisa Reservar
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="hover:text-red-400 transition-colors inline-block min-h-[44px] leading-[44px] py-0">
                    Eventos Corporativos
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="hover:text-red-400 transition-colors inline-block min-h-[44px] leading-[44px] py-0">
                    Venha fazer seu evento aqui
                     (Aniversario, Batizados e Casamentos e etc)
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="hover:text-red-400 transition-colors inline-block min-h-[44px] leading-[44px] py-0">
                    Delivery
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 font-poppins">
            <p>&copy; {new Date().getFullYear()} Churrascaria do Bosque. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
