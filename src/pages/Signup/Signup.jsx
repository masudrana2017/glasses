import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Signup = () => {
    const {createUser}=useContext(AuthContext)
    console.log(createUser)
    const handleRegister=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        const conPassword=form.conPassword.value;
        if(password!==conPassword){
            console.log('Password Did not Match')
            return
        }
        console.log(name,photo,email,password)
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(err=>{
            console.log(err.message)
        })
        console.log('Register Successfully')
    }
    return (
        <div className="container mx-auto hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Signup now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name="conPassword" placeholder="Confirm password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Signup;