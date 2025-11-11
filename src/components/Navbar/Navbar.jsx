import React, {useState} from "react";
import {  Link } from 'react-router-dom';

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils"
import  {LangBtn}  from "../../utils/LangBtn/LangBtn"
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";


export const Navbar = ({currentLang, setCurrentLang}) => {

    const [menuOpen , setMenuOpen] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const { t}= useTranslation()


    const navigateToSection = (page,sectionId) => {
        
            navigate(page);
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }, 1000);
        
    };

    return<nav>
        <div className={styles.LangBtn}><LangBtn currentLang={currentLang} setCurrentLang={setCurrentLang}/></div>
        
        <div className={styles.navbar}>
        
        
        <Link className={styles.title} to="/">{t('navbar.home')}</Link>
        
        <img 
        className={styles.menuBtn} 
        src={menuOpen 
            ? '../../../assets/navbar/closeIcon.png'  
            : '../../../assets/navbar/menuIcon.png'} 
        alt="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
        />
        <div className={styles.menu}>
            <ul 
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
            >
                
                <li>
                    
                    <a 
                    href="about"
                    onClick={(e) => navigateToSection("/about", '')}
                    >
                    {t('navbar.about')}
                    </a>
                </li>
                <li>
                    <a 
                    href="#experience"
                    onClick={(e) => navigateToSection("/", 'experience')}
                    >
                    {t('navbar.experience')}
                    </a>
                </li>
                <li>
                    <a 
                    href="#projects"
                    onClick={(e) => navigateToSection("/", 'projects')}
                    >
                    {t('navbar.projects')}
                    </a>
                </li>
                <li>
                    <a 
                    href="contact"
                    onClick={(e) => navigateToSection("contact", '')}
                    >
                    {t('navbar.contact')}
                    </a>
                </li>
                <li className={styles.LangBtnInMenu}>
                    <LangBtn currentLang={currentLang} setCurrentLang={setCurrentLang}/>
                </li>
            </ul>
            
        </div>
        </div>  
        
    </nav>
}