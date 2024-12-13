import React, { useEffect, useState } from "react";
import { db } from '../../utils/firebase';
import "./ArtShop.css";

function ArtShop() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPostsFromFirebase = [];
        const subscriber = db
            .collection("shop")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    getPostsFromFirebase.push({
                        ...doc.data(), //spread operator
                        key: doc.id, // `id` given to us by Firebase
                    });
                });
                setPosts(getPostsFromFirebase);
                setLoading(false);
            });

        // return cleanup function
        return () => subscriber();
    }, [loading]);

    if (loading) {
        return <h1>loading firebase data...</h1>;
    }
    return (
        <div class="container mt-4 mb-4">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4 justify-content-center mt-2">
                {posts.length > 0 ? (
                    posts.map((post) =>
                        <div class="col">
                            <div class="card border-danger">
                                <div class="card-img-top">
                                    <img src={post.image} alt="" class="mt-2" />
                                </div>
                                <div class="card-body text-center py-4">
                                    <div class="fw-bold">{post.nameOfProduct}</div>
                                    <div class="fw-bold">By: {post.artistName}</div>
                                    {post.price}
                                    <div class="mt-3">
                                        <a href={post.key} class="btn btn-primary">View Options</a>
                                    </div>
                                </div>
                            </div>
                        </div>)
                ) : (
                    <h1>no answers yet :(</h1>
                )}
            </div>
        </div>
    )
}

export default ArtShop