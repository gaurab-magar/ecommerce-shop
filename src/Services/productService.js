export async function getProductList(){
    const response = await fetch(`${process.env.REACT_APP_HOST}/products`);
    if(!response.ok){
      throw {message: response.statusText , status: response.status};
    }
    const data = await response.json();
    return data;
}
export async function getProduct(id){
  const response = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`);
  if(!response.ok){
    throw {message: response.statusText , status: response.status};
  }
  const data = await response.json()
  return data;
}
export async function getFeaturedList(){
  const response = await fetch(`${process.env.REACT_APP_HOST}/featured_products`);
  if(!response.ok){
    throw {message: response.statusText , status: response.status};
  }
  const data = await response.json();
  return data;
}