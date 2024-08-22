import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaRegBuilding } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { TbNotes } from "react-icons/tb";
import { LuFileSpreadsheet } from "react-icons/lu";
import { AiOutlineDollarCircle, AiOutlineLike, AiOutlineShareAlt, AiOutlineComment } from "react-icons/ai";
import { TbCalendarUser } from "react-icons/tb";
import { TbSettingsDollar } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
import { FaGem } from "react-icons/fa";
import Drawers from "./Drawer";
import myPhoto from './../assets/nature.webp';  

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const LeftPanelContainer = styled.div`
  width: 60px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  border-right: 2px solid lightgrey;
  position: fixed;
  z-index: 20;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: 50px;
  }

  @media (max-width: 480px) {
    width: 40px;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  color: darkgray;
  font-size: 26px;
  cursor: pointer;
  border-radius: 2px;
  position: relative;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: lightgray;
    color: #2c3e50;

    & > div {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

const Tooltip = styled.div`
  position: absolute;
  left: 50px; 
  top: 50%;
  transform: translateY(-50%);
  background-color: #333;
  color: white;
  padding: 5px 8px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, transform 0.3s, visibility 0.3s;
  z-index: 30;

  &::before {
    content: '';
    position: absolute;
    left: -8px; 
    top: 50%;
    transform: translateY(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent #333 transparent transparent;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    left: 40px;
  }

  @media (max-width: 480px) {
    left: 30px;
    font-size: 10px;
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin-bottom: 5px;
`;

const BrandSymbol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
  background-color: #3498db;
  color: white;
  border-radius: 50%;
  font-size: 17px;
  font-weight: bold;
  position: relative;
`;

const LogoutWrapper = styled(IconWrapper)`
  margin-top: auto;
`;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '60px' : '-300px')}; 
  width: 300px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  z-index: 10;

  @media (max-width: 768px) {
    width: 250px;
    left: ${({ isOpen }) => (isOpen ? '50px' : '-250px')};
  }

  @media (max-width: 480px) {
    width: 200px;
    left: ${({ isOpen }) => (isOpen ? '40px' : '-200px')};
  }
`;

const CenterContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
`;

const RandomPhoto = styled.img`
  width: 600px;
  height: 600px;
  object-fit: cover;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 300px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    flex-direction: column;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const LeftPanel = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState("");

  const handleIconClick = (content) => {
    if (drawerContent === content && isDrawerOpen) {
      setIsDrawerOpen(false);
    } else {
      setDrawerContent(content);
      setIsDrawerOpen(true);
    }
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <GlobalStyles />
      <LeftPanelContainer>
        <BrandSymbol>
          <FaGem />
          <span style={{ position: "absolute", fontSize: "10px", bottom: "5px" }}>ZH</span>
        </BrandSymbol>
        <Divider/>
        <IconWrapper onClick={() => handleIconClick("Dashboard Content")}>
          <MdWindow />
          <Tooltip>My Options</Tooltip>
        </IconWrapper>
        <IconWrapper onClick={() => handleIconClick("Buildings Content")}>
          <FaRegBuilding />
          <Tooltip>Office</Tooltip>
        </IconWrapper>
        <IconWrapper onClick={() => handleIconClick("People Content")}>
          <IoPeopleOutline />
          <Tooltip>Employee</Tooltip>
        </IconWrapper>
        <IconWrapper onClick={() => handleIconClick("Notes Content")}>
          <TbNotes />
          <Tooltip>Notes</Tooltip>
        </IconWrapper>
        <IconWrapper onClick={() => handleIconClick("Spreadsheets Content")}>
          <LuFileSpreadsheet />
          <Tooltip>Spreadsheets</Tooltip>
        </IconWrapper>
        <IconWrapper onClick={() => handleIconClick("Finance Content")}>
          <AiOutlineDollarCircle />
          <Tooltip>Finance</Tooltip>
        </IconWrapper>
        <IconWrapper onClick={() => handleIconClick("Calendar Content")}>
          <TbCalendarUser />
          <Tooltip>Calendar</Tooltip>
        </IconWrapper>
        <IconWrapper onClick={() => handleIconClick("Settings Content")}>
          <TbSettingsDollar />
          <Tooltip>Settings</Tooltip>
        </IconWrapper>
        <LogoutWrapper onClick={closeDrawer}>
          <IoMdLogOut style={{ color: "red" }} />
          <Tooltip>Logout</Tooltip>
        </LogoutWrapper>
      </LeftPanelContainer>

      <DrawerContainer isOpen={isDrawerOpen}>
        <Drawers /> 
      </DrawerContainer>

      <CenterContent>
        <RandomPhoto src={myPhoto} alt="Random photo" />
        <ButtonContainer>
          <IconButton>
            <AiOutlineLike />
            Like
          </IconButton>
          <IconButton>
            <AiOutlineShareAlt />
            Share
          </IconButton>
          <IconButton>
            <AiOutlineComment />
            Comment
          </IconButton>
        </ButtonContainer>
      </CenterContent>
    </>
  );
};

export default LeftPanel;
