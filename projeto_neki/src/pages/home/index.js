import React,{ useState } from "react";
import Logo from "../../assets/logo.png";
import Lideranca from "../../assets/lideranca.jpg";
import "./styles.css";


function HOME() {
 return(
     <>
        <div className="container">
            <div className="container-home">
                <div className="wrap-home">
                    <div className="home-form">
                    
                        <div className="home-form-title">
                            <img src={Logo} alt="Jovem Programador" />
                            <span>Bem vindo a suas Skills</span>
                        </div>

                        <div>
                            <div>
                                <imag src={Lideranca}/>
                            </div>
                            <div className="skill">
                                <div>
                                    <span>Liderança - Level 2</span>
                                </div>
                        
                            </div>

                            <div className="skill">
                                <div>
                                    <span>Companheirismo - Level 3</span>
                                </div>
                            </div>

                        </div>

                        <div className="container-home-form-btn">
                            <button className="login-form-btn">Adicionar Skill</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     </>
 )
}

export default HOME;
