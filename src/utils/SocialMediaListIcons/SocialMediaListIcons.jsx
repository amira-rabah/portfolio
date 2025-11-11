import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import styles from './SocialMediaListIcons.module.css'

export const SocialMediaListIcons = () =>{
    return (
        <div className={styles.socialMediaIcons}>
            <a target="_blank" href="https://www.linkedin.com/in/amira-rabah01"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
            <a target="_blank" href="https://github.com/amira-rabah"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
            <a target="_blank" href="https://www.instagram.com/rabah.amira/"><FontAwesomeIcon icon={faInstagram} size="3x" /></a>
            <a target="_blank" href="https://www.facebook.com/amira.rabah.2025"><FontAwesomeIcon icon={faFacebook} size="3x" /></a>
        </div>
    );
}