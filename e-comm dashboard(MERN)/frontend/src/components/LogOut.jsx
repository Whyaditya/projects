import { useContext } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { EcomStore } from '../store/Ecom-store';
import '../routes/App.css'



const LogOut = () => {

    const {logOut } = useContext(EcomStore);


    const nav = useNavigate();

   
    const close =()=>{
        nav('/home')
    }

    return (
        <div class="modal modal-sheet position-static d-block bg-body-light p-4 py-md-5 logout" tabindex="-1" role="dialog" id="modalSheet">
            <div class="modal-dialog logout" role="document">
                <div class="modal-content rounded-4 shadow">
                    <div class="modal-header border-bottom-0">
                        <h1 class="modal-title fs-5">log out</h1>
                        <Link  onClick={close}  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Link>
                    </div>
                    <div class="modal-body py-0">
                        <p>are you sure want to log out?</p>
                    </div>
                    <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                        <button type="button" class="btn btn-lg btn-danger" onClick={()=>logOut(false)}>log out</button>
                        <Link onClick={close}  type="button" class="btn btn-lg btn-secondary" data-bs-dismiss="modal">Close</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogOut;