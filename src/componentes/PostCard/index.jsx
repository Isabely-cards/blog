import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function PostCard({ post }) {

   return (

      <Link to={`/posts/${post.id}`}>
         <div className={styles.post}>
            <img
               className={styles.capa}
               src={`../../../public/assets/posts/${post.id}/capa.png`}
               alt="Imagem de capa do post"
            />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <button className={styles.botaoLer}>Ler</button>
         </div>
      </Link>

   )
}

export default PostCard