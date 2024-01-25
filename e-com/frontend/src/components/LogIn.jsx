import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import{Link,Form , redirect,useNavigate} from 'react-router-dom';
import { useRef } from "react";
import { useContext } from "react";
import { EcomStore } from "../store/Ecom-store";



const LogIn = ()=>{

    let emailElement = useRef();
    let passwordElement = useRef();
    
    const {loginCall} = useContext(EcomStore);



   const loginHandle =(event)=>{

        event.preventDefault();
        
        let email = emailElement.current.value;
        let password = passwordElement.current.value;
        
        loginCall(email,password);
      
      }




    return(
        <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <h1 class="fw-bold mb-0 fs-2 center">log in</h1>
                </div>

                <div class="modal-body p-5 pt-0">
                    <Form class="" method="POST" onSubmit={loginHandle}>
                        
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" ref={emailElement} name="email"/>
                            <label for="floatingInput">Email address</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" ref={passwordElement} name="password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">click here</button>
                        <small class="text-body-secondary">By clicking you agree to the terms of use.</small>
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
                        <small class="text-body-secondary"><Link to='/sign-up'>sign up</Link></small>
                    </Form>
                </div>
            </div>
        </div>
    </div>
    );
}




export default LogIn;