import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <div>
      <section id="home-section" className="page-height flex-center">
        <div id="greeting-text">
          <h1 id="greeting">
            Hi! I'm <span style={{ color: "#e5989b" }}>Kaye Dante</span>.
          </h1>
          <div id="greeting-sub-text">
            <h2>Junior Web Developer /</h2>
            <h2>&ensp;Front End Enthusiast</h2>
          </div>
          
        </div>
      </section>
      <section id="project-section" className="page-height">
        <Projects/>
      </section>
    </div>
  );
}
