import Image from "next/image";

const Table = () => {
  const agencies = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div class="flex flex-col p-4">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="border rounded-lg overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-[#e3e3e3]">
                <tr>
                  <th scope="col" class="py-3 ps-4">
                    <div class="flex items-center h-5">
                      <input
                        id="hs-table-checkbox-all"
                        type="checkbox"
                        class="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <label for="hs-table-checkbox-all" class="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-sm font-medium text-black"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="hidden md:table-cell px-6 py-3 text-start text-sm font-medium text-black"
                  >
                    Subscription
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-sm font-medium text-black"
                  >
                    Profile Status
                  </th>
                  <th
                    scope="col"
                    class="hidden md:table-cell px-6 py-3 text-start text-sm font-medium text-black"
                  >
                    Number of Clients
                  </th>
                  <th
                    scope="col"
                    class="hidden md:table-cell px-6 py-3 text-start text-sm font-medium text-black"
                  >
                    Registered On
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                {agencies.map((index) => {
                  return (
                    <tr key={index}>
                      <td class="py-3 ps-4">
                        <div class="flex items-center h-5">
                          <input
                            id="hs-table-checkbox-1"
                            type="checkbox"
                            class="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                          />
                          <label for="hs-table-checkbox-1" class="sr-only">
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        <div className="flex items-center gap-4">
                          <Image
                            src="/staredo.png"
                            width={100}
                            height={100}
                            alt="avatar"
                            class="w-12 h-12 rounded-lg"
                          />
                          <span>
                            <p className="text-[#141414] pr-4 text-sm md:text-base text-wrap">
                              Staredo Digital Agency
                            </p>
                            <p className="text-[#969696] text-xs font-normal">
                              abc@domain.com
                            </p>
                          </span>
                        </div>
                      </td>
                      <td class="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        <span>
                          <p className="text-[#141414] text-base font-medium">
                            Advanced Plan
                          </p>
                          <p className="text-[#969696] text-xs">
                            <span className="font-medium">Exp: </span>Apr 9 2024
                          </p>
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        <span className="space-y-2">
                          <span className="text-xs py-2 px-3 rounded-full bg-[#B7FB49]">
                            Active
                          </span>
                          <p className="text-[#969696] text-xs pl-2">
                            <span className="font-bold text-green-500">
                              100%{" "}
                            </span>
                            Profile Completed
                          </p>
                        </span>
                      </td>
                      <td class="hidden md:table-cell px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
                        <button
                          type="button"
                          class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          55
                        </button>
                      </td>
                      <td class="hidden md:table-cell px-6 py-4 whitespace-nowrap text-start text-sm text-gray-800">
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

export default Table;
