"use client";
import { twMerge } from "tailwind-merge";
import { IoIosCall } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { CiGps } from "react-icons/ci";
import { useCallback, useState, useEffect, useRef, Fragment } from "react";
import { useMediaQuery } from "react-responsive";

const getRandomIndex = (maxlimit) => Math.floor(Math.random() * maxlimit);

export default function TableRow({ data }) {
  const [randomColorIndex, setRandomColorIndex] = useState(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 }); // Mobile and tablets
  let statusColor = useRef("");
  const activityStep = parseInt(data.activity.step);
  const bg_colors = ["bg-amber-700", "bg-green-500", "bg-blue-500"];
  useEffect(() => {
    statusColor.current =
      data.status === "Reserved"
        ? "green"
        : data.status === "Payment Due"
          ? "red"
          : "yellow";

    setRandomColorIndex(getRandomIndex(bg_colors.length)); // Assume bg_colors has 3 items
  }, []);

  const getInitials = useCallback((name) => {
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0).toUpperCase());
    return initials.slice(0, 2).join("");
  }, []);

  if (isSmallScreen) {
    return (
      <tr>
        <td className=" md:max-w-[15rem]">
          <div className=" max-w-[15rem]flex p-4 rounded-md shadow-md  justify-between">
            <div className="flex  gap-3 w-full justify-between">
              <div className="flex gap-2">
                <div
                  className={`${
                    randomColorIndex !== null
                      ? bg_colors[randomColorIndex]
                      : "bg-amber-700"
                  } text-white uppercase flex-shrink-0 font-semibold p-2 rounded-md`}
                >
                  {getInitials(data.name)}
                </div>
                <div className="flex flex-col">
                  <p className="block text-sm font-semibold leading-normal text-gray-600">
                    {data.name}
                  </p>
                  <p className="block font-sans text-xs antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                    <span>Lead id: {data.id}</span>
                  </p>
                </div>
              </div>
              <div
                className={twMerge(
                  `relative self-start grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap`,
                  statusColor.current === "green" &&
                    "bg-green-500/20 text-green-900",
                  statusColor.current === "red" && "bg-red-500/20 text-red-900",
                  statusColor.current === "yellow" &&
                    "bg-yellow-500/20 text-yellow-900",
                )}
              >
                <span className="">{data.status}</span>
              </div>
            </div>

            <div className="flex justify-between  items-end pt-4">
              <div>
                <div className="">
                  <IoIosCall className="inline w-4 h-4 text-gray-300" />
                  <span className="texy-gray-400/20 pl-2 text-sm">
                    {data.phone}
                  </span>
                </div>
                <div className="">
                  <FaRegBuilding className="inline w-4 h-4 text-gray-300" />
                  <span className="texy-gray-400/20 pl-2 text-sm">
                    {data.roomReserved.message}
                  </span>
                </div>

                <div className="">
                  <CiGps className="inline w-4 h-4 text-gray-300" />
                  <span className="texy-gray-400/20 pl-2 text-sm">
                    {data.source}
                  </span>
                </div>
              </div>
              {data.activity.status === "pending" ? (
                <div className="flex flex-col">
                  <p className="flex items-center opacity-75">
                    {[0, 1, 2, 3].map((step) => (
                      <Fragment key={step}>
                        <span
                          className={
                            "w-5 h-5 aspect-squarer rounded-full " +
                            (activityStep > step
                              ? "bg-green-500"
                              : "bg-gray-500")
                          }
                        ></span>
                        {step < 3 && (
                          <span className="w-3 border border-gray-400"></span>
                        )}
                      </Fragment>
                    ))}
                  </p>
                  <p className="text-xs text-gray-300 pt-2">
                    {data.activity.message}
                  </p>
                </div>
              ) : (
                <div className="text-blue-400">Reserve room</div>
              )}
            </div>
          </div>
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td className="p-4 ">{data.id}</td>
      <td className="p-4 ">
        <div className="flex items-center gap-3">
          <div
            className={`${
              randomColorIndex !== null
                ? bg_colors[randomColorIndex]
                : "bg-amber-700"
            } text-white uppercase flex-shrink-0 font-semibold p-2 rounded-md`}
          >
            {getInitials(data.name)}
          </div>
          <div className="flex flex-col">
            <p className="block text-sm font-semibold leading-normal text-gray-600">
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
            className={twMerge(
              `relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap`,
              statusColor.current === "green" &&
                "bg-green-500/20 text-green-900",
              statusColor.current === "red" && "bg-red-500/20 text-red-900",
              statusColor.current === "yellow" &&
                "bg-yellow-500/20 text-yellow-900",
            )}
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
        <td className="flex flex-col">
          <p className="flex items-center opacity-75">
            <span
              className={
                "w-5 h-5 aspect-squarer rounded-full " +
                (activityStep > 0 ? "bg-green-500" : "bg-gray-500")
              }
            ></span>
            <span className="w-3 border border-gray-400"></span>
            <span
              className={
                "w-5 h-5 aspect-squarer rounded-full " +
                (activityStep > 1 ? "bg-green-500" : "bg-gray-500")
              }
            ></span>
            <span className="w-3 border border-gray-400"></span>
            <span
              className={
                "w-5 h-5 aspect-squarer rounded-full " +
                (activityStep > 2 ? "bg-green-500" : "bg-gray-500")
              }
            ></span>
            <span className="w-3 border border-gray-400"></span>
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
