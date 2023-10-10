import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.css'
import { Children } from 'react'

function MenuLink({children, to}) {
    const localizacao = useLocation()
    return (
        <Link to={to}
            className={`    
                    ${styles.link} 
                    ${localizacao.pathname === to ? styles.linkDestacado : ''}
                `
            }> 
            {children}
        </Link>
    )
}

export default MenuLink