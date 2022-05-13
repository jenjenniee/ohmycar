import React from 'react';
import './Login.scss';

function Login() {
  return (
        <div className="login-body">
           <main className="form-signin">
              <form action="/login.do" method="post">
                 <h1 className="h3 mb-3 fw-normal">Login</h1>
                 <div className="form-floating">
                    <input
                       name="id"
                       type="email"
                       className="form-control"
                       id="floatingInput"
                       placeholder="e-mail"
                    />
                    {/* ID */}
                    <label for="floatingInput"></label>
                 </div>
                 <div className="form-floating">
                    <input
                       name="password"
                       type="password"
                       className="form-control"
                       id="floatingPassword"
                       placeholder="Password"
                    />
                    {/* PW */}
                    <label for="floatingPassword"></label>
                 </div>

                 <div className="checkbox mb-5">
                    <label>
                       <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                 </div>
                 <button
                    className="w-100 btn btn-lg btn-primary"
                    type="submit"
                 >
                    Sign in
                 </button>
              </form>
           </main>
        </div>
  );
}

export default Login;