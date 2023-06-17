import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../features/apiSlice";
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
  return <div>
   <h1 style={{position:"fixed" , left: "50%"}}>Data</h1> 
    {allProductsData.products.map((data)=>(
      <>
      <div style={{width: "400px", border: "solid 5px red",margin:"30px" , alignItems:"center"}}>
      <h1>Id: {data.id}</h1>
      <h1>Title: {data.title}</h1>
      <h2>Description: {data.description}</h2>
      <h5>Category: {data.category}</h5>
      </div>
      </>
    ))}
  </div>;
};
