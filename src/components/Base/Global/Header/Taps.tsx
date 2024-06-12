import React from "react";

import { BsMessenger } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";

import { Avatar, AvatarIcon } from "@nextui-org/react";

import Drop from "../Drop/Drop";
import Messanger from "./Messanger";
import Notification from "./Notification";
import User from "./User";

export default function Taps() {
  const elements = [
    { icon: <BsMessenger color="#FFA458" />, component: <Messanger /> },
    { icon: <IoNotifications />, component: <Notification /> },
    {
      icon: (
        <Avatar
          icon={<AvatarIcon />}
          isBordered
          color="warning"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      ),
      component: <User />,
    },
  ];

  return (
    <div className="flex gap-2 items-center">
      {elements.map((data, index) => (
        <Drop key={index} trigger={data.icon}>
          {data.component}{" "}
        </Drop>
      ))}
    </div>
  );
}
