import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de autenticação aqui
  };

  return (
    <div className="background-container">
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-form-header">
            <Link to={"/"} className="register-form-button">
              voltar
            </Link>
            <h2>Cadastro</h2>
          </div>
          <div className="input-div">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-div">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-div">
            <label htmlFor="password">CPF:</label>
            <input type="text" id="CPF" name="CPF" required />
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
