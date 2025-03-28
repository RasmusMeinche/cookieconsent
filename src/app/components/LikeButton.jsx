"use client";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";

const LikeButton = (props) => {
    const [likes, setLikes] = useState(0);
    return (
    <button onClick={() => setLikes(likes + 1)}>
        <AiFillLike /> {props.label}
        {likes > 1 ? "s" : ""} {likes}

        </button>
        );
    };

    export default LikeButton;