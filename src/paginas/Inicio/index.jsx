import styles from './styles.module.css'
import posts from '../../json/posts.json'
import Post from '../../componentes/PostCard'

function Inicio() {
    return (
        <div>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>
        </div>

    )
}
export default Inicio