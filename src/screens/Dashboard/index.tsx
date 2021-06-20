import * as S from "./styles";

import { FiSearch } from "react-icons/fi";

import { Header } from "../../components/Header";
import { PersonalCard } from "../../components/PersonalCard";
import { Input } from "../../components/Input";
import { MyTrainersCard } from "../../components/MyTrainersCard";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Content>
          <S.Aside>
            <span>Meus agendamentos</span>
            <MyTrainersCard
              rating={5}
              name="Daniel Filgueira"
              description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
            />
          </S.Aside>
          <S.Main>
            <S.ContentSearch>
                <span>Buscar personal na minha cidade</span>
                {/* <Input 
                  name="input-personal" 
                  type="text" 
                  placeholder="Digite o nome do personal" 
                  icon={FiSearch}
                /> */}
            </S.ContentSearch>
            <S.ContentPersonals>
              <PersonalCard
                rating={5}
                name="Daniel Filgueira"
                description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
              />
              <PersonalCard
                rating={5}
                name="Daniel Filgueira"
                description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
              />
              <PersonalCard
                rating={5}
                name="Daniel Filgueira"
                description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
              />
              <PersonalCard
                rating={5}
                name="Daniel Filgueira"
                description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
              />
              <PersonalCard
                rating={5}
                name="Daniel Filgueira"
                description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
              />
              <PersonalCard
                rating={5}
                name="Daniel Filgueira"
                description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
              />
              <PersonalCard
                rating={5}
                name="Daniel Filgueira"
                description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
              />
              <PersonalCard
                rating={5}
                name="Daniel Filgueira"
                description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
              />
            </S.ContentPersonals>
          </S.Main>
        </S.Content>
      </S.Container>
    </>
  );
};
