"use client";

type IntroCoverProps = {
  dismissed: boolean;
  onEnter: () => void;
};

export function IntroCover({ dismissed, onEnter }: IntroCoverProps) {
  return (
    <div className={`intro-cover-shell ${dismissed ? "is-dismissed" : ""}`} aria-hidden={dismissed}>
      <section className="intro-cover">
        <div className="intro-cover__card">
          <div className="intro-cover__frame" aria-hidden="true">
            <div className="intro-cover__line intro-cover__line--top" />
            <div className="intro-cover__line intro-cover__line--right" />
            <div className="intro-cover__line intro-cover__line--bottom" />
            <div className="intro-cover__line intro-cover__line--left" />

            <div className="intro-cover__corner intro-cover__corner--tl" />
            <div className="intro-cover__corner intro-cover__corner--tr" />
            <div className="intro-cover__corner intro-cover__corner--br" />
            <div className="intro-cover__corner intro-cover__corner--bl" />
          </div>

          <div className="intro-cover__art" aria-hidden="true">
            <div className="intro-cover__center-panel" />
          </div>

          <div className="intro-cover__content">
            <button type="button" className="intro-cover__enter" onClick={onEnter}>
              <span>Войти</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
