"use client";

import Image from "next/image";
import { Button } from "./ui/button";

const links = [
  {
    name: "Início",
    href: "/",
  },
  {
    name: "Serviços",
    href: "/#services",
  },
  {
    name: "Casos",
    href: "/#cases",
  },
  {
    name: "Por Que Escolher",
    href: "/#why-choose",
  },
  {
    name: "FAQ",
    href: "/#faq",
  },
  {
    name: "Conteúdo",
    href: "/#content",
  },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full border-b bg-neutral-800/70 backdrop-blur-lg z-[9999]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={40}
          className="object-cover"
        />
        <nav className="flex items-center justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            Contato
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
