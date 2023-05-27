import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 32px 16px;
  background-color: #226c8cbf;

  & input {
    padding: 8px;
    font-family: inherit;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
  }

  & label {
    color: white;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }
`;

export default StyledForm;
