import React from "react";

import { ScrollAnimation } from "../../utils/ScrollAnimation/ScrollAnimation";
import {SectionTitle} from "../../utils/SectionTitle/SectionTitle"
import styles from "./Experience.module.css";
import prologicLogo from '../../../assets/experience/1718036764482-removebg-preview.png'
import ticopLogo from '../../../assets/experience/LOGO-TICOP.png'
import codexjeLogo from '../../../assets/experience/codex_junior_entreprise_logo.jpg'
import { useTranslation } from "react-i18next";
 
export const Experience = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.exp} id="experience">
            <ScrollAnimation>
            <SectionTitle text={t('experience.title')} />
            <div className={`table-responsive `}>
            <table className={`table align-middle ${styles.table}`}>
                <tr>
                    <td ><a href="https://codexje.com/" target="_blank"><img className={styles.companyLogo} src={codexjeLogo} alt="CodexJe" /></a></td>
                    <td className={styles.position}>
                        <span className={styles.positionTitle}>{t('experience.exp0.role')}</span><br />
                        <p>{t('experience.exp0.description')}</p>
                    </td>
                
                    <td className={styles.date}>{t('experience.exp1.duration')}</td>
                    
                </tr>
                <tr>
                    <td ><a href="https://www.prologic.com.tn/" target="_blank"><img className={styles.companyLogo} src={prologicLogo} alt="PROLOGIC" /></a></td>
                    <td className={styles.position}>
                        <span className={styles.positionTitle}>{t('experience.exp1.role')}</span><br />
                        <p>{t('experience.exp1.description')}</p>
                    </td>
                
                    <td className={styles.date}>{t('experience.exp1.duration')}</td>
                    
                </tr>
                <tr>
                    <td ><a href="https://tic-op.com/" target="_blank"><img className={styles.companyLogo} src={ticopLogo} alt="TICOP" /></a></td>
                    <td className={styles.position}>
                        <span className={styles.positionTitle}>{t('experience.exp2.role')}</span><br />
                        <p>{t('experience.exp2.description')}</p>
                    </td>
                
                    <td className={styles.date}>{t('experience.exp2.duration')}</td>
                    
                </tr>
                    
            </table>
            </div>
            </ScrollAnimation>
        </div>
    );
}