import { useEffect , useState } from "react";
import { ProductCard } from "../../../components";
import {getFeaturedList} from "../../../Services";
import React from "react";


export const FeaturedProducts = () => {
  const [featureditems , setFeaturedItems] = useState([]);
  useEffect(()=>{
    async function featureditem(){
      try{
        const data = await getFeaturedList();
        setFeaturedItems(data);
      }catch(error){
        toast.error(error.message);
      }
    }
    featureditem();
  },[])
  return (
    <section className="container-fluid  py-4">
        <h2 className="text-3xl text-center font-bold text-decoration-underline">Featured Products</h2>
        <div className="row p-4 d-flex justify-content-center gap-5">
        {featureditems.map((data)=>(
          <ProductCard key={data.id} data={data} />
        ))}
        </div>
    </section>
  )
}
