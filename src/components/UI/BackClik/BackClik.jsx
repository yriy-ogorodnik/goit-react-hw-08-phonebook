import { BiLeftArrowAlt } from "react-icons/bi";

import { StyledLink } from "./Backlink.styled";

export const BackClik = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <BiLeftArrowAlt size="32" />
      {children}
    </StyledLink>
  );
};
