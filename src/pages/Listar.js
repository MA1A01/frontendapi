import React from 'react';
import { Link } from 'react-router-dom';
import postsService from '../../services/posts.service';
import './post-listar.page.css';

class Listar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // Atributo para armazenar o array de posts vindos da API.
            listar: [],
        }
    }

    // Função que é executada assim que o componente carrega.
    componentDidMount() {
        this.loadPosts()
    }

    // Função responsável por chamar o serviço e carregar os posts.
    async loadPosts() {
        try {
            let res = await postsService.list()
            this.setState({ listar: res.data.data })
        } catch (error) {
            console.log(error);
            alert("Não foi possível listar os posts.")
        }
    }

    render() {

        return (
            <div className="container">

                <div className="page-top">
                    <div className="page-top__title">
                        <h2>Posts</h2>
                        <p>Listagem dos posts</p>
                    </div>
                    <div className="page-top__aside">
                        <button className="btn btn-primary" onClick={() => this.props.history.push('/post-add')}>
                            Adicionar
                        </button>
                    </div>
                </div>

                
                {this.state.posts.map(post => (
                    <Link to={"/post-detail/" + post.id} key={post.id}>
                        <div className="post-card">
                            <div className="post-card__img">
                                <img src={post.imageUrl}/>
                            </div>
                            <div className="post-card__text">
                                <h4>{post.title}</h4>
                                <p>{post.content}</p>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        )
    }

}

export default Listar;