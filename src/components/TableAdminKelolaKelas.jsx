import React, { useState } from "react";
import { useFetchDataCourses } from "../services/admin/get-courses";
import { ModalAddCourse } from "./ModalAddCourse ";
import { ModalDelete } from "./ModalDelete";
import { ForwardIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { BackwardIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { DeleteCourseAct } from "../redux/actions/Admin/DeleteCourse";
import { ModalUpdate } from "./ModalUpdate";
// import { UpdateCourseACT } from "../redux/actions/Admin/UpdateCourse";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const TableAdminKelolaKelas = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDelete, setmodalDelete] = useState(false);
  const [modalUpdate, setmodalUpdate] = useState(false);
  const [idCorse, setidCorse] = useState();
  const [search, setsearch] = useState("");
  const [Page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const categories = [
    "",
    "UI/UX Design",
    "Web Development",
    "Android Development",
    "Data Science",
  ];
  const levels = ["", "beginner", "intermediate", "advanced"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const handleFilterButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { data: fetchData } = useFetchDataCourses({
    ...(selectedLevel || selectedCategory
      ? {
          level: selectedLevel,
          category: selectedCategory,
          search: search,
        }
      : {
          page: Page,
          limit: 10,
          search: search,
        }),
  });

  const handleDelete = () => {
    dispatch(DeleteCourseAct(datarender.id));
  };

  const datarender =
    search || selectedCategory || selectedLevel
      ? fetchData?.data
      : fetchData?.data?.courses;

  const getCategoryNameById = (categoryId) => {
    switch (categoryId) {
      case 1:
        return "UI/UX Design";
      case 2:
        return "Web Development";
      case 3:
        return "Android Development";
      case 4:
        return "Data Science";
      case 5:
        return "Business Intelligence";
      default:
        return "Unknown Category";
    }
  };

  return (
    <div className="">
      <div className=" my-1 flex justify-between items-center px-[0.5rem] md:px-[2rem]">
        <h2 className="font-bold text-[1.2rem]">Kelola Kelas</h2>
        <div className="flex space-x-3">
          <div className="relative z-0">
            <button
              onClick={handleFilterButtonClick}
              className="text-sm font-medium text-[#6176F7] text-center border h-full flex items-center  py-2 px-4 rounded-3xl border-[#6176F7]"
            >
              <FunnelIcon className="w-[1.2rem]" />
              Filter
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 z-10 -ml-[2.8rem] bg-white shadow-md rounded-md ">
                <div className="outline outline-[#6176F7] w-auto px-4 py-2 flex flex-col">
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Category:
                    </label>
                    {categories.map((category) => (
                      <div key={category} className="flex items-center mt-1">
                        <input
                          type="radio"
                          id={category || "all"}
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={() => handleCategoryChange(category)}
                          className="mr-2"
                        />
                        <label htmlFor={category || "all"}>
                          {category || "All"}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <label className="text-sm font-medium text-gray-600">
                      Level:
                    </label>
                    {levels.map((level) => (
                      <div key={level} className="flex items-center mt-1">
                        <input
                          type="radio"
                          id={level || "all"}
                          name="level"
                          value={level}
                          checked={selectedLevel === level}
                          onChange={() => handleLevelChange(level)}
                          className="mr-2"
                        />
                        <label htmlFor={level || "all"}>{level || "All"}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            className="bg-[#FFC27A] hover:bg-[#FFA337] text-white font-bold py-2 px-4 rounded-3xl"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Tambah Course
          </button>
          <div className="relative flex items-center">
            <input
              type="text"
              className="border border-[#FFC27A] rounded-3xl outline-none pl-4 pr-10 py-2 w-[10rem]"
              placeholder="Search..."
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
            <MagnifyingGlassIcon className="absolute right-3 w-[1rem] top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {modalOpen && <ModalAddCourse setOpenModal={setModalOpen} />}
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 border-b text-left font-semibold">ID</th>
              <th className="py-3 px-6 border-b text-left font-semibold">
                Category
              </th>
              <th className="py-3 px-6 border-b text-left font-semibold">
                Author
              </th>
              <th className="py-3 px-6 border-b text-left font-semibold">
                Title
              </th>
              <th className="py-3 px-6 border-b text-left font-semibold">
                Level
              </th>
              <th className="py-3 px-6 border-b text-left font-semibold">
                Price
              </th>
              <th className="py-3 px-6 border-b text-left font-semibold">
                Ratings
              </th>
              <th className="py-3 px-6 border-b text-left font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(datarender) ? (
              datarender.map((value) => (
                <tr
                  key={value.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50"
                >
                  <td className="py-4 px-6 border-b">{value.id}</td>
                  <td className="py-4 px-6 border-b">
                    {getCategoryNameById(value.category_id)}
                  </td>
                  <td className="py-4 px-6 border-b">{value.author}</td>
                  <td className="py-4 px-6 border-b">{value.title}</td>
                  <td className="py-4 px-6 border-b">{value.level}</td>
                  <td className="py-4 px-6 border-b">
                    {value.price === 0 ? "Gratis" : value.price}
                  </td>
                  <td className="py-4 px-6 border-b text-center">
                    {value.averageRating}
                  </td>
                  <td className="py-4 px-6 border-b space-x-3 flex">
                    <button
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      onClick={() => {
                        // dispatch(UpdateCourseACT(value.id));
                        setidCorse(parseInt(value.id));
                        setmodalUpdate(true);
                      }}
                    >
                      Ubah
                    </button>
                    <button
                      onClick={() => {
                        setmodalDelete(true);
                        setidCorse(parseInt(value.id));
                      }}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4">
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {modalDelete && (
          <ModalDelete
            setDeleteModal={setmodalDelete}
            idCourse={idCorse}
            Delete={handleDelete}
          />
        )}
        {modalUpdate && (
          <ModalUpdate setUpdateModal={setmodalUpdate} idCourse={idCorse} />
        )}
      </div>
      <div className="flex justify-center items-center space-x-10">
        {search === "" && !selectedLevel && !selectedCategory && (
          <>
            <button
              onClick={() => {
                Page > 1 && setPage(Page - 1);
              }}
            >
              <BackwardIcon className="w-[2rem]" />
            </button>
            <h2>{Page}</h2>
            <button
              onClick={() => {
                setPage(Page + 1);
              }}
            >
              <ForwardIcon className="w-[2rem]" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
