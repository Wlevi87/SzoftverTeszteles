import { Lightbulb, Rocket, Heart, Globe, Zap, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const advantages = [
  {
    title: "Innovatív Környezet",
    description: "Az IT szektor folyamatosan fejlődik, lehetőséget adva kreatív megoldások kidolgozására.",
    icon: Lightbulb,
  },
  {
    title: "Gyors Karriernövekedés",
    description: "A szakmai fejlődés gyors ütemben halad, ami gyors előrelépési lehetőségeket biztosít.",
    icon: Rocket,
  },
  {
    title: "Munka-Magánélet Egyensúly",
    description: "Rugalmas munkaidő és távmunka lehetőségek a jobb életminőségért.",
    icon: Heart,
  },
  {
    title: "Nemzetközi Lehetőségek",
    description: "Globális projektek és külföldi munkavállalási lehetőségek széles skálája.",
    icon: Globe,
  },
  {
    title: "Folyamatos Tanulás",
    description: "Az iparág gyors változása miatt állandó lehetőség van új technológiák elsajátítására.",
    icon: Zap,
  },
  {
    title: "Versenyképes Juttatások",
    description: "Magas fizetések, bónuszok és egyéb juttatások a szakemberek megtartására.",
    icon: Briefcase,
  },
]

export default function Advantages() {
  return (
    <section id="elonyok" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">A Szakma Előnyei</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Fedezze fel, miért vonzó az IT szektor a karrierépítők számára Magyarországon.
        </p>
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-background/60 backdrop-blur-sm">
              <CardHeader>
                <advantage.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

