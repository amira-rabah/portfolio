import React  from "react"

import { Experience } from "../Experience/Experience";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
import {SocialMediaListIcons} from "../../utils/SocialMediaListIcons/SocialMediaListIcons"
import {ScrollAnimation} from "../../utils/ScrollAnimation/ScrollAnimation"

import TypingAnimator from 'react-typing-animator';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Hero.module.css"
import '../../../src/vars.css'
import { Translation, useTranslation } from "react-i18next";

export const Hero = () => {
    const { t } = useTranslation()
    const textArray = ["FullStack developer", "Web developer","Member of CodexJe", "Project manager" ,"Junior developer", "IBM certified", "Frontend developer", "Backend developer"];
    return (
    <div className= {`container`}>
    <div className={styles.hero}>
        <div className={styles.leftContent}> 
            
            <div className={styles.title}>{t("hero.title")} 
                <TypingAnimator
                    
                    textArray={textArray}
                    cursorColor="#00b4d8"
                    textColor="#00b4d8c3"
                    fontSize="72px"
                    fontweight="700"
                    typingSpeed={120}
                    delaySpeed={1000}
                    height={'72px'}
                    loop={true}
                    backspace
                    style={{ 
                        fontweight:700,
                        marginBottom: '20px',
                        

                    }}
                    className={styles.typing}
                    
                />
            </div>
            
        </div>
        <img className={styles.image} src="../../../assets/footer/486fbd73-90ab-40a8-98d8-f5b2095b19a21.png" alt="" />
        <div className={styles.rigthContent} >
            <ScrollAnimation>
            <div className={`${styles.part}`}>
                <h3>{t("hero.about")} </h3>
                <span></span>
                <p>
                    {t("hero.aboutText")}
                </p>
            </div>
            </ScrollAnimation> 
            <ScrollAnimation>
            <div className={styles.part}>
                <h3>{t("hero.eductaion")} </h3>
                <span></span>
                <p>{t("hero.educationText")}</p>
            </div>
            </ScrollAnimation>
            <ScrollAnimation>
            <div className={styles.part}>
                <h3>{t("hero.follow")} </h3>
                <span></span>
                <SocialMediaListIcons/>
            </div>
            </ScrollAnimation>
        </div>
    </div>
    <Skills />
    <Experience/>
    <Projects/>
    </div>
    )
}