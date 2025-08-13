"use client";

import { useState, useEffect } from "react";

// Tipos
interface WhatsAppFloatProps {
  phoneNumber: string;
  message?: string;
  position?: "left" | "right";
  companyName?: string;
  tooltipMessage?: string;
  showTooltip?: boolean;
  showTooltipDelay?: number;
  hideTooltipDelay?: number;
  buttonDelay?: number;
  theme?: "auto" | "light" | "dark";
}

// Ícones SVG inline
const CloseIcon = ({ size = 12 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const MessageCircleIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
  </svg>
);

export default function WhatsAppFloat({
  phoneNumber,
  message = "Olá! Gostaria de mais informações.",
  position = "right",
  companyName = "Suporte",
  tooltipMessage = "Precisa de ajuda? Fale conosco no WhatsApp!",
  showTooltip = true,
  showTooltipDelay = 2000,
  hideTooltipDelay = 5000,
  buttonDelay = 1000,
  theme = "auto",
}: WhatsAppFloatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltipState, setShowTooltipState] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar tema dark/light
  useEffect(() => {
    if (theme === "auto") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
      mediaQuery.addEventListener("change", handleChange);

      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      setIsDarkMode(theme === "dark");
    }
  }, [theme]);

  useEffect(() => {
    // Mostrar o botão após um delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, buttonDelay);

    return () => clearTimeout(timer);
  }, [buttonDelay]);

  useEffect(() => {
    // Mostrar tooltip após o botão aparecer
    if (isVisible && showTooltip) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltipState(true);
        // Esconder tooltip após um tempo
        setTimeout(() => setShowTooltipState(false), hideTooltipDelay);
      }, showTooltipDelay);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible, showTooltip, showTooltipDelay, hideTooltipDelay]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const positionClasses = position === "left" ? "left-4" : "right-4";

  if (!isVisible) return null;

  return (
    <>
      {/* Estilos CSS inline */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes subtlePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        .whatsapp-fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }

        .whatsapp-subtle-pulse {
          animation: subtlePulse 3s ease-in-out infinite;
        }

        .whatsapp-transition {
          transition: all 0.3s ease;
        }

        .whatsapp-hover-scale:hover {
          transform: scale(1.1);
        }

        .whatsapp-shadow {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .whatsapp-shadow-xl:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>

      {/* Tooltip */}
      {showTooltipState && (
        <div
          className={`fixed bottom-24 ${positionClasses} z-50 max-w-xs whatsapp-fade-in-up`}
          style={{ zIndex: 9999 }}
        >
          <div
            className={`rounded-lg border p-3 relative whatsapp-shadow ${
              isDarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <button
              onClick={() => setShowTooltipState(false)}
              className={`absolute -top-2 -right-2 rounded-full p-1 whatsapp-transition ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <CloseIcon size={12} />
            </button>
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircleIcon size={16} />
                </div>
              </div>
              <div className="flex-1">
                <p
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {companyName}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {tooltipMessage}
                </p>
              </div>
            </div>
            {/* Seta apontando para o botão */}
            <div
              className={`absolute top-full ${
                position === "left" ? "left-8" : "right-8"
              }`}
              style={{
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: `8px solid ${isDarkMode ? "#374151" : "#ffffff"}`,
              }}
            />
          </div>
        </div>
      )}

      {/* Botão WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className={`fixed bottom-6 ${positionClasses} z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 whatsapp-shadow whatsapp-shadow-xl whatsapp-transition whatsapp-hover-scale whatsapp-subtle-pulse`}
        style={{ zIndex: 9998 }}
        aria-label="Contato via WhatsApp"
        title="Clique para conversar no WhatsApp"
      >
        <WhatsAppIcon size={24} />
      </button>
    </>
  );
}

// Hook personalizado para facilitar o uso
export function useWhatsApp(phoneNumber: string, defaultMessage?: string) {
  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || defaultMessage || "Olá!";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return { openWhatsApp };
}

// Componente versão minimalista (apenas o botão, sem tooltip)
export function WhatsAppButton({
  phoneNumber,
  message = "Olá!",
  position = "right",
  size = "normal",
}: {
  phoneNumber: string;
  message?: string;
  position?: "left" | "right";
  size?: "small" | "normal" | "large";
}) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const sizeClasses = {
    small: "p-2",
    normal: "p-4",
    large: "p-6",
  };

  const iconSizes = {
    small: 16,
    normal: 24,
    large: 32,
  };

  const positionClasses = position === "left" ? "left-4" : "right-4";

  return (
    <>
      <style jsx>{`
        .whatsapp-btn-transition {
          transition: all 0.3s ease;
        }
        .whatsapp-btn-hover:hover {
          transform: scale(1.1);
        }
        .whatsapp-btn-shadow {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `}</style>

      <button
        onClick={handleClick}
        className={`fixed bottom-6 ${positionClasses} z-40 bg-green-500 hover:bg-green-600 text-white rounded-full ${sizeClasses[size]} whatsapp-btn-shadow whatsapp-btn-transition whatsapp-btn-hover`}
        style={{ zIndex: 9998 }}
        aria-label="Contato via WhatsApp"
        title="Clique para conversar no WhatsApp"
      >
        <WhatsAppIcon size={iconSizes[size]} />
      </button>
    </>
  );
}
