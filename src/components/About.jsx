export default function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <div>
          <p className="kicker">About</p>
          <h2>A Texas team that built its own tools.</h2>
          <p>
            Broadridge Properties started seven years ago and now looks after
            621 properties. An independent study placed the company 21st of 151
            management firms in the area.
          </p>
          <p>
            The work is still local: leasing, maintenance, and accounting for
            owners and residents. We build mobile tools for the back office,
            and use established systems for rent collection, repair tracking,
            and showing requests.
          </p>
        </div>
        <ul className="about-points">
          <li>
            <strong>Rent collection</strong>
            <span>Collected, recorded, and disbursed to owners.</span>
          </li>
          <li>
            <strong>Repair tracking</strong>
            <span>Requests stay visible until the work is done.</span>
          </li>
          <li>
            <strong>Showings</strong>
            <span>Online requests, with tours available all week.</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
