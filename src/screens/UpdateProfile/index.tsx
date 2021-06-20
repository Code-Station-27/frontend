import * as S from "./styles";

import Image from "next/image";
import { Input } from "../../components/Input";

import {
  FiLock,
  FiMapPin,
  FiUser,
  FiMail,
  FiPhone,
  FiCamera,
} from "react-icons/fi";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { useTheme } from "styled-components";

import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useCallback } from "react";

export const UpdateProfile = () => {
  const { colors } = useTheme();
  const { user } = useAuth();

  const UpdateProfileFormSchema = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório"),
    email: Yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: Yup.string().required("Senha obrigatória"),
    phone: Yup.string().required("Número de telefone obrigatório"),
    city: Yup.string().required("Cidade obrigatória"),
    street: Yup.string().required("Rua obrigatória"),
    district: Yup.string().required("Bairro obrigatório"),
    number: Yup.string().required("Número obrigatório"),
    type: Yup.string().required("Tipo de usuário obrigatório"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdateProfileFormSchema),
  });

  const handleUpdateForm = (values) => {
    console.log(values);
  };

  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const data = new FormData();

      data.append("avatar", e.target.files[0]);

      // api.patch("/users/avatar", data).then((response) => {
      //   updateUser(response.data);
      // });

      console.log(user);
    }
  }, []);

  return (
    <>
      <Header shouldGoBack />
      <S.Container>
        <h1>Alteração dos dados</h1>
        <S.Form onSubmit={handleSubmit(handleUpdateForm)}>
          <S.AvatarInput>
            <Image
              src="/images/fake_avatar.jpg"
              alt="Logo Principal no Header"
              width={180}
              height={180}
            />
            <label htmlFor="avatar">
              <FiCamera size={20} color="#312E38" />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </S.AvatarInput>
          <S.ContentForm>
            <S.PersonalDataContainer>
              <S.AddressTextContainer>
                <h2>Dados Pessoais:</h2>
              </S.AddressTextContainer>

              <Input
                control={control}
                error={errors.name}
                name="name"
                placeholder="Digite seu nome"
                icon={FiUser}
              />
              <Input
                control={control}
                error={errors.email}
                name="email"
                placeholder="Digite seu email"
                icon={FiMail}
              />
              <Input
                control={control}
                error={errors.phone}
                name="phone"
                placeholder="Digite seu número"
                icon={FiPhone}
              />
              <Input
                control={control}
                error={errors.password}
                name="password"
                type="password"
                placeholder="Digite sua senha"
                icon={FiLock}
              />
              <Input
                control={control}
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
                control={control}
                error={errors.city}
                name="city"
                placeholder="Digite sua cidade"
                icon={FiMapPin}
              />
              <Input
                control={control}
                error={errors.district}
                name="district"
                placeholder="Digite seu bairro"
                icon={FiMapPin}
              />
              <Input
                control={control}
                error={errors.street}
                name="street"
                placeholder="Digite sua rua"
                icon={FiMapPin}
              />
              <Input
                control={control}
                error={errors.number}
                name="number"
                placeholder="Digite o número da sua casa"
                icon={FiMapPin}
              />
              {/* <Input
                control={control}
                error={errors.complement}
                name="complement"
                placeholder="Complemento"
                icon={FiMapPin}
              /> */}
            </S.AddressContainer>
          </S.ContentForm>
          <S.ButtonsForm>
            <Button
              type="submit"
              text="Salvar alterações"
              color={colors.button_green}
            />
          </S.ButtonsForm>
        </S.Form>
      </S.Container>
    </>
  );
};
