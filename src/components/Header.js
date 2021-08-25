import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/tag-heart";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={locationIcon} /> Stone It (ALM)
      </h1>
    </header>
  );
};

export default Header;
