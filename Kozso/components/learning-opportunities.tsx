import { GraduationCap, Monitor, Users, Award, Globe, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const learningPaths = [
  {
    title: "Egyetemi Képzések",
    description: "Számos magyar egyetem kínál informatikai és szoftverfejlesztői szakokat.",
    icon: GraduationCap,
    link: "/egyetemi-kepzesek",
  },
  {
    title: "Online Kurzusok",
    description: "Platformok mint a Coursera, Udemy és edX széles körű IT kurzusokat kínálnak.",
    icon: Monitor,
    link: "/online-kurzusok",
  },
  {
    title: "Bootcampek",
    description: "Intenzív, rövid távú képzések gyakorlati tudás megszerzésére.",
    icon: Zap,
    link: "/bootcampek",
  },
  {
    title: "Szakmai Közösségek",
    description: "Csatlakozzon helyi fejlesztői közösségekhez tudásmegosztásért és networking-ért.",
    icon: Users,
    link: "/szakmai-kozossegek",
  },
  {
    title: "Szakmai Certifikációk",
    description: "Szerezzen nemzetközileg elismert IT certifikációkat karrierje előmozdításához.",
    icon: Award,
    link: "/szakmai-certifikaciok",
  },
  {
    title: "Nemzetközi Programok",
    description: "Vegyen részt nemzetközi csereprogramokban vagy távoktatási lehetőségekben.",
    icon: Globe,
    link: "/nemzetkozi-programok",
  },
]

export default function LearningOpportunities() {
  return (
    <section id="tanulas" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Tanulási Lehetőségek</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Fedezze fel, hogyan válhat szoftverfejlesztővé vagy tesztelővé Magyarországon.
        </p>
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path, index) => (
            <Card key={index} className="bg-background/60 backdrop-blur-sm">
              <CardHeader>
                <path.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{path.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{path.description}</p>
                <Button variant="outline" size="sm" className="w-full" href={path.link}>
                  Tudj meg többet
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-2xl font-semibold mb-4">Kezdje el IT karrierjét még ma!</h3>
        <p className="text-muted-foreground mb-6">
          Az IT szektor folyamatosan növekszik és fejlődik Magyarországon. Függetlenül attól, hogy most kezdi karrierjét
          vagy pályát módosít, számos lehetőség áll rendelkezésére a szoftverfejlesztés és tesztelés területén való
          elhelyezkedéshez.
        </p>
        <Button href="/lehetosegek" size="lg">
          Fedezze fel a lehetőségeket
        </Button>
      </div>
    </section>
  )
}

