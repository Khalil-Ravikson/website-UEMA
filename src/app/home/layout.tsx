import { ReactNode } from "react";
import Navbar from "../components/NavBar";

export const metadata = {
  title: 'Página Secundária',
  description: 'Este é o layout secundário da página',
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

  