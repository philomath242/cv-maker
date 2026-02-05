const bullets = [
  {
    company: "Squarepoint | Platform Application Services",
    duration: "July 2023 - present",
    role: "System Specialist and Database Administrator",
    place: "Bengaluru, India",
    points: ["Point number 1", "Point number 2"],
  },
];

export default function WorkExperience() {
  return (
    <div className="section workexperience">
      <h1 className="sectiontitle">Work Experience</h1>
      <hr className="sectionline"></hr>

      <ul>
        <li key="work1">
          <div>
            <div>{bullets[0].company}</div>
            <div>{bullets[0].duration}</div>
            <div>{bullets[0].role}</div>
            <div>{bullets[0].place}</div>
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
