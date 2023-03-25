import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  background-color: #434040;
  color: #fff;
  height: 60px;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const LeftTabs = styled.div`
  display: flex;
  align-items: center;
`;
export const TabLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &.active {
    border-bottom: 2px solid #fff;
    padding-bottom: 6px;
    margin-bottom: -6px;
  }
`;

export const RightTabs = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: inline-block;
  margin-right: 20px;
  padding: 5px 15px;
  color: ${props => (props.isActive ? '#ffffff' : '#333')};
  background-color: ${props => (props.isActive ? '#8b2d75' : '#b2dfec')};
  border: 2px solid #333;
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #eee;
    color: #333;
  }
`;
