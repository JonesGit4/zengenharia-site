"use client";

import { useEffect, useState } from "react";
import { useConfettiTimer } from "@/lib/useConfettiTimer";

const ConfettiStatus = () => {
  const { isActive, getTimeRemaining } = useConfettiTimer();
  const [timeLeft, setTimeLeft] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    // Só mostra o status em desenvolvimento ou se uma query string específica estiver presente
    const isDev = process.env.NODE_ENV === "development";
    const showDebug =
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).has("confetti-debug");

    setShowStatus(isDev || showDebug);
  }, []);

  useEffect(() => {
    if (!showStatus) return;

    const updateTimer = () => {
      const remaining = getTimeRemaining();
      if (remaining > 0) {
        const hours = Math.floor(remaining / (1000 * 60 * 60));
        const minutes = Math.floor(
          (remaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft("Expirado");
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [showStatus, getTimeRemaining]);

  if (!showStatus) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-mono z-50">
      <div>Confete: {isActive ? "🎉 Ativo" : "❌ Inativo"}</div>
      <div>Tempo restante: {timeLeft}</div>
    </div>
  );
};

export default ConfettiStatus;
