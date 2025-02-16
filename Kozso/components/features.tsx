import { Code, TestTube, Briefcase, GraduationCap, Globe, Cpu } from "lucide-react"

const features = [
  {
    name: "Szoftverfejlesztés",
    description:
      "Innovatív megoldások fejlesztése a legújabb technológiákkal, beleértve a webes, mobil és asztali alkalmazásokat.",
    icon: Code,
  },
  {
    name: "Szoftvertesztelés",
    description:
      "Minőségbiztosítás és hibakeresés a tökéletes felhasználói élményért, automatizált és manuális tesztelési módszerekkel.",
    icon: TestTube,
  },
  {
    name: "IT Tanácsadás",
    description:
      "Szakértői tanácsadás vállalatok számára IT stratégia, rendszeroptimalizálás és digitális transzformáció területén.",
    icon: Briefcase,
  },
  {
    name: "Adattudomány és MI",
    description:
      "Nagy adathalmazok elemzése és mesterséges intelligencia alapú megoldások fejlesztése üzleti problémákra.",
    icon: Cpu,
  },
  {
    name: "Felhő Szolgáltatások",
    description:
      "Felhő alapú infrastruktúrák tervezése, implementálása és kezelése, skálázható és biztonságos megoldásokkal.",
    icon: Globe,
  },
  {
    name: "IT Biztonság",
    description: "Kibervédelmi megoldások fejlesztése és implementálása, biztonsági auditok és penetrációs tesztelés.",
    icon: GraduationCap,
  },
]

export default function Features() {
  return (
    <section id="szektorok" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">A Magyar IT Szektor</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Fedezze fel a magyar IT szektor főbb területeit és lehetőségeit.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

