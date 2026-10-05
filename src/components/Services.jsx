import { results, services, specialties, stats, steps } from "../data"

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Services</p>
          <h2>Manage, build, and care for the property.</h2>
          <p>
            Residential homes, investment properties, construction projects,
            and working ranch land. One team from the first build through
            long-term care.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>

        <div className="process-head">
          <h3>How rental management works</h3>
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
