import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload sans, mono is less critical
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fyyndfit.com"),
  title: {
    default: "FyyndFit - Find Your Fitness | AI-Powered Gym Equipment Scanner",
    template: "%s | FyyndFit",
  },
  description: "AI-powered fitness app for beginners. Scan gym equipment with your camera, get personalized AI workouts, learn proper form with video tutorials, and track your progress. Available on iOS.",
  keywords: [
    "fitness app",
    "gym equipment scanner",
    "AI workout generator",
    "beginner fitness",
    "gym equipment identification",
    "personalized workout plans",
    "fitness tracker",
    "calorie tracker",
    "workout tutorials",
    "exercise form guide",
    "fitness for beginners",
    "gym app",
    "workout app",
    "AI fitness",
    "smart fitness",
  ],
  authors: [{ name: "FyyndFit" }],
  creator: "FyyndFit",
  publisher: "FyyndFit",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "FyyndFit",
    title: "FyyndFit - Find Your Fitness | AI-Powered Gym Equipment Scanner",
    description: "AI-powered fitness app for beginners. Scan gym equipment, get personalized workouts, and track your progress. Available now on iOS.",
    images: [
      {
        url: "/fyyndfit-logo.png",
        width: 1200,
        height: 630,
        alt: "FyyndFit - AI-Powered Fitness App",
        type: "image/png",
      },
      {
        url: "/IMG_9474.PNG",
        width: 1080,
        height: 1920,
        alt: "FyyndFit App Preview",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FyyndFit - Find Your Fitness",
    description: "AI-powered fitness app for beginners. Scan gym equipment, get personalized workouts, and track your progress.",
    images: ["/fyyndfit-logo.png"],
    creator: "@fyyndfit",
  },
  alternates: {
    canonical: "/",
  },
  category: "Health & Fitness",
  classification: "Fitness Application",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: "#0c0a09",
  colorScheme: "dark",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "FyyndFit",
  },
  applicationName: "FyyndFit",
  manifest: "/manifest.json",
  other: {
    "format-detection": "telephone=no",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://apps.apple.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preload" href="/fyyndfit-icon.png" as="image" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/fyyndfit-icon.png" />
        <link rel="apple-touch-icon" href="/fyyndfit-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
