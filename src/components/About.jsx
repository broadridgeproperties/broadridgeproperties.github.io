import { reasons } from "../data"

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <div>
          <p className="kicker">About</p>
          <h2>A full-service Texas real estate company.</h2>
          <p>
            Broadridge Properties is a full-service Texas real estate company.
            We manage residential and investment properties, act as general
            contractor on construction projects statewide, and oversee ranch
            operations for landowners. Our clients get one accountable team
            from the first build through long-term care, so their property
            keeps its value and keeps performing.
          </p>
        </div>
        <div>
          <p className="kicker">Why choose Broadridge</p>
          <ul className="about-points">
            {reasons.map((reason) => (
              <li key={reason}>
                <strong>{reason}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
