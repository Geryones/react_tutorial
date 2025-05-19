import cookiePic from '../../assets/cookie.png'
import styles from './Card.module.css'

function Card() {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={cookiePic} alt="card picture"></img>
            <h2 className={styles.cardTitle}>My CardTitle</h2>
            <p className={styles.cardText}>Some random stuff... this is the description</p>
        </div>
    );
}

export default Card