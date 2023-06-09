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
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@comunicaciongchu"
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
                            <div className="bloque-img"><img src={post.thumbnail} className="card-img-top" alt="card-image" /></div>
                            <div className="card-body">
                                <h5 className="h5-movil card-title">{post.title}</h5>
                                <p className="card-text"> {"..." + shortenText(toText(post.content), 50, 200) + "..."}</p>
                                <p className="text-muted">{"Publicado el " + changeDay(post.pubDate)}</p>
                                <a href={post.guid} rel="noreferrer" target="_blank" className="btn a-movil boton-slider mb-1">LEER MÁS</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Novedades;