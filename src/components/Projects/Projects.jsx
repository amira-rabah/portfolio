import React from "react";

import styles from "./Projects.module.css";
import {SectionTitle} from "../../utils/SectionTitle/SectionTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faPhp, faAngular, faJava, faPython, faJs } from '@fortawesome/free-brands-svg-icons';
import { ScrollAnimation } from "../../utils/ScrollAnimation/ScrollAnimation";
import { useTranslation } from "react-i18next";

import project1photo from '../../../assets/projects/Screenshot_19-3-2025_74646_localhost1.jpeg'
import project2photo from '../../../assets/projects/ConsulterHome.jpeg'
import project4photo from '../../../assets/projects/Le-Parisien_page-0001.jpg'
import project3photo from '../../../assets/projects/creer compte.png'

export const Projects = () => {
    const {t} = useTranslation()
    return (
        <div className={`container ${styles.projects}`} id="projects">
            <ScrollAnimation>
            <SectionTitle text={t('projects.title')} />
            </ScrollAnimation>
            <ScrollAnimation>
            <div className="row justify-content-between">
                <div className="col col-lg-5">
                    <h1 className={styles.secondTitle}>{t('projects.secondTitle')}</h1>

                </div>
                <div className="col col-lg-6">
                    <div className={styles.projectCard}>
                        <div className={styles.tags}>
                            <div className={styles.tag}> {t('projects.tags.automation')}</div>
                            <div className={styles.tag}> {t('projects.tags.webdev')}</div>
                            <div className={styles.tag}>{t('projects.tags.summarizer')}</div>
                            <div className={styles.tag}>{t('projects.tags.ai')}</div>
                            
                        </div>
                        
                        <h2 className={styles.projectTitle}>
                            {t('projects.prj1.name.line1')} {t('projects.prj1.name.line2')}
                        </h2>
                        <div className={styles.technologies}>
                            <div className={styles.tech}><FontAwesomeIcon icon={faJs} />ExpressJS</div>
                            <div className={styles.tech}><FontAwesomeIcon icon={faPython} />FastAPI</div>
                            <div className={styles.tech}>mBART</div>
                            <div className={styles.tech}><FontAwesomeIcon icon={faDatabase}  />MongoDB</div>
                            <div className={styles.tech}><FontAwesomeIcon icon={faAngular} /></div>
                        </div>
                        <button className={`btn ${styles.exploreBtn}`}>Explore the project<FontAwesomeIcon icon={faAngleRight} /> </button>
                        <img src={project1photo} alt="" className={styles.projectPhoto} />
                        
                    </div>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation>
            <div className="row justify-content-between">
                <div className="col col-lg-6">
                    <div className={styles.projectCard}>
                        <div className={styles.tags}>
                            <div className={styles.tag}>{t('projects.tags.webdev')}</div>
                        </div>
                        
                        <h2 className={styles.projectTitle}>
                             {t('projects.prj2.name.line1')}
                             <br /> 
                             {t('projects.prj2.name.line2')}
                             <br />
                             {t('projects.prj2.name.line3')}
                        </h2>
                        <div className={styles.technologies}>
                            <div className={styles.tech}><FontAwesomeIcon icon={faAngular} /></div>
                            <div className={styles.tech}><FontAwesomeIcon icon={faJava} />SpringBoot</div>
                            <div className={styles.tech}><FontAwesomeIcon icon={faDatabase}  />PostreSQL</div>
                        </div>
                        <button className={`btn ${styles.exploreBtn}`}>Explore the project<FontAwesomeIcon icon={faAngleRight} /> </button>
                        <img src={project2photo} alt="" className={styles.projectPhoto} />
                        
                    </div>
                </div>
                <div className="col col-lg-6">
                    <div className={styles.projectCard}>
                        <div className={styles.tags}>
                            <div className={styles.tag}>{t('projects.tags.webdev')}</div>
                        </div>
                        
                        <h2 className={styles.projectTitle}>
                             {t('projects.prj3.name.line1')}
                             <br /> 
                             {t('projects.prj3.name.line2')}
                             <br />
                             {t('projects.prj3.name.line3')}
                        </h2>
                        <div className={styles.technologies}>
                            <div className={styles.tech}><FontAwesomeIcon icon={faPhp} /></div>
                            <div className={styles.tech}><FontAwesomeIcon icon={faAngular} /></div>
                            <div className={styles.tech}><FontAwesomeIcon icon={faDatabase}  />MySQL</div>
                        </div>
                        <button className={`btn ${styles.exploreBtn}`}>Explore the project<FontAwesomeIcon icon={faAngleRight} /> </button>
                        <img src={project3photo} alt="" className={styles.projectPhoto} />
                        
                    </div>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation>
            <div className="row justify-content-between">
                <div className="col col-lg-6">
                    <div className={styles.projectCard}>
                        <div className={styles.tags}>
                            <div className={styles.tag}>{t('projects.tags.ai')}</div>
                            <div className={styles.tag}>web scraping</div>
                        </div>
                        
                        <h2 className={styles.projectTitle}>
                             {t('projects.prj2.name.line1')}
                             <br /> 
                             {t('projects.prj4.name.line2')}
                             
                             {t('projects.prj4.name.line3')}
                        </h2>
                        <div className={styles.technologies}>
                            <div className={styles.tech}><FontAwesomeIcon icon={faPython} /></div>
                            <div className={styles.tech}>Beautiful Soup</div>
                            <div className={styles.tech}>Slenium</div>
                            <div className={styles.tech}>Tiny Llama</div>
                        </div>
                        <button className={`btn ${styles.exploreBtn}`}>Explore the project<FontAwesomeIcon icon={faAngleRight} /> </button>
                        <img src={project4photo} alt="" className={styles.projectPhoto} />
                        
                    </div>
                </div>
                
            </div>
            </ScrollAnimation>
        </div>
    );
};