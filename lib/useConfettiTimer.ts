"use client";

import { useEffect, useCallback, useRef } from "react";

interface ConfettiConfig {
  startDate?: Date;
  durationHours?: number;
  autoTrigger?: boolean;
  triggerDelay?: number;
  intervalBetweenBursts?: number;
  burstProbability?: number;
}

export const useConfettiTimer = (config: ConfettiConfig = {}) => {
  const {
    startDate = new Date("2025-08-12T00:00:00"),
    durationHours = 24,
    autoTrigger = true,
    triggerDelay = 500,
    intervalBetweenBursts = 12000,
    burstProbability = 0.3,
  } = config;

  const isActiveRef = useRef(false);

  const checkTimeLimit = useCallback(() => {
    const endDate = new Date(
      startDate.getTime() + durationHours * 60 * 60 * 1000
    );
    const now = new Date();
    return now >= startDate && now <= endDate;
  }, [startDate, durationHours]);

  const getTimeRemaining = useCallback(() => {
    const endDate = new Date(
      startDate.getTime() + durationHours * 60 * 60 * 1000
    );
    const now = new Date();
    const remaining = endDate.getTime() - now.getTime();
    return Math.max(0, remaining);
  }, [startDate, durationHours]);

  const isConfettiActive = useCallback(() => {
    return checkTimeLimit();
  }, [checkTimeLimit]);

  useEffect(() => {
    isActiveRef.current = checkTimeLimit();
  }, [checkTimeLimit]);

  return {
    isActive: isActiveRef.current,
    isConfettiActive,
    checkTimeLimit,
    getTimeRemaining,
    config: {
      autoTrigger,
      triggerDelay,
      intervalBetweenBursts,
      burstProbability,
    },
  };
};
