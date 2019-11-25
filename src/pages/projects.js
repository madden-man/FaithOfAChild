import React from "react"

import Layout from "../components/layout"
import danielImg from '../images/Daniel.jpg';
import wellImg from '../images/water-spraying.jpg';
import marlonImg from '../images/Marlon.jpg';

import '../styles/projects.css';

const ProjectsPage = () => (
  <Layout>
    <h1>Projects</h1>
    <div className="project-announcement">
      <h2>Upcoming trip to Uganda (Summer 2020):</h2>
      <span>We expect to install a cell-phone booster for an orphanage and school in Uganda.</span>
    </div>
    <section className="projects">
      <div className="projects__container">
        <h2 className="projects__info--mobile">Uganda 2019:</h2>
        <img src={danielImg} />
        <div className="projects__info">
          <h3>Uganda 2019:</h3>
          <span>In partnership with Sonrise Ministries, we helped to build the orphanage facilities for abandoned children.   We fixed sewer pipes, helped to establish farmland to feed the children, and repaired desks for the on-site school.</span>
        </div>
        <span className="projects__info--mobile">
          In partnership with Sonrise Ministries, we helped to build the orphanage facilities for abandoned children.   We fixed sewer pipes, helped to establish farmland to feed the children, and repaired desks for the on-site school.
          <hr style={{marginTop: '2rem', marginBottom: '0'}}/>
        </span>
      </div>

      <div className="projects__container">
        <h2 className="projects__info--mobile">Guatemala 2019:</h2>
        <img src={wellImg} />
        <div className="projects__info">
          <h3>Guatemala 2019:</h3>
          <span>We drilled a well in rural Guatemala, providing clean water for a school facility but also for thousands of people passing on the nearby road.</span>
        </div>
        <span className="projects__info--mobile">
          We drilled a well in rural Guatemala, providing clean water for a school facility but also for thousands of people passing on the nearby road.
          <hr style={{marginTop: '2rem', marginBottom: '0'}}/>
        </span>
      </div>

      <div className="projects__container">
        <h2 className="projects__info--mobile">El Salvador 2019:</h2>
        <img src={marlonImg} />
        <div className="projects__info">
          <h3>El Salvador 2019:</h3>
          <span>We drilled a well in El Salvador, helping a rural family to avoid certain death from drinking pesticides in their water supply.</span>
        </div>
        <span className="projects__info--mobile">
          We drilled a well in El Salvador, helping a rural family to avoid certain death from drinking pesticides in their water supply.
          <hr style={{marginTop: '2rem', marginBottom: '0'}}/>
        </span>
      </div>
    </section>
  </Layout>
);

export default ProjectsPage;
