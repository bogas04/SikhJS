import styled from 'styled-components';

export default styled.nav`
  position: fixed;
  z-index: 2;
  height: 35px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 5px 10vw;
  align-items: center;
  justify-content: space-between;
  background-color: teal;
  color: white;
  overflow-x: auto;
`;

export const NavItem = styled.div`
  flex: 1 1 20px;
  margin: 2px 10px;
`;
