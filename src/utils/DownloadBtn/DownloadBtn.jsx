import React from "react";

import styles from "./DownloadBtn.module.css";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";
import { Translation, useTranslation } from "react-i18next";
import cv from '../../../assets/hero/CV_Amira RABAH.pdf'

export const DownloadBtn =() =>{
    const {t} = useTranslation();
    return(
        <div >
            <ScrollAnimation>
                <a href={cv} download="CV_Amira RABAH" target="_blank" rel="noreferrer">
                <button className={styles.downloadBtn}>{t("hero.downloadBtn")}</button>
                </a>
            </ScrollAnimation>

        </div>
    )
}

