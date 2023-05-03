"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Category, Post } from "@/app/lib/types";

type NavbarContextValue = {
  categories: Category[];
  posts: Post[];
  loading?: boolean;
  error?: string | null;
};

export const BlogContext = createContext<NavbarContextValue>({
  categories: [],
  posts: [],
});

type NavbarContextProviderProps = {
  children: React.ReactNode;
};

export const BlogContextProvider = ({
  children,
}: NavbarContextProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([
        fetch("/api/blog/categories")
          .then((res) => res.json())
          .then((data) => {
            setCategories(data);
          }),
        fetch("/api/blog/all")
          .then((res) => res.json())
          .then((data) => {
            setPosts(data.body);
          }),
      ]).catch((err) => {
        setError(err.message);
      });
      setLoading(false);
    };

    fetchData();
  }, []);

  const contextValue: NavbarContextValue = {
    categories,
    posts,
    loading,
    error,
  };

  return (
    <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);
