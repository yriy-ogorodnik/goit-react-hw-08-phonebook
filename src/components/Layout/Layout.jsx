import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {  Header, Main, Nav, NavLinkSt } from './Layout.styled';



const Layout = () => {
  const location = useLocation();
  const from = location?.state?.from ?? '/';
  return (
    <>
      <Header>
        <Nav>
          <ul>
            <li>
              <NavLinkSt to="/">Home</NavLinkSt>
            </li>
            <li>
              <NavLinkSt to="/tweets" state={{ from: from }}>
                Tweets
              </NavLinkSt>
            </li>
          </ul>
        </Nav>
      </Header>
      <div>
        <Main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;