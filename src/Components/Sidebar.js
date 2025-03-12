import React, { useState } from "react";
import "../Assests/Sidebar.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList } from "react-icons/fa";
import {
  FaRegCircleCheck,
  FaRegCircleQuestion,
  FaRegCircleXmark,
} from "react-icons/fa6";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import img1 from "../Assests/Images/main.jpg";
import "react-pro-sidebar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ menuCollapse, setMenuCollapse }) => {
  const [activeMenu, setActiveMenu] = useState("homepage");

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const navigate = useNavigate();

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>
                {menuCollapse ? "" : <img src={img1} width={150} alt="main" />}
              </p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                active={activeMenu === "homepage"}
                icon={<FiHome />}
                onClick={() => {
                  setActiveMenu("homepage");
                  navigate("homepage");
                }}
              >
                Admin
              </MenuItem>

              <MenuItem
                active={activeMenu === "problems"}
                icon={<FaList />}
                onClick={() => {
                  setActiveMenu("problems");
                  navigate("problem");
                }}
              >
                Manhole Problems
              </MenuItem>
              <MenuItem
                active={activeMenu === "pathproblems"}
                icon={<FaList />}
                onClick={() => {
                  setActiveMenu("pathproblems");
                  navigate("pathproblem");
                }}
              >
                Footpath Problems
              </MenuItem>
              {/* <MenuItem
                active={activeMenu === "proper"}
                icon={<FaRegCircleCheck color="green" />}
                onClick={() => {
                  setActiveMenu("proper");
                  navigate("problem/proper");
                }}
              >
                Proper Manholes
              </MenuItem>
              <MenuItem
                active={activeMenu === "cracked"}
                icon={<FaRegCircleQuestion color="orange" />}
                onClick={() => {
                  setActiveMenu("cracked");
                  navigate("problem/cracked");
                }}
              >
                Cracked Manholes
              </MenuItem>
              <MenuItem
                active={activeMenu === "broken"}
                icon={<FaRegCircleXmark color="red" />}
                onClick={() => {
                  setActiveMenu("broken");
                  navigate("problem/broken");
                }}
              >
                Broken Manholes
              </MenuItem> */}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem
                icon={<FiLogOut />}
                onClick={() => {
                  navigate("/user/main");
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
