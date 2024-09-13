import Image from "next/image";

const SubsTable = ({ memeberships }) => {
  return (
    <div className="flex flex-col p-4">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-[#e3e3e3]">
                <tr>
                  <th scope="col" className="py-3 ps-4">
                    <div className="flex items-center h-5">
                      <input
                        id="hs-table-checkbox-all"
                        type="checkbox"
                        className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <label for="hs-table-checkbox-all" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-sm font-medium text-black"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-6 py-3 text-start text-sm font-medium text-black"
                  >
                    Subscription
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-6 py-3 text-start text-sm font-medium text-black"
                  >
                    Profile Status
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-6 py-3 text-start text-sm font-medium text-black"
                  >
                    Transaction
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-6 py-3 text-start text-sm font-medium text-black"
                  >
                    Registered On
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#6060604f]">
                {memeberships?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-3 ps-4">
                        <div className="flex items-center h-5">
                          <input
                            id="hs-table-checkbox-1"
                            type="checkbox"
                            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                          />
                          <label for="hs-table-checkbox-1" className="sr-only">
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        <div className="flex items-center gap-4">
                          <Image
                            src="/staredo.png"
                            width={100}
                            height={100}
                            alt="avatar"
                            className="w-12 h-12 rounded-lg"
                          />
                          <span>
                            <p className="text-[#141414] pr-4 text-base text-wrap">
                              {item.entity.businessName}
                            </p>
                            <p className="text-[#969696] text-xs font-normal">
                              {item.entity.email}
                            </p>
                          </span>
                        </div>
                      </td>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        <span>
                          <p className="text-[#141414] text-base font-medium">
                            {item.subscriptionPlan.planName} Plan
                          </p>
                          <p className="text-[#969696] text-xs">
                            <span className="font-medium">Exp: </span>
                            {new Date(item.endDate).toLocaleDateString("en-IN")}
                          </p>
                        </span>
                      </td>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        <span className="space-y-2">
                          <span className="text-xs py-2 px-3 rounded-full bg-[#B7FB49]">
                            {item.entity.status}
                          </span>
                          <p className="text-[#969696] text-xs pl-2">
                            <span className="font-bold text-green-500">
                              100%{" "}
                            </span>
                            Profile Completed
                          </p>
                        </span>
                      </td>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-start text-sm">
                        <button className="text-sm text-[#13A757] border border-[#13A757] px-4 py-1 rounded-full">
                          Success
                        </button>
                      </td>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-start text-sm text-gray-800">
                        <span>
                          <p className="text-[#141414] text-base font-medium">
                            Apr 9 2024
                          </p>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubsTable;
