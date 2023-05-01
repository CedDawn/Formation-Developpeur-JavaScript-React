import * as React from "react";
import { NavLink } from "react-router-dom";

export function NavList() {
    const activeStyle = {
      textDecoration: "underline",
    };
  
    return (
      <nav>
            <NavLink
              to="/"
              end
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="about"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              A Propos
            </NavLink>
      </nav>
    );
  }