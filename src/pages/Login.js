import React from 'react';
import './Login.scss';

function Login() {
  return (
        <div className="login-body">
           <main className="form-login">
              <form action="/어디로갈래" method="post">
                 <h1>Login</h1>
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
                    className="submit"
                    type="submit" onClick={()=> window.location.href="/Main"}
                 >
                    LOGIN
                 </button>
              </form>
           </main>
        </div>
  );
}

export default Login;
