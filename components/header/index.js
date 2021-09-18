import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <Link href="/">BRAND</Link>
      </div>
      <div className="header-navs">
        <div className="header-nav-link">
          <Link href="/tik">Тык</Link>
        </div>
        <div className="header-nav-link">
          <Link href="/">Test Nav Link</Link>
        </div>
        <div className="header-nav-link">
          <Link href="/">Test Nav Link</Link>
        </div>
      </div>
    </div>
  );
}
