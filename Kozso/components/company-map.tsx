import { MapPin } from "lucide-react"

const cities = [
  { name: "Budapest", companies: 500 },
  { name: "Debrecen", companies: 50 },
  { name: "Szeged", companies: 30 },
  { name: "Pécs", companies: 25 },
  { name: "Győr", companies: 40 },
]

export default function CompanyMap() {
  return (
    <section id="terkep" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Magyar IT Cégek Térképe</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Fedezze fel a magyar informatikai cégek földrajzi eloszlását.
        </p>
      </div>
      <div className="mx-auto max-w-4xl">
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border bg-background">
          {/* Itt helyezze el a saját térképét */}
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d172542.19438669726!2d19.041219470991365!3d47.49046297162917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sit%20c%C3%A9gek%20!5e0!3m2!1shu!2shu!4v1739701769532!5m2!1shu!2shu"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl">
        <h3 className="text-xl font-semibold mb-4 text-center">IT Központok Magyarországon</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {cities.map((city) => (
            <div key={city.name} className="p-4 border rounded-lg bg-background flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <h4 className="font-semibold">{city.name}</h4>
                <p className="text-sm text-muted-foreground">{city.companies} IT cég</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

