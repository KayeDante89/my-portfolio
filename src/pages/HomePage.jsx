import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <div>
      <section id="home-section" className="page-height flex-center">
        <div id="greeting-text" style={{ textAlign: "center" }}>
          <h1 id="greeting">
            Hi! I'm <span style={{ color: "#e5989b" }}>Kaye Dante</span>.
          </h1>
          <h2>Junior Web Developer | Front End Enthusiast</h2>
        </div>
      </section>
      <div className="down-arrow"></div>
      <section id="project-section" className="page-height">
        <Projects/>
      </section>
    </div>
  );
}
