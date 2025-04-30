import React from "react";
import { Post } from "../types/post";

interface PostCardprops {
    post: Post;
}


const PostCard: React.FC<PostCardprops> = ({ post }) => {
    return (
        <div className="bg-black shadow-md rounded-lg p-">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <div className="text-red-400 "dangerouslySetInnerHTML={{ __html: post.Content }} />
            <p className="text-gray-500 mt-4">Autor: {post.author}</p>
            <p className="text-gray-500">Kategorie: {post.category}</p>
        </div>
    );
}
export default PostCard;