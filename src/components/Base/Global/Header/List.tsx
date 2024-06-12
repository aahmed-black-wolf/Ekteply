import React from "react";

import { PiUserListLight } from "react-icons/pi";

import Drop from "../Drop/Drop";
import Taps from "./Taps";

export default function List() {
  return (
    <div className="block lg:hidden">
      <Drop trigger={<PiUserListLight size="35px" />}>
        <Taps />
      </Drop>
    </div>
  );
}
