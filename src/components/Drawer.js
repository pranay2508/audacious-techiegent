import React, { useState } from "react";
import styled from "styled-components";
import { MdComputer } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaPersonCircleCheck, FaPersonCircleXmark } from "react-icons/fa6";
import { GiMoneyStack, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { TbReport } from "react-icons/tb";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";

const DrawerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 80%; 
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px;
  margin-top: 8px;
  padding: 8px;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin-top: 5px;
    padding: 5px;
  }
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #fff;
  box-sizing: border-box;
`;

const SearchIcon = styled.div`
  font-size: 20px;
  color: #ccc;
  margin-right: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const SearchBar = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 14px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 5px 0;
`;

const IconList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const IconItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 550;
  color: #2c3e50;
  border-radius: 4px; 
  transition: background-color 0.3s;
  padding-left: 30px;
  cursor: pointer;

  svg {
    margin-right: 10px;
    font-size: 20px;
    color: darkgray;
    transition: color 0.3s;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  &:hover svg {
    color: #2c3e50;
  }

  &:hover {
    background-color: lightgray;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding-left: 20px;
  }
`;

const Head = styled.div`
  color: #2c3e50;
  padding-left: 15px;
  font-weight: 550;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding-left: 10px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding-left: 5px;
  }
`;

const iconData = [
  { id: 1, name: "Dashboard", icon: <MdComputer /> },
  { id: 2, name: "Feedbacks", icon: <VscFeedback /> },
  { id: 3, name: "Leaves", icon: <FaPersonCircleXmark /> },
  { id: 4, name: "Attendance", icon: <FaPersonCircleCheck /> },
  { id: 5, name: "Daily Timesheet", icon: <FaRegCalendarAlt /> },
  { id: 6, name: "Work log", icon: <BsPersonWorkspace /> },
  { id: 7, name: "Reimbursements", icon: <GiMoneyStack /> },
  { id: 8, name: "Reports", icon: <TbReport /> },
  { id: 9, name: "My Expenses", icon: <GiTakeMyMoney /> },
  { id: 10, name: "Income", icon: <GiReceiveMoney /> },
  { id: 11, name: "Categories", icon: <HiMiniSquare3Stack3D /> },
  { id: 12, name: "Settings", icon: <IoSettingsOutline /> },
];

const Drawers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIcons = iconData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DrawerWrapper>
      <SearchContainer>
        <SearchInputContainer>
          <SearchIcon>
            <IoSearchSharp />
          </SearchIcon>
          <SearchBar
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchInputContainer>
      </SearchContainer>
      <Divider />
      <Head>My Options</Head>
      <IconList>
        {filteredIcons.map((item, index) => (
          <React.Fragment key={item.id}>
            {item.name === "Reports" && <Divider />}
            <IconItem>
              {item.icon}
              <span>{item.name}</span>
            </IconItem>
          </React.Fragment>
        ))}
        {filteredIcons.length === 0 && <p>No results found</p>}
      </IconList>
    </DrawerWrapper>
  );
};

export default Drawers;
