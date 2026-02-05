const bullets = [
  {
    title: "Associate Technology Coordinator under Technology Students' Gymkhana IITKGP ",
    duration: "July 2019 - February 2020",
    points: ["Point 1", "Point 2"],
  },
];

export default function LeadershipExperience() {
  return (
    <div className="section leadership-experience">
      <h1 className="sectiontitle">Leadership Experience</h1>
      <hr className="sectionline"></hr>

      <ul>
        <li key="edu1">
          <div>
            <div>{bullets[0].title}</div>
            <div>{bullets[0].duration}</div>
            <ul>
              {bullets[0].points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
