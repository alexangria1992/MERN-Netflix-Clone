import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import ReportIcon from "@mui/icons-material/Report";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <LineStyleIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <PermIdentityIcon />
              Users
            </li>
            <li className="sidebarListItem">
              <StorefrontIcon />
              Products
            </li>
            <li className="sidebarListItem">
              <AttachMoneyIcon />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartIcon />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutlineOutlinedIcon />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineOutlinedIcon />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutlineOutlinedIcon />
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon />
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportIcon />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
