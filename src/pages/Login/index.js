import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '~/assets/ticket2.png';

export default function Login() {
  return (
    <>
      <img src={Logo} alt="EasyControl" />
      <form>
        <text>Ola, Seja Bem-Vindo(a)</text>
        <text>Entre com suas credenciais.</text>
        <input type="email" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Digite sua senha" />
        <button type="submit">Entrar</button>
        <Link to="/dashboard">Criar conta</Link>
      </form>
    </>
  );
}
