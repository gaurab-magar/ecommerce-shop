import { useEffect , useState } from "react";
import { ProductCard } from "../../../components";

export const FeaturedProducts = () => {
  const [featureditems , setFeaturedItems] = useState([]);
  useEffect(()=>{
    async function featureditem(){
      const response = await fetch("http://localhost:8000/featured_products");
      const data = await response.json();
      console.log(data)
      setFeaturedItems(data);
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
