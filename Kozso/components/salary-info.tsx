import { TrendingUp, Award, Clock } from "lucide-react"

const salaryData = [
  { position: "Junior Fejlesztő", salary: "400,000 - 600,000 Ft", experience: "0-2 év" },
  { position: "Medior Fejlesztő", salary: "600,000 - 1,000,000 Ft", experience: "2-5 év" },
  { position: "Senior Fejlesztő", salary: "1,000,000 - 1,800,000 Ft", experience: "5+ év" },
  { position: "Junior Tesztelő", salary: "350,000 - 500,000 Ft", experience: "0-2 év" },
  { position: "Senior Tesztelő", salary: "700,000 - 1,200,000 Ft", experience: "5+ év" },
  { position: "DevOps Mérnök", salary: "800,000 - 1,500,000 Ft", experience: "3+ év" },
  { position: "Adattudós", salary: "900,000 - 1,700,000 Ft", experience: "3+ év" },
  { position: "IT Projektmenedzser", salary: "1,000,000 - 1,800,000 Ft", experience: "5+ év" },
]

export default function SalaryInfo() {
  return (
    <section id="fizetesek" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Fizetési Információk</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Átlagos havi bruttó fizetések a magyar IT szektorban (2023-as adatok alapján).
        </p>
      </div>
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg border bg-background overflow-hidden">
          <div className="grid grid-cols-3 font-semibold p-4 bg-muted">
            <span>Pozíció</span>
            <span>Fizetési sáv</span>
            <span>Tapasztalat</span>
          </div>
          {salaryData.map((item, index) => (
            <div
              key={item.position}
              className={`grid grid-cols-3 p-4 ${index !== salaryData.length - 1 ? "border-b" : ""}`}
            >
              <span className="font-medium">{item.position}</span>
              <span className="text-muted-foreground">{item.salary}</span>
              <span className="text-muted-foreground">{item.experience}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-4xl mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Növekvő Bérek</h3>
            <p className="text-sm text-muted-foreground">
              Az IT szektorban évente átlagosan 5-10% bérnövekedés tapasztalható.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Bónuszok és Juttatások</h3>
            <p className="text-sm text-muted-foreground">
              Sok cég kínál éves bónuszokat, cafeteria rendszert és egyéb juttatásokat.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
            <Clock className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Gyors Előrelépés</h3>
            <p className="text-sm text-muted-foreground">
              A szakmai fejlődéssel a fizetések is gyorsan emelkedhetnek az első években.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

