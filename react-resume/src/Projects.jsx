const bullets = [
  {
    title: "Topological Data Analysis and Simplicial Neural Networks | MTP | Prof. Bibhas Adhikari",
    duration: "July 2022 - April 2023",
    points: ["Point 1", "Point 2"],
  },
];

export default function Projects() {
  return (
    <div className="section projects">
      <h1 className="sectiontitle">Projects</h1>
      <hr className="sectionline"></hr>

      <ul>
        <li key="project1">
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
