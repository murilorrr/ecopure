import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex sm:justify-end p-8 space-x-4">
        {[
          { title: "Home", url: "/home" },
          { title: "Produtos", url: "/produtos" },
          { title: "Feedback", url: "#feedback" },
          { title: "Contato", url: "#contato" },
        ].map((link, index) => (
          <Link
            className="rounded-lg px-3 text-black py-2 font-medium hover:bg-slate-100 hover:text-slate-900"
            href={link.url}
            key={index}
          >
            {" "}
            {link.title}{" "}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;
