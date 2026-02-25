import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import iziToast from "izitoast";
import axios from "axios";

import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';

export default function ViewProduct() {
  let [data, setData] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [filterData, setFilterData] = useState({});
  const [selectedRecord, setSelectedRecord] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  let limit = 2


  let apiBaseUrl = import.meta.env.VITE_APIBASEURL;

  const applyFilter = (e) => {
    e.preventDefault();

    let obj = {
      name: e.target.name.value,
      code: e.target.code.value,
    };

    setFilterData(obj);
  };

  // console.log(filterData)

  // const SingleCheckSelect = (id) => {
  //   if (selectedRecord.includes(id)) {
  //     let finalData = selectedRecord.filter((v) => {
  //       if (v != id) {
  //         return v;
  //       }
  //     });

  //     setSelectedRecord(finalData);
  //   } else {
  //     let finalData = [...selectedRecord, id];
  //     setSelectedRecord(finalData);
  //   }
  // };

  let getCheckvalue = (e) => {
    let checkboxValue = e.target.value;
    if (e.target.checked) {
      setSelectedRecord([...selectedRecord, checkboxValue]);
    } else {
      setSelectedRecord(selectedRecord.filter((v) => v != checkboxValue));
    }
  };

  const changeStatus = () => {
    if (selectedRecord.length > 0) {
      axios
        .post(`${apiBaseUrl}/product/change-status`, {
          ids: selectedRecord,
        })
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes._status) {
            viewProduct()
            iziToast.success({
              title: "Deleted",
              message:
                "status update successfully.",
              position: "topRight",
            });

            instance.hide({ transitionOut: "fadeOut" }, toast);
            setSelectedRecord([]);

          }
        });

      setSelectedRecord([]);
    } else {
      iziToast.error({
        title: "No Selection",
        message: "Please select at least one record to delete.",
        position: "topRight",
      });
    }
  };

  const deleteRecords = () => {
    if (selectedRecord.length > 0) {
      iziToast.question({
        timeout: 20000,
        close: true,
        overlay: true,
        displayMode: "once",
        id: "delete-confirm",
        zindex: 999999,
        title: "Are you sure?",
        message:
          "Do you really want to delete selected records? This action cannot be undone.",
        position: "center",
        buttons: [
          [
            "<button><b>YES</b></button>",
            function (instance, toast) {
              axios
                .post(`${apiBaseUrl}/product/multi-delete`, {
                  ids: selectedRecord,
                })
                .then((res) => res.data)
                .then((finalRes) => {
                  if (finalRes._status) {

                    iziToast.success({
                      title: "Deleted",
                      message:
                        "Selected records have been deleted successfully.",
                      position: "topRight",
                    });

                    instance.hide({ transitionOut: "fadeOut" }, toast);
                    setSelectedRecord([]);
                    viewProduct()
                  }
                });

              // ---- Perform Delete ----
            },
            true,
          ],
          [
            "<button>NO</button>",
            function (instance, toast) {
              iziToast.info({
                title: "Cancelled",
                message: "Delete action cancelled.",
                position: "topRight",
              });
              instance.hide({ transitionOut: "fadeOut" }, toast);
            },
          ],
        ],
      });
    } else {
      iziToast.error({
        title: "No Selection",
        message: "Please select at least one record to delete.",
        position: "topRight",
      });
    }
  };

  let viewProduct = () => {
    axios
      .get(`${apiBaseUrl}/product/view`, {
        name: filterData.name,
        page: currentPage  //1
      })
      .then((res) => res.data)
      .then((finalRes) => {
        setData(finalRes.data);
        setTotalPages(finalRes._paginate.total_pages); //4
      });
  };

  useEffect(() => {
    viewProduct();
  }, [filterData, currentPage]);

  console.log(selectedRecord);

  return (
    <>
      <section className="w-full">
        {/* ---------------- Breadcrumb ---------------- */}
        <nav
          className="flex border-b-2 bg-white py-3 px-6"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-2">
            <li>
              <a className="text-md font-medium text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              /{" "}
              <a className="text-md font-medium text-gray-700 hover:text-blue-600">
                Product
              </a>
            </li>
            <li>
              /{" "}
              <span className="text-md font-medium text-gray-500">
                View Product
              </span>
            </li>
          </ol>
        </nav>

        {/* ---------------- FILTER BOX ---------------- */}

        <div
          className={`px-1 overflow-hidden transition-all duration-300 ease-out 
            ${openFilter ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
              `}
        >
          <form
            onSubmit={applyFilter}
            className="py-3 relative px-6 my-3 rounded-lg border w-full bg-white shadow-sm"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpenFilter(false)}
              className="absolute right-4 cursor-pointer top-4 text-[28px] text-gray-600 hover:text-black"
            >
              <MdOutlineClose />
            </button>

            <p className="font-bold py-2 text-[20px]">FILTER</p>

            {/* Input Fields */}
            <div className="flex items-center gap-6">
              <div className="mb-5">
                <label className="block mb-2 font-medium">Product Name</label>
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  placeholder="Enter Product Name"
                  className="border-2 border-gray-300 shadow-sm w-full rounded-md px-2  py-1 text-[17px]"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="reset"
                onClick={() => setFilterData({})}
                className="text-white cursor-pointer bg-gray-500 hover:bg-gray-600 px-6 py-2.5 rounded-lg"
              >
                Clear
              </button>

              <button
                type="submit"
                className="text-white cursor-pointer bg-purple-700 hover:bg-purple-800 px-6 py-2.5 rounded-lg"
              >
                Apply
              </button>
            </div>
          </form>
        </div>

        {/* ---------------- MAIN CONTENT ---------------- */}
        <div className="max-w-[1220px] mx-auto py-5">
          {/* ---------------- Header ---------------- */}
          <div className="bg-slate-100 flex justify-between items-center py-3 px-4 rounded-t-md border border-slate-400">
            <div className="text-[26px] font-semibold">View Product</div>

            <div className="flex gap-3 items-center">
              {/* Filter Button */}
              <button
                onClick={() => setOpenFilter(true)}
                className="flex items-center gap-2 bg-gray-200 cursor-pointer hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm border"
              >
                <FaFilter /> Filter
              </button>

              <button
                onClick={deleteRecords}
                disabled={selectedRecord.length == 0}
                className="text-white disabled:bg-[grey] disabled:cursor-not-allowed  cursor-pointer bg-purple-700 hover:bg-purple-800 text-sm px-5 py-2.5 rounded-lg"
              >
                Delete All
              </button>

              <button
                onClick={changeStatus}
                disabled={selectedRecord.length == 0}
                className="text-white disabled:bg-[grey] disabled:cursor-not-allowed   cursor-pointer bg-purple-700 hover:bg-purple-800 text-sm px-5 py-2.5 rounded-lg"
              >
                Change Status
              </button>
            </div>
          </div>

          {/* ---------------- TABLE ---------------- */}
          <div className="border border-t-0 rounded-b-md border-slate-400">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-700">
                <thead className="text-sm uppercase bg-gray-50 border-b">
                  <tr>
                    <th className="px-2 w-[100px]  py-3">
                      <input
                        name="deleteCheck"
                        id="purple-checkbox"
                        type="checkbox"
                        class="mr-2 w-4 h-4 cursor-pointer text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                        value=""
                      />{" "}
                      Select
                    </th>
                    <th className="px-2 w-[60px]  py-3">S. No.</th>
                    <th className="px-2  py-3">Name</th>
                    <th className="px-2  py-3">Parent Category Name</th>
                    <th className="px-2  py-3">Is Featured</th>
                    <th className="px-2 w-[150px]  py-3">Price</th>
                    <th className="px-2 w-[150px]  py-3">Actual Price</th>
                    <th className="px-2 w-[50px]  py-3">Order</th>
                    <th className="px-2 w-[100px] py-3">Status</th>
                    <th className="px-2 w-[100px]  py-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {/* Row 1 */}
                  {data.length >= 1 ? (
                    data.map((obj, index) => {
                      return (
                        <tr key={index} className="bg-white border-b">
                          <td className="px-2  py-4">
                            <input
                              type="checkbox"
                              value={obj._id}
                              onChange={getCheckvalue}
                              checked={selectedRecord.includes(obj._id)}
                              className="w-4 h-4 text-purple-600 cursor-pointer"
                            />
                          </td>
                          {/* 1*2 = 2 */}
                          <td className="px-2  py-4">{

                            (currentPage - 1) * limit + index + 1

                          }</td>
                          <td className="px-2  py-4">{obj.productName}</td>
                          <td className="px-2  py-4">{obj.parentCategory.categoryName}</td>
                          <td className="px-2  py-4">
                            {
                              obj.isFeatured == 1
                              ?
                              'Yes'
                              :
                              'No'
                            }
                          </td>

                          <td className="px-2  py-4">{obj.productPrice}</td>
                          <td className="px-2  py-4">{obj.productActualPrice}</td>
                          <td className="px-2  py-4">{obj.productOrder}</td>

                          {
                            obj.productStatus ?
                              <td className="px-2  py-4 text-green-600 font-bold">
                                Active
                              </td>
                              :
                              <td className="px-2  py-4 text-red-600 font-bold">
                                DeActive
                              </td>

                          }



                          <td className="px-2  py-4 flex gap-3">
                            <Link to={`/product/add/${obj._id}`}>
                              <svg
                                fill="gold"
                                className="w-5 h-5"
                                viewBox="0 0 512 512"
                              >
                                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7z"></path>
                              </svg>
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr className="bg-white border-b">
                      <td className="px-2 py-4" colSpan={7}>
                        no data found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
