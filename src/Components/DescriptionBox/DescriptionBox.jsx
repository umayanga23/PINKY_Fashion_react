import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews(122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An E-commerce website is a platform that allows businesses and consumers to buy and sell products
                 or services over the internet. It provides a virtual storefront where customers can browse through 
                 a wide range of items, add them to their shopping cart, and complete transactions securely online. 
                 E-commerce websites often include features such as product descriptions, customer reviews, payment 
                 gateways, and order tracking to enhance the shopping experience. They can cater to various industries,
                  including retail, electronics, fashion, and more, making it convenient for users to shop from the comfort of their homes.
            </p>
            <p>
                E-commerce websites can be categorized into different types, including B2C (business-to-consumer), 
                B2B (business-to-business), C2C (consumer-to-consumer), and C2B (consumer-to-business). 
                They have revolutionized the way people shop, providing a global marketplace accessible 24/7. 
                With the rise of mobile commerce and social media integration, e-commerce continues to evolve, 
                offering innovative solutions for both buyers and sellers.
            </p>
        </div>
    </div>
  )
}
export default DescriptionBox;

