import api from "../../services/api.js"
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Logo from "../../assets/logo.png";
import { Link, Redirect } from 'react-router-dom';
import "./styles.css";

function LOGIN() {

  const [user, setUser] = useState({
    login: "",
    password: ""
  });
  const [show, setShow] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show);
  }

  function HandleLogin() {
    api.post("/user/login", user).then((response)=>{
     /*  localStorage.setItem("password", response)
      return <Redirect to="/home"/> */
      console.log(response)
    }).catch((err)=>{
      console.log(err)
      alert("Usuário não encontrado")
    })
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">
              <img src={Logo} alt="Jovem Programador" />
            </span>

            <div className="wrap-input">
              <input
                className={user.login !== "" ? "has-val input" : "input"}
                type="login"
                value={user.login}
                onChange={(e) => setUser({ ...user, login: e.target.value })}
              />
              <span className="focus-input" data-placeholder="Login"></span>
            </div>

            <div className="wrap-input">
              <input
                className={user.password !== "" ? "has-val input" : "input"}
                type={show ? "text" : "password"}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <span className="focus-input" data-placeholder="Password"></span>

              <div className="login-eye">
                {show ? (
                  <HiEye
                    size={20}
                    onClick={handleClick}
                  />
                ) : (
                  <HiEyeOff
                    size={20}
                    onClick={handleClick}
                  />
                )}
              </div>

            </div>

            <div className="container-login-form-btn">
              <button onClick={HandleLogin} className="login-form-btn">Entrar</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <Link to="/cadastro">
                <a className="txt2" href="#">
                  Criar conta
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LOGIN;