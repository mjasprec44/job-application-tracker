"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const TABS = [
  {
    id: "ORGANIZE",
    label: "Organize Applications",
    image: "/hero-images/hero1.png",
  },
  {
    id: "HIRED",
    label: "Get Hired",
    image: "/hero-images/hero2.png",
  },
  {
    id: "BOARDS",
    label: "Manage Boards",
    image: "/hero-images/hero3.png",
  },
] as const;

type ActiveTab = (typeof TABS)[number]["id"];

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState<ActiveTab>(TABS[0].id);

  const currentTab = TABS.find((tab) => tab.id === activeTab) ?? TABS[0];
  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="flex flex-row gap-2 justify-center mb-8">
            {TABS.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === tab.id ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                {tab.label}
              </Button>
            ))}
          </div>
          {/* Image list  */}
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
            <Image
              src={currentTab.image}
              alt={currentTab.label}
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
