import { useEffect,useState } from "react"
import useLogin from "../hooks/useLogin"
import { Link } from "react-router-dom"


export default function Login(){
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const {login,isloading}=useLogin()

    const onLogin=((e)=>{
        e.preventDefault()
        login(email,password)
    })
    return(
        <div className="container bg-light border-3 border p-3 mt-5">
        {!isloading?(<div className="container">
            <h1 className="display-3 fw-normal border-bottom border-2 border-dark mb-5">Login</h1>
            <div className="container-fluid">
                <form onSubmit={(e)=>onLogin(e)}>
                    <div className="form-group">
                        <label className="display-6 fw-normal border-bottom border-2 border-dark mb-4">Email address</label>
                        <input type="email" className="form-control fs-3 mb-4" onChange={(e)=>{setemail(e.target.value)}}/>
                        <label className="display-6 fw-normal border-bottom border-2 border-dark mb-4">Password</label>
                        <input type="password" className="form-control fs-3 mb-4" onChange={(e)=>{setpassword(e.target.value)}}/>
                        <br/>
                        <button className="mb-4 btn btn-success" type="submit"><h1 className='h3 fw-normal'>Login</h1></button>
                    </div>
                    <h3>Dont have an account? Continue to <Link to="/register">Register</Link></h3>
                </form>
            </div>
        </div>):(
            <div className="container d-flex justify-content-center align-items-center" style={{height:"600px"}}>
                <div className="spinner-border" style={{width:"5rem",height:"5rem"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )}
        </div>
    )
}