import React from 'react';

class NewsPreview extends React.Component {
    render() {
        return (
            <section className="news_preview">
                <img alt="Imagen de la noticia" src="https://i.imgur.com/Pa5j9VS.png" />
                <div>
                    <h2>
                        Un nuevo comienzo
                    </h2>
                    <p>
                        Bobba abre sus puertas una vez más para ti, ¿estás preparado?
                    </p>
                    <a href="/articles/6-oleadas-publicitarias">Leer más.</a>
                </div>
            </section>
        );
    }
}

export default NewsPreview;