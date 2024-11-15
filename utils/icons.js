import HomeIcon from "../assets/icons/home.svg";
import MenuIcon from "../assets/icons/menu.svg";
import MyIcon from "../assets/icons/my.svg";
import TicketIcon from "../assets/icons/ticket.svg";
import VolunteerIcon from "../assets/icons/volunteer.svg";

const SearchIcon = require("../assets/icons/search.png");
const BackIcon = require("../assets/icons/back.png");
const RightIcon = require("../assets/icons/right.png");

export const ICONS = new Map([
  ["HOME", HomeIcon],
  ["MENU", MenuIcon],
  ["MY", MyIcon],
  ["TICKET", TicketIcon],
  ["VOLUNTEER", VolunteerIcon],
  ["BACK", BackIcon],
  ["SEARCH", SearchIcon],
  ["RIGHT", RightIcon],
]);

export const ICON_NAMES = {
  HOME: "HOME",
  MENU: "MENU",
  MY: "MY",
  TICKET: "TICKET",
  VOLUNTEER: "VOLUNTEER",
  SEARCH: "SEARCH",
  BACK: "BACK",
  RIGHT: "RIGHT",
};
