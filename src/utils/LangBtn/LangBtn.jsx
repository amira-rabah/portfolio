import React from "react";
import { changeLanguage } from "i18next";

import styles from "./LangBtn.module.css"

export const LangBtn = ({currentLang , setCurrentLang} ) => {
    return (
        <div className={styles.langBtn}>
            <div className={`dropdown`}>
                <button className={`btn btn-secondary dropdown-toggle ${styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {currentLang === "en" ? "EN" : "FR"}
                </button>

                <ul className={` dropdown-menu dropdown-menu-dark`} aria-labelledby="Dropdown">
                    <li className={styles.option}>
                        <a 
                        className={`dropdown-item`} 
                        onClick={(e) => {
                            
                            changeLanguage("en")
                            setCurrentLang("en")
                            console.log("Language changed to English")
                        }}
                        >
                             English 
                        </a>
                    </li>
                    <li><hr className={`dropdown-divider`} /></li>
                    
                    <li className={styles.option}>
                        <a 
                        className={`dropdown-item`} 
                        onClick={(e)=>{
                            
                            changeLanguage("fr")
                            setCurrentLang("fr")
                            console.log("Language changed to French")
                        }}
                        >
                            Français
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}