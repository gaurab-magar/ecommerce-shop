import { FilterBar } from "./components/FilterBar";
import {ProductCard} from "../../components"
import { useEffect, useState } from "react";
import { useTitle } from "../../Hooks/useTitle";
import { useFilter } from "../../context";
import {getProductList} from "../../Services"
import React from "react";


export const ProductList = () => {
  const [show,setShow] = useState(false);
  const [errorMessage , setErrorMessgae] = useState('');
  useTitle("Explore E-Books");

  const {products , initialProductList} = useFilter();

  useEffect(() => {
    async function fetchproducts ()  {
      try{
        const data = await getProductList(searchTerm);
        initialProductList(data);
        setErrorMessgae('');
      }catch(error){
        toast.error(error.message)
        setErrorMessgae(error.message);
      }
    };
    fetchproducts();
  },[])

  return (
    <main className="">
      <section>
        <nav class="navbar">
          <div class="container-fluid px-5 p-3 fw-bold">
            <p class="mb-0" href="#">All eBooks({products.length})</p>
            <div onClick={()=> setShow(!show)} className="ms-auto" style={{cursor:"pointer"}}>
              <i className="fas fa-ellipsis-v"></i>
            </div>
          </div>
        </nav>
        <div className="container py-4 d-flex flex-wrap justify-content-center gap-5">
          {errorMessage}
          {products.map((data) =>(
            <ProductCard key={data.id} data={data} />
          ) )}
        </div>
      </section>
      {show &&<FilterBar setShow={setShow} />}
    </main>
  )
}