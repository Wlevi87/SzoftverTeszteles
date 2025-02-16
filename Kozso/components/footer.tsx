import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">Magyar IT Szakma</h2>
          <p className="text-sm text-muted-foreground">Fedezd fel a magyar szoftverfejlesztés és tesztelés világát.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Navigáció</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#terkep" className="text-muted-foreground transition-colors hover:text-primary">
                  IT Cégek Térképe
                </Link>
              </li>
              <li>
                <Link href="#fizetesek" className="text-muted-foreground transition-colors hover:text-primary">
                  Fizetési Információk
                </Link>
              </li>
              <li>
                <Link href="#elonyok" className="text-muted-foreground transition-colors hover:text-primary">
                  Szakma Előnyei
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Kapcsolat</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/karrier-tanacsadas" className="text-muted-foreground transition-colors hover:text-primary">
                  Kapcsolatfelvétel
                </Link>
              </li>
              <li>
                <Link href="/karrier-tanacsadas" className="text-muted-foreground transition-colors hover:text-primary">
                  Karrier Tanácsadás
                </Link>
              </li>
            </ul>
          </div>
          {/*<div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/amanesoft"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/amanesoft"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/amanesoft"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>*/}
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Magyar IT Szakma. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  )
}

