import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de autenticação aqui
  };

  return (
    <div className="background-container">
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-header">
            <Link to={"/"} className="login-form-button">
              voltar
            </Link>
            <h2>Login</h2>
          </div>
          <div className="input-div">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-div">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
