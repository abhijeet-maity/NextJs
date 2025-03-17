import { Metadata } from "next";
import Link from "next/link";

type Props = {
    params : {
        productId: string;
    }
}
//The dynamic metadata is used to display the product details like productId on the title of the Page.
export const generateMetadata = ({params}: Props):Metadata => {
    return {
        title: `Product ${params.productId}`,
    }
}

function ProductDetails({params}:{params : {productId: string}}) {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/products'>Products</Link>
                </li>
            </ul>
            <h1>Product details page for the Product id: {params.productId}</h1>
        </div>
    )
}

export default ProductDetails;
