export default function Table() {
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
            <tr>
              <td className="p-4 ">#555</td>
              <td className="p-4 ">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-700 text-white uppercase  flex-shrink-0 font-semibold p-2 rounded-md">
                    TL
                  </div>
                  <div className="flex flex-col">
                    <p className="block  text-sm  font-semibold leading-normal text-gray-600">
                      Test Lead
                    </p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                      +91 9999999999
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-4 ">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    -
                  </p>
                </div>
              </td>
              <td className="p-4 ">
                <div className="w-max">
                  <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-yellow-900 uppercase rounded-md select-none whitespace-nowrap bg-yellow-500/20">
                    <span className="">Active</span>
                  </div>
                </div>
              </td>
              <td className="p-4 ">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  warden boys life
                </p>
              </td>
              <td className="p-4 "> -</td>
              <td className="p-4 ">Walk In</td>
              <td className="text-blue-400">Reserve Room</td>
            </tr>

            <tr>
              <td className="p-4 ">#6260</td>
              <td className="p-4 ">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-700 text-white uppercase  flex-shrink-0 font-semibold p-2 rounded-md">
                    Ct
                  </div>
                  <div className="flex flex-col">
                    <p className="block  text-sm  font-semibold leading-normal text-gray-600">
                      Contract Test
                    </p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                      +91 9999999999
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-4 ">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    -
                  </p>
                </div>
              </td>
              <td className="p-4 ">
                <div className="w-max">
                  <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-yellow-900 uppercase rounded-md select-none whitespace-nowrap bg-yellow-500/20">
                    <span className="">Active</span>
                  </div>
                </div>
              </td>
              <td className="p-4 ">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  warden boys life
                </p>
              </td>
              <td className="p-4 "> -</td>
              <td className="p-4 ">Referall</td>
              <td className="text-blue-400">Reserve Room</td>
            </tr>

            <tr>
              <td className="p-4 ">#1664</td>
              <td className="p-4 ">
                <div className="flex items-center gap-3">
                  <div className="bg-green-700 text-white uppercase  flex-shrink-0 font-semibold p-2 rounded-md">
                    t1
                  </div>
                  <div className="flex flex-col">
                    <p className="block  text-sm  font-semibold leading-normal text-gray-600">
                      Test Lead 112
                    </p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                      +91 9999999999
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-4 ">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    -
                  </p>
                </div>
              </td>
              <td className="p-4 ">
                <div className="w-max">
                  <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20">
                    <span className="">Payment Due</span>
                  </div>
                </div>
              </td>
              <td className="p-4 ">
                <p className="text-md font-simibold uppercase">F012</p>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  warden boys life
                </p>
              </td>
              <td className="p-4 "> May 23,2024</td>
              <td className="p-4 ">Website</td>
              <td className=" flex flex-col">
                <p className="flex items-center opacity-75">
                  <span className="w-5 h-5 aspect-squarer rounded-full bg-gray-500"></span>
                  <span className="w-3 border  border-gray-400"></span>
                  <span className="w-5 h-5 aspect-squarer rounded-full bg-gray-500"></span>
                  <span className="w-3 border  border-gray-400"></span>
                  <span className="w-5 h-5 aspect-squarer rounded-full bg-gray-500"></span>
                  <span className="w-3 border  border-gray-400"></span>
                  <span className="w-5 h-5 aspect-squarer rounded-full bg-gray-500"></span>
                </p>
                <p className="text-xs text-gray-300 pt-2">Payment pending</p>
              </td>
            </tr>

            <tr>
              <td className="p-4 ">#1604</td>
              <td className="p-4 ">
                <div className="flex items-center gap-3">
                  <div className="bg-green-700 text-white uppercase  flex-shrink-0 font-semibold p-2 rounded-md">
                    t1
                  </div>
                  <div className="flex flex-col">
                    <p className="block  text-sm  font-semibold leading-normal text-gray-600">
                      Test Lead 124
                    </p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                      +91 9999999999
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-4 ">
                <div className="flex flex-col">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    -
                  </p>
                </div>
              </td>
              <td className="p-4 ">
                <div className="w-max">
                  <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                    <span className="">Reserved</span>
                  </div>
                </div>
              </td>
              <td className="p-4 ">
                <p className="text-md font-simibold uppercase">F012</p>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  warden boys life
                </p>
              </td>
              <td className="p-4 "> May 23,2024</td>
              <td className="p-4 ">Website</td>
              <td className=" flex flex-col">
                <p className="flex items-center opacity-75">
                  <span className="w-5 h-5 aspect-squarer rounded-full bg-green-500"></span>
                  <span className="w-3 border  border-gray-400"></span>
                  <span className="w-5 h-5 aspect-squarer rounded-full bg-gray-500"></span>
                  <span className="w-3 border  border-gray-400"></span>
                  <span className="w-5 h-5 aspect-squarer rounded-full bg-gray-500"></span>
                  <span className="w-3 border  border-gray-400"></span>
                  <span className="w-5 h-5 aspect-squarer rounded-full bg-gray-500"></span>
                </p>
                <p className="text-xs text-gray-300 pt-2">
                  Registeration form pending
                </p>
              </td>
            </tr>
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
