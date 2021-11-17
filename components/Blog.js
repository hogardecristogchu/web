import React, { useEffect, useState } from "react";

const Blog = () => {
    const [posts, setPosts] = useState([]);
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
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lourdeslunaweb"
        )
            .then((res) => res.json())
            .then((items) => {
                if (mounted) {
                    setPosts(items.items);
                }
            });
        return () => (mounted = false);
    }, []);
    return (
        <>
            <h2 className="text-center text-title">Blog</h2>

            {posts.map((post, index) => (
                <div key={index} className="card m-3">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{shortenText(post.content, 4, 40) + "..."}</p>
                        <p className="card-text"><small className="text-muted">{changeDay(post.pubDate)}</small></p>
                        <a href={post.guid} className="btn boton-slider" rel="noreferrer" target="_blank">Leer más...</a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Blog
