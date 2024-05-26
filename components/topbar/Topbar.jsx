import "./Topbar.css";
import { Group, Input, Box, NavLink, Button } from "@mantine/core";
import { IoCloudOfflineOutline } from "react-icons/io5";
import { LuUndo } from "react-icons/lu";
import { LuRedo } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

const Topbar = () => {
  return (
    <Group className="topbar" gap="0">
      <Group className="top-left" gap="6">
        <Input className="project-name" placeholder="Project Name" />
        <Group className="lgintoprog" gap="6">
          <IoCloudOfflineOutline /> Log in to save progress
        </Group>
        <Group gap="20" ml="auto" mr="20px">
          <LuUndo className="undo" />
          <LuRedo className="redo" />
        </Group>
      </Group>
      <Group className="top-right">
        <a href="">Sign Up</a>
        <a href="">Log In</a>
        <Button className="upgrade">
          Upgrade
          <Box className="icon-bg">
            <AiOutlineThunderbolt />
          </Box>
        </Button>
        <Button className="done">
          Done <FaCheck className="check-icon" />
        </Button>
      </Group>
    </Group>
  );
};

export default Topbar;
