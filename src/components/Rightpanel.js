import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegUserCircle, FaChevronDown, FaStop } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoMdLogOut } from 'react-icons/io';

const RightPanelWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;

const StopwatchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  color: #333;
  width: 100px;
  justify-content: space-between;
`;

const TimeDisplay = styled.div`
  font-size: 14px;
`;

const StopButton = styled.div`
  cursor: pointer;
  color: #fff;
  background-color: #f00;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 16px;
  }
`;

const ProfileIcon = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ProfileAndStopwatchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Divider = styled.div`
  height: 40px;
  width: 1px;
  background-color: gray;
  margin: 0 10px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 200px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: ${props => (props.show ? 'block' : 'none')};
  z-index: 10;
`;

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const MenuHeaderImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 10px;
`;

const MenuHeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    margin-right: 10px;
  }
`;

const RightPanel = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <RightPanelWrapper>
      <ProfileAndStopwatchWrapper>
        <StopwatchWrapper>
          <TimeDisplay>00:03:20</TimeDisplay>
          <StopButton>
            <FaStop />
          </StopButton>
        </StopwatchWrapper>
        <Divider />
        <ProfileIcon onClick={() => setShowMenu(!showMenu)}>
          <FaRegUserCircle size={40} />
          <FaChevronDown size={20} />
        </ProfileIcon>
      </ProfileAndStopwatchWrapper>
      <DropdownMenu show={showMenu}>
        <MenuHeader>
          <MenuHeaderImage></MenuHeaderImage>
          <MenuHeaderText>
            <div>John Doe</div>
            <div>UI/UX Designer</div>
          </MenuHeaderText>
        </MenuHeader>
        <MenuItem>
          <FaRegUserCircle />
          Profile
        </MenuItem>
        <MenuItem>
          <AiOutlineSetting />
          Account Settings
        </MenuItem>
        <MenuItem>
          <IoMdLogOut style={{ color: 'red' }} />
          Logout
        </MenuItem>
      </DropdownMenu>
    </RightPanelWrapper>
  );
};

export default RightPanel;
