import { useState } from "react";
import { loginApi } from "../../services/authService";


const LoginPage = () => {

    const [form, setForm] = useState({
        email: 'admin@email.com',
        password: '123456'
    })
    
    const onFormSubmit = async (e) => {
        e.preventDefault();
        
        
        const loginData = await loginApi({ email: form.email, password: form.password })
        if(loginData.status === 200){
            localStorage.setItem('user_token', loginData.data.data.token)
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group mt-3">
                        <label for="exampleInputEmail1">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" 
                            value={form.email}
                            onClick={(e) => setForm({ ...form, email: e.target.value })}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group mt-3">
                        <label for="exampleInputPassword1">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password" 
                            value={form.password}
                            onClick={(e) => setForm({ ...form, password: e.target.value })}
                        />
                    </div>
                    <div className="form-group form-check mt-3">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit"  class="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage