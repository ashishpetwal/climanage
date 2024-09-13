import Image from "next/image";
import { FiCopy } from "react-icons/fi";

const CouponTable = ({coupons}) => {

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
                    Coupon Code
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-6 py-3 text-start text-sm font-medium text-black"
                  >
                    Valid For
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-sm font-medium text-black"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-6 py-3 text-start text-sm font-medium text-black"
                  >
                    Expiry Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#6060604f]">
                {coupons.map((item, index) => {
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
                        <div className="flex items-center">
                          <span>
                            <p className="text-[#141414] pr-4 text-base text-wrap">
                              {item.couponName}
                            </p>
                          </span>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(item.couponName);
                            }}
                          >
                            <FiCopy className="text-base text-[#969696] font-bold" />
                          </button>
                        </div>
                      </td>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        <span>
                          <p className="text-[#141414] text-base font-medium">
                            {item.validForPlanId === 1 ? 'Plus' : item.validForPlanId === 2 ? 'Pro' : 'Plus & Pro'} 
                          </p>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        <span className="space-y-2">
                          <span className={`text-xs py-2 px-3 rounded-full ${item.status==="ACTIVE"?"bg-[#B7FB49]":"bg-[#813E0E] text-white"}`}>
                            {item.status}
                          </span>
                        </span>
                      </td>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-start text-sm text-gray-800">
                        <span>
                          <p className="text-[#141414] text-base font-medium">
                            {new Date(item.expiryDate).toLocaleDateString('en-IN')}
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

export default CouponTable;
