import styled from 'styled-components';

export default styled.nav`
  position: fixed;
  z-index: 2;
  height: 35px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: teal;
  color: white;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const NavItem = styled.div`
  min-width: 100px;
  width: 16%;
  cursor: ${({ pointer }) => pointer ? 'pointer' : 'auto'};
  margin: 0 5px;
  text-align: center;
  background-color: ${({ border }) => border ? '#009595' : 'none'};
  padding: 10px 0;
  & a {
    padding: 10px 40px;
  }
`;
