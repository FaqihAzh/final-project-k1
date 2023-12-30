import React, { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { UpdateCourseACT } from "../redux/actions/Admin/UpdateCourse";
import { courseDetailCourseAct } from "../redux/actions/courseActions/courseDetailCourse";
export const ModalUpdate = ({ setUpdateModal, idCourse }) => {
  const [detailCourse, setDetailCourse] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [author, setAuthor] = useState("");
  const [level, setLevel] = useState("beginner");
  const [category_id, setCategoryId] = useState(1);
  const [requirements, setrequirements] = useState([]);
  const [InputRequirment, setInputRequirment] = useState("");
  const [grupTele, setgrupTele] = useState("");
  const [chapters, setChapters] = useState([]);

  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [selectedModuleIndex, setSelectedModuleIndex] = useState(0);

  useEffect(() => {
    getDetailCourseData();
  }, []);

  const dispatch = useDispatch();

  const getDetailCourseData = async () => {
    const result = await dispatch(courseDetailCourseAct(idCourse));
    setTitle(result.title);
    setDescription(result.description);
    setPrice(result.price);
    setAuthor(result.author);
    setLevel(result.level);
    setgrupTele(result.telegram_group);
    setCategoryId(result.category_id);
    setrequirements(result.requirements);
    setChapters(
      result.chapters.map((value) => ({
        id: value.id,
        name: value.name,
        modules: value.modules.map((tes) => ({
          title: tes.title,
          duration: tes.duration,
          url: tes.url,
          id: tes.id,
          isTrailer: tes.isTrailer,
        })),
      }))
    );
    setDetailCourse(result);
  };
  const handleInputChange = (property, value, chapterIndex, moduleIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters[chapterIndex].modules[moduleIndex][property] = value;
    setChapters(updatedChapters);
  };

  const Post = () => {
    dispatch(
      UpdateCourseACT(idCourse, {
        title: title,
        description: description,
        price: parseInt(price),
        author: author,
        level: level,
        category_id: parseInt(category_id),
        requirements: requirements,
        chapters: chapters,
      })
    );
  };

  const addrequirements = () => {
    if (InputRequirment.trim() !== "") {
      setrequirements([...requirements, InputRequirment]);
      setInputRequirment("");
    }
  };

  const removerequirements = (index) => {
    const newRequirements = [...requirements];
    newRequirements.splice(index, 1);
    setrequirements(newRequirements);
  };

  const handleInput = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    }
    if (e.target.id === "description") {
      setDescription(e.target.value);
    }
    if (e.target.id === "price") {
      setPrice(e.target.value);
    }
    if (e.target.id === "author") {
      setAuthor(e.target.value);
    }
    if (e.target.id === "level") {
      setLevel(e.target.value);
    }
    if (e.target.id === "category_id") {
      setCategoryId(e.target.value);
    }
    if (e.target.id === "grupTele") {
      setgrupTele(e.target.value);
    }
  };

  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* Modal */}
      <div className="bg-white w-[30rem] p-6 rounded shadow-md relative z-50 ">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => {
              setUpdateModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title mt-4 border text-center">
          <h1 className="text-lg font-bold">Update Course</h1>
        </div>
        <div className="body mt-4 border max-h-[25rem] overflow-auto p-2">
          <div className="space-y-4">
            <div className="flex flex-col ">
              <label className="text-sm font-semibold">Nama Kelas</label>
              <input
                className="rounded-lg border p-2 border-gray-300 "
                value={title}
                onChange={handleInput}
                placeholder="title"
                id="title"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Harga</label>
              <input
                value={price}
                className="rounded-lg border p-2 border-gray-300"
                onChange={handleInput}
                placeholder="price"
                id="price"
                type="number"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">author</label>
              <input
                value={author}
                className="rounded-lg border p-2 border-gray-300"
                onChange={handleInput}
                placeholder="author"
                id="author"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Link Grup</label>
              <input
                value={grupTele}
                className="rounded-lg border p-2 border-gray-300"
                onChange={handleInput}
                placeholder="grupTele"
                id="grupTele"
                type="text"
              />
            </div>
            <div className="flex  justify-around">
              <div className="flex flex-col">
                <label className="text-sm font-semibold"> level</label>
                <select
                  className="w-[10rem] border p-2 border-gray-300"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div className="flex flex-col ">
                <h2 className="font-semibold text-sm">Category</h2>
                <select
                  className="w-[13rem] border p-2 border-gray-300"
                  value={category_id}
                  onChange={(e) => setCategoryId(parseInt(e.target.value))}
                >
                  <option value="1">UI/UX Design</option>
                  <option value="2">Web Development</option>
                  <option value="3">Android Development</option>
                  <option value="4">Data Science</option>
                  <option value="5">Business Intelligence</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">description</label>
              <textarea
                value={description}
                className="rounded-lg border p-2 border-gray-300 resize-none h-[8rem]"
                onChange={handleInput}
                placeholder="description"
                id="description"
                type="text"
              ></textarea>
            </div>
            <div>
              <h2 className="font-bold">requirements :</h2>
              {requirements.map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex justify-between my-1 w-[20rem] ">
                    <h2> {item}</h2>
                    <button onClick={() => removerequirements(index)}>
                      <XMarkIcon className="w-[1.2rem] text-red-700" />
                    </button>
                  </div>
                </div>
              ))}
              <div className=" flex space-x-2">
                <input
                  className="rounded-lg  border p-2 border-gray-300"
                  type="text"
                  value={InputRequirment}
                  onChange={(e) => setInputRequirment(e.target.value)}
                />
                <button onClick={addrequirements}>
                  <PlusCircleIcon className="w-[2rem] text-green-500" />
                </button>
              </div>
            </div>
            <div className="border flex flex-col">
              <h1 className="font-semibold mb-2">Chapters dan Modules:</h1>
              {chapters.length > 0 && (
                <>
                  <label className="text-sm font-semibold">
                    Pilih Chapter:{" "}
                  </label>
                  <select
                    className="border p-2 border-gray-300"
                    value={selectedChapterIndex}
                    onChange={(e) => {
                      const index = parseInt(e.target.value);
                      setSelectedChapterIndex(index);
                      setSelectedModuleIndex(0); // Reset selected module index when chapter changes
                    }}
                  >
                    {chapters.map((chapter, index) => (
                      <option key={index} value={index}>
                        {chapter.name}
                      </option>
                    ))}
                  </select>

                  {chapters[selectedChapterIndex] && (
                    <>
                      <label className="text-sm font-semibold">
                        Pilih Module:{" "}
                      </label>
                      <select
                        className="border p-2 border-gray-300"
                        value={selectedModuleIndex}
                        onChange={(e) => {
                          const index = parseInt(e.target.value);
                          setSelectedModuleIndex(index);
                        }}
                      >
                        {chapters[selectedChapterIndex].modules.map(
                          (module, index) => (
                            <option key={index} value={index}>
                              {module.title}
                            </option>
                          )
                        )}
                      </select>

                      <div className="flex flex-col">
                        <label className="text-sm font-semibold">
                          Module Title:{" "}
                        </label>
                        <input
                          className="rounded-lg border p-2 border-gray-300"
                          type="text"
                          value={
                            chapters[selectedChapterIndex].modules[
                              selectedModuleIndex
                            ]
                              ? chapters[selectedChapterIndex].modules[
                                  selectedModuleIndex
                                ].title
                              : ""
                          }
                          onChange={(e) =>
                            handleInputChange(
                              "title",
                              e.target.value,
                              selectedChapterIndex,
                              selectedModuleIndex
                            )
                          }
                        />

                        <label className="text-sm font-semibold">
                          Module Duration:{" "}
                        </label>
                        <input
                          className="rounded-lg border p-2 border-gray-300"
                          type="number"
                          value={
                            chapters[selectedChapterIndex].modules[
                              selectedModuleIndex
                            ]
                              ? chapters[selectedChapterIndex].modules[
                                  selectedModuleIndex
                                ].duration
                              : 0
                          }
                          onChange={(e) =>
                            handleInputChange(
                              "duration",
                              parseInt(e.target.value, 10),
                              selectedChapterIndex,
                              selectedModuleIndex
                            )
                          }
                        />

                        <label className="text-sm font-semibold">
                          Module URL:
                        </label>
                        <input
                          className="rounded-lg border p-2 border-gray-300"
                          type="text"
                          value={
                            chapters[selectedChapterIndex].modules[
                              selectedModuleIndex
                            ]
                              ? chapters[selectedChapterIndex].modules[
                                  selectedModuleIndex
                                ].url
                              : ""
                          }
                          onChange={(e) =>
                            handleInputChange(
                              "url",
                              e.target.value,
                              selectedChapterIndex,
                              selectedModuleIndex
                            )
                          }
                        />

                        <div className="flex flex-col">
                          <label className="text-sm font-semibold">
                            Trailer
                          </label>
                          <select
                            className="w-[10rem] border p-2 border-gray-300"
                            value={chapters[selectedChapterIndex].modules[
                              selectedModuleIndex
                            ].isTrailer.toString()}
                            onChange={(e) =>
                              handleInputChange(
                                "isTrailer",
                                e.target.value === "true",
                                selectedChapterIndex,
                                selectedModuleIndex
                              )
                            }
                          >
                            <option value="false">False</option>
                            <option value="true">True</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="footer mt-6 flex justify-center">
          <button
            className="text-gray-500 hover:text-gray-700 mr-4"
            onClick={() => {
              setUpdateModal(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={Post}
            className="bg-[#FFC27A] hover:bg-[#FFA337] text-white font-bold py-2 px-4 rounded"
          >
            Update Course
          </button>
        </div>
      </div>
    </div>
  );
};
