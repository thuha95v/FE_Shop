import React from "react";
import "./style.css";
import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Category from "./category/Category";
import Color from "./color/Color";
import Size from "./size/Size";
import Tag from "./tag/Tag";
import Product from "./product/Product";
import Bill from "./bill/Bill";
import Contact from "./contact/Contact";
import { toast } from "react-toastify";

const AdminPage = () => {
  const { pathname } = useLocation();
  const arrMenu = [
    {
      label: "Category",
      path: "/admin/category",
    },
    {
      label: "Color",
      path: "/admin/color",
    },
    {
      label: "Product",
      path: "/admin/product",
    },
    {
      label: "Size",
      path: "/admin/size",
    },
    {
      label: "Tag",
      path: "/admin/tag",
    },
    {
      label: "Bill",
      path: "/admin/bill",
    },
    {
      label: "Contact",
      path: "/admin/contact",
    },
  ];
  const accessToken = localStorage.getItem("accessToken");
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    history.push("/login");
    toast.info("Đăng xuất thành công");
  };

  return (
    <div className="admin">
      <div className="menu">
        <div className="search_input">
          <h1>Admin Shop</h1>
          <input type="text" placeholder="Search..." />
        </div>
        {arrMenu.map((item, idx) => (
          <div
            key={idx}
            className={`menu_item ${
              pathname.indexOf(item.path) > -1 ? "active" : ""
            }`}
          >
            <Link to={item.path}>{item.label}</Link>
          </div>
        ))}
        <div className="menu_footer">
          <Link to={"/"}>Go home</Link>
          {accessToken && (
            <div className="logout" onClick={handleLogout}>
              Logout
            </div>
          )}
        </div>
      </div>
      <div className="content">
        {pathname.split("/admin/")[1] === "category" && <Category />}
        {pathname.split("/admin/")[1] === "color" && <Color />}
        {pathname.split("/admin/")[1] === "size" && <Size />}
        {pathname.split("/admin/")[1] === "tag" && <Tag />}
        {pathname.split("/admin/")[1] === "product" && <Product />}
        {pathname.split("/admin/")[1] === "bill" && <Bill />}
        {pathname.split("/admin/")[1] === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default AdminPage;
