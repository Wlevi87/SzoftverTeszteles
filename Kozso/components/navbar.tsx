import Link from "next/link"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#elonyok", label: "Előnyök" },
  { href: "#tanulas", label: "Tanulás" },
  { href: "#fizetesek", label: "Fizetések" },
  { href: "#terkep", label: "Térkép" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Magyar IT Szakma</span>
        </Link>
        <nav className="flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/karrier-tanacsadas">Karriertanácsadás</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

