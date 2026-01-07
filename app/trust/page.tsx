import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F4]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">Trust & Security</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Your data security and privacy are our top priorities
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
                <CardDescription>
                  We use industry-standard encryption to protect your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All data is encrypted in transit and at rest using the latest security protocols.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy First</CardTitle>
                <CardDescription>
                  Your privacy matters to us
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We never share your personal information with third parties without your explicit consent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance</CardTitle>
                <CardDescription>
                  Meeting industry standards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We comply with GDPR, CCPA, and other relevant data protection regulations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Transparency</CardTitle>
                <CardDescription>
                  Clear and honest communication
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in transparency about how we handle your data and what we do with it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-center text-muted-foreground">
              © Fridge Channel 
            </p>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/" className="text-sm hover:underline text-muted-foreground">
                Home
              </Link>
              <Link href="/about-us" className="text-sm hover:underline text-muted-foreground">
                Our Story
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

