import styled from 'styled-components';


export const StyledContainer = styled.div`
  max-height: 100%;




  background-color: #01ac0a;
 

  display: flex;
  justify-content: space-between;
 
  @media (max-width: 768px) {
    max-width: 100%;
    min-height: 100vh;
   
    background-repeat: no-repeat;
    /* background-size: contain; */
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
  }
`;

export const StyledImgWrapper = styled.div`

  max-height: 100vh;
  max-width: 100vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledFormWrapper = styled.div`
  margin: 0 auto;
  padding: 12px;
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    background-color: #ebc1837d;
  }
`;
