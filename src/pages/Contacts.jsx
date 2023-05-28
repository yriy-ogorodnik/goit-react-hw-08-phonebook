import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError } from 'redux/contacts/selectors';
import { StyledContainer, StyledFormWrapper } from './Contacts.styled';

import { Typography } from '@mui/material';
import { selectToken } from 'redux/auth/selectors';
import AddContact from 'components/AddContact';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <StyledContainer>
        <StyledFormWrapper>
          <Typography variant="h4" component="h1" mt={2} mb={2}>
            contacts
          </Typography>
          <AddContact />
          <Filter />
          {isLoading && !error && <h3>Request in progress...</h3>}
          {error && <p>{error}</p>}
          <ContactsList />
        </StyledFormWrapper>
      </StyledContainer>
    </HelmetProvider>
  );
};

export default Contacts;
