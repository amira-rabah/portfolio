import React from "react";

import styles from "./Skills.module.css";
import {SectionTitle} from "../../utils/SectionTitle/SectionTitle"
import { ScrollAnimation } from "../../utils/ScrollAnimation/ScrollAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export const Skills =() =>{
    const { t } = useTranslation();
    return (
        <div className={`container ${styles.skills}`}>
            
            <ScrollAnimation>
            <SectionTitle text={t('skills')} />
            </ScrollAnimation>
            <ul className={styles.skillsList}>
                <li className={styles.skillsItem}>Java</li>
                <li className={styles.skillsItem}>Spring Boot</li>
                <li className={styles.skillsItem}>Angular</li>
                <li className={styles.skillsItem}>TS</li>
                <li className={styles.skillsItem}>JS</li>
                <li className={styles.skillsItem}>Bootstrap</li>
                <li className={styles.skillsItem}>ReactJs</li>
                <li className={styles.skillsItem}>ExpressJs</li>
                <li className={styles.skillsItem}>Ejs</li>
                <li className={styles.skillsItem}>Python</li>
                <li className={styles.skillsItem}>Streamlit</li>
                <li className={styles.skillsItem}>BeautifulSoup</li>
                <li className={styles.skillsItem}>Selenium</li>
                <li className={styles.skillsItem}>NumPy</li>
                <li className={styles.skillsItem}>FastAPI</li>
                <li className={styles.skillsItem}>SQL</li>
                <li className={styles.skillsItem}>PostgreSQL</li>
                <li className={styles.skillsItem}>MySQL</li>
                <li className={styles.skillsItem}>Oracle</li>
                <li className={styles.skillsItem}>MongoDB</li>
                <li className={styles.skillsItem}>Git</li>
                <li className={styles.skillsItem}>GitHub</li>
                <li className={styles.skillsItem}>Java</li>
                <li className={styles.skillsItem}>Spring Boot</li>
                <li className={styles.skillsItem}>Angular</li>
                <li className={styles.skillsItem}>TS</li>
                <li className={styles.skillsItem}>JS</li>
                <li className={styles.skillsItem}>Bootstrap</li>
                <li className={styles.skillsItem}>ReactJs</li>
                <li className={styles.skillsItem}>ExpressJs</li>
                <li className={styles.skillsItem}>Ejs</li>
                <li className={styles.skillsItem}>Python</li>
                <li className={styles.skillsItem}>Streamlit</li>
                <li className={styles.skillsItem}>BeautifulSoup</li>
                <li className={styles.skillsItem}>Selenium</li>
                <li className={styles.skillsItem}>NumPy</li>
                <li className={styles.skillsItem}>FastAPI</li>
                <li className={styles.skillsItem}>SQL</li>
                <li className={styles.skillsItem}>PostgreSQL</li>
                <li className={styles.skillsItem}>MySQL</li>
                <li className={styles.skillsItem}>Oracle</li>
                <li className={styles.skillsItem}>MongoDB</li>
                <li className={styles.skillsItem}>Git</li>
                <li className={styles.skillsItem}>GitHub</li>
            </ul>
        </div>
    );
}