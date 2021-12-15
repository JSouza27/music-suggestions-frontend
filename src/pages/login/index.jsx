import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../services/api';

import {
  Wrapper,
  Container,
  WelcomeTitle,
  SubTitle,
  Label,
  ContainerEmail,
  Input,
  ContainerPassword,
  Button,
  RegisterSpan,
  LinkRegister,
  ContainerRegister,
} from './style';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const validation = () => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i;
    const six = 6;

    if (!email.length || email == null || !regexEmail.test(email)) {
      throw new Error('Email inválido!');
    }
    if (!password.length || password == null || password.length < six) {
      throw new Error('Senha inválida');
    }
  };

  const sendUser = () => {
    try {
      validation();

      const user = { email, password };

      login(user);

      toast.success('Bem vindo!');
    } catch (err) {
      toast.error(`Erro ao logar. ${err.message}`);
    }
  };

  return (
    <Wrapper>
      <Container>
        <WelcomeTitle>Bem Vindo !</WelcomeTitle>
        <SubTitle>Faça seu login </SubTitle>

        <ContainerEmail>
          <Label>Email</Label>
          <Input
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="Entre com seu email"
          />
        </ContainerEmail>

        <ContainerPassword>
          <Label>Senha</Label>
          <Input
            type="password"
            onChange={ (e) => setPassword(e.target.value) }
            placeholder="Entre com sua senha"
          />
        </ContainerPassword>

        <Button type="button" onClick={ () => sendUser() }>
          Entrar
        </Button>
        <ContainerRegister>
          <RegisterSpan>Não tem uma conta?</RegisterSpan>
          <LinkRegister onClick={ () => navigate('/register') }>
            Cadastre-se
          </LinkRegister>
        </ContainerRegister>
      </Container>
    </Wrapper>
  );
}

export default Login;
