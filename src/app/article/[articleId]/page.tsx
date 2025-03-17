// "use client"
import Link from "next/link";
import React from "react";
// import { use } from "react";
const NewsArticle = async ({
  params,
  searchParams,
}: {
  //server component
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;

  //client component
  // params: {articleId : string};
  // searchParams: {lang?:"en" | "es" | "fr"};
}) => {
  //server component
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;

  //for client component
  // const {articleId} = use(params);
  // const {lang = "en"} = use(searchParams);

  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/article/${articleId}?lang=en`}>English</Link>
        <Link href={`/article/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/article/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
};

export default NewsArticle;
