import React, { useState, useEffect } from "react";
import { MenuItemContainer, MenuText } from "./MenuItem.styles";
import { ICONS } from "../../utils/icons";
import { Pressable } from "react-native";

function MenuItem({ menuText, iconName, onPress, isActive }) {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    const component = ICONS.get(iconName);
    console.log(ICONS.get(iconName));
    if (component) {
      setIconComponent(() => component);
    } else {
      console.warn(`Icon for name "${iconName}" not found.`);
      setIconComponent(null);
    }
  }, [iconName]);

  if (!IconComponent) return null;

  const iconColor = isActive ? "#ffb4b0" : "#8E8E93";
  const textColor = isActive ? "#ffb4b0" : "#8E8E93";

  return (
    <Pressable onPress={onPress}>
      <MenuItemContainer>
        <IconComponent width={24} height={24} fill={iconColor} />
        <MenuText style={{ color: textColor }}>{menuText}</MenuText>
      </MenuItemContainer>
      ;
    </Pressable>
  );
}

export default MenuItem;
