"use client";
import { useCallback } from "react";
const getRandomIndex = (maxlimit) => Math.floor(Math.random() * maxlimit);
export default function TableRow({ data }) {
  const getInitials = useCallback((name) => {
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0).toUpperCase());
    return initials.slice(0, 2).join("");
  }, []);
  const statusColor =
    data.status === "Reserved"
      ? "green"
      : data.status === "Payment Due"
        ? "red"
        : "yellow";
  const activityStep = parseInt(data.activity.step);
  const bg_colors = ["bg-amber-700", "bg-green-500", "bg-blue-500"];
  return (
    <tr>
      <td className="p-4 ">{data.id}</td>
      <td className="p-4 ">
        <div className="flex items-center gap-3">
          <div
            className={`${bg_colors[getRandomIndex(bg_colors.length)]} text-white uppercase  flex-shrink-0 font-semibold p-2 rounded-md`}
          >
            {getInitials(data.name)}
          </div>
          <div className="flex flex-col">
            <p className="block  text-sm  font-semibold leading-normal text-gray-600">
              {data.name}
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
              {data.phone}
            </p>
          </div>
        </div>
      </td>
      <td className="p-4 ">
        <div className="flex flex-col">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {data.visitData ? data.visitData : "-"}
          </p>
        </div>
      </td>
      <td className="p-4 ">
        <div className="w-max">
          <div
            className={`relative grid items-center px-2 py-1 font-sans text-xs font-bold text-${statusColor}-900 uppercase rounded-md select-none whitespace-nowrap bg-${statusColor}-500/20`}
          >
            <span className="">{data.status}</span>
          </div>
        </div>
      </td>
      <td className="p-4 ">
        <p className="text-md font-simibold uppercase">
          {data.roomReserved.room ? data.roomReserved.room : ""}
        </p>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          {data.roomReserved.message}
        </p>
      </td>
      <td className="p-4 ">
        {data.tentativeCheckIn ? data.tentativeCheckIn : "-"}
      </td>
      <td className="p-4 ">{data.source}</td>
      {data.activity.status === "pending" ? (
        <td className=" flex flex-col">
          <p className="flex items-center opacity-75">
            <span
              className={
                "w-5 h-5 aspect-squarer rounded-full " +
                (activityStep > 0 ? "bg-green-500" : "bg-gray-500")
              }
            ></span>
            <span className="w-3 border  border-gray-400"></span>
            <span
              className={
                "w-5 h-5 aspect-squarer rounded-full " +
                (activityStep > 1 ? "bg-green-500" : "bg-gray-500")
              }
            ></span>
            <span className="w-3 border  border-gray-400"></span>
            <span
              className={
                "w-5 h-5 aspect-squarer rounded-full " +
                (activityStep > 2 ? "bg-green-500" : "bg-gray-500")
              }
            ></span>
            <span className="w-3 border  border-gray-400"></span>
            <span
              className={
                "w-5 h-5 aspect-squarer rounded-full " +
                (activityStep > 3 ? "bg-green-500" : "bg-gray-500")
              }
            ></span>
          </p>
          <p className="text-xs text-gray-300 pt-2">{data.activity.message}</p>
        </td>
      ) : (
        <td className="text-blue-400">Reserve room</td>
      )}
    </tr>
  );
}
