import { contact, portals } from "../data"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <a className="brand brand-on-dark" href="#top">
            <img src="/logo.webp" alt="" width="84" height="48" />
            <span className="brand-name">
              Broadridge
              <span>Properties</span>
            </span>
          </a>
          <p>
            Property management for homes and ranch land in North, Central, and
            South Texas.
          </p>
        </div>
        <div>
          <h2>Visit</h2>
          <p>
            {contact.address[0]}
            <br />
            {contact.address[1]}
          </p>
          <p>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <br />
            <a href={contact.emailHref}>{contact.email}</a>
          </p>
        </div>
        <div>
          <h2>Portals</h2>
          <ul>
            <li>
              <a href={portals.owner} target="_blank" rel="noreferrer">
                Owner portal
              </a>
            </li>
            <li>
              <a href={portals.resident} target="_blank" rel="noreferrer">
                Resident portal
              </a>
            </li>
            <li>
              <a href={portals.maintenance} target="_blank" rel="noreferrer">
                Maintenance request
              </a>
            </li>
            <li>
              <a href={portals.apply} target="_blank" rel="noreferrer">
                Apply for a home
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} Broadridge Properties</p>
        <p>Collinsville, Texas</p>
      </div>
    </footer>
  )
}
