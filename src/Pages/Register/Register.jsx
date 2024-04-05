import { Link } from "react-router-dom";


const Register = () => {


    const handleRegister = e => {
        e.preventDefault()

        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;



        console.log(name, photoURL, email, password);

    }

    return (
        <div className="justify-center flex min-h-screen bg-base-200">
            <div className="hero-content md:w-[800px]  ">

                <div className="card shrink-0 w-full max-w-[650px] shadow-2xl bg-base-100">
                    <h1 className="text-2xl font-semibold text-center">Register Your Account</h1>
                    <hr className=" mt-10 h-0 mx-6" />


                    <form className="card-body" onSubmit={handleRegister}>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Your name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" name="name" className="input input-bordered text-sm" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter your Photo URL" name="photoURL" className="input text-sm input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" name="email" className="input text-sm input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" name="password" className="input text-sm input-bordered" required />

                            {/* <label className="label">
                                <a href="#" className="textarea-md link link-hover   ">Forgot password?</a>
                            </label> */}

                            <label className="label-text flex items-center mt-5">
                                <input type="checkbox" name="checked" id="" />
                                <span className="ml-2">Accept <Link className="hover:underline">Terms & Condition</Link></span>
                            </label>

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-center mt-2">
                            <small>
                                Already Have an Account ? Please <Link to='/login' className="btn-link">Login</Link>
                            </small>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;