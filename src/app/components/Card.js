import { HiUsers } from "react-icons/hi";
export default function Card({ count, message, textStatus }) {
  return (
    <div
      className={`bg-gray-300 min-w-[20rem] rounded-md p-4  ${textStatus == "danger" ? "text-red-400" : "text-gray-500"}`}
    >
      <HiUsers className="w-7 h-7 ml-auto bg-green-100 rounded-md  text-green-700 block " />
      <h4 className="text-[2.3rem] font-bold  ">{count}</h4>
      <p>{message}</p>
    </div>
  );
}
