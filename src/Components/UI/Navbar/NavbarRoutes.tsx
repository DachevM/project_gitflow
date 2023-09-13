import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

export const navbarRoutes = [
  { path: "/products", name: "Продукты", icon: LocalMallOutlinedIcon },
  { path: "/clients", name: "Пользователи", icon: PersonOutlineOutlinedIcon },
  { path: "/categories", name: "Категории", icon: FolderOutlinedIcon },
  { path: "/cities", name: "Города", icon: MapOutlinedIcon },
  { path: "/brands", name: "Бренды", icon: StarBorderOutlinedIcon },
  { path: "/protocols", name: "Протоколы", icon: ArticleOutlinedIcon },
  { path: "/orders", name: "Заказы", icon: SellOutlinedIcon },
  { path: "/banners", name: "Баннеры", icon: ViewKanbanOutlinedIcon },
  { path: "/seminars/future", name: "Семинары", icon: EventNoteOutlinedIcon },
  { path: "/promocode", name: "Промокоды", icon: AttachMoneyOutlinedIcon },
];
