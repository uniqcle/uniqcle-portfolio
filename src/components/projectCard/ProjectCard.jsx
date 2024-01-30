import "./style.css";

const ProjectCard = () => {
  return (
    <>
      <li className="project">
        <a href="#">
          <img
            src="./imgs/projects/01.jpg"
            className="project__img"
            alt="project img"
          />
          <h3 className="project__title">Gaming streaming portal</h3>
        </a>
      </li>
    </>
  );
};

export default ProjectCard;
