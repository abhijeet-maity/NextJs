import { notFound } from "next/navigation";

function getRandomInt(count: number){
  return Math.floor(Math.random()*count);
}

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {

  // const random = getRandomInt(2);
  // if(random === 1){
  //   throw new Error("Error loading review");
  // }

  if(parseInt(params.reviewId) > 1000 ){
    notFound();
  }

  return (
    <div>
      <h1>
        Review details of Product with ProductId : {params.productId} are{" "}
        {params.reviewId}
      </h1>
    </div>
  );
};

//http://localhost:3000/products/4/reviews/1
export default ReviewDetail;
