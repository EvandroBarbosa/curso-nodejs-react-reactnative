import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo Gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Evandro Barbosa</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/60/abott@adorable.png"
              alt="perfil"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
