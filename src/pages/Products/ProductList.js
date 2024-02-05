import { FilterBar } from "./components/FilterBar";
import {ProductCard} from "../../components/Elements/ProductCard";
import { useEffect, useState } from "react";

export const ProductList = () => {
  const [show,setShow] = useState(false);
  const [products , setProducts] = useState([]);

  useEffect(() => {
    async function fetchproducts ()  {
      const response = await fetch('http://localhost:8000/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchproducts();
  },[])

  return (
    <main className="bg-light">
      <section>
        <nav class="navbar bg-white">
          <div class="container-fluid px-5 p-3 fw-bold">
            <p class="mb-0" href="#">All eBooks({products.length})</p>
            <div onClick={()=> setShow(!show)} className="ms-auto" style={{cursor:"pointer"}}>
              <i className="fas fa-ellipsis-v"></i>
            </div>
          </div>
        </nav>
        <div className="container py-4 d-flex flex-wrap justify-content-center gap-5">
          {products.map((data) =>(
            <ProductCard key={data.id} data={data} />
          ) )}
        </div>
      </section>
      {show &&<FilterBar setShow={setShow} />}
    </main>
  )
}
fetch()
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));