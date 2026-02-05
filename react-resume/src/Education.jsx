const bullets = [
  { title: "Int. M. Sc. in Mathematics and Computing", year: 2023, from: "Indian Institute of Technology Kharagpur", score: 7.44 },
  {
    title: "Higher Secondary School Certificate",
    year: 2017,
    from: "Maharashtra State Board of Secondary and Higher Secondary Education",
    score: 90.31,
  },
  { title: "Secondary School Certificate", year: 2015, from: "Maharashtra State Board of Secondary and Higher Secondary Education", score: 93.2 },
];

export default function Education() {
  return (
    <div className="section education">
      <h1 className="sectiontitle">Education</h1>
      <hr className="sectionline"></hr>

      <ul>
        <li key="edu1">
          <div>
            <div>{bullets[0].title}</div>
            <div>{bullets[0].year}</div>
            <div>{bullets[0].from}</div>
            <div>
              CGPA: <b>{bullets[0].score}</b>/10
            </div>
          </div>
        </li>
        <li key="edu2">
          <div>
            <div>{bullets[1].title}</div>
            <div>{bullets[1].year}</div>
            <div>{bullets[1].from}</div>
            <div>
              Percentage: <b>{bullets[1].score}</b>%
            </div>
          </div>
        </li>
        <li key="edu3">
          <div>
            <div>{bullets[2].title}</div>
            <div>{bullets[2].year}</div>
            <div>{bullets[2].from}</div>
            <div>
              Percentage: <b>{bullets[2].score}</b>%
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
