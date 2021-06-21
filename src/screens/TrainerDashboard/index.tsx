import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { TrainerTable } from "../../components/TrainerTable";
import { useAuth } from "../../contexts/AuthContext";
import { api } from "../../services/api";

import * as S from "./styles";

const days = [
  {
    hours: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      null,
    ],
  },
  {
    hours: [
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      null,
    ],
  },
  {
    hours: [
      null,
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      null,
      null,
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
    ],
  },
  {
    hours: [
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      null,
    ],
  },
  {
    hours: [
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      null,
    ],
  },
  {
    hours: [
      null,
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
    ],
  },
  {
    hours: [
      null,
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      null,
      null,
      null,
      null,
      null,
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
      { name: "Filipe Pfluck", address: "Bairro, rua, número" },
    ],
  },
];

interface LessonsProps {
  name: string;
  district: string;
  street: string;
  number: string;
  day: number;
  hour: number;
}

interface Hour {
  name: string;
  address: string;
}

interface Day {
  hours: (Hour | null)[];
}

export const TrainerDashboard = () => {
  const { user } = useAuth();

  const [lessons, setLessons] = useState<LessonsProps[]>([]);
  const [days, setDays] = useState<Day[]>([
    {
      hours: [null, null, null, null, null, null, null, null, null, null],
    },
    {
      hours: [null, null, null, null, null, null, null, null, null, null],
    },
    {
      hours: [null, null, null, null, null, null, null, null, null, null],
    },
    {
      hours: [null, null, null, null, null, null, null, null, null, null],
    },
    {
      hours: [null, null, null, null, null, null, null, null, null, null],
    },
    {
      hours: [null, null, null, null, null, null, null, null, null, null],
    },
    {
      hours: [null, null, null, null, null, null, null, null, null, null],
    },
  ]);

  // user é o personal - user.id é o ID do personal; ou de quem esteja logado
  useEffect(() => {
    api
      .get(`/trainings?=${user.id}`)
      .then((response) => {
        return response.data.forEach((res) => {
          setDays(state => {
            const newArray = state.map((oldValue, index) => {
              if (index === res.day) {
                return {
                  hours: oldValue.hours.map((oldHour, index) => {
                    if (index === res.hour) {
                      return {
                        name,
                        address: `Rua Teste, 123 - 31`
                      };
                    } else {
                      return oldValue;
                    }
                  })
                };
              } else {
                return oldValue;
              }
            }
            );
            return newArray;
          });
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.Heading>Próximo treino: </S.Heading>
        <S.NextTraining>
          <img src="" alt="" />
          <div>
            <strong>Amanhã - 08:00</strong>
            <p>Filipe Pfluck - Bairro, rua, número</p>
          </div>
        </S.NextTraining>

        <S.Heading>Sua agenda de treinos: </S.Heading>
        <TrainerTable days={days} />
      </S.Content>
    </S.Container>
  );
};
