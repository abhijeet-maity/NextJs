import React from "react";
import Link from "next/link";

const Home = () => {
  
  return (
    <>
      <h1>Welocome Home!</h1>
      <div>
        <ul>
          <li><Link href='/blog'>Blog</Link></li>
          <li><Link href='/products'>Products</Link></li>
          <li><Link href='/article/news?lang=en'>Read in English</Link></li>
          <li><Link href='/article/news?lang=fr'>Read in French</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Home;
