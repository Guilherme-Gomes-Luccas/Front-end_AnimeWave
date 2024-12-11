"use client";

import { Post } from "@/app/home/page";
import PostCard, { PostCardProps } from "../PostCard";
import { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState<Array<PostCardProps>>([]);

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:3001/get-posts", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error fetching posts: ${response.status}`);
      }

      const postData: Post[] = await response.json();

      const postsTemp = postData.map((post) => ({
        id: post.public_id,
        avatar: post.user_photo,
        username: post.username,
        content: post.content,
        hashtags: post.hashtags,
      }));

      setPosts(postsTemp);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []); // Dependências vazias para executar apenas uma vez no mount.

  return (
    <div className="h-screen w-[45%] bg-blue-950 p-3">
      <h1 className="mt-10 text-white text-2xl font-bold">
        Veja outras publicações
      </h1>
      <div className="mt-10 w-full h-[80%] overflow-auto p-3">
        {posts.map((post) => (
          <PostCard
            key={post.id} // Use `id` como key, que é único.
            id={post.id}
            avatar={post.avatar}
            username={post.username}
            content={post.content}
            hashtags={post.hashtags}
            width={100}
          />
        ))}
      </div>
    </div>
  );
}
