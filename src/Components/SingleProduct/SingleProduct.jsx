
const SingleProduct = ({product, handleCart}) => {
    const { image, title, price} = product;

    return (
        <div>

            <div className="card">
                <img className='card-img mx-auto' src={image} alt="" />
                <h1>{title.slice(0, 10)}</h1>
                <p>{product.description}</p>
                <div className='card-footer'>
                    <h1>{price} $</h1>
                    <button onClick={() => handleCart(product)}>Add to cart</button>
                </div>
            </div>

            
        </div>
    );
};

export default SingleProduct;