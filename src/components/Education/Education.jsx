import React from "react";

import styles from "./Education.module.css"
import {SectionTitle} from "../../utils/SectionTitle/SectionTitle"
import { ScrollAnimation } from "../../utils/ScrollAnimation/ScrollAnimation";
import { useTranslation } from "react-i18next";

export const Education = () =>{
    const { t } = useTranslation();
    return (
        <div className={`container ${styles.education}` }>
            <ScrollAnimation>
            <SectionTitle text={t('education.title')} />
            </ScrollAnimation>
            <ScrollAnimation>   
            <div className={`row ${styles.details}`}>
                <div className={`col-md-6 ${styles.borderRigth} ${styles.sectionDetail}`}>
                    <p className={styles.date}>{t('education.school1.duration')}</p>
                    <h2 className={styles.title}>{t('education.school1.degree')} </h2>
                    <h3 className={styles.institute}><a href="http://www.isi.rnu.tn/institut/presentation/" target="_blank">{t('education.school1.institution')}</a></h3>
                </div>
                <div className={`col-md-6 ${styles.sectionDetail}` }>
                    <p className={styles.date}>{t('education.school2.duration')}</p>
                    <h2 className={styles.title}>{t('education.school2.degree')}</h2>
                    <h3 className={styles.institute}><a href="http://www.istic.rnu.tn/fr/" target="_blank">{t('education.school2.institution')}</a></h3>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation>
            <div className={`row ${styles.borderTop} ${styles.details}`}>
                <div className={`col-md-6 ${styles.borderRigth} ${styles.sectionDetail}`}>
                    <p className={styles.date}>{t('education.school3.duration')}</p>
                    <h2 className={styles.title}>{t('education.school3.degree')}</h2>
                    <h3 className={styles.institute}>{t('education.school3.institution')}</h3>
                    <a className={styles.license} href="http://www.credly.com/badges/c1a3b5dd-adce-49be-bb6e-8fc635f4af4f/public_url" target="_blank">{t('education.school3.liscence')} &#8594;</a>
                </div>
                <div className={`col-md-6  ${styles.sectionDetail}` }>
                    <p className={styles.date}>{t('education.school4.duration')}</p>
                    <h2 className={styles.title}>{t('education.school4.degree')}</h2>
                    <h3 className={styles.institute}>{t('education.school4.institution')}</h3>
                </div>
            </div>
            </ScrollAnimation>
        </div>
    );
}