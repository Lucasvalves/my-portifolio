import styled from 'styled-components';

export const Container = styled.nav`
  width: 100rem;

    >ul {  display: flex;
        gap: 2rem;
        justify-content: end;
        align-items: center;
        height: 100%;
      }
      li{
        cursor: pointer;
      }
      li> .active {
        color: var(--gray-200);
      }
      
      a {
        font-size: 1rem;
        position: relative;
        &:before {
          content: '';
          border-radius: 50px;
          bottom: 0;
          position: absolute;
          width: 0%;
          height: 1px;
          background: var(--gray-200);
          transition: .3s;
        }

        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
`;