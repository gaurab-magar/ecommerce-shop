export async function login(authDetail){
  const requestOptions = {
    method: "POST",
    headers: {"content-Type":"application/json"},
    body: JSON.stringify(authDetail)
  }
  const response = await fetch(`${process.env.REACT_APP_HOST}/login`,requestOptions)
  const data = await response.json();

  if(data.accessToken){
    sessionStorage.setItem("token",JSON.stringify(data.accessToken00));
    sessionStorage.setItem('cbid',JSON.stringify(data.user.id))
  }
  return data;
}

export async function register(authDetail){
  const requestOptions = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(authDetail)
  }
  const response = await fetch(`${process.env.REACT_APP_HOST}/register`,requestOptions)
  const data = await response.json();

  if(data.accessToken){
    sessionStorage.setItem('token', JSON.stringify(data.accessToken));
    sessiomStorage.setItem('cbid', JSON.stringify(data.user.id));
  }

  return data;
}

export async function logOut(){
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}