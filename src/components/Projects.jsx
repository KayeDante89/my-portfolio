import IconList from "./IconList";
import ProjectCard from "./project-card";
import djangoNewsImg from '../assets/djangonews.png';
import loveLedgerImg from '../assets/loveledger.png';
import pokemonApiImg from '../assets/pokemon-api.png';
import portfolioImg1 from '../assets/portfolio1.png';
import portfolioImg2 from '../assets/portfolio2.png';
import skillsWorkshopImg from '../assets/skills-workshop.png';
import resumePdf from '../assets/kresume.pdf';

export default function Projects() {
  return (
    <div className="flex-center">
      <div id="project-info-container">
        <h1>projects</h1>
        <p>In 2022, I wrote my first line of code.</p>
        <p>
          In 2023, I completed a 6-month She Codes Plus coding bootcamp and
          landed my first tech job as a Web Developer.
        </p>
        <p>
          Fueled by my passion for Front End Development, I'm committed to
          honing my skills and master coding languages to create visually
          stunning digital experiences.
        </p>
          <a
          className="resume-btn"
          href={resumePdf}
          title="Resume"
          download
        >
          Download Resume
        </a>
        
        <h2>Languages:</h2>
        <IconList />
      </div>
      <div id="project-list-container">
        <ProjectCard
          img={loveLedgerImg}
          title={"Crowdfund Project"}
          link={"https://loveledger.netlify.app/"}
        />
        <ProjectCard
          img={djangoNewsImg}
          title={"Django News Project"}
          link={
            "https://github.com/KayeDante89/she-codes-django-news-project-KayeDante89"
          }
        />
        <ProjectCard
          img={skillsWorkshopImg}
          title={"She Codes Group Project"}
          link={"https://skillsworkshop.netlify.app/"}
        />
        <ProjectCard
          img={portfolioImg1}
          title={"Online Portfolio 2022"}
          link={"https://kayedante89.github.io/"}
        />
        <ProjectCard
          img={portfolioImg2}
          title={"Online Portfolio 2023"}
          link={"https://kayedante89.github.io/mywebsite"}
        />
        <ProjectCard
          img={pokemonApiImg}
          title={"Pokemon Search App"}
          link={"https://github.com/KayeDante89/pokemon-search-app"}
        />
        <ProjectCard title={"Coming soon.."} />
        <ProjectCard title={"Coming soon.."} />
      </div>
    </div>
  );
}
