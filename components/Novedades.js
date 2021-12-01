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
    const elementsFromArray= (array, number)=>{
        return array.slice(0, number)
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
    return (
        <div className="container">
            <h2 className="text-center text-title">Novedades</h2>
            <div className="d-flex flex-wrap">
                <div className="row">
                    {elementsFromArray(posts, 4).map((post, index) => (
                        <div key={index} className="card m-3 col-12 col-md-5">
                            <img src={post.thumbnail} className="card-img-top mt-3" alt="card-image"  />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text"> {"..." + shortenText(toText(post.content), 60, 300) + "..."}</p>
                                <p className="text-muted">{"Publicado el " + changeDay(post.pubDate)}</p>
                                <a href={post.guid} className="btn boton-slider mb-1">Leer más</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Novedades
