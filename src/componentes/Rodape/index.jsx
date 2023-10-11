import styles from './styles.module.css';
import MarcaRegistrada  from '../../assets/marca_registrada.png'

function Rodape() {

   return (
      <footer className={styles.rodape}>
         <img
            src={MarcaRegistrada}
            alt="Marca Registrada"
         />
         Desenvolvido por Isabely.
      </footer>
   )
}

export default Rodape