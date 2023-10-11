import PostModelo from '../../componentes/PostModelo'
import styles from './styles.module.css'
import fotoCapa from '../../assets/sobre_mim.png'
import fotoSobreMim from '../../assets/sobre_mim_foto.jpeg'
function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>Olá, eu sou a Isabely!</h3>
            <img
                src={fotoSobreMim}
                alt="Foto da Isabely sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Olá, tudo bem? Sou a Isabely!

            </p>
            <p className={styles.paragrafo}>
                Minha incrível jornada na programação teve início quando dei os primeiros passos na faculdade de Sistemas de Informação. Foi nesse ambiente acadêmico que descobri minha paixão e comecei a construir uma base sólida de conhecimento na área da tecnologia.
            </p>
            <p className={styles.paragrafo}>
                Em minha família, sou a referência quando se trata de lidar com desafios tecnológicos ou criar belos banners e materiais gráficos. Sempre me destaquei pela habilidade natural e facilidade com que interajo com as mais diversas tecnologias. Foi essa conexão especial que me impulsionou a tomar a decisão de seguir uma carreira empolgante no campo da Tecnologia da Informação (TI).
            </p>
            <p className={styles.paragrafo}>
                Desde então, tenho mergulhado de cabeça em projetos empolgantes, adquirido novas habilidades e enfrentado desafios emocionantes. A cada dia, estou mais apaixonada pela programação e pela forma como ela molda o mundo ao nosso redor.
            </p>
            <p className={styles.paragrafo}>
                Mal posso esperar para ver onde essa jornada me levará a seguir e estou ansiosa para aprender ainda mais e contribuir para o universo em constante evolução da tecnologia.
            </p>


        </PostModelo>
    )
}
export default SobreMim