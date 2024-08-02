import axios from "axios";  
import { useQuery } from "@tanstack/react-query"; 
import ProductCard from "./product-card";  

export default function ProductSide() {    
  const { isLoading, data, error } = useQuery({  
    queryKey: ['products'],  
    queryFn: async () => {  
      const res = await axios.get(`http://localhost:3000/products`);  
      return res.data;  
    }  
  });  

  return (  
    <>  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
      {isLoading ? <div>loading---</div> : error ? (  
        <div>error: {error.message}</div>  
      ) : data?.map((product) => (  
        <ProductCard key={product.id} product={product} />  
      ))}  
    </div>
    </>  
  );  
}
