import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, BarChart2, LineChart, LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, features }) => (
  <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-teal-500 shadow-md hover:shadow-lg transition-all duration-300">
    <CardHeader>
      <Icon className="h-8 w-8 mb-2 text-ascendPrimary" />
      <CardTitle className="text-ascendPrimary">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-ascendPrimary">{description}</CardDescription>
      <p className="mt-2 space-y-1 text-sm text-ascendPrimary">
        {features.map((feature, index) => (
          <span key={index} className="block text-ascendPrimary">• {feature}</span>
        ))}
      </p>
    </CardContent>
  </Card>
)

const Features: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Leverage cutting-edge AI to supercharge your habit-building journey:",
      features: [
        "Personalized habit recommendations based on your goals and lifestyle",
        "Smart reminders that adapt to your schedule and progress",
        "AI-generated motivational messages tailored to your habits and challenges",
        "Intelligent habit stacking suggestions to build sustainable routines"
      ]
    },
    {
      icon: BarChart2,
      title: "Customizable Habit Tracker",
      description: "Take control of your personal growth with our flexible tracking tools:",
      features: [
        "Create custom habits or choose from our extensive library",
        "Set personalized goals with daily, weekly, or monthly targets",
        "Track multiple habits simultaneously with an intuitive interface",
        "Gamify your progress with achievements and streak counters",
        "Sync across devices for seamless habit tracking anywhere"
      ]
    },
    {
      icon: LineChart,
      title: "Progress Analytics",
      description: "Gain deep insights into your habit-building journey:",
      features: [
        "Visualize your progress with interactive charts and graphs",
        "Identify trends and patterns in your habit performance",
        "Receive weekly and monthly progress reports",
        "Set and track long-term goals with milestone tracking",
        "Compare your progress across different habits and time periods"
      ]
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <h2 className="text-5xl font-bold tracking-tighter sm:text-5xl text-center text-ascendPrimary mb-12">Features</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;