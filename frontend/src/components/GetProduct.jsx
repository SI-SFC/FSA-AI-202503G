import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const GetProduct = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get("http://localhost:3000/api/product")
            console.log(response.data)
            setProducts(response.data)
        }
        fetchProduct()
    }, [])

    const deleteProduct = async (id)=>{
        if(window.confirm("Are you Sure!")){
            await axios.delete(`http://localhost:3000/api/product/${id}`)
            setProducts(products.filter((items)=> items._id !== id))
        }
    }

    return (
        <>
            <div className="container my-5">
                <h2 className="text-center">Featured Products</h2>
                <hr className="w-50 mx-auto" />
                <div className="row justify-content-center">
                    {
                        products.map((items) => (
                            <div key={items._id} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={`http://localhost:3000/uploads/${items.image}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{items.name}</h5>
                                        <p className="card-text">Price: ${items.price}</p>
                                        <div className="d-flex justify-content-between mb-2">
                                            <a className="btn btn-primary">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <a onClick={()=>{deleteProduct(items._id)}} className="btn btn-danger">
                                                <i className="fa-solid fa-trash"></i>
                                            </a>
                                        </div>
                                        <a className="btn btn-dark w-100">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default GetProduct