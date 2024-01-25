import { useEffect } from "react";
import { useState } from "react";
import '../routes/App.css'
import{Link} from 'react-router-dom';


const ProductList = ()=>{

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        getProducts();  
    },[])

    const getProducts = async()=>{
        let result = await fetch('http://localhost:5000/show-products',{ headers: {authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`}});
        result = await result.json();
        setProducts(result)
        console.log(result)
    }

    const deleteProduct = async(id)=>{
        let result = await fetch(`http://localhost:5000/product/${id}`,
            {method : 'delete'}
        )
        result = await result.json();
        if(result){
            getProducts();
        }
    }


    return(
        <div className="product-list">

            <h3>product list</h3>
            <ul>
                <li>s. no.</li>
                <li>name</li>
                <li>brand</li>
                <li>price</li>
                <li>category</li>
                <li>operation</li>
            </ul>
            {
                products.map((item,index)=> 
                <ul key={item._id}>
                <li>{index + 1}</li>
                <li>{item.name}</li>
                <li>{item.brand}</li>
                <li>$ {item.price}</li>
                <li>{item.category}</li>
                <li><button onClick={()=>deleteProduct(item._id)}>delete</button> <Link className="btn-danger" to={`/home/updateproducts/${item._id}`}>update</Link></li>
                </ul>
                )
            }

        </div>
    );
}

export default ProductList;