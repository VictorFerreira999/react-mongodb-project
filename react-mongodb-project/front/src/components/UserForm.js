import React, { useState } from 'react';
import axios from 'axios';
import styles from './UserForm.module.css';

function UserForm({ fetchUsers }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', { name, email });
      setName('');
      setEmail('');
      fetchUsers();
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Cadastrar
      </button>
    </form>
  );
}

export default UserForm;
