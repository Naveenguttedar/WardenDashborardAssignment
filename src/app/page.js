import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import data from "./data.json";
import "./globals.css";
import { FaPlus } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Cards section */}
      <div className="overflow-hidden w-full px-4 md:px-8">
        <div className="flex gap-4 md:gap-4 py-4 overflow-x-auto scrollbar-hide">
          {data.cardSection.map((card, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-[300px] flex-shrink-0"
            >
              <Card
                count={card.count}
                message={card.message}
                textStatus={card.textStatus}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Filter Section */}
      <div className="px-4 mt-8 md:px-8 flex flex-wrap gap-4 items-start md:items-center">
        {/* Add Button */}
        <button className="bg-green-600 text-white text-base md:text-xl px-4 py-2 flex gap-2 rounded-lg items-center">
          <FaPlus className="w-4 h-4" />
          Add
        </button>

        {/* Filter Options */}
        <div className="flex-1 flex flex-wrap gap-4 justify-end">
          {/* Check In Month */}
          <div className="bg-gray-200 px-4 py-2 rounded-md text-sm md:text-lg text-gray-500">
            Check in month
          </div>

          {/* All Properties Dropdown */}
          <div className="bg-gray-200 flex items-center px-4 py-2 rounded-md text-sm md:text-lg">
            <span>All properties</span>
            <RiArrowDropDownLine className="w-6 h-6 md:w-8 md:h-8" />
          </div>

          {/* Sorted By */}
          <div className="relative bg-gray-200 px-4 pt-3 rounded-md text-sm md:text-lg">
            <span className="absolute text-gray-400 w-full h-full top-1/2 left-4 transform -translate-y-1/2 text-xs md:text-sm">
              (Sorted by)
            </span>
            <h5 className="text-gray-700">Newest</h5>
          </div>

          {/* Filter Dropdown */}
          <div className="bg-gray-200 flex items-center px-4 py-2 rounded-md text-sm md:text-lg">
            <span>Filter</span>
            <RiArrowDropDownLine className="w-6 h-6 md:w-8 md:h-8" />
          </div>
        </div>
      </div>
      {/* Table Section */}
      <Table />
      {/* <table className="px-4 md:px-8">
        <thead>

        </thead>

      </table>  */}
    </div>
  );
}
