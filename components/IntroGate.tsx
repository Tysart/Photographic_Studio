"use client";

import { ReactNode, useEffect, useState } from "react";
import { IntroCover } from "@/components/IntroCover";

type IntroGateProps = {
  children: ReactNode;
};

const INTRO_DURATION_MS = 4200;
let introShownInAppSession = false;

export function IntroGate({ children }: IntroGateProps) {
  const [dismissed, setDismissed] = useState(introShownInAppSession);

  const dismissIntro = () => {
    introShownInAppSession = true;
    setDismissed(true);
  };

  useEffect(() => {
    document.body.style.overflow = dismissed ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [dismissed]);

  useEffect(() => {
    if (dismissed) return;

    const timeoutId = window.setTimeout(() => {
      dismissIntro();
    }, INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [dismissed]);

  return (
    <>
      <IntroCover dismissed={dismissed} onEnter={dismissIntro} />
      <div className={`site-underlay ${dismissed ? "is-revealed" : ""}`}>{children}</div>
    </>
  );
}
