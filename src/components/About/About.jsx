import React from "react";

import styles from "./About.module.css";

import { Skills } from "../Skills/Skills";
import { Education } from "../Education/Education";
import { ScrollAnimation } from "../../utils/ScrollAnimation/ScrollAnimation";
import { useTranslation } from "react-i18next";

export const About =()=>{
    const { t } = useTranslation();
    return(
        <div className={`${styles.page} container`}>
            <ScrollAnimation>
            <div className={`${styles.about} `}>
                <div className={styles.imageSection}>
                    <img src="../../../assets/hero/7b-removebg-preview.png" alt="" />

                </div>
                <div className={styles.textSection}>
                    <span className={styles.line}></span>
                    <h1>{t('about.title')} <br />{t('about.title2')}</h1>
                    <p>{t('about.text')}</p>
                </div>
        
            </div>
            </ScrollAnimation>
            <br /> <br /> <br />
            <Skills/>
            <br />
            <Education />
           
        </div>
        
    )
}