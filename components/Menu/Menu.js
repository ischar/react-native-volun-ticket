import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MenuContainer } from "./Menu.styles";
import MenuItem from "./MenuItem";
import { ICON_NAMES } from "../../utils/icons";

function Menu() {
  const [activeMenu, setActiveMenu] = useState("홈");
  const navigation = useNavigation(); // navigation 객체 가져오기

  const handleMenuPress = (menuText, targetRoute) => {
    setActiveMenu(menuText);
    navigation.navigate(targetRoute);
  };

  const renderMenuItem = (menuText, iconName, targetRoute) => (
    <MenuItem
      menuText={menuText}
      iconName={iconName}
      isActive={activeMenu === menuText}
      onPress={() => handleMenuPress(menuText, targetRoute)}
    />
  );

  return (
    <MenuContainer>
      {renderMenuItem("홈", ICON_NAMES.HOME, "Home")}
      {renderMenuItem("메뉴", ICON_NAMES.MENU, "Menu")}
      {renderMenuItem("티켓", ICON_NAMES.TICKET, "Ticket")}
      {renderMenuItem("봉사", ICON_NAMES.VOLUNTEER, "Volunteer")}
      {renderMenuItem("MY", ICON_NAMES.MY, "My")}
    </MenuContainer>
  );
}

export default Menu;
