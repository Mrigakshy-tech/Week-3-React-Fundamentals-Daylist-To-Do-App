export default function Header() {
  const today = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Daylist home">
        <span className="brand-mark" aria-hidden="true">✓</span>
        <span>daylist</span>
      </a>
      <span className="date-label">{today}</span>
    </header>
  );
}