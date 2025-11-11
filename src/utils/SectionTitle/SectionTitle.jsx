import React from "react";

import styles from './SectionTitle.module.css' 

export const SectionTitle =({text})=>{
    return <h3 className={styles.firstTitle}><span>/</span> {text}</h3>
}