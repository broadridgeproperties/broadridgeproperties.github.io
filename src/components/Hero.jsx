import { markets, portals } from "../data"

export default function Hero({ onPickCity }) {
  return (
    <section className="hero-section" id="top">
      <div className="wrap hero">
        <div className="hero-copy">
          <p className="kicker">Texas property management</p>
          <h1>
            Homes managed
            <br />
            across nine
            <br />
            Texas cities.
          </h1>
          <p className="lede">
            Broadridge Properties leases, maintains, and reports on residential
            homes, investment properties, and ranch land — from McKinney and
            Collinsville down through Austin and San Antonio.
          </p>
          <div className="hero-actions">
            <a className="btn btn-green" href="#contact">
              Get a rent analysis
            </a>
            <a
              className="btn btn-ghost"
              href={portals.owner}
              target="_blank"
              rel="noreferrer"
            >
              Owner portal
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/hero.jpg"
            alt="Modern home with a lawn at dusk"
            width="1400"
            height="933"
          />
          <div className="hero-float">
            <strong>621</strong>
            <span>properties currently managed</span>
          </div>
        </div>
      </div>

      <div className="wrap">
        <ul className="city-row">
          {markets.map((market) => (
            <li key={market.id}>
              <a
                href="#markets"
                onClick={() => onPickCity(market.id)}
              >
                {market.city}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
