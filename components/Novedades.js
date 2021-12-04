import React, { useEffect, useState } from "react";
import Image from 'next/image'

const Novedades = () => {
    const [posts, setPosts] = useState([]);
    const toText = (node) => {
        let tag = document.createElement("div");
        tag.innerHTML = node;
        node = tag.innerText;
        return node;
    };
    const shortenText = (text, startingPoint, maxLength) => {
        return text.length > maxLength
            ? text.slice(startingPoint, maxLength)
            : text;
    };
    const changeDay = (dayToChange) => {
        let date = new Date(dayToChange)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        if (month < 10) {
            return `${day}-0${month}-${year}`
        } else {
            return `${day}-${month}-${year}`
        }
    }
    useEffect(() => {
        let mounted = true;
        fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fernandomatiasdv"
        )
            .then((res) => res.json())
            .then((items) => {
                if (mounted) {
                    setPosts(items.items);
                    console.log(items.items)
                }
            });
        return () => (mounted = false);
    }, []);

    const postsFiltrado = posts.slice(0, 6);

    return (
        <div className="container">
            <h2 className="text-center text-title">Novedades</h2>
            <div className="row">
                {postsFiltrado.map((post, index) => (
                    <div key={index} className="col-12 col-lg-4">
                        <div className="card m-3">
                            <img src={post.thumbnail} className="card-img-top" alt="card-image" style={{ width: '100%', height: '15rem' }} />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text"> {"..." + shortenText(toText(post.content), 50, 200) + "..."}</p>
                                <p className="text-muted">{"Publicado el " + changeDay(post.pubDate)}</p>
                                <a href={post.guid} className="btn boton-slider mb-1">Leer más</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Novedades;