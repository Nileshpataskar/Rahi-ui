import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

interface CallToActionProps {
  buttons: { name: string; path: string }[];
}

const CallToAction: React.FC<CallToActionProps> = ({ buttons }) => {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-32 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <span className="mb-4 block text-xs uppercase tracking-widest text-gray-400">
          Inquire
        </span>
        <h2 className="mb-6 text-4xl font-light tracking-tight text-white">
          Experience Excellence
        </h2>
        <div className="mx-auto mb-8 h-px w-16 bg-white/20"></div>
        <p className="mx-auto mb-12 max-w-2xl text-base font-light leading-relaxed text-white/80">
          Contact our dedicated concierge team for personalized assistance with
          pricing, availability, and custom configurations.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {buttons.map((button, index) => (
            <Link key={index} href={button.path}>
              <Button
                size="lg"
                variant="default"
                className="rounded-none bg-white px-10 py-6 text-xs font-light uppercase tracking-widest text-black hover:bg-white/90"
              >
                {button.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
