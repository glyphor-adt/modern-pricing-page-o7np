import React from "react";
import { CheckCircle, ShieldCheck, Star, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Enhanced Security",
    description: "Advanced security measures to protect your data and privacy.",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Effortless Performance",
    description: "Experience lightning-fast performance and seamless workflows.",
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
  },
  {
    title: "Unmatched Reliability",
    description: "Dependable and consistent service you can always count on.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
  {
    title: "Exceptional Value",
    description: "Get the most out of your investment with our outstanding features.",
    icon: <Star className="h-6 w-6 text-primary" />,
  },
];

interface FeaturesSectionProps {
  className?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className }) => {
  return (
    <section className={cn("bg-secondary/10 py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Key Features & Benefits
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Discover how our product can transform your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 flex items-center">
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 ml-2">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;