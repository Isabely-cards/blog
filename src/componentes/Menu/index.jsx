import styles from './styles.module.css'
import MenuLink from '../MenuLink'

function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>
                    Inicío
                </MenuLink>
                <MenuLink to='/sobremim'>
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu