import React from 'react';

class IndexTeaser extends React.Component {
    render() {
        return (
            <section className="news_preview">
                <img alt="Bienvenido a Bobba" src="/web-gallery/images/habbos.gif" />
                <div>
                    <h2>
                        ¡Haz amigos y únete a la diversión!
                    </h2>
                    <p>
                        Estás a punto de entrar a un lugar increíble, donde compartirás nuevas experiencias mientras
                        conocerás
                        nuevas personas de todas partes. Veas donde lo veas... ¡La diversión nunca acaba!
                    </p>

                    <button>
                        ¡Regístrate!
                    </button>
                </div>
            </section>
        );
    }
}

export default IndexTeaser;