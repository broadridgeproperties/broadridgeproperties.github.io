import { results, specialties, stats, steps } from "../data"

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Services</p>
          <h2>From the first showing to the monthly statement.</h2>
          <p>
            Full-service management for owners who want the house rented,
            repaired, and accounted for. Tenant placement is available on its
            own if you do not need the rest.
          </p>
        </div>

        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <ul className="chips">
          {specialties.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="stats">
        <div className="wrap stats-grid">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <ul className="wrap result-row">
          {results.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
