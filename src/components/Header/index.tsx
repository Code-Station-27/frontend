import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./styles";
import { FiArrowLeft } from "react-icons/fi";

interface HeaderProps {
  shouldGoBack?: boolean;
}

export const Header = ({ shouldGoBack }: HeaderProps) => {
  const { back } = useRouter();

  return (
    <S.Container>
      <S.ContainerLogo>
        {shouldGoBack && (
          <FiArrowLeft size={28} onClick={back} color="#202020" />
        )}
        <S.Logo>
          <Image
            src="/images/logo2.svg"
            alt="Logo Principal no Header"
            width={134}
            height={40}
          />
        </S.Logo>
      </S.ContainerLogo>

      <S.UserActions>
        <a href="">
          <Image
            src="/images/fake_avatar.jpg"
            alt="Fake Avatar"
            width={30}
            height={30}
          />
        </a>
      </S.UserActions>
    </S.Container>
  );
};
