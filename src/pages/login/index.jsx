import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const sendUser = () => {
    const user = { email, password };
    login(user);
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
