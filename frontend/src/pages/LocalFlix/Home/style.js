import styled from 'vue-styled-components';
import background from '../../../assets/banner.jpg';

export const Page = styled.div`
  animation-name: fade;
  animation-duration: 0.2s;
  background: red;
`;

export const Background = styled.div`
  background-image: url(${background});
  filter: sepia(60%) opacity(50%);
  position: absolute;
  z-index: 100;
  background-repeat: no-repeat;
  width: 100%;
  background-size: 100%;
  height: 600px;
  top: 0;
`;

export const Navbar = styled.nav`
  width: 100%;
  background: linear-gradient(#080808, rgba(0, 0, 0, 0));
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export const LogoutButton = styled.button`
  border: none;
  background-color: #000000;
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #ffffff;
  width: 70px;
  height: 40px;
  font-size: 16px;

  & > img {
    height: 20px;
    margin-right: 5px;
  }
`;

export const NavContent = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;
