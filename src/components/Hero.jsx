import { markets, portals } from "../data"

export default function Hero({ onPickCity }) {
  return (
    <section className="hero-section" id="top">
      <div className="wrap hero">
        <div className="hero-copy">
          <p className="kicker">Across Texas</p>
          <h1>Property Management, Construction & Ranch Services Across Texas</h1>
          <p className="lede">
            One trusted partner to manage, build, and care for your Texas
            property, from residential homes to working ranch land.
          </p>
          <div className="hero-actions">
            <a className="btn btn-green" href="#contact">
              Free consultation
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
