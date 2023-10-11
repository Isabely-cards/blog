import { Route, Routes, useParams } from 'react-router-dom'
import './styles.css'
import posts from '../../json/posts.json'
import PostModelo from '../../componentes/PostModelo'
import ReactMarkdown from 'react-markdown'
import NãoEncontrado from '../../paginas/NãoEncontrado'
import PaginaPadrao from '../../componentes/PaginaPadrao'

function Post() {
    const parametros = useParams()
    console.log(parametros)

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NãoEncontrado />
    }
    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo titulo={post.titulo} fotoCapa={`../../../public/assets/posts/${post.id}/capa.png`}>
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                    </PostModelo>} />
            </Route>
        </Routes>
    )
}
export default Post