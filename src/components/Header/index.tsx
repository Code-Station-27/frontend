import Link from "next/link";
import Image from "next/image";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
        <S.Logo>
          <Image src="/images/logo2.svg" alt="Logo Principal no Header" width={134} height={40} />
        </S.Logo>
        <S.UserActions>
          <a href="">
            <Image src="/images/fake_avatar.jpg" alt="Fake Avatar" width={30} height={30} />
          </a>
        </S.UserActions>
    </S.Container>
  );
};
