import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

interface PricingTier {
  name: string;
  price: number;
  currency: string;
  frequency: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: 9,
    currency: "$",
    frequency: "month",
    description: "Perfect for individuals just getting started.",
    features: [
      "1 User",
      "5GB Storage",
      "Community Support",
      "Basic Analytics",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: 29,
    currency: "$",
    frequency: "month",
    description: "Ideal for growing teams and small businesses.",
    features: [
      "5 Users",
      "50GB Storage",
      "Priority Support",
      "Advanced Analytics",
      "Collaboration Tools",
    ],
    cta: "Try Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 99,
    currency: "$",
    frequency: "month",
    description: "For large organizations needing robust features.",
    features: [
      "Unlimited Users",
      "Unlimited Storage",
      "24/7 Dedicated Support",
      "Custom Integrations",
      "Dedicated Account Manager",
    ],
    cta: "Contact Us",
  },
];


const PricingSection = () => {
  return (
    <div className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Choose the plan that's right for you
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Simple, transparent pricing. No hidden fees. Upgrade or downgrade at any time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`${tier.highlighted ? "border-2 border-primary" : ""}`}>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center my-4">
                  <div className="text-4xl font-bold text-primary">
                    {tier.currency}{tier.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    per {tier.frequency}
                  </div>
                </div>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircleIcon className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant={tier.highlighted ? "primary" : "outline"}>
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;