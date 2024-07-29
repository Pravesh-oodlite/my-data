import { ROUTES } from "../routes/routeConstants";

export const itemsMenu = (role) => {

  const items = [
    {
      key: "item1",
      label: "Users Detail",
      icon: "/admin.svg",
      route: ROUTES.USERDETAILS,
    },
    {
      key: "item2",
      label: "Edit Profile",
      icon: "/dashboard.svg",
      route: ROUTES.EDITPROFILE,
    },
    {
      key: "item3",
      label: "Waiting Item",
      icon: "/holdings.svg",
      route: "#",
    },
    {
      key: "item4",
      label: "Waiting Item",
      icon: "./institute.svg",
      route: "#",
    },
  ];

  return role === "admin" ? items : items.filter((item) => item.label !== "Users Detail")
}
