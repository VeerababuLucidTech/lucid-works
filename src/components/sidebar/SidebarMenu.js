import { FaBars } from "react-icons/fa";
import {
  RiDashboardLine,
  RiBuildingLine,
  RiContactsBookLine,
  RiTaskLine,
  RiCoupon3Line,
} from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { CgCreditCard } from "react-icons/cg";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineReceiptLong } from "react-icons/md";

const MenuItems = [
  {
    path: "/createnew",
    name: <div className="createUser"> Create New </div>,
    icon: <IoIosAddCircle style={{ color: "#FF8634" }} />,
  },
  {
    path: "/",
    name: "Overview",
    icon: <RiDashboardLine />,
  },

  {
    path: "/tenants",
    name: "Tenants",
    icon: <RiBuildingLine />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FiUsers />,
  },
  {
    path: "/addressbook",
    name: "Address Book",
    icon: <RiContactsBookLine />,
  },
  {
    path: "/payments",
    name: "Payments",
    icon: <CgCreditCard />,
  },
  {
    path: "/tasks",
    name: "Tasks",
    icon: <RiTaskLine />,
  },
  {
    path: "/invoice",
    name: "Invoice",
    icon: <MdOutlineReceiptLong />,
  },
  {
    path: "/promotions",
    name: "Promotions",
    icon: <RiCoupon3Line />,
  },
];

export default MenuItems;
