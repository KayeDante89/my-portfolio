import IconList from "./IconList";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <div className="flex-center">
          <div id="project-info-container">
            <h1>projects</h1>
            <p>In 2022, I wrote my first line of code.</p>
            <p>In 2023, I completed a 6-months She Codes Plus coding bootcamp and landed my first tech job as a Web Developer (after 7+ years as a Retail Assistant Manager).</p>
            <h2>Languages:</h2>
            <IconList/>
          </div>
          <div id="project-list-container">
            <ProjectCard
              img={"/src/assets/loveledger.png"}
              title={"Crowdfund Project"}
              link={"https://loveledger.netlify.app/"}
            />
            <ProjectCard 
              img={"/src/assets/djangonews.png"}
              title={"Django News Project"}
              link={"https://github.com/KayeDante89/she-codes-django-news-project-KayeDante89"}
            />
            <ProjectCard
              img={"/src/assets/skills-workshop.png"}
              title={"She Codes Group Project"}
              link={"https://skillsworkshop.netlify.app/"}
             />
            <ProjectCard
              img={"/src/assets/portfolio1.png"}
              title={"Online Portfolio 2022"}
              link={"https://kayedante89.github.io/"}
            />
            <ProjectCard
              img={"/src/assets/portfolio2.png"}
              title={"Online Portfolio 2023"}
              link={"https://kayedante89.github.io/mywebsite"}
            />
            <ProjectCard
              img={"/src/assets/pokemon-api.png"}
              title={"Pokemon Search App"}
              link={"https://github.com/KayeDante89/pokemon-search-app"}
            />
            <ProjectCard 
              title={"Coming soon.."}
            />
            <ProjectCard  
              title={"Coming soon.."}
            />
          </div>
        </div>
  )
}