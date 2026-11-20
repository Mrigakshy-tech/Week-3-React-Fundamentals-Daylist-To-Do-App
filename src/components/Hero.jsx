export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">YOUR PERSONAL SPACE</p>
        <h1>Make room for<br /><span>what matters.</span></h1>
        <p className="hero-description">A little progress each day adds up to big results.</p>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="sun" />
        <div className="art-card art-card-one">✦</div>
        <div className="art-card art-card-two">✓</div>
        <div className="art-line line-one" />
        <div className="art-line line-two" />
      </div>
    </section>
  );
}