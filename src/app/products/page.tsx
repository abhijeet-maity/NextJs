import Link from "next/link";

const Products = () => {

  const productId = 1000;
  //replace keyword in product3 replaces the current url of the browser history stack with the home when clicked back
  return (
    <>
        <div>
            <ul>
                <li><Link href='/'>Home</Link></li>
            </ul>
        </div>
      <div>
        <h1>Products list</h1>
        <h4><Link href='/products/1'>Product 1</Link></h4>
        <h4><Link href='/products/2'>Product 2</Link></h4>
        <h4><Link href='/products/3' replace >Product 3</Link></h4> 
        <h4><Link href='/products/4'>Product 4</Link></h4>
        <h4><Link href={`/products/${productId}`}>Product {productId}</Link></h4>
      </div>
    </>
  );
};

export default Products;
