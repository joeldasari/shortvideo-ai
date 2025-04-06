import { Button } from "@/components/ui/button";
import { socialMedia } from "@/data/lookup";
import { ArrowRight, MonitorPlay } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-24 py-12 text-center">
      <section className="flex flex-col items-center gap-4">
        <h1 className="hero-heading">
          <span>Build Short Videos With </span>
          <span className="text-purple-400">AI</span>
        </h1>
        <p className="hero-subheading-two">
          Effortlessly Build AI-Generated Short Videos in Seconds
        </p>
        <div className="flex items-center gap-8">
          <Link href="/create">
            <Button className="cursor-pointer">
              Get Started <ArrowRight />
            </Button>
          </Link>
          <Button className="cursor-pointer bg-purple-500 hover:bg-purple-600 text-white">
            <MonitorPlay />
            Watch Demo
          </Button>
        </div>
      </section>
      <section className="flex flex-col items-center gap-8">
        <p className="hero-subheading-one">
          <span>Easy To </span>
          <span className="text-purple-400">Make</span>
        </p>
        <div className="flex md:flex-row items-center gap-10 md:gap-24">
          {socialMedia.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <img className="h-10 md:h-12" src={item.image} alt={item.alt} />
              <span className="hero-subheading-two">{item.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
