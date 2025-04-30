import { Post } from "../types/post";

export const samplePosts: Post[] = [
    {
        id: 1,
        title: "Mein erster Next.js Blogbeitrag mit TypesScript",
        Content: "<p> Hallo Welt! </p>",
        author: "Alex",
        date: "27-10-2023",
        category: "Webentwicklung"
    },
    {
        id: 2,
        title: "Mein zweiter Next.js Blogbeitrag mit TypesScript",
        Content: "<p> Hallo Welt! </p>",    
        author: "Alex",
        date: "27-10-2023",
        category: "Webentwicklung"
    }
];

export const getPosts = async (): Promise<Post[]> => {

    await new Promise((resolve) => setTimeout(resolve, 100));
    return samplePosts;

};


