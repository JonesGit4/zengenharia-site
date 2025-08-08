const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-start w-full h-screen bg-neutral-900"
    >
      <h2 className="text-2xl font-bold text-center text-white md:text-4xl 2xl:text-5xl">
        Nosso <span className="text-primary">Serviços</span>
      </h2>
      <p className="max-w-3xl px-4 mt-4 text-sm text-center text-muted-foreground md:text-lg 2xl:text-xl">
        Oferecemos uma gama completa de serviços especializados em engenharia de
        fachadas, sempre com foco na qualidade, segurança e satisfação do
        cliente.
      </p>
    </section>
  );
};

export default Services;
