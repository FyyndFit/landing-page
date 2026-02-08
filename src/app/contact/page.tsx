"use client"

import { useEffect } from "react"

export default function ContactPage() {
  useEffect(() => {
    // Redirect to support site
    window.location.href = "https://support.fyyndfit.com"
  }, [])

  return null
}
