import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { Link } from "react-router-dom";

function DropMenuCategory() {
  const [dropdown, setDropdown] = useState(false);
  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="category-navbar">
      <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
        <DropdownToggle caret>Categorias</DropdownToggle>

        <DropdownMenu header>
          <Link to={"/catalogocompleto"}>
            <DropdownItem>Catalogo Completo</DropdownItem>
          </Link>
          <Link to={"/category/categoriaA"}>
            <DropdownItem>categoryA</DropdownItem>
          </Link>
          <Link to={"/category/categoriaB"}>
            <DropdownItem>categoryB</DropdownItem>
          </Link>
          <Link to={"/category/categoriaC"}>
            <DropdownItem>categoryC</DropdownItem>
          </Link>
          <Link to={"/category/categoriaD"}>
            <DropdownItem>categoryD</DropdownItem>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default DropMenuCategory;
