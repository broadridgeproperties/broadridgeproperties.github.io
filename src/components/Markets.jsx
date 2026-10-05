import { markets, regions } from "../data"

export default function Markets({ cityId, onPickCity, onAsk }) {
  const selected = markets.find((market) => market.id === cityId) ?? markets[0]

  return (
    <section className="section markets" id="markets">
      <div className="wrap markets-head">
        <div>
          <p className="kicker">Markets</p>
          <h2>Where the properties are.</h2>
        </div>
        <p>
          Nine cities, three parts of Texas. Pick one to see how we work there.
          Photos are representative — they are not current listings.
        </p>
      </div>

      <div className="wrap markets-layout">
        <div className="market-list">
          {regions.map((region) => (
            <div key={region}>
              <p className="region-label">{region}</p>
              {markets
                .filter((market) => market.region === region)
                .map((market) => (
                  <button
                    key={market.id}
                    type="button"
                    className="city-btn"
                    aria-pressed={market.id === selected.id}
                    onClick={() => onPickCity(market.id)}
                  >
                    <strong>{market.city}</strong>
                    <span>TX</span>
                  </button>
                ))}
            </div>
          ))}
        </div>

        <article className="market-stage" aria-live="polite">
          <img
            key={selected.id}
            src={selected.image}
            alt={selected.alt}
            width="1400"
            height="900"
          />
          <div className="market-card">
            <p className="kicker">{selected.region}</p>
            <h3>
              {selected.city}
              <span>, Texas</span>
            </h3>
            <p>{selected.note}</p>
            <button
              className="btn btn-navy"
              type="button"
              onClick={() => onAsk(selected.city)}
            >
              Ask about {selected.city}
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}
