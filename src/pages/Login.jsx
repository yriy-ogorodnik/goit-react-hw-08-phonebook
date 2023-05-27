import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { StyledContainer } from './Home.styled';

const Login = () => {

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <StyledContainer>
          <LoginForm />
        </StyledContainer>
      </div>
    </HelmetProvider>
  );
};

export default Login;
