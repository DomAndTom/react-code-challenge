import "./styles.scss";

export default function Card({ name, age, img, skills = [] }) {
  return (
    <div className="card-container">
      <div className="card-img">
        <img alt={name} src={img} />
      </div>
      <div className="card-info-container">
        <h1 className="card-name">{name}</h1>
        <h3 className="card-age">
          <span>age:</span> {age}
        </h3>
        <h3 className="card-skills-container">
          <span>skills:</span> {skills.join(", ")}
        </h3>
      </div>
    </div>
  );
}
