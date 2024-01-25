import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import{Link, useParams,useNavigate} from 'react-router-dom';



const UpdateProducts = () => {

    let nameElement = useRef();
    let brandElement = useRef();
    let priceElement = useRef();
    let categoryElement = useRef();
    let [error,setError] = useState(false);
    let [product,setProduct] = useState({});


    const param = useParams();
    const nav = useNavigate();


    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails = async()=>{

        let result = await fetch(`http://localhost:5000/findproduct/${param.id}`);
        result = await result.json();
        setProduct(result);

    }

    



    const updateProductsHandle = async (event)=>{

        event.preventDefault();


            // if(!name || !brand || !price || !category){
            //     setError(true)
            //     return false;
            // }

        let name = nameElement.current.value;
        let brand = brandElement.current.value;
        let price = priceElement.current.value;
        let category = categoryElement.current.value;
        
    
        nameElement.current.value = '';
        brandElement.current.value = '';
        priceElement.current.value = '';
        categoryElement.current.value = '';


        let result = await fetch(`http://localhost:5000/updateproduct/${param.id}`,{
            method:'Put',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({name,brand,price,category})
        })
        result = await result.json();
        if(result){
            nav('/home/products')
        }else{
            alert('failed')
        }


    }



    return (

        <div className="row justify-content-evenly bg-dark ">
            <center><h1 className="text-light">Add Product</h1></center>
            <form className="col-5 mt-5 mb-5 bg-secondary rounded-5 ps-5 pe-5" onSubmit={updateProductsHandle} method="POST">
                <div class="mb-3 mt-4 ">
                    <label for="exampleInputEmail1" class="form-label">name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" ref={nameElement} defaultValue={product.name} aria-describedby="emailHelp" />
                   {/* {error && name && <div id="emailHelp" class="form-text text-danger">enter valid name.</div>} */}
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">brand</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" ref={brandElement} defaultValue={product.brand} aria-describedby="emailHelp" />
                   {/* {error && brand && <div id="emailHelp" class="form-text text-danger">enter valid brand.</div>} */}

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">price</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" ref={priceElement} defaultValue={product.price} aria-describedby="emailHelp" />
                   {/* {error && price && <div id="emailHelp" class="form-text text-danger">enter valid price.</div>} */}

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">category</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" ref={categoryElement} defaultValue={product.category} aria-describedby="emailHelp" />
                   {/* {error && category && <div id="emailHelp" class="form-text text-danger">enter valid name.</div>} */}

                </div>

                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" class="btn btn-primary mb-5">Submit</button>
            </form>
            <div className="col-5  mt-5 mb-5 ">
                <div class="container my-5">
                    <div class="position-relative p-5 text-center text-muted border border-dashed rounded-5 bg-secondary">
                        <button type="button" class="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
                        <h1 class="text-body-emphasis mb-5">add gallary of your product</h1>
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupFile01">Upload</label>
                            <input type="file" class="form-control" id="inputGroupFile01"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default UpdateProducts;