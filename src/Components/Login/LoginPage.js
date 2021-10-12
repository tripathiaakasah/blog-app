import { useState } from 'react';
import '../../App.css';

const LoginPage = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = () => {
        let details = {
            email,
            password
        }
        localStorage.setItem('userDetails', JSON.stringify(details));
        props.history.push('/home');
    }

    return <div className="login_background">
        <div className="login_container">
            <div className="row m-0 justify-content-center align-items-center">
                <div className="col-lg-5 p-0 login_page">
                    <div className="row m-0 justify-content-center align-items-center mt-4">
                        <div className="col-10">
                            <h3 className="mb-5">Login Page</h3>
                            <div className="mb-4">
                                <label for="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
                            </div>
                            <div className="d-grid gap-2 mt-5">
                                <button onClick={() => submitLogin()} className="btn btn-primary w-100" type="button">Login Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default LoginPage;