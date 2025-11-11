import React, { useRef  , useState} from "react";

import styles from "./Contact.module.css";

import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {ScrollAnimation} from '../../utils/ScrollAnimation/ScrollAnimation'
import { useTranslation } from "react-i18next";

const SERVICE_KEY = "service_jfvgoab"
const TEMPLATE_KEY = "template_z4w10kw"
const PUBLIC_KEY = "QEKRvGA9-7b3wfAvN"

export const  Contact = () => {
    const { t } = useTranslation();

    const [formData , setFormData] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })
    
    const [status, setStatus] = useState("")

    const ifChanged =(e)=>{
        setFormData({
            ...formData, 
            [e.target.name] : e.target.value
        })
    }

    const sendEmail = (e) => {
        setStatus("SENDING...")
        e.preventDefault();

        emailjs
        .send( SERVICE_KEY , 
            TEMPLATE_KEY ,
            {
                name : formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            },
            PUBLIC_KEY
        )
        .then((result) => {
            console.log("success : ",result.text);
            setStatus("Message sent successfully!")
            setFormData({
                name:'',
                email:'',
                subject:'',
                message:''
            })
        })
        .catch((error)=>{
            console.log("error : ", error.text);
            setStatus('Sorry but there is a problem, please try again.')

        })
    }

    return (
        <div className={`${styles.contact} container`}> 
            
            <div className={`row`}>
                <div className={`col-lg-5`}>
                    <ScrollAnimation>
                    <h1 className={styles.title}>{t('contact.title')}</h1>
                    <p className={styles.text}>{t('contact.subtitle')}</p>
                    </ScrollAnimation>
                </div>  
                <div className={`${styles.formSection} col-lg-6 `}>
                    <form onSubmit={sendEmail} className={`${styles.form } `}>
                        <ScrollAnimation>
                        <div className="form-group">
                            <input type="text"  name="name" className={`form-control ${styles.inputField}`} placeholder={t('contact.namePlaceholder')} required onChange={ifChanged}/>
                            <div className={`invalid-feedback`}>
                                {t('contact.nameError')}
                            </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation>
                        <div className="form-group">
                            <input type="email"  name="email" className={`form-control ${styles.inputField}`} placeholder={t('contact.emailPlaceholder')} required  onChange={ifChanged}/>
                            <div className={`invalid-feedback`}>
                                {t('contact.emailError')}
                            </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation>
                        <div className="form-group">
                            <input type="text"  name="subject" className={`form-control ${styles.inputField}`} placeholder={t('contact.subjectPlaceholder')} required  onChange={ifChanged}/>
                            <div className={`invalid-feedback`}>
                                {t('contact.subjectError')}
                            </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation>
                        <div className="form-group">
                            <textarea name="message" className={`form-control ${styles.inputField}`} placeholder={t('contact.messagePlaceholder')} required  onChange={ifChanged}></textarea>
                            <div className={`invalid-feedback`}>
                                {t('contact.messageError')}
                            </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation>
                        <button type="submit" className={styles.contactBtn} >{t('contact.sendBtn')} <FontAwesomeIcon icon={faAngleRight} /></button>
                        </ScrollAnimation>
                        <p className={styles.status}>{status}</p>
                    </form>
                </div>
            </div>
            
        </div>
    );
}