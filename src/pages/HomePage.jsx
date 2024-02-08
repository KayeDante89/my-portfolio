import ProjectCard from "../components/project-card";

export default function HomePage() {
  return (
    <div>
      <section id="home-section" className="page-height flex-center">
        <div style={{ textAlign: "center" }}>
          <h1 id="greeting">
            Hi! I'm <span style={{ color: "#e5989b" }}>Kaye Dante</span>.
          </h1>
          <h2>Junior Web Developer | Front End Enthusiast</h2>
        </div>
      </section>
      <div className="down-arrow"></div>
      <section id="project-section" className="page-height">
        <div className="flex-center">
          <div id="project-info-container">
            <h1>projects</h1>
          </div>
          <div id="project-list-container">
            <ProjectCard
              img={"/src/assets/loveledger.png"}
              title={"Crowdfund Project"}
              link={"https://loveledger.netlify.app/"}
            />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>
    </div>
  );
}
