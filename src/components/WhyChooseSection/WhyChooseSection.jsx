
import styles from './WhyChooseSection.module.css';
import Sistema from '../../assets/sistema.png';
import Invest from '../../assets/Invest.png';

function WhyChooseSection() {
    return (
        <>
            <h1 className={styles.Title}>Why <span className={styles.SpanTitle}>Choose</span> Us ?</h1>
            <div className={styles.container_all}>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img className={styles.ImgSistema} src={Sistema} alt="" />
                        <img className={styles.ImgInvest} src={Invest} alt="" />
                    </div>
                    <div className={styles.container_Choose}>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseSection

