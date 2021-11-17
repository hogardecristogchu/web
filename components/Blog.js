import React, { useEffect, useState } from "react";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let mounted = true;
        fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lourdeslunaweb"
        )
            .then((res) => res.json())
            .then((items) => {
                if (mounted) {
                    const res = items.items.filter((item) => item.categories.length > 0);
                    setPosts(res);
                    console.log("items de medium", items)
                }
            });
        return () => (mounted = false);
    }, []);
    return (
        <>
            <h2 className="text-center text-title">{posts.length}</h2>
            
            {posts.map((post, index) => (
                <div key={index} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.content}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" className="btn boton-slider">Leer más...</a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Blog
