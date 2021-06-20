import * as S from "./styles";

import { Table } from "../../components/Table";
import { Header } from "../../components/Header";
import React, { useState } from "react";
import { GenericModal } from "../../components/GenericModal";
import { Button } from "../../components/Button";
import { FiX } from "react-icons/fi";

export const Trainer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const personal = {
    name: "Filipe",
    weekdays: "Sábado",
    hour: "08:00AM",
  };

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.UserInfo>
          <header>
            <div />
            <h1>Nome</h1>
          </header>
          <div>
            <p>Preço: R$100,00</p>
            <p>Número: 11 000000000</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            voluptatibus quo molestiae modi vel quis illum sed eius at minus
            exercitationem, aperiam sequi quos iste voluptate totam praesentium
            maxime eligendi.
          </div>
        </S.UserInfo>
        <Table />
        <button onClick={handleOpenModal}>Abrir Modal</button>
      </S.Content>

      <GenericModal isOpen={modalOpen} onRequestClose={handleCloseModal}>
        <S.ContainerIcons>
          <FiX size={32} onClick={handleCloseModal} />
        </S.ContainerIcons>
        <S.ModalContent>
          <h1>Deseja marcar aula com {personal.name}?</h1>
          <p>
            {personal.weekdays} - {personal.hour}
          </p>
          <Button text="Confirmar" type="button" onClick={handleCloseModal} />
        </S.ModalContent>
      </GenericModal>
    </S.Container>
  );
};
