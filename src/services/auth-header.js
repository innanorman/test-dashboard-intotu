export default function authHeader(){
  const auth = JSON.parse(localStorage.getItem('auth'));
  console.log('isi auth', auth);
  if (auth && auth.accessToken){
    return { 
    Authorization : `${auth.tokenType} ${auth.accessToken}`
    };
  } else {
    return {}
  }
}