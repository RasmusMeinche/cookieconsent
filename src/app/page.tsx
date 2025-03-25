import Image from "next/image";
import LikeButton from "./components/Likebutton";

export default function Home() {
  return (
  <div>
    <LikeButton label="like" />
    <LikeButton label="dislike" />
  </div>
  );
}
