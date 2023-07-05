import React, { useState } from "react";
import "./style.css";
import imageSrc from "../../img2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const FinancialTracker = () => {
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtenha os valores do formulário
    const description = e.target.elements.description.value;
    const amount = e.target.elements.amount.value;
    const date = e.target.elements.date.value;

    // Crie um novo objeto de transação
    const newTransaction = {
      description,
      amount,
      date,
    };

    // Adicione a nova transação ao estado
    setTransactions([...transactions, newTransaction]);

    // Limpe o formulário
    e.target.reset();
  };

  const handleDelete = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  return (
    <div>
      <header className="header">
        <h1>FINTECH</h1>
        <div className="header-buttons">
          <button className="header-button">Login</button>
          <button className="header-button">Registro</button>
        </div>
      </header>
      <div className="container">
        <div className="content">
          <div className="image-container">
            <img src={imageSrc} alt="imagem-fintech" className="image" />
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
              <label className="form-label">
                Descrição:
                <input
                  type="text"
                  name="description"
                  className="form-input"
                  required
                />
              </label>
              <br />
              <label className="form-label">
                Valor:
                <input
                  type="number"
                  step="0.01"
                  name="amount"
                  required
                  className="form-input"
                />
              </label>
              <br />
              <label className="form-label">
                Data:
                <input
                  type="date"
                  name="date"
                  required
                  className="form-input"
                />
              </label>
              <br />
              <button type="submit" className="submit-button">
                Registrar
              </button>
            </form>

            <h2>Transações</h2>
            <ul className="transaction-list">
              {transactions.map((transaction, index) => (
                <li key={index} className="transaction-item">
                  <span className="transaction-description">
                    {transaction.description}
                  </span>
                  <span className="transaction-amount">
                    R$ {transaction.amount}
                  </span>
                  <span className="transaction-date">{transaction.date}</span>
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-button"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialTracker;
