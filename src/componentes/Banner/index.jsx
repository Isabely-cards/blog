import styles from './styles.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minhaFoto.png'


function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Seja muito bem-vindo ao meu cantinho! Sou a Isabely, mas pode me chamar de Bel. Estou em busca do meu lugar como desenvolvedora de software e adoraria compartilhar essa jornada com você!
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto da Isabely"
                />
            </div>
        </div>

    )
}

export default Banner
