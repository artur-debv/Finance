import styles from './WhyChooseSection.module.css';
import { FaCheck } from "react-icons/fa";
import sistema from "../../assets/sistema.png";
import invest from "../../assets/invest.png";


function WhyChooseSection() {
    return (
        <>
            <h1 className={styles.Title}>Why <span className={styles.SpanTitle}>Choose</span> Us ?</h1>
            <div className={styles.container_all}>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                    <img className={styles.ImgSistema} src={sistema}  alt="Sistema" />
                    <img className={styles.ImgInvest}  src={invest} alt="Invest" />
                    </div>
                    <div className={styles.container_Choose}>
                        <p> <FaCheck style={{ color: 'green' }} /> Task Automation </p>
                        <p> <FaCheck style={{ color: 'green' }} /> Accuracy and Reliability </p>
                        <p> <FaCheck style={{ color: 'green' }} /> Data Security </p>
                        <p> <FaCheck style={{ color: 'green' }} /> Excel integration </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseSection;
