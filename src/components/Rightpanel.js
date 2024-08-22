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
  padding: 10px;
  box-sizing: border-box;
  z-index: 20;

  @media (max-width: 768px) {
    right: 10px;
  }

  @media (max-width: 480px) {
    right: 5px;
    padding: 5px;
  }
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

  @media (max-width: 768px) {
    width: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
  }
`;

const TimeDisplay = styled.div`
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const StopButton = styled.div`
  cursor: pointer;
  color: #fff;
  background-color: #f00;
  border-radius: 4px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

const ProfileIcon = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 10px;

  svg {
    margin-left: 5px;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
  }
`;

const ProfileAndStopwatchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: relative; /* Ensure the dropdown is positioned relative to this container */

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Divider = styled.div`
  height: 40px;
  width: 1px;
  background-color: gray;
  margin: 0 10px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const DropdownMenu = styled.div`
  position: absolute; /* Use absolute positioning relative to ProfileAndStopwatchWrapper */
  top: 60px; /* Adjust based on the height of ProfileIcon and other elements */
  right: 0;
  width: 200px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: ${props => (props.show ? 'block' : 'none')};
  z-index: 30; /* Ensure it is above other content */
  
  @media (max-width: 768px) {
    width: 180px;
    top: 50px; /* Adjust based on screen size */
  }

  @media (max-width: 480px) {
    width: 150px;
    top: 50px; /* Adjust to appear below the profile icon */
    right: 0;
  }
`;

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const MenuHeaderImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 10px;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

const MenuHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
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
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
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
      </ProfileAndStopwatchWrapper>
    </RightPanelWrapper>
  );
};

export default RightPanel;
