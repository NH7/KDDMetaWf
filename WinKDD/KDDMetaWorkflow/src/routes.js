/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Create from "@material-ui/icons/Create";
import Home from "@material-ui/icons/Home";
import PlayArrow from "@material-ui/icons/PlayArrow";
import HighlightOff from "@material-ui/icons/HighlightOff";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import DashboardPage2 from "views/Dashboard/Dashboard2.js";
import ExecuteWf from "views/Dashboard/ExecuteWf.js";
import SignInPage from "views/Login/SignIn.js";
import SignUpPage from "views/Login/SignUp.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import CreateKDDWf from "views/UserProfile/CreateKDDWf.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/maps",
    name: "Home",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Home,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Create KDD Workflow",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Create,
    component: CreateKDDWf,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Execute KDD Workflow",
    rtlName: "لوحة القيادة",
    icon: PlayArrow,
    component: ExecuteWf,
    layout: "/admin"
  },

  {
    path: "/table",
    name: "Create MSW",
    rtlName: "قائمة الجدول",
    icon: Create,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Create MEW",
    rtlName: "الرموز",
    icon: Create,
    component: UserProfile,
    layout: "/admin"
  },


  {
    path: "/typography",
    name: "Exceptions",
    rtlName: "طباعة",
    icon: HighlightOff,
    component: DashboardPage2,
    layout: "/admin"
  },
  // {
  //   path: "/signin",
  //   name: "SingIn",
  //   rtlName: "لوحة القيادة",
  //   icon: PlayArrow,
  //   component: SignInPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/signup",
  //   name: "SingUp",
  //   rtlName: "لوحة القيادة",
  //   icon: PlayArrow,
  //   component: SignUpPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
