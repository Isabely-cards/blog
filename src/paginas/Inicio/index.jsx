import Banner from '../../componentes/Banner'
import styles from './styles.module.css'
import posts from '../../json/posts.json'
import Post from '../../componentes/Post'

function Inicio() {
    return (
        <section>
            <Banner />
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>

        </section>

    )
}
export default Inicio