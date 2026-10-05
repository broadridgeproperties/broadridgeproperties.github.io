import { useEffect, useState } from "react"
import { contact, markets } from "../data"

const empty = {
  name: "",
  email: "",
  phone: "",
  role: "Property owner",
  city: "McKinney",
  message: "",
}

export default function Contact({ cityName, askToken }) {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)
  const [seenToken, setSeenToken] = useState(askToken)

  if (askToken !== seenToken) {
    setSeenToken(askToken)
    setSent(false)
    setForm((current) => ({ ...current, city: cityName, role: "Property owner" }))
  }

  useEffect(() => {
    if (!askToken) return
    document.getElementById("city")?.focus()
  }, [askToken])

  function update(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(
      `${form.role} inquiry — ${form.city} — ${form.name}`,
    )
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nI am a: ${form.role}\nCity: ${form.city}\n\n${form.message}`,
    )
    window.location.href = `${contact.emailHref}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="kicker">Contact</p>
          <h2>Ready to protect, build, or grow your Texas property?</h2>
          <p className="lede">
            Contact Broadridge Properties today for a free consultation. The
            form opens your email app addressed to the office.
          </p>

          <dl className="contact-facts">
            <div>
              <dt>Mailing</dt>
              <dd>
                {contact.address[0]}
                <br />
                {contact.address[1]}
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={contact.emailHref}>{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>
                {contact.hours.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        {sent ? (
          <div className="form-card sent" role="status">
            <h3>Your email app should be open.</h3>
            <p>
              The note is addressed to {contact.email}. Send it from there and
              we will reply during office hours. If nothing opened, call{" "}
              <a href={contact.phoneHref}>{contact.phone}</a>.
            </p>
            <button className="btn btn-navy" type="button" onClick={() => setSent(false)}>
              Write another note
            </button>
          </div>
        ) : (
          <form className="form-card" onSubmit={onSubmit}>
            <label>
              Name
              <input
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={update}
                required
              />
            </label>
            <div className="form-row">
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update}
                  required
                />
              </label>
              <label>
                Phone
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={update}
                  required
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                I am a
                <select name="role" value={form.role} onChange={update}>
                  <option>Property owner</option>
                  <option>Investor</option>
                  <option>Construction client</option>
                  <option>Ranch owner</option>
                  <option>Resident</option>
                  <option>Future resident</option>
                </select>
              </label>
              <label>
                City
                <select id="city" name="city" value={form.city} onChange={update}>
                  {markets.map((market) => (
                    <option key={market.id}>{market.city}</option>
                  ))}
                  <option>More than one city</option>
                </select>
              </label>
            </div>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                required
                placeholder="Address, timeline, or what you need help with."
              />
            </label>
            <button className="btn btn-green" type="submit">
              Email the office
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
