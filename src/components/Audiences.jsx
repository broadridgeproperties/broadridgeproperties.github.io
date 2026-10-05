import { portals, pricing } from "../data"

export default function Audiences() {
  return (
    <>
      <section className="section">
        <div className="wrap audiences">
          <article className="panel panel-navy" id="owners">
            <p className="kicker kicker-light">Owners</p>
            <h2>A manager for the house, and a statement you can read.</h2>
            <p>
              We prepare the property, place a tenant, collect rent, and send
              it on. You get a dedicated manager, an owner portal, and
              maintenance that does not wait on a call center.
            </p>
            <ul>
              <li>No management fee while the home is vacant</li>
              <li>Showings seven days a week</li>
              <li>In-house technicians</li>
              <li>Legal support if an eviction is required</li>
            </ul>
            <div className="panel-actions">
              <a
                className="btn btn-light"
                href={portals.owner}
                target="_blank"
                rel="noreferrer"
              >
                Owner portal
              </a>
              <a className="btn btn-line" href="#contact">
                Talk about a property
              </a>
            </div>
          </article>

          <article className="panel panel-green" id="residents">
            <p className="kicker kicker-light">Residents</p>
            <h2>One person to call. A portal for the rest.</h2>
            <p>
              Pay rent, request a repair, or pull up the lease without chasing
              an inbox. After-hours emergencies go to the maintenance line.
            </p>
            <ul>
              <li>Designated property manager</li>
              <li>Online rent and maintenance requests</li>
              <li>Homes turned over in move-in condition</li>
              <li>Apply online when a house is available</li>
            </ul>
            <div className="panel-actions">
              <a
                className="btn btn-light"
                href={portals.resident}
                target="_blank"
                rel="noreferrer"
              >
                Resident portal
              </a>
              <a
                className="btn btn-line"
                href={portals.maintenance}
                target="_blank"
                rel="noreferrer"
              >
                Request maintenance
              </a>
              <a
                className="btn btn-line"
                href={portals.apply}
                target="_blank"
                rel="noreferrer"
              >
                Apply online
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="ranch">
        <div className="wrap ranch-grid">
          <img
            src="/images/collinsville.jpg"
            alt="Open pasture at sunset"
            width="1600"
            height="900"
          />
          <div>
            <p className="kicker">Ranch and equestrian</p>
            <h2>Acreage, barns, and boarding — not only subdivision houses.</h2>
            <p>
              Broadridge also manages ranch and equestrian facilities,
              including Vigno Ranch in Collinsville. The work covers horse
              facilities, arenas, pasture operations, and large-acreage
              property, with the same owner reporting as a rental home.
            </p>
          </div>
        </div>
      </section>

      <section className="section pricing">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Pricing</p>
            <h2>Fees written in plain numbers.</h2>
            <p>
              Management is 6% of rent or $75, whichever is higher. Placement
              and renewals are separate, and listed here.
            </p>
          </div>
          <dl className="price-grid">
            {pricing.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
