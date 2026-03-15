"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { IntroCover } from "@/components/IntroCover";

type IntroGateProps = {
  children: ReactNode;
};

export function IntroGate({ children }: IntroGateProps) {
  const [dismissed, setDismissed] = useState(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = dismissed ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [dismissed]);

  useEffect(() => {
    if (dismissed) return;

    const dismiss = () => setDismissed(true);

    const onWheel = (event: WheelEvent) => {
      if (event.deltaY > 8) dismiss();
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (event: TouchEvent) => {
      const start = touchStartY.current;
      const current = event.touches[0]?.clientY;
      if (start != null && current != null && start - current > 16) dismiss();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [dismissed]);

  return (
    <>
      <IntroCover dismissed={dismissed} onEnter={() => setDismissed(true)} />
      <div className={`site-underlay ${dismissed ? "is-revealed" : ""}`}>{children}</div>
    </>
  );
}
