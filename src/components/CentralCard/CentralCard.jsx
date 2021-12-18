import React from "react";
import './CentralCard.scss';

const CentralCard = () => {

    return (
        <div className="centralcard">

                    <div className="card">
                        <div className="card card-centered w-50">
                            <div className="card-text">!Hola¡ Soy Jesús, desarrollador web Full Stack</div>
                        </div>
                        <div className="card w-30">
                            <img className="img avatar" src="/images/perfil1.png" alt="Jesús" />
                        </div>
                    </div>

                    <div className="w-70">

                <div className="card">
                    <span className="footer__text">Me puedes encontrar en estas redes sociales:</span>
                </div>

                <div className="card-centered">
                    <span className="footer__logo">
                        <a href="https://www.linkedin.com/in/jesusleal/" title="LinkedIn" target="_blank" rel="noreferrer">
                            <img className="footer__logo-img" src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                                alt="LinkedIn" />
                        </a>
                    </span>
                    <span className="footer__logo">
                        <a href="https://www.instagram.com/lealp22/" title="Instagram" target="_blank" rel="noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram"
                                className="footer__logo-img" />
                        </a>
                    </span>
                    <span className="footer__logo">
                        <a href="https://github.com/lealp22" title="Github" target="_blank" rel="noreferrer">
                            <img src="/images/github.svg" alt="Github" className="footer__logo-img" />
                        </a>
                    </span>
                    <span className="footer__logo">
                        <a href="https://www.codewars.com/users/Jesman22" title="Codewars" target="_blank" rel="noreferrer">
                            <img src="https://www.codewars.com/assets/logos/logo-61192cf7c75904d495e7ad69695fbf0bffd965bc3e17ac60f6c6b475304db09d.svg"
                                alt="Codewars" className="footer__logo-img" />
                        </a>
                    </span>
                </div>

                <div className="card-flex-center">
                    <img src="https://www.svgrepo.com/show/234962/email-mail.svg" alt="Email" className="footer__logo footer__logo-img" />
                    <span>lealp22@gmail.com</span>
                </div>

            </div>

        </div>
    )

}

export default CentralCard;