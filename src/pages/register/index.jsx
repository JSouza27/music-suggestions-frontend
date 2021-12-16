import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../../services/api';

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
  ContainerFirstName,
  ContainerLastName,
} from './style';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();

  const validation = () => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i;
    const six = 6;

    if (!email.length || email == null || !regexEmail.test(email)) {
      throw new Error('Email inválido!');
    }
    if (!firstName.length || firstName == null) {
      throw new Error('Nome inválido!');
    }
    if (!lastName.length || lastName == null) {
      throw new Error('Sobrenome inválido!');
    }
    if (!password.length || password == null || password.length < six) {
      throw new Error('Senha inválido!');
    }
  };

  const createUser = () => {
    try {
      validation();

      const newUser = {
        firstName,
        lastName,
        email,
        password,
      };

      register(newUser);
      navigate('/');
      toast.success('Usuário cadastrado com sucesso!');
    } catch (err) {
      toast.error(`Erro ao cadastrar usuário. ${err.message}`);
    }
  };

  return (
    <Wrapper>
      <Container>
        <WelcomeTitle>Bem Vindo !</WelcomeTitle>
        <SubTitle>Registre-se</SubTitle>

        <ContainerEmail>
          <Label>Email</Label>
          <Input
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="Entre com seu email"
          />
        </ContainerEmail>

        <ContainerFirstName>
          <Label>Nome</Label>
          <Input
            onChange={ (e) => setFirstName(e.target.value) }
            placeholder="Entre com seu nome"
          />
        </ContainerFirstName>

        <ContainerLastName>
          <Label>Sobrenome</Label>
          <Input
            onChange={ (e) => setLastName(e.target.value) }
            placeholder="Entre com seu sobrenome"
          />
        </ContainerLastName>

        <ContainerPassword>
          <Label>Senha</Label>
          <Input
            type="password"
            onChange={ (e) => setPassword(e.target.value) }
            placeholder="Entre com sua senha"
          />
        </ContainerPassword>

        <Button type="button" onClick={ () => createUser() }>
          Cadastre-se
        </Button>
      </Container>
    </Wrapper>
  );
}

export default Register;
