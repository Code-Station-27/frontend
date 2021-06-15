import Link from "next/link";
import Image from "next/image";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <Image src="/images/logo2.svg" alt="Logo Principal no Header" width={52} height={52} />
      </S.Logo>
      <S.UserActions>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
        <a href="">
          <Image src="/images/fake_avatar.png" alt="Logo Principal no Header" width={30} height={30} />
        </a>
      </S.UserActions>
    </S.Container>
  );
};
