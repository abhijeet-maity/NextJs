const Docs = ({ params }: { params: { slug: string[] } }) => {

  console.log(params.slug);
  if (params.slug?.length === 2) {
    return (
      <h1>
        {" "}
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  }
  return (
    <div>
      <h1>Docs home Page</h1>
    </div>
  );
};


//http://localhost:3000/docs/Nextjs -> Viewing docs for feature Nextjs
//http://localhost:3000/docs/Nextjs/AppRouter -> Viewing docs for feature Nextjs and concept catch-all-segments
//http://localhost:3000/docs/feature1/concept1/iouhijh -> Docs home page
export default Docs;
