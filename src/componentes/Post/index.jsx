import styles from './styles.module.css';

function Post({ post }) {

   return (
      <div className={styles.post}>
         <img
            className={styles.capa}
            src={`/src/assets/posts${post.id}/capa.png`}
            alt="Imagem de capa do post"
         />

         <h2></h2>
      </div>
   )
}

export default Post