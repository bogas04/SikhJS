import styled from 'react-emotion';
import { keyframes } from 'emotion';

const slideUp = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
`;

export default styled.nav`
  animation: ${slideUp} ease-in-out .05s;
  user-select: none;
  position: fixed;
  z-index: 2;
  height: 35px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ online = navigator.onLine }) => online ? 'teal' : '#606060'};
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
