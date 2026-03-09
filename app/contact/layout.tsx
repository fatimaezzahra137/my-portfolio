// app/contact/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Fatima Ezzahra BARRADI",
  description: "Contactez Fatima Ezzahra BARRADI pour discuter de projets en Data, IA, ou pour toute collaboration.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}