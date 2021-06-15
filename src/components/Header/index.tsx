import Link from 'next/link';

import avatarFake from '../../assets/images/fake_avatar.jpg'
import logoImg from '../../assets/images/logo2.svg'

import * as S from './styles';

export const Header = () => {
    return (
      <S.Container>
        <S.Logo>
          <img src={logoImg} alt="" />
        </S.Logo>
      <S.UserActions>
        <ul>
          <li>
            <Link href="/">
            <a>
              Home
            </a>
            </Link>
          </li>
          <li>
            <Link href="/">
            <a>
              Home
            </a>
            </Link>
          </li>
        </ul>
        <a href="">
          <img src={avatarFake} alt="" />
        </a>
      </S.UserActions>
      </S.Container>
    )
}