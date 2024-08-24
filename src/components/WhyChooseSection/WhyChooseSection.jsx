import styles from './WhyChooseSection.module.css';
import { FaCheck } from "react-icons/fa";


function WhyChooseSection() {
    return (
        <>
            <h1 className={styles.Title}>Why <span className={styles.SpanTitle}>Choose</span> Us ?</h1>
            <div className={styles.container_all}>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img className={styles.ImgSistema} src="/src/assets/Sistema.png" alt="" />
                        <img className={styles.ImgInvest} src="/src/assets/Invest.png" alt="" />
                    </div>
                    <div className={styles.container_Choose}>
                        <p> className={TaskAutomation} <FaCheck style={{ color: 'green' }} /> Task Automation </p>
                        <p> className={AccuracyandReliability} <FaCheck style={{ color: 'green' }} /> Accuracy and Reliability </p>
                        <p> className={DataSecurity} <FaCheck style={{ color: 'green' }} /> Data Security </p>
                        <p> className={Excelintegration} <FaCheck style={{ color: 'green' }} /> Excel integration </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseSection;
