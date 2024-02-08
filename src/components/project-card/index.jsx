import "./styles.css";

export default function ProjectCard({title, img, link}) {
  return (
    <div id="project-card">
      <div id="proj-img-container flex-center">
        <a href={link} target="_blank">
          <img src={img} className="proj-img" />
        </a>
        
      </div>
      <div id="proj-txt-container">
          <h3>{title}</h3>        
      </div>
    </div>
  );
}
