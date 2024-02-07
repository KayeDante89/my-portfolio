export default function HomePage() {
  return (
    <div>
      <section id="home-section" className="page-height flex-center">
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "100px",
              margin: "40px"
            }}
          >
            Hi! I'm <span style={{ color: "#e5989b" }}>Kaye Dante.</span>
          </h1>
          <h2>Junior Web Developer | Front End Enthusiast</h2>
        </div>
      </section>
      <div className="down-arrow"></div>
      <section id="project-section" className="page-height">
        <h1>projects</h1>
      </section>
    </div>
  );
}
