import { useEffect, useState } from "react"
import { contact } from "../data"

const links = [
  ["markets", "Markets"],
  ["services", "Services"],
  ["owners", "Owners"],
  ["residents", "Residents"],
  ["about", "About"],
  ["contact", "Contact"],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const sections = links
      .map(([id]) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="header">
      <div className="brand-stripe" aria-hidden="true" />
      <div className="wrap header-bar">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <img src="/logo.webp" alt="" width="92" height="52" />
          <span className="brand-name">
            Broadridge
            <span>Properties</span>
          </span>
        </a>

        <nav id="primary-nav" className={open ? "nav open" : "nav"} aria-label="Primary">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="nav-phone" href={contact.phoneHref}>
            {contact.phone}
          </a>
        </nav>

        <a className="btn btn-green header-phone" href={contact.phoneHref}>
          {contact.phone}
        </a>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
