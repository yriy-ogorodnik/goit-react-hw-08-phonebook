import styled from 'styled-components';
import ReactSelect from 'react-select';

export const StyledSelect = styled(ReactSelect)`
  width: 200px;
  font-size: 18px;

  .select__control {
    /* Стилізація контролю/контейнера */
    border: 1px solid #8080ff;
    border-radius: 4px;
    padding: 8px;
    transition: border-color 0.3s ease;
  }

  .select__menu {
    /* Стилізація меню */
  
    transition: max-height 0.8s ease;
  }

  .select__menu--is-open {
    /* Стилізація розгорнутого меню */

    transition: max-height 0.3s ease;
  }

  .select__option {
    /* Стилізація опцій */
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #5cd3a8;
    }
  }

  .select__option--is-selected {
    /* Стилізація вибраної опції */
    background-color: #80ffff;
    
  }

  .select__indicator-separator {
    /* Стилізація роздільника */
    display: none;
  }

  .select__dropdown-indicator {
    /* Стилізація індикатора розгортання/згортання */
    transition: transform 0.3s ease;
  }

  .select__control--menu-is-open .select__dropdown-indicator {
    transform: rotate(180deg);
  }
`;
