"use client";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";

const LikeButton = (props) => {
    const [likes, setLikes] = useState(0);
    return (
    <button onClick={() => setLikes(likes + 1)}>
        <AiOutlineLike /> {props.label} {likes > 1 ? "5" : ""} {likes}
        </button>
        );
    };

    export default LikeButton;