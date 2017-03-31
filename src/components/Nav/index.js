import styled from 'styled-components';

export default styled.nav`
  position: fixed;
  z-index: 2;
  width: 100vw;
  bottom: 0;
  left: 0;
  display: flex;
  padding: 5px 10px;
  align-items: center;
  justify-content: space-between;
  background-color: teal;
  color: white;
  overflow-x: auto;
  box-shadow: -30px 0px 20px -7px black inset;
`;

export const NavItem = styled.div`
  flex: 1 1 20px;
  margin: 2px 10px;
`;
