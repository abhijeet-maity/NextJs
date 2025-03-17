import { Metadata } from "next";

export const metadata : Metadata = {
    title : "Blog",
}

const Blog = async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Intentional delay");
        }, 2000);
    });
    return (
        <h1>Welcome to Blog page</h1>
    )
}

export default Blog;