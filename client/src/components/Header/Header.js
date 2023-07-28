import styles from '../../styles/Header.module.css'
import UserInfo from '../UserInfo/UserInfo'

export default function Header({ ip, location, timezone, isp }){
    return(
        <header className={styles.trackerHeader}>
            <h1 className={styles.trackerH1}>IP Address Tracker</h1>
            <div className={styles.inputWrapper}>
                <input type="text" id={styles.ip} name="ip" placeholder={ip && ip}/>
            </div>
            <UserInfo 
                ip={ip}
                location={location}
                timezone={timezone}
                isp={isp} />
        </header>
    )
  }