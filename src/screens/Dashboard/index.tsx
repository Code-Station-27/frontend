import Link from "next/link";
import { DefaultTheme } from "styled-components";
import { Header } from "../../components/Header";
import { MyTrainersCard } from "../../components/MyTrainersCard";
import { PersonalCard } from "../../components/PersonalCard";
import * as S from "./styles";
// import { FiSearch } from 'react-icons/fi'

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
              <Link href={`/trainer/${1}`}>
                <a>
                  <PersonalCard
                    rating={5}
                    name="Dan"
                    description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
                  />
                </a>
              </Link>
              <Link href={`/trainer/${2}`}>
                <a>
                  <PersonalCard
                    rating={5}
                    name="Dan"
                    description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
                  />
                </a>
              </Link>{" "}
              <Link href={`/trainer/${3}`}>
                <a>
                  <PersonalCard
                    rating={5}
                    name="Dan"
                    description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
                  />
                </a>
              </Link>{" "}
              <Link href={`/trainer/${4}`}>
                <a>
                  <PersonalCard
                    rating={5}
                    name="Dan"
                    description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
                  />
                </a>
              </Link>{" "}
              <Link href={`/trainer/${5}`}>
                <a>
                  <PersonalCard
                    rating={5}
                    name="Dan"
                    description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
                  />
                </a>
              </Link>{" "}
              <Link href={`/trainer/${6}`}>
                <a>
                  <PersonalCard
                    rating={5}
                    name="Dan"
                    description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
                  />
                </a>
              </Link>{" "}
              <Link href={`/trainer/${7}`}>
                <a>
                  <PersonalCard
                    rating={5}
                    name="Dan"
                    description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
                  />
                </a>
              </Link>{" "}
              <Link href={`/trainer/${8}`}>
                <a>
                  <PersonalCard
                    rating={5}
                    name="Dan"
                    description="Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
                  />
                </a>
              </Link>
            </S.ContentPersonals>
          </S.Main>
        </S.Content>
      </S.Container>
    </>
  );
};
