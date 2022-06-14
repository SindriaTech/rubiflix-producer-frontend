import React, { useEffect, useState } from 'react';
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler
} from 'react-hook-form';
import axios from 'axios';
import moment from 'moment';
import { useTheme } from 'styled-components';

import { Input, Button, InputFile } from '../../atoms';

import { GridContainer } from '../../styles';
import { emailRegex, isValidCPF } from '../../validators';

import * as S from './styles';
import { Select } from '../../atoms/select';
import { brazilStates } from '../../mocks';

moment.locale('pt-br');

interface Step {
  number: number;
}

interface SignUpForm {
  full_name: string;
  fake_name: string;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  document: string;
  phone: string;
  birthday: string;
  address: Partial<{
    zipcode: string;
    state: number;
    district: string;
    city: string;
    street: string;
    number: string;
    complement?: string;
  }>;
  documents: Partial<{
    front: string;
    back: string;
    confirm: string;
  }>;
  avatar: string;
}

export const SignUp: React.FC = () => {
  const form = useForm<SignUpForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });
  const {
    formState,
    trigger,
    watch,
    setValue,
    handleSubmit: formSubmit
  } = form;
  const formData = new FormData();
  const zipcodeWatcher = watch('address.zipcode');

  const firstStep = ['full_name', 'fake_name', 'username'];
  const secondStep = ['email', 'password', 'confirm_password'];
  const thirdStep = ['document', 'phone', 'birthday'];
  const fourthStep = [
    'zipcode',
    'state',
    'city',
    'district',
    'street',
    'number'
  ];
  const fifthStep = ['front', 'back', 'confirm'];

  const styled = useTheme();
  const [step, setStep] = useState<Step>({
    number: 0
  });
  const [firstStepDisabled, setFirstStepDisabled] = useState(false);
  const [secondStepDisabled, setSecondStepDisabled] = useState(false);
  const [thirdStepDisabled, setThirdStepDisabled] = useState(false);
  const [fourthStepDisabled, setFourthStepDisabled] = useState(false);
  const [fifthStepDisabled, setFifthStepDisabled] = useState(false);
  const [sixthStepDisabled, setSixthStepDisabled] = useState(false);

  const setAddressByCEP = async (cep: string) => {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      setValue(
        'address',
        {
          city: data.localidade,
          district: data.bairro,
          street: data.logradouro,
          state: brazilStates.find((item) => item.uf === data.uf)?.codigo_uf
        },
        {
          shouldDirty: true
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!zipcodeWatcher) return;

    const formattedZipCode = zipcodeWatcher.replace(/[^0-9]/g, '');
    const zipcodeLength = formattedZipCode.length;

    if (zipcodeLength === 8) {
      setAddressByCEP(formattedZipCode);
    }
  }, [zipcodeWatcher]);

  const renderByStep = (requiredStep: number) => step.number === requiredStep;

  const next = () => {
    setStep((prevStep: Step) => ({
      ...prevStep,
      number: prevStep.number + 1
    }));
  };

  const back = () => {
    if (step.number === 0) return;

    setStep((prevStep: Step) => ({
      ...prevStep,
      number: prevStep.number - 1
    }));
  };

  const handleNextFirstStep = async () => {
    const firstStepResult = await trigger([
      'fake_name',
      'full_name',
      'username'
    ]);

    if (firstStepResult) {
      next();
    }
  };

  const handleNextSecondStep = async () => {
    const secondStepResult = await trigger([
      'email',
      'password',
      'confirm_password'
    ]);

    if (secondStepResult) {
      next();
    }
  };

  const handleNextThirdStep = async () => {
    const thirdStepResult = await trigger(['document', 'phone', 'birthday']);

    if (thirdStepResult) {
      next();
    }
  };

  const handleNextFifthStep = async () => {
    const fifthStepResult = await trigger('document');

    if (fifthStepResult) {
      next();
    }
  };

  useEffect(() => {
    const firstStepDirtyFields = !firstStep.every((item) =>
      Object.keys(formState.dirtyFields).includes(item)
    );

    const firstStepErrorFields = firstStep.some((item) =>
      Object.keys(formState.errors).includes(item)
    );

    setFirstStepDisabled(firstStepDirtyFields || firstStepErrorFields);
  }, [formState]);

  useEffect(() => {
    const secondStepDirtyFields = !secondStep.every((item) =>
      Object.keys(formState.dirtyFields).includes(item)
    );

    const secondStepErrorFields = secondStep.some((item) =>
      Object.keys(formState.errors).includes(item)
    );

    setSecondStepDisabled(secondStepDirtyFields || secondStepErrorFields);
  }, [formState]);

  useEffect(() => {
    const thirdStepDirtyFields = !thirdStep.every((item) =>
      Object.keys(formState.dirtyFields).includes(item)
    );

    const thirdStepErrorFields = thirdStep.some((item) =>
      Object.keys(formState.errors).includes(item)
    );

    setThirdStepDisabled(thirdStepDirtyFields || thirdStepErrorFields);
  }, [formState]);

  useEffect(() => {
    const fourthStepDirtyFields = !fourthStep.every((item) =>
      Object.keys(formState.dirtyFields?.address || {}).includes(item)
    );

    const fourthStepErrorFields = fourthStep.some((item) =>
      Object.keys(formState.errors?.address || {}).includes(item)
    );

    setFourthStepDisabled(fourthStepDirtyFields || fourthStepErrorFields);
  }, [formState]);

  useEffect(() => {
    const fifthStepDirtyFields = !fifthStep.every((item) =>
      Object.keys(formState.dirtyFields?.documents || {}).includes(item)
    );

    const fifthStepErrorFields = fourthStep.some((item) =>
      Object.keys(formState.errors?.documents || {}).includes(item)
    );

    setFifthStepDisabled(fifthStepDirtyFields || fifthStepErrorFields);
  }, [formState]);

  useEffect(() => {
    const sixthStepDirtyFields = !formState.dirtyFields.avatar;

    const sixthStepErrorFields = !!formState.errors?.avatar;

    setSixthStepDisabled(sixthStepDirtyFields || sixthStepErrorFields);
  }, [formState]);

  // const getFormData = (object: Object) => {
  //   Object.keys(object).forEach((key) => {
  //     const item = object[key] as any;

  //     formData.append(key, item);
  //   });

  //   return formData;
  // };

  const onSubmit: SubmitHandler<SignUpForm> = async () => {
    try {
      // const formattedData = getFormData(data);
      // for (const value of formattedData.keys()) {
      //   console.log(value);
      // }
      // const { data: responseData } = await api.post('', formattedData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // });
    } catch (error) {
      console.log('Deu erro', error);
    }
  };

  const onError: SubmitErrorHandler<SignUpForm> = (errors, e) =>
    console.log(errors, e);

  return (
    <S.Container>
      <GridContainer>
        <S.Header>
          <div className="logo" />
        </S.Header>
        <form onSubmit={formSubmit(onSubmit, onError)}>
          <FormProvider {...form}>
            {renderByStep(0) && (
              <S.Questions>
                <h4>
                  Olá, parece que você quer começar a produzir um conteúdo
                  adulto 😈
                </h4>
                <p>
                  Nós podemos te ajudar, mas antes disso precisamos te cadastrar
                  na nossa plataforma. São só alguns dados ok?
                </p>
                <S.Form>
                  <Input
                    className="input"
                    id="name"
                    label="Nome"
                    name="full_name"
                    placeholder="Seu nome completo"
                    controller={{
                      rules: {
                        required: 'O nome é obrigatório',
                        pattern: {
                          value: /[A-Z][a-z]* [A-Z][a-z]*/,
                          message:
                            'Nome e Sobrenome com letras maiúsculas - Ex: Maria Silva'
                        }
                      }
                    }}
                  />
                  <Input
                    className="input"
                    id="fake_name"
                    label="Nome falso"
                    name="fake_name"
                    placeholder="Seu nome falso"
                    controller={{
                      rules: {
                        required: 'O nome falso é obrigatório',
                        pattern: {
                          value: /[A-Z][a-z]* [A-Z][a-z]*/,
                          message:
                            'Nome e Sobrenome com letras maiúsculas - Ex: Maria Silva'
                        }
                      }
                    }}
                  />
                  <Input
                    className="input"
                    id="nickname"
                    label="Apelido"
                    name="username"
                    placeholder="Seu apelido na plataforma"
                    controller={{
                      rules: {
                        required: 'O seu apelido é obrigatório',
                        validate: {
                          withoutBlankSpaces: (value: string) =>
                            !(value.indexOf(' ') >= 0) ||
                            'Espaços em branco não são permitidos'
                        },
                        minLength: {
                          value: 4,
                          message:
                            'O apelido precisa ter no mínimo 4 caracteres'
                        },
                        maxLength: {
                          value: 15,
                          message:
                            'O apelido precisa ter no máximo 15 caracteres'
                        }
                      }
                    }}
                    masks={{
                      mask: '***************'
                    }}
                  />
                  <S.Buttons>
                    <Button
                      type="button"
                      className="button"
                      background={styled.gradient.gradient_purple}
                      onClick={handleNextFirstStep}
                      disabled={firstStepDisabled}
                    >
                      <h6>Acessar</h6>
                    </Button>
                  </S.Buttons>
                </S.Form>
              </S.Questions>
            )}
            {renderByStep(1) && (
              <S.Questions>
                <h4>Suas informações de login</h4>
                <p>
                  Você vai usar isso para acessar a plataforma e receber
                  informações no email
                </p>
                <S.Form>
                  <Input
                    className="input"
                    id="email"
                    label="Email"
                    name="email"
                    placeholder="Seu email"
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
                    type="password"
                    label="Senha"
                    name="password"
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
                  <Input
                    className="input"
                    id="password"
                    type="password"
                    label="Confirme Sua senha"
                    name="confirm_password"
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
                  <S.Buttons>
                    <button
                      type="button"
                      className="button back"
                      onClick={back}
                    >
                      <h6>Voltar</h6>
                    </button>
                    <Button
                      type="button"
                      className="button"
                      background={styled.gradient.gradient_purple}
                      onClick={handleNextSecondStep}
                      disabled={secondStepDisabled}
                    >
                      <h6>Acessar</h6>
                    </Button>
                  </S.Buttons>
                </S.Form>
              </S.Questions>
            )}
            {renderByStep(2) && (
              <S.Questions>
                <h4>Suas informações secretas</h4>
                <p>
                  Vamos usar essas informações para lhe identificar e manter um
                  contato caso haja algum problema ou premiação!
                </p>
                <S.Form>
                  <Input
                    className="input"
                    id="document"
                    label="CPF"
                    name="document"
                    placeholder="000.000.000-00"
                    controller={{
                      rules: {
                        required: 'O CPF é obrigatório',
                        validate: {
                          cpfIsValid: (value: string) =>
                            isValidCPF(value) || 'O CPF fornecido é inválido'
                        }
                      }
                    }}
                    masks={{
                      mask: '000.000.000-00'
                    }}
                  />
                  <Input
                    className="input"
                    id="phone"
                    label="Telefone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    controller={{
                      rules: {
                        required: 'O Telefone é obrigatório',
                        pattern: {
                          value:
                            /(\b\(\d{2}\)\s?[9]?\s?\d{4}(-|\s)?\d\d{4})|(\b\d{2}\s?[9]?\s?\d{4}(-|\s)?\d{4})|(\b([9]|[9]\s)?\d{4}(-|\s)?\d{4})|(\b\d{4}(-|\s)?\d{4})/,
                          message: 'O telefone fornecido é inválido'
                        }
                      }
                    }}
                    masks={{
                      mask: '(00) 00000-0000'
                    }}
                  />
                  <Input
                    className="input"
                    id="birthday"
                    label="Data de nascimento"
                    name="birthday"
                    placeholder="00/00/0000"
                    controller={{
                      rules: {
                        required: 'A data de nascimento é obrigatória',
                        pattern: {
                          value:
                            /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
                          message: 'A data fornecida é inválida'
                        },
                        validate: {
                          olderThan18years: (value: string) => {
                            const validate = moment()
                              .subtract(18, 'years')
                              .isAfter(moment(value, 'DD-MM-YYYY'));

                            return (
                              validate ||
                              'Menores de 18 anos não podem se cadastrar na plataforma.'
                            );
                          }
                        }
                      }
                    }}
                    masks={{
                      mask: '00/00/0000'
                    }}
                  />
                  <S.Buttons>
                    <button
                      type="button"
                      className="button back"
                      onClick={back}
                    >
                      <h6>Voltar</h6>
                    </button>
                    <Button
                      type="button"
                      className="button"
                      background={styled.gradient.gradient_purple}
                      onClick={handleNextThirdStep}
                      disabled={thirdStepDisabled}
                    >
                      <h6>Acessar</h6>
                    </Button>
                  </S.Buttons>
                </S.Form>
              </S.Questions>
            )}
            {renderByStep(3) && (
              <S.Questions>
                <h4>Suas informações de endereço</h4>
                <p>
                  Caso precisemos enviar algo para você, realizar alguma
                  cobrança ou premiação usaremos estas informações!
                </p>
                <S.FormAddress>
                  <Input
                    className="input"
                    id="zipcode"
                    label="CEP"
                    name="address.zipcode"
                    placeholder="00000-000"
                    masks={{
                      mask: '00000-000'
                    }}
                    controller={{}}
                  />

                  <Select
                    className="input"
                    id="state"
                    label="Estado"
                    name="address.state"
                    placeholder="Seu Estado"
                    options={[
                      ...brazilStates.map(({ codigo_uf, uf }) => ({
                        label: uf,
                        value: codigo_uf
                      }))
                    ]}
                  />
                  <Input
                    className="input"
                    id="city"
                    label="Cidade"
                    name="address.city"
                    placeholder="Sua cidade"
                    controller={{}}
                  />
                  <Input
                    className="input"
                    id="neighbourhood"
                    label="Bairro"
                    name="address.district"
                    placeholder="Seu bairro"
                    controller={{}}
                  />
                  <Input
                    className="input"
                    id="neighbourhood"
                    label="Sua rua"
                    name="address.street"
                    placeholder="Sua rua"
                    controller={{}}
                  />
                  <Input
                    className="input"
                    id="number"
                    label="Número"
                    name="address.number"
                    placeholder="Seu Número"
                    controller={{}}
                  />
                  <Input
                    className="input w_100"
                    id="complement"
                    label="Complemento"
                    name="address.complement"
                    placeholder="Seu complemento"
                    controller={{}}
                  />
                  <S.Buttons>
                    <button
                      type="button"
                      className="button back"
                      onClick={back}
                    >
                      <h6>Voltar</h6>
                    </button>
                    <Button
                      type="button"
                      className="button"
                      background={styled.gradient.gradient_purple}
                      onClick={handleNextFirstStep}
                      disabled={fourthStepDisabled}
                    >
                      <h6>Acessar</h6>
                    </Button>
                  </S.Buttons>
                </S.FormAddress>
              </S.Questions>
            )}
            {renderByStep(4) && (
              <S.Questions>
                <h4>Sua confimação de identidade</h4>
                <p>
                  Para sabermos que você é uma pessoa real necessitamos de
                  alguns dados seus.
                </p>
                <S.Form>
                  <div className="input">
                    <InputFile
                      id="identity_front"
                      label="Identidade Frente"
                      name="documents.front"
                      controller={{
                        rules: {
                          required: 'O documento é obrigatório'
                        }
                      }}
                      accept=".png, .jpg, .jpeg .webp"
                      formData={formData}
                    />
                  </div>
                  <div className="input">
                    <InputFile
                      id="identity_back"
                      label="Identidade Costa"
                      name="documents.back"
                      controller={{
                        rules: {
                          required: 'O documento é obrigatório'
                        }
                      }}
                      accept=".png, .jpg, .jpeg .webp"
                      formData={formData}
                    />
                  </div>
                  <div className="input">
                    <InputFile
                      id="identify_person"
                      label="Foto sua com a identidade"
                      name="documents.confirm"
                      controller={{
                        rules: {
                          required: 'O documento é obrigatório'
                        }
                      }}
                      accept=".png, .jpg, .jpeg .webp"
                      formData={formData}
                    />
                  </div>
                  <S.Buttons>
                    <button
                      type="button"
                      className="button back"
                      onClick={back}
                    >
                      <h6>Voltar</h6>
                    </button>
                    <Button
                      className="button"
                      background={styled.gradient.gradient_purple}
                      disabled={fifthStepDisabled}
                      onClick={handleNextFifthStep}
                    >
                      <h6>Enviar</h6>
                    </Button>
                  </S.Buttons>
                </S.Form>
              </S.Questions>
            )}
            {renderByStep(5) && (
              <S.Questions>
                <h4>Sua foto de perfil</h4>
                <p>
                  Agora que já confirmamos sua identidade, só falta sua foto de
                  perfil para completar o seu cadastro!
                </p>
                <S.FormProfilePhoto>
                  <div className="input">
                    <InputFile
                      model="profile"
                      id="avatar"
                      label="Foto sua com a identidade"
                      name="avatar"
                      controller={{}}
                      accept=".png, .jpg, .jpeg .webp"
                      formData={formData}
                    />
                  </div>
                  <S.Buttons>
                    <button
                      type="button"
                      className="button back"
                      onClick={back}
                    >
                      <h6>Voltar</h6>
                    </button>
                    <Button
                      type="submit"
                      className="button"
                      background={styled.gradient.gradient_purple}
                      disabled={sixthStepDisabled}
                    >
                      <h6>Enviar</h6>
                    </Button>
                  </S.Buttons>
                </S.FormProfilePhoto>
              </S.Questions>
            )}
          </FormProvider>
        </form>
      </GridContainer>
    </S.Container>
  );
};
