// app/contact/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Youssef Aibi",
  description: "Get in touch with Youssef Aibi, Junior Oracle DBA & Law Graduate",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}