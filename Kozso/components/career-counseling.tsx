"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2 } from "lucide-react"

export default function CareerCounseling() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [experience, setExperience] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Itt kezelheti a form beküldését, például adatok küldése egy API-nak
    console.log("Form submitted:", { name, email, experience, message })
    // Form reset és visszajelzés a felhasználónak
    setName("")
    setEmail("")
    setExperience("")
    setMessage("")
    setIsSubmitted(true)

    // Az üzenet eltüntetése 5 másodperc után
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section className="container max-w-4xl mx-auto py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Karriertanácsadás</h1>
        <p className="text-xl ">
          Segítünk megtalálni a legjobb utat az IT karrierje felé. Töltse ki az alábbi űrlapot, és szakértőnk hamarosan
          felveszi Önnel a kapcsolatot.
        </p>
      </div>

      {isSubmitted && (
        <Alert className="bg-green-100 border-green-500 text-black">
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-black">Sikeres küldés!</AlertTitle>
          <AlertDescription className="text-black">
            Köszönjük megkeresését. Szakértőnk hamarosan felveszi Önnel a kapcsolatot.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="">
                Név
              </Label>
              <Input
                id="name"
                placeholder="Teljes név"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className=""
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="">
                E-mail cím
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="pelda@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className=""
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience" className="">
              IT tapasztalat
            </Label>
            <Select value={experience} onValueChange={setExperience}>
              <SelectTrigger className="">
                <SelectValue placeholder="Válassza ki a tapasztalati szintjét" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Kezdő (0-2 év)</SelectItem>
                <SelectItem value="intermediate">Középhaladó (3-5 év)</SelectItem>
                <SelectItem value="advanced">Haladó (5+ év)</SelectItem>
                <SelectItem value="career-change">Pályaváltó</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="">
              Üzenet
            </Label>
            <Textarea
              id="message"
              placeholder="Írja le, miben segíthetünk Önnek..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              className=""
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Tanácsadás kérése
        </Button>
      </form>
    </section>
  )
}

