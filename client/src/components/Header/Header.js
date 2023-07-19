import styles from '../../styles/Header.module.css'

export default function Header(){
    return(
        <header className={styles.trackerHeader}>
            <h1 className={styles.trackerH1}>IP Address Tracker</h1>
            <div className={styles.inputWrapper}>
                <input type="text" id={styles.ip} name="ip"/>
            </div>
            
        </header>
    )
  }