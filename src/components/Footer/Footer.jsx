import React from "react";

import {  Link } from 'react-router-dom';
import { SocialMediaListIcons } from "../../utils/SocialMediaListIcons/SocialMediaListIcons";
import styles from './Footer.module.css';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


export const Footer = () =>{
    const { t } = useTranslation();
    const navigate = useNavigate();
    const navigateToSection = (page,sectionId) => {
        
            navigate(page);
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }, 1000);
        
    };
    return <div className={`${styles.footer} container`}>
        <div className={`row ${styles.topSection}`}>
            <div className={`col-md-4 img ${styles.leftSection}`}>
                <img src="../../../assets/footer/486fbd73-90ab-40a8-98d8-f5b2095b19a21.png" className={styles.image}  />
            </div>
            <div className={`col-md-3  ${styles.middleSection}`}>
                <h1>Amira RABAH</h1>
                <h4>{t('footer.subtitle')}</h4>    
            </div>
            <div className={`${styles.rigthSection} col-md`}>
                <div className={`row`}>
                    
                    <div className={` col-md`}>
                        <h1>{t('footer.title')}</h1>
                    </div>
                </div>
                <div className={`row`}>
                    
                    <div className={` col-md`}>
                        <SocialMediaListIcons/>
                    </div>
                </div>
                <div className={`row ${styles.contactSection}`}>
                    <div className={`${styles.contactInfo} col-md`}>
                        <h4>{t('footer.mail')}</h4>
                        <a href="mailto:rbh.amira01@gmail.com">rbh.amira01@gmail.com</a>
                    </div>

                    <div className={`${styles.contactInfo} col-md`}>
                        <h4>{t('footer.tel')}</h4>
                        <a href="tel:+21628596016">(+216) 28 596 016</a>

                    </div>
                    
                </div>
            </div>
            
        </div>
        <div className={`row ${styles.bottomSection}`}>
            
            <div className={` col-md`}>
                <ul className={`${styles.menu} d-flex`}>
                        <li className={`${styles.listItem}`}>
                            <Link className={styles.title} to="/">{t('navbar.home')}</Link>
                        </li>
                        <li className={`${styles.listItem}`}>
                            <a 
                            href=""
                            onClick={(e) => navigateToSection("/about", '')}
                            >
                                {t('navbar.about')}
                            </a>
                        </li>
                        <li className={`${styles.listItem}`}>
                            <a 
                            href="#experience"
                            onClick={(e) => navigateToSection("/", 'experience')}
                            >
                                {t('navbar.experience')}
                            </a>
                        </li>
                        <li className={`${styles.listItem}`}>
                            <a 
                            href="#projects"
                            onClick={(e) => navigateToSection("/", 'projects')}
                            >
                                {t('navbar.projects')}
                            </a>
                        </li>
                        <li className={`${styles.listItem}`}>
                            <a 
                            href=""
                            onClick={(e) => navigateToSection("/contact", '')}
                            >
                                {t('navbar.contact')}
                            </a>
                        </li>
                </ul>
                    
            </div>
            <div className={`col-md ${styles.copyright}`}>
                <p>{t('footer.made')}</p>
            </div>
        </div>
        
    </div>
}