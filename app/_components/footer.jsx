import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <span>Made by </span>
      <Link
        className="font-bold text-purple-400"
        href="https://github.com/joeldasari"
      >
        Joel D
      </Link>
    </footer>
  );
}
