const bullets = [{ title: "Languages", items: ["Python", "Javascript"] }];

export default function Skills() {
  return (
    <div className="section skills">
      <h1 className="sectiontitle">Coursework, Certifications and Skills</h1>
      <hr className="sectionline"></hr>

      <ul>
        {bullets.map((bullet) => (
          <li key={bullet.title}>
            <b>{bullet.title}</b>: {bullet.items.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
