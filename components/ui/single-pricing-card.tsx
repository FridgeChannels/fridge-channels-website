"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { LucideIcon } from "lucide-react";
import { Star } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Feature {
  text: React.ReactNode;
}

export interface Benefit {
  text: React.ReactNode;
  icon: LucideIcon;
}

export interface SinglePricingCardProps {
  badge?: {
    icon?: LucideIcon;
    text: string;
    className?: string;
  };
  title: string;
  subtitle?: React.ReactNode;
  price: {
    current: string;
    original?: string;
    discount?: string;
    discountBadgeClassName?: string;
  };
  pricingDescription?: React.ReactNode;
  successMetric?: string;
  benefits: Benefit[];
  benefitsTitle?: string;
  features: Feature[];
  featuresIcon: LucideIcon;
  featuresTitle?: React.ReactNode;
  featuresBadge?: {
    icon: LucideIcon;
    text: string;
  };
  primaryButton: {
    text: string;
    icon?: LucideIcon;
    href?: string;
    onClick?: () => void;
    chevronIcon?: LucideIcon;
  };
  secondaryButton?: {
    text: string;
    icon: LucideIcon;
    href?: string;
    onClick?: () => void;
  };
  boundary?: {
    title: string;
    content: React.ReactNode;
  };
  testimonials: Testimonial[];
  testimonialRotationSpeed?: number;
  animationEnabled?: boolean;
  className?: string;
  cardClassName?: string;
  maxWidth?: string;
}

export function SinglePricingCard({
  badge,
  title,
  subtitle,
  price,
  pricingDescription,
  successMetric,
  benefits,
  benefitsTitle = "You Get:",
  features,
  featuresIcon,
  featuresTitle = "Included Features:",
  featuresBadge,
  primaryButton,
  secondaryButton,
  boundary,
  testimonials,
  testimonialRotationSpeed = 5000,
  animationEnabled = true,
  className,
  cardClassName,
  maxWidth = "max-w-[1320px]",
}: SinglePricingCardProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, testimonialRotationSpeed);
    return () => clearInterval(interval);
  }, [testimonials.length, testimonialRotationSpeed]);

  return (
    <div ref={sectionRef} className={`py-12 relative overflow-hidden ${className || ""}`}>
      <div className={`container px-4 md:px-6 relative z-10 mx-auto ${maxWidth}`}>
        {animationEnabled ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SinglePricingCardContent
              badge={badge}
              title={title}
              subtitle={subtitle}
              price={price}
              pricingDescription={pricingDescription}
              successMetric={successMetric}
              benefits={benefits}
              benefitsTitle={benefitsTitle}
              features={features}
              featuresIcon={featuresIcon}
              featuresTitle={featuresTitle}
              featuresBadge={featuresBadge}
              primaryButton={primaryButton}
              secondaryButton={secondaryButton}
              boundary={boundary}
              testimonials={testimonials}
              currentTestimonialIndex={currentTestimonialIndex}
              onTestimonialSelect={setCurrentTestimonialIndex}
              isInView={isInView}
              animationEnabled={animationEnabled}
              cardClassName={cardClassName}
            />
          </motion.div>
        ) : (
          <SinglePricingCardContent
            badge={badge}
            title={title}
            subtitle={subtitle}
            price={price}
            pricingDescription={pricingDescription}
            successMetric={successMetric}
            benefits={benefits}
            benefitsTitle={benefitsTitle}
            features={features}
            featuresIcon={featuresIcon}
            featuresTitle={featuresTitle}
            featuresBadge={featuresBadge}
            primaryButton={primaryButton}
            secondaryButton={secondaryButton}
            boundary={boundary}
            testimonials={testimonials}
            currentTestimonialIndex={currentTestimonialIndex}
            onTestimonialSelect={setCurrentTestimonialIndex}
            isInView={isInView}
            animationEnabled={animationEnabled}
            cardClassName={cardClassName}
          />
        )}
      </div>
    </div>
  );
}

interface SinglePricingCardContentProps
  extends Omit<SinglePricingCardProps, "className" | "maxWidth" | "testimonialRotationSpeed"> {
  currentTestimonialIndex: number;
  onTestimonialSelect: (index: number) => void;
  isInView: boolean;
  cardClassName?: string;
}

function SinglePricingCardContent({
  badge,
  title,
  subtitle,
  price,
  pricingDescription,
  successMetric,
  benefits,
  benefitsTitle,
  features,
  featuresIcon,
  featuresTitle,
  featuresBadge,
  primaryButton,
  secondaryButton,
  testimonials,
  currentTestimonialIndex,
  onTestimonialSelect,
  isInView,
  animationEnabled,
  cardClassName,
  boundary,
}: SinglePricingCardContentProps) {
  const BadgeIcon = badge?.icon;
  const FeaturesIcon = featuresIcon;
  const PrimaryButtonIcon = primaryButton.icon;
  const ChevronIcon = primaryButton.chevronIcon;
  const SecondaryButtonIcon = secondaryButton?.icon;

  return (
    <Card
      className={`overflow-hidden border-none shadow-none bg-white relative group rounded-xl ${cardClassName || ""}`}
    >
      {animationEnabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-primary/5 via-primary/2 to-transparent" />
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_0.8fr]">
        {/* Column 1: Identity & Price */}
        <div className="p-6 md:p-8 flex flex-col">
          {badge && (
            <div className="flex items-center mb-6">
              <Badge className={badge.className || "px-3 py-1 bg-primary/5 border-primary/10 text-primary hover:bg-primary/10 rounded-full"}>
                {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5 mr-1" />}
                <span>{badge.text}</span>
              </Badge>
            </div>
          )}

          <h3 className="text-2xl font-bold mb-6">{title}</h3>

          <div className="flex items-baseline mb-6">
            {price.current.includes('/') ? (
              <>
                <span className="text-4xl font-bold">{price.current.split('/')[0].trim()}</span>
                <span className="text-xl font-bold text-muted-foreground ml-1">/ {price.current.split('/')[1].trim()}</span>
              </>
            ) : (
              <span className="text-4xl font-bold">{price.current}</span>
            )}
            {price.original && (
              <span className="text-muted-foreground ml-2 line-through">{price.original}</span>
            )}
            {price.discount && (
              <Badge
                variant="outline"
                className={`ml-3 border-green-400/30 text-green-500 ${price.discountBadgeClassName || ""}`}
              >
                <span>{price.discount}</span>
              </Badge>
            )}
          </div>

          {pricingDescription && (
            <div className="text-sm text-ds-text-secondary mb-6">{pricingDescription}</div>
          )}

          <div className="mt-auto space-y-3">
            <Button
              className="w-full gap-2 group transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:brightness-110 active:scale-[0.98]"
              size="lg"
              onClick={primaryButton.onClick}
              asChild={!!primaryButton.href}
            >
              {primaryButton.href ? (
                <Link href={primaryButton.href}>
                  {PrimaryButtonIcon && <PrimaryButtonIcon className="h-4 w-4" />}
                  <span>{primaryButton.text}</span>
                  {ChevronIcon && (
                    <ChevronIcon className="h-4 w-4 ml-auto transition-transform group-hover:translate-x-1" />
                  )}
                </Link>
              ) : (
                <>
                  {PrimaryButtonIcon && <PrimaryButtonIcon className="h-4 w-4" />}
                  <span>{primaryButton.text}</span>
                  {ChevronIcon && (
                    <ChevronIcon className="h-4 w-4 ml-auto transition-transform group-hover:translate-x-1" />
                  )}
                </>
              )}
            </Button>

            {secondaryButton && (
              <Button
                variant="outline"
                className="w-full gap-2 transition-all duration-200 hover:scale-[1.02] hover:border-primary hover:bg-primary/10 hover:text-primary active:scale-[0.98]"
                size="lg"
                onClick={secondaryButton.onClick}
                asChild={!!secondaryButton.href}
              >
                {secondaryButton.href ? (
                  <Link
                    href={secondaryButton.href}
                    {...(secondaryButton.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <span>{secondaryButton.text}</span>
                    {SecondaryButtonIcon && <SecondaryButtonIcon className="h-4 w-4 ml-auto" />}
                  </Link>
                ) : (
                  <>
                    <span>{secondaryButton.text}</span>
                    {SecondaryButtonIcon && <SecondaryButtonIcon className="h-4 w-4 ml-auto" />}
                  </>
                )}
              </Button>
            )}
          </div>
        </div>



        {/* Column 2: Goal, Benefits, Success Metric */}
        <div className="p-6 md:p-8 flex flex-col bg-white">
          {subtitle && (
            <motion.div
              className="mb-8"
              initial={animationEnabled ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              animate={animationEnabled && isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="font-semibold mb-3 text-ds-text">Goal:</h4>
              <p className="text-sm text-ds-text-secondary leading-relaxed">{subtitle}</p>
            </motion.div>
          )}

          <motion.div
            className="mb-8"
            initial={animationEnabled ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
            animate={animationEnabled && isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="font-semibold mb-4 text-ds-text">{benefitsTitle}</h4>
            <div className="space-y-3">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <BenefitIcon className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-ds-text-secondary">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {successMetric && (
            <motion.div
              initial={animationEnabled ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              animate={animationEnabled && isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="font-semibold mb-3 text-ds-text">Success Metric:</h4>
              <p className="text-sm font-medium text-ds-text">{successMetric}</p>
            </motion.div>
          )}
        </div>

        {/* Column 3: For & Boundary */}
        <div className="p-6 md:p-8 flex flex-col">
          <motion.div
            className="mb-8"
            initial={animationEnabled ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
            animate={animationEnabled && isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center mb-4">
              <h4 className="font-semibold">{featuresTitle}</h4>
            </div>
            <div className="space-y-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={animationEnabled ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                  animate={animationEnabled && isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <FeaturesIcon className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-ds-text-secondary">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {boundary && (
            <motion.div
              className="mt-8"
              initial={animationEnabled ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              animate={animationEnabled && isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {boundary.title && <h4 className="font-semibold mb-3 text-ds-text">{boundary.title}</h4>}
              <p className="text-sm text-ds-text-secondary leading-relaxed">{boundary.content}</p>
            </motion.div>
          )}

          {testimonials.length > 0 && (
            <>
              <Separator className="my-6" />

              <div className="rounded-lg p-4 border border-border relative overflow-hidden min-h-[140px]">
                <AnimatePresence mode="wait">
                  {testimonials.map(
                    (testimonial, index) =>
                      index === currentTestimonialIndex && (
                        <motion.div
                          key={testimonial.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 p-4"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-8 w-8 rounded-full overflow-hidden shrink-0">
                              <img
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={`${testimonial.name}'s avatar`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="font-medium text-sm">{testimonial.name}</p>
                              <p className="text-xs text-muted-foreground truncate">
                                {testimonial.role}
                                {testimonial.company && ` at ${testimonial.company}`}
                              </p>
                            </div>
                            <div className="ml-auto flex shrink-0">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm italic">{testimonial.content}</p>
                        </motion.div>
                      ),
                  )}
                </AnimatePresence>
              </div>

              {testimonials.length > 1 && (
                <div className="flex justify-center mt-4 gap-1">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`h-1.5 rounded-full transition-all ${index === currentTestimonialIndex ? "w-4 bg-primary" : "w-1.5 bg-primary/30"
                        }`}
                      onClick={() => onTestimonialSelect(index)}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Card >
  );
}
