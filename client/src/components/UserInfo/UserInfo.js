import styles from '../../styles/UserInfo.module.css'

export default function UserInfo( {ip, location, timezone, isp} ){
    return(
        <div className={styles.userInfo}>
            <h6 className={styles.userInfoSmallHeading}>IP ADDRESS</h6>
            <h3 className={styles.UserInfoBigHeading}>{ip && ip}</h3>
            <h6 className={styles.userInfoSmallHeading}>LOCATION</h6>
            <h3 className={styles.UserInfoBigHeading}>{location && location}</h3>
            <h6 className={styles.userInfoSmallHeading}>timezone</h6>
            <h3 className={styles.UserInfoBigHeading}>{timezone && timezone}</h3>
            <h6 className={styles.userInfoSmallHeading}>ISP</h6>
            <h3 className={styles.UserInfoBigHeading}>{isp && isp}</h3>
        </div>
    )
  }