function getSession(){
  const token = JSON.parse(sessionStorage.getItem('token'));
  const cbid = JSON.parse(sessionStorage.setItem('cbid'));

  return {token:token,id:cbid}
}
export async function getUser(){
  const browserData = getSession();
  const requestOptions = {
    method: "GET",
    headers: {'Content-Type':'application/json',Authorization: `Bearer ${browserData.token}`}
  }
  const response = await fetch(`http://localhost:8000/600/users/${browserData.cbid}`,requestOptions);

  if(!response.ok){
    throw {message: response.statusText , status: response.status};
  }
  const data = await response.json();
  return data;
}

export async function createOrder(cartList,amount_paid,quantity){
  const browserData = getSession();

  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user:{
      name: user.name,
      email: user.email,
      id: user.id
    }
  }
  const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`,{
    method:'POST',
    headers: {'Content-Type':'application/json',Authorization: `Bearer ${token}`},
    body: JSON.stringify(order)
  });
  if(!response.ok){
    throw{message: response.statusText , status: response.status};
  }
  const data = await response.json();
  return data;
}
export async function getUserOrders(){
  const browserData = getSession();

  const requestOptions = {
    method: "GET",
    headers: {'Content-Type':'application/json',Authorization: `Bearer ${browserData.token}`}
  }
  const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserData.cbid}`,requestOptions);
  if(!response.ok){
    throw{message: response.statusText , status: response.status};
  }
  const data = await response.json();
  return data;
}
