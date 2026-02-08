import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with FyyndFit. Contact us for support, questions, feedback, or account deletion requests.",
  keywords: ["contact", "support", "customer service", "help", "feedback", "account deletion"],
  openGraph: {
    title: "Contact Us | FyyndFit",
    description: "Get in touch with FyyndFit. Contact us for support, questions, feedback, or account deletion requests.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | FyyndFit",
    description: "Get in touch with FyyndFit. Contact us for support, questions, feedback, or account deletion requests.",
  },
  alternates: {
    canonical: "/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
