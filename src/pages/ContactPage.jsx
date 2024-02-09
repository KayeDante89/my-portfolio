import ContactForm from "../components/contact-form";

export default function ContactPage() {
  return (
    <div className="flex-center">
      <section id="contact-detail-section">
        <div style={{ textAlign: "center" }}>
          <h1>Let's Connect</h1>
          <div>
            <a href="https://github.com/KayeDante89" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
            </a>
            <a href="https://www.linkedin.com/in/kayemdante" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
            </a>
          </div>
        </div>
      </section>
      <section id="contact-form" className="page-height">
        <ContactForm />
      </section>
    </div>
  );
}
