import * as S from "./styles";

import Link from "next/link";
import { Input } from "../../components/Input";

import { FiLock, FiMapPin, FiUser, FiMail, FiPhone } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { useTheme } from "styled-components";

import { useForm, SubmitHandler } from "react-hook-form";

export const UpdateProfile = () => {
  const { colors } = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);
  };

  const handleBackDashboard = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <S.Container>
        <h1>Alteração dos dados</h1>
        <S.Form onSubmit={handleSubmit}>
          <S.ContentForm>
            <S.PersonalDataContainer>
              <S.AddressTextContainer>
                <h2>Dados Pessoais:</h2>
              </S.AddressTextContainer>
              <Input name="name" placeholder="Digite seu nome" icon={FiUser} />
              <Input
                name="email"
                placeholder="Digite seu email"
                icon={FiMail}
              />
              <Input
                name="phone"
                placeholder="Digite seu número"
                icon={FiPhone}
              />
              <Input
                name="password"
                type="password"
                placeholder="Digite sua senha"
                icon={FiLock}
              />
              <Input
                name="password-confirmation"
                type="password"
                placeholder="Confirme sua senha"
                icon={FiLock}
              />
            </S.PersonalDataContainer>
            <S.AddressContainer>
              <S.AddressTextContainer>
                <h2>Endereço:</h2>
              </S.AddressTextContainer>
              <Input
                name="city"
                placeholder="Digite sua cidade"
                icon={FiMapPin}
              />
              <Input
                name="neighborhood"
                placeholder="Digite seu bairro"
                icon={FiMapPin}
              />
              <Input
                name="street"
                placeholder="Digite sua rua"
                icon={FiMapPin}
              />
              <Input
                name="number"
                placeholder="Digite o número da sua casa"
                icon={FiMapPin}
              />
              <Input
                name="complement"
                placeholder="Complemento"
                icon={FiMapPin}
              />
            </S.AddressContainer>
          </S.ContentForm>
          <S.ButtonsForm>
            <Button
              type="submit"
              text="Salvar alterações"
              color={colors.button_green}
            />
            <Button
              onClick={handleBackDashboard}
              type="button"
              text="Cancelar"
              color={colors.red}
            />
          </S.ButtonsForm>
        </S.Form>
      </S.Container>
    </>
  );
};
