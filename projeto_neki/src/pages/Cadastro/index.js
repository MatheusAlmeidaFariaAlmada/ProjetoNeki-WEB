import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi"
import jpIMG from "../../assets/logo.png";

import "./styles.css";

function CADASTRO() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">
              <a>Cadastro</a>
            </span>

            <div className="wrap-input">
              <input
                className={login !== "" ? "has-val input" : "input"}
                type="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Login"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="wrap-input">
              <input
                className={confPassword !== "" ? "has-val input" : "input"}
                type="password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Confirm Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">salvar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default CADASTRO;