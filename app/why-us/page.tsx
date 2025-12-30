import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhyUsPage() {
    return (
        <div className="min-h-screen bg-[#F7F7F4]">
            <Navigation />

            {/* Hero Section */}
            <section className="container mx-auto px-4 pt-32 pb-10">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-balance">Why Choose Fridge Channel</h1>
                    <p className="text-xl md:text-2xl text-muted-foreground">
                        Discover what makes us different
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 pb-20">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Unique Approach</h2>
                        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                            Fridge Channel brings content to where people naturally gather — the fridge door. This physical presence creates a unique connection that digital channels can't match.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Physical Presence</CardTitle>
                                <CardDescription>
                                    Your content lives where people see it every day
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>High Engagement</CardTitle>
                                <CardDescription>
                                    Fridge doors are opened multiple times daily, ensuring visibility
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>No Algorithms</CardTitle>
                                <CardDescription>
                                    Direct connection without feed algorithms interfering
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Shared Visibility</CardTitle>
                                <CardDescription>
                                    Content is visible to the whole household, not just one person
                                </CardDescription>
                            </CardHeader>
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
