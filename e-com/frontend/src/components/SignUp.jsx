import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import{Link,Form , redirect,useNavigate} from 'react-router-dom';
import { EcomStore } from "../store/Ecom-store";
import { useContext } from "react";

const SignUp = () => {
    return (
        <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
            <div class="modal-dialog" role="document">
                <div class="modal-content rounded-4 shadow">
                    <div class="modal-header p-5 pb-4 border-bottom-0">
                        <h1 class="fw-bold mb-0 fs-2 center">sign up</h1>
                    </div>

                    <div class="modal-body p-5 pt-0">
                        <Form class="" method="POST">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="abc" name="name" />
                                <label for="floatingInput">Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" name="email"/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" name="password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">click here</button>
                            <small class="text-body-secondary">By clicking log in, you agree to the terms of use.</small>
                            <hr class="my-4" />
                            <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
                            <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                <FcGoogle style={{ marginBottom: '4px', marginRight: '5px' }} />
                                Sign up with Google
                            </button>
                            <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                <FaSquareXTwitter style={{ marginBottom: '4px', marginRight: '5px' }} />
                                Sign up with Twitter
                            </button>
                            <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                                <FaSquareFacebook style={{ marginBottom: '4px', marginRight: '5px' }} />
                                Sign up with Facebook
                            </button>
                            <small class="text-body-secondary"><Link to='/log-in'>login</Link></small>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export async function signUp(data){

    const { addUserDetail,regLog } = useContext(EcomStore);
    

    
    //data.request.formData() gives form data object
    const formData = await data.request.formData();
    //use object.formEntries to get actual input
    const postData = Object.fromEntries(formData);
  
   
  
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    })
    .then((res) => res.json())
    .then((post) => {
        addUserDetail(post.result);
        regLog(true);
        localStorage.setItem('token',JSON.stringify(post.auth));       
    });
      
    return redirect("/");
  
  }




export default SignUp;