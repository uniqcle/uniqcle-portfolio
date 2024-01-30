import ProjectCard from "../projectCard/ProjectCard";

const ProjectsList = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <div className="filter">
            <a href="#!" className="btn-filter" data-filter="all">
              All
            </a>
            <a href="#!" className="btn-filter" data-filter="javascript">
              JavaScript
            </a>
            <a href="#!" className="btn-filter" data-filter="react">
              React
            </a>
            <a href="#!" className="btn-filter" data-filter="bitrix">
              Bitrix
            </a>
            <a href="#!" className="btn-filter" data-filter="htmlcss">
              HTML/CSS
            </a>
          </div>

          <ul className="projects">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </ul>
        </div>
      </main>
    </>
  );
};

export default ProjectsList;
