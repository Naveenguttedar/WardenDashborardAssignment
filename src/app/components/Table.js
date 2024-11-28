import TableRow from "./TableRow";
export default function Table({ data }) {
  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <div className="relative mx-4 mt-2 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
        <div className="flex items-center justify-between gap-8 mb-4"></div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="block w-full overflow-hidden md:w-max"></div>
        </div>
      </div>
      <div className="p-6 px-0 overflow-scroll">
        <table className="w-full mt-4 text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4   ">
                <p className=" uppercase block font-bold  antialiased  leading-none  text-md">
                  id
                </p>
              </th>
              <th className="p-4   ">
                <p className=" uppercase block font-bold  antialiased  leading-none  text-md">
                  Name
                </p>
              </th>
              <th className="p-4   ">
                <p className=" uppercase block font-bold  antialiased  leading-none  text-md">
                  visit date
                </p>
              </th>
              <th className="p-4   ">
                <p className=" uppercase block font-bold  antialiased  leading-none  text-md">
                  status
                </p>
              </th>
              <th className="p-4   ">
                <p className=" uppercase block font-bold  antialiased  leading-none  text-md">
                  room reserved
                </p>
              </th>
              <th className="p-4   ">
                <p className=" uppercase block font-bold  antialiased  leading-none  text-md">
                  tentative check-in
                </p>
              </th>
              <th className="p-4   ">
                <p className=" uppercase block font-bold  antialiased  leading-none  text-md">
                  source
                </p>
              </th>
              <th className="p-4   ">
                <p className=" uppercase block font-bold  antialiased  leading-none  text-md">
                  activity
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((userdata) => (
              <TableRow key={userdata.id} data={userdata} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between mb-6 ">
        <p className="block ml-[2rem] text-lg tracking-wider font-sans  antialiased font-normal leading-normal text-blue-gray-900 ">
          4 / 4 records
        </p>
      </div>
    </div>
  );
}
