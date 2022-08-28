import React from 'react'

function Table() {
  return (
    <>
      <h1 className="flex justify-center space-x-4 font-bold">
        Expense Tracker
      </h1>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        {/* <div className="flex justify-between items-center pb-4 bg-white dark:bg-gray-900">
    
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for users"
              />
            </div>
          </div> */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                #
              </th>
              <th scope="col" className="py-3 px-6">
                Transactions
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">0</td>
              <th
                scope="row"
                className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">Walmart</div>
                  {/* <div className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div> */}
                </div>
              </th>
              <td className="py-4 px-6">Food</td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400 mr-2"></div>
                  $30.13
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">1</td>
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">Home Depot</div>
                  {/* <div className="font-normal text-gray-500">
                      bonnie@flowbite.com
                    </div> */}
                </div>
              </th>
              <td className="py-4 px-6">Home Improvements</td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400 mr-2"></div>{" "}
                  $650.45
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">2</td>
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/3.webp"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">Deposit</div>
                  {/* <div className="font-normal text-gray-500">
                      jese@flowbite.com
                    </div> */}
                </div>
              </th>
              <td className="py-4 px-6">Pay</td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                  $300.00
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">3</td>
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">Shell Gast Station</div>
                  {/* <div className="font-normal text-gray-500">
                      thomes@flowbite.com
                    </div> */}
                </div>
              </th>
              <td className="py-4 px-6">Gas</td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400 mr-2"></div>
                  $35.45
                </div>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">4</td>
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/4.webp"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">
                    Amazon Prime
                  </div>
                </div>
              </th>
              <td className="py-4 px-6">Subscription</td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400 mr-2"></div>
                  $14.23
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
