import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/contact-dialog";
import {
  BuildingIcon,
  ChevronRightIcon,
  MedalIcon,
  UsersRoundIcon,
} from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center pt-24 2xl:p-0 w-full h-screen bg-neutral-900"
    >
      <h1 className="text-2xl md:text-6xl 2xl:text-8xl font-extrabold text-foreground text-center">
        Transformando <br /> <span className="text-primary">Fachadas</span>{" "}
        Prediais
      </h1>
      <p className="mt-4 md:mt-8 text-center text-sm md:text-lg 2xl:text-2xl text-muted-foreground max-w-2xl px-4">
        Especialistas em engenharia de fachadas prediais com mais de 15 anos de
        experiência. Oferecemos soluções completas em manutenção, restauração e
        modernização de edifícios.
      </p>
      <div className="flex gap-4 mt-8">
        <Link href="/#services">
          <Button size="xl" className="text-bold group">
            Nossos Serviços{" "}
            <ChevronRightIcon className="group-hover:translate-x-1 transition-all" />
          </Button>
        </Link>
        <ContactDialog>
          <Button size="xl" variant="outline">
            Solicitar Orçamento
          </Button>
        </ContactDialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-14 mt-12">
        <div className="flex flex-col items-center justify-center text-center gap-y-4">
          <div className="p-4 bg-primary/25 rounded-full">
            <BuildingIcon className="size-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">163+</h2>
          <p className="text-muted-foreground">Projetos Realizados</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-y-4">
          <div className="p-4 bg-primary/25 rounded-full">
            <UsersRoundIcon className="size-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">10+</h2>
          <p className="text-muted-foreground">Anos de Experiência</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-y-4">
          <div className="p-4 bg-primary/25 rounded-full">
            <MedalIcon className="size-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">100%</h2>
          <p className="text-muted-foreground">Satisfação do Cliente</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
