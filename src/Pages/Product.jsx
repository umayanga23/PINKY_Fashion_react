import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { ShopContext } from '../Context/ShopContext';
import "./CSS/Product.css";
const Product = () => {
  const {all_product } = useContext(ShopContext);
  const{productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  if(!product){
    return <div>Product not found</div>
  }
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
    </div>
  )
}

export default Product