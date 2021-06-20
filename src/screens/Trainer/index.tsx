import Modal from 'react-modal'

import * as S from "./styles";

import { Table } from "../../components/Table";
import { Header } from "../../components/Header";
import React, { useState } from "react";
import { GenericModal } from "../../components/GenericModal";
import { Button } from "../../components/Button";
import { FiX } from "react-icons/fi";

interface handleCiclkItemProps {
  weekday: string
  hour: string
}

export const Trainer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedWeekDay, setSelectedWeekDay] = useState('')
  const [selectedHour, setSelectedHour] = useState('')

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleClickItem = ({weekday, hour}: handleCiclkItemProps) => {
    setSelectedWeekDay(weekday)
    setSelectedHour(hour)
    handleOpenModal()
  }

  const personal = {
    name: "Filipe",
    weekdays: "Sábado",
    hour: "08:00AM",
  };

  const days = [
    {
      hours : [
        null,
        null,
        {isAvailable: true},
        {isAvailable: true},
        {isAvailable: false},
        {isAvailable: true},
        null,
        null,
        {isAvailable: true},
        {isAvailable: true},
        {isAvailable: false},
        {isAvailable: false},
      ]
    },
    {
      hours : [
        {isAvailable: true},
        {isAvailable: false},
        {isAvailable: false},
        {isAvailable: true},
        {isAvailable: true},
        null,
        {isAvailable: false},
        {isAvailable: false},
        {isAvailable: true},
        {isAvailable: true},
        null,
        null,
      ]
    },
    {
      hours : [
        null,
        {isAvailable: false},
        {isAvailable: false},
        {isAvailable: true},
        {isAvailable: true},
        null,
        null,
        null,
        {isAvailable: false},
        {isAvailable: false},
        {isAvailable: true},
        {isAvailable: true},
      ]
    },
    {
      hours : [
        null,
        null,
        {isAvailable: true},
        {isAvailable: true},
        {isAvailable: false},
        {isAvailable: true},
        null,
        null,
        {isAvailable: true},
        {isAvailable: true},
        {isAvailable: false},
        {isAvailable: false},
      ]
    },
    {
      hours : [
        {isAvailable: true},
        {isAvailable: false},
        {isAvailable: false},
        {isAvailable: true},
        {isAvailable: true},
        null,
        null,
        null,
        {isAvailable: true},
        {isAvailable: true},
        {isAvailable: false},
        {isAvailable: false},
      ]
    },
    {
      hours : [
        null,
        {isAvailable: false},
        {isAvailable: false},
        {isAvailable: true},
        {isAvailable: true},
        null,
        {isAvailable: true},
        {isAvailable: true},
        {isAvailable: false},
        null,
        {isAvailable: true},
        {isAvailable: true},
      ]
    },
    {
      hours : [
        null,
        {isAvailable: false},
        {isAvailable: false},
        {isAvailable: true},
        {isAvailable: true},
        null,
        null,
        null,
        {isAvailable: false},
        {isAvailable: false},
        {isAvailable: true},
        {isAvailable: true},
      ]
    }
  ]

  return (
    <S.Container>
      <Header shouldGoBack />
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
        <Table onItemClick={handleClickItem} days={days}/>
      </S.Content>

      <GenericModal isOpen={modalOpen} onRequestClose={handleCloseModal}>
        <S.ContainerIcons>
          <FiX size={32} onClick={handleCloseModal} />
        </S.ContainerIcons>
        <S.ModalContent>
          <h1>Deseja marcar aula com {personal.name}?</h1>
          <p>
            {selectedWeekDay} - {selectedHour}
          </p>
          <Button text="Confirmar" type="button" onClick={handleCloseModal} />
        </S.ModalContent>
      </GenericModal>
    </S.Container>
  );
};
