const api_services = {

}

const BASE_URL = "http://localhost:8080"

api_services.signup = async(signup_data)=>{
    const res = await fetch(`${BASE_URL}/api/users`, {
        body: JSON.stringify(signup_data),
        headers: {
            'Content-Type': 'application/json'
          },
     method:"POST"
    })
    return res
}
api_services.create_token = async(user_data)=>{
    const res = await fetch(`${BASE_URL}/api/tokens`, {
        body: JSON.stringify(user_data),
        headers: {
            'Content-Type': 'application/json'
          },
     method:"POST"
    })
    return res
}
api_services.create_product = async(product_data, token_id)=>{
    const res = await fetch(`${BASE_URL}/api/products`, {
        body: JSON.stringify(product_data),
        headers: {
            'Content-Type': 'application/json',
            'token_id': token_id
          },
     method:"POST"
    })
    return res
}

api_services.fetch_products = async(token_data)=>{
    const res = await fetch(`${BASE_URL}/api/products`, {
        body: JSON.stringify(product_data),
        headers: {
            'Content-Type': 'application/json',
            'token_id': token_id
          },
          query: {
            seller: token_data.username
          },
     method:"GET"
    })
    return res
}

api_services.uploadProductImage = async(image_data){
    const res = await fetch(`${BASE_URL}/api/products/image`, {
        headers:{
            'Content-Type': 'multipart/form-data',
            ''
        },
        method: 'PUT'
    })
}

export default api_services