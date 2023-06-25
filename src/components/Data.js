import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../features/apiSlice";
import "./style.css";
export const Data = () => {
  const {
    data: allProductsData,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery();
  const { data: singleProductData } = useGetProductQuery("iphone");

  console.log(allProductsData);
  console.log(singleProductData);

  if (isLoading) return <h1> Loading...</h1>;
  return  <div className="container">
    {allProductsData.products.map((data) => (
      <>
        <div className="card">
          <div className="card-image">
            <img src={data.images[0]} alt="..." />
            <i className="bx bx-star"></i>
          </div>
          <div className="card-content">
            <h3> {data.title}</h3>
            <p>{data.description}</p>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        </div>
      </>
    ))}
  </div>;

};
