import React, { useEffect, useState } from 'react';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Button, Input } from '../../atoms';
import { routes } from '../../constants';
import { useToast } from '../../providers/toast';

import { GridContainer } from '../../styles';
import { emailRegex } from '../../validators';

import * as S from './styles';

interface SignInForm {
  email: string;
  password: string;
}

export const SignIn: React.FC = () => {
  const styled = useTheme();
  const navigate = useNavigate();
  const form = useForm<SignInForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });
  const { handleSubmit: formSubmit, formState } = form;
  const { createToast } = useToast();
  const [disabled, setDisabled] = useState(true);

  const signInInputs = ['email', 'password'];

  useEffect(() => {
    const hasDirtyFields = !signInInputs.every((item) =>
      Object.keys(formState.dirtyFields || {}).includes(item)
    );

    const hasErrorFields = signInInputs.some((item) =>
      Object.keys(formState.errors || {}).includes(item)
    );

    setDisabled(hasDirtyFields || hasErrorFields);
  }, [formState]);

  const onSubmit: SubmitHandler<SignInForm> = async () => {
    try {
      createToast({
        type: 'success',
        title: `Login realizado `,
        message: 'Você será redirecionado em alguns segundos'
      });

      setTimeout(() => navigate(routes.dashboard), 2000);
    } catch (error) {
      createToast({
        type: 'error',
        title: 'Erro!',
        message: 'Email ou senha fornecidos estão incorretos!'
      });
    }
  };

  const onError: SubmitErrorHandler<SignInForm> = () => {
    createToast({
      type: 'error',
      title: 'Erro!',
      message: 'Email ou senha estão incorretos!'
    });
  };

  return (
    <S.Container>
      <GridContainer>
        <S.SignInBox>
          <div className="logo" />

          <h4>Bem vindo(a) de volta.</h4>
          <p>Preencha login e senha para acessar a plataforma.</p>

          <S.Form onSubmit={formSubmit(onSubmit, onError)}>
            <FormProvider {...form}>
              <Input
                className="input"
                id="email"
                name="email"
                placeholder="Seu email"
                label="Email"
                controller={{
                  rules: {
                    required: 'O email é obrigatório',
                    pattern: {
                      value: emailRegex,
                      message: 'O email fornecido é inválido'
                    }
                  }
                }}
              />
              <Input
                className="input"
                id="password"
                name="password"
                type="password"
                label="Senha"
                placeholder="********"
                controller={{
                  rules: {
                    required: 'O senha é obrigatória',
                    minLength: {
                      value: 6,
                      message: 'A senha precisa ter no mínimo 6 caracteres'
                    }
                  }
                }}
              />
            </FormProvider>
            <Link className="forgot_password" to="/forgot-password">
              Esqueci minha senha
            </Link>

            <Button
              type="submit"
              className="submit"
              background={styled.gradient.gradient_purple}
              disabled={disabled}
            >
              <h6>Acessar</h6>
            </Button>
          </S.Form>

          <Link className="register" to="/sign-up">
            <h6>Quer se tornar um produtor(a) de conteúdo?</h6>
          </Link>
        </S.SignInBox>
      </GridContainer>

      <S.Background>
        <div />
        <div
          style={{ backgroundImage: `url('https://i.imgur.com/Xsky9o4.jpg')` }}
        />
      </S.Background>
    </S.Container>
  );
};
