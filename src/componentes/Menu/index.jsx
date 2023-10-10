import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.css'


function Menu() {
    const localizacao = useLocation()
    console.log(localizacao)
    return (
        <header>
            <nav className={styles.navegacao}>
                <Link to="/"
                    className={`    
                        ${styles.link} 
                        ${localizacao.pathname === '/' ? styles.linkDestacado : ''}`
                    }> Inicío</Link>
                <Link to="/sobremim" className={`    
                        ${styles.link} 
                        ${localizacao.pathname === '/sobremim' ? styles.linkDestacado : ''}`
                }>Sobre mim</Link>
            </nav>
        </header>
    )
}

export default Menu