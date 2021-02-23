import styles from "../styles/components/Profile.module.css";

export function Profile(){
    return(
     <div className={styles.profileContainer}>
         <img src="https://avatars.githubusercontent.com/u/4684754?s=460&u=904b54d7509b0b2e8c39341036b8def6d147a2a3&v=4" alt="Eduardo Lira"/>
     <div>
         <strong>Eduardo Lira</strong>
         <p>
             <img src="icons/level.svg" alt="level"/>
             Level 1</p>
     </div>
     </div>
    )
}