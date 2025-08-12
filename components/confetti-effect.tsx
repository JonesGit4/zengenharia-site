"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const ConfettiEffect = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    // Verifica se ainda está dentro das 24 horas
    const checkTimeLimit = () => {
      const startDate = new Date("2025-08-12T00:00:00");
      const endDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
      const now = new Date();

      console.log("Data atual:", now);
      console.log("Data de início:", startDate);
      console.log("Data de fim:", endDate);
      console.log("Está ativo:", now >= startDate && now <= endDate);

      return now >= startDate && now <= endDate;
    };

    if (!checkTimeLimit() || isInitialized.current) {
      console.log(
        "Confetti não executado - Ativo:",
        checkTimeLimit(),
        "Já inicializado:",
        isInitialized.current
      );
      return;
    }

    isInitialized.current = true;
    console.log("Executando confetti...");

    // Função para criar confete dos cantos superiores
    const createConfetti = () => {
      console.log("Criando confetti...");

      const defaults = {
        startVelocity: 25,
        spread: 360,
        ticks: 120, // Aumentado para durar mais
        zIndex: 9999,
        disableForReducedMotion: false,
      };

      // Paleta expandida de cores vibrantes e festivas
      const colors = [
        "#ff6b6b", // Vermelho coral
        "#4ecdc4", // Turquesa
        "#45b7d1", // Azul céu
        "#96ceb4", // Verde menta
        "#feca57", // Amarelo dourado
        "#ff9ff3", // Rosa neon
        "#a8e6cf", // Verde claro
        "#ffaaa5", // Salmão
        "#ff8a80", // Vermelho claro
        "#82b1ff", // Azul claro
        "#b39ddb", // Roxo claro
        "#f8bbd9", // Rosa claro
        "#c5e1a5", // Verde lima
        "#fff176", // Amarelo claro
        "#ffcc02", // Dourado
        "#ff5722", // Laranja profundo
        "#e91e63", // Rosa profundo
        "#9c27b0", // Roxo
        "#673ab7", // Roxo profundo
        "#3f51b5", // Índigo
        "#2196f3", // Azul
        "#03a9f4", // Azul claro
        "#00bcd4", // Ciano
        "#009688", // Verde azulado
        "#4caf50", // Verde
        "#8bc34a", // Verde lima
        "#cddc39", // Lima
        "#ffeb3b", // Amarelo
        "#ffc107", // Âmbar
        "#ff9800", // Laranja
      ];

      // Confete do canto superior esquerdo
      const leftCorner = () => {
        console.log("Confetti esquerdo");
        confetti({
          ...defaults,
          particleCount: 100, // Aumentado
          origin: { x: 0, y: 0 },
          colors,
          gravity: 0.6, // Reduzido para cair mais lentamente
          drift: 1,
          scalar: 1.2, // Partículas maiores
        });
      };

      // Confete do canto superior direito
      const rightCorner = () => {
        console.log("Confetti direito");
        confetti({
          ...defaults,
          particleCount: 100, // Aumentado
          origin: { x: 1, y: 0 },
          colors,
          gravity: 0.6, // Reduzido para cair mais lentamente
          drift: -1,
          scalar: 1.2, // Partículas maiores
        });
      };

      // Executa o confete de ambos os cantos em sequência para prolongar o efeito
      leftCorner();
      setTimeout(rightCorner, 150);

      // Rajadas adicionais para prolongar o efeito
      setTimeout(leftCorner, 800);
      setTimeout(rightCorner, 1200);
      setTimeout(leftCorner, 1800);
      setTimeout(rightCorner, 2200);
    };

    // Executa o confete após um pequeno delay
    const timer = setTimeout(() => {
      createConfetti();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default ConfettiEffect;
