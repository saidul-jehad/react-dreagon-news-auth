import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    console.log('login page' ,location);


    const { loginUser } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()


        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        // const email = e.target.email.value;
        // const password = e.target.password.value;

        // login user
        loginUser(email, password)
            .then(result => {
                console.log(result);

                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
            })




        console.log(email, password, 'eee');
    }
    return (

        <div className="justify-center flex min-h-screen bg-base-200">
            <div className="hero-content md:w-1/2 ">

                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <h1 className="text-2xl font-semibold text-center">Login Your Account</h1>
                    <hr className=" mt-8 h-0 mx-6" />


                    <form className="card-body" onSubmit={handleLogin}>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Email Address</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" name="email" className="input text-sm input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" name="password" className="input text-sm input-bordered" required />

                            <label className="label">
                                <a href="#" className="textarea-md link link-hover   ">Forgot password?</a>
                            </label>

                            <label className="label-text flex items-center mt-5">
                                <input type="checkbox" name="checked" id="" />
                                <span className="ml-2">Accept <Link className="hover:underline">Terms & Condition</Link></span>
                            </label>

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <p className="text-center mt-2">
                            <small>
                                Dont Have an Account ? Please <Link to='/register' className="btn-link font-bold">Register</Link>
                            </small>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;