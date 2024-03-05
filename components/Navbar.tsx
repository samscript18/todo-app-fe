import Link from "next/link";

const links = [
  { href: "/clients", label: "clients" },
  { href: "/drinks", label: "drinks" },
  { href: "/tasks", label: "tasks" },
  { href: "/query", label: "react-query" },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-300 py-4">
      <div className="flex justify-between items-center px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="text-xl">
          Next.js
        </Link>
        <ul className="flex justify-between items-center md:ml-8">
          {links.map((link) => {
            return (
              <li key={link.href} className="mr-8">
                <Link href={link.href} className="capitalize">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
