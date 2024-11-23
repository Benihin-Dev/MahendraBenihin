import React, { useState } from "react";

export default function PowerSwitch() {
  const [switchState, setSwitchState] = useState(false);
  return (
    <div
      onClick={() => {
        setSwitchState(!switchState);
      }}
      className=" text-xs font-bold relative "
    >
      <div
        className={`  h-7 w-[70px] cursor-pointer element ${
          switchState ? "bg-[#1ceae3]" : " border border-[#1ceae3]"
        }   text-white relative py-2  rounded-full flex items-center justify-center gap-2 `}
      >
        <div
          className={`h-full element absolute top-0 left-0  aspect-square ${
            !switchState
              ? "bg-[#1ceae3]"
              : " border bg-[#1ceae3] border-[#101010]"
          }  ${
            switchState ? " translate-x-[150%]" : "translate-x-[1px]"
          }  rounded-full overflow-hidden scale-75 `}
        ></div>
      </div>
    </div>
  );
}
