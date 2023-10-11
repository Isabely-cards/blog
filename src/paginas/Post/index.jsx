import { useParams } from 'react-router-dom'
import styles from './styles.module.css'

function Post() {
    const parametros = useParams()
    console.log(parametros)
    return (
        <h1>Post {parametros.id}</h1>
    )
}
export default Post