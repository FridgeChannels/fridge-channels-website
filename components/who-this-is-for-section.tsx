"use client";

import { Card, CardContent } from "@/components/ui/card";

export const WhoThisIsForSection = () => {
  return (
    <section id="who-this-is-for" className="container mx-auto px-4 pt-8 md:pt-12 pb-4 md:pb-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-balance mb-8">
          WHO THIS IS FOR
        </h2>

        {/* Introduction text */}
        <div className="mb-8 text-center">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            FridgeChannel is built for <strong className="font-semibold text-foreground">subscription businesses</strong> that:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Content-driven growth */}
          <Card className="bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg text-foreground leading-relaxed">
                Use <strong className="font-semibold text-foreground">content-driven growth</strong> to acquire/retain users (SaaS, data, community, newsletter all qualify)
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Renewals */}
          <Card className="bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg text-foreground leading-relaxed">
                Make money on <strong className="font-semibold text-foreground">renewals</strong> (retention/churn matters)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

