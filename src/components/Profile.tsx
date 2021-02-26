import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { BsToggleOff } from 'react-icons/bs';
import { BsToggleOn } from 'react-icons/bs';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile () {
    const { toggleTheme, currentTheme } = useContext(ThemeContext);
    const { level } = useContext(ChallengesContext)


    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/caiov13.png" alt="Caio Vinicius"/>
            <div>
                <strong>Caio Vinicius</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
            <div className={styles.switcherTheme}> {currentTheme === 'theme-dark' ? <BsToggleOn onClick={toggleTheme} /> : <BsToggleOff color="#2E384D" onClick={toggleTheme} />} </div>
        </div>
    )
}