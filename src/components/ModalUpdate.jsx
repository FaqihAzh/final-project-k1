import React, { useEffect, useState } from "react";
import { BackspaceIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { UpdateCourseACT } from "../redux/actions/Admin/UpdateCourse";
import { courseDetailCourseAct } from "../redux/actions/courseActions/courseDetailCourse";
export const ModalUpdate = ({ setUpdateModal, idCourse }) => {
  const [detailCourse, setDetailCourse] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [author, setAuthor] = useState("");
  const [level, setLevel] = useState("beginner");
  const [category_id, setCategoryId] = useState(1);
  const [requirements, setrequirements] = useState([]);
  const [InputRequirment, setInputRequirment] = useState("");
  const [chapters, setChapters] = useState([]);

  const [inputChapterName, setInputChapterName] = useState("");
  const [inputModuleTitle, setInputModuleTitle] = useState("");
  const [inputModuleDuration, setInputModuleDuration] = useState("");
  const [inputModuleUrl, setInputModuleUrl] = useState("");
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);

  console.log(detailCourse, "detailCourse");
  useEffect(() => {
    getDetailCourseData();
  }, []);

  const dispatch = useDispatch();

  const getDetailCourseData = async () => {
    const result = await dispatch(courseDetailCourseAct(idCourse));
    setTitle(result.title);
    setDescription(result.description);
    setImage(result.image);
    setPrice(result.price);
    setAuthor(result.author);
    setLevel(result.level);
    setCategoryId(result.category_id);
    setrequirements(result.requirements);
    setChapters(result.chapters);
    setDetailCourse(result);
  };

  console.log(detailCourse, "1");

  const Post = () => {
    dispatch(
      UpdateCourseACT(idCourse, {
        title: title,
        description: description,
        image: image,
        price: parseInt(price),
        author: author,
        level: level,
        category_id: parseInt(category_id),
        requirements: requirements,
        chapters: chapters.map((chapter) => ({
          name: chapter.name,
          modules: chapter.modules.map((module) => ({
            title: module.title,
            duration: module.duration,
            url: module.url,
          })),
        })),
      })
    );
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const addChapter = () => {
    if (inputChapterName.trim() !== "") {
      const newChapter = {
        name: inputChapterName,
        modules: [],
      };

      setChapters([...chapters, newChapter]);
      setInputChapterName("");
    } else {
      alert("Nama Chapter tidak boleh kosong!");
    }
  };

  const removeChapter = (chapterIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters.splice(chapterIndex, 1);
    setChapters(updatedChapters);
  };

  const addModule = () => {
    if (
      inputModuleTitle.trim() !== "" &&
      inputModuleDuration.trim() !== "" &&
      inputModuleUrl.trim() !== ""
    ) {
      const newModule = {
        title: inputModuleTitle,
        duration: parseInt(inputModuleDuration),
        url: inputModuleUrl,
      };

      const updatedChapters = [...chapters];
      updatedChapters[selectedChapterIndex].modules.push(newModule);
      setChapters(updatedChapters);

      setInputModuleTitle("");
      setInputModuleDuration("");
      setInputModuleUrl("");
    } else {
      alert("Semua input module harus diisi!");
    }
  };

  const removeModule = (chapterIndex, moduleIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters[chapterIndex].modules.splice(moduleIndex, 1);
    setChapters(updatedChapters);
  };
  console.log(chapters, "chapters");

  console.log(idCourse, "ini id");
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
    if (e.target.id === "image") {
      setImage(e.target.value);
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
  };

  console.log(requirements, "requirements");

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
          <h1 className="text-lg font-bold">Tambah Course</h1>
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
              <label className="text-sm font-semibold">description</label>
              <input
                value={description}
                className="rounded-lg border p-2 border-gray-300"
                onChange={handleInput}
                placeholder="description"
                id="description"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold"> Image</label>
              <input
                value={image}
                className="rounded-lg border p-2 border-gray-300"
                onChange={handleInput}
                placeholder="image"
                id="image"
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
            <div className="flex  justify-between">
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
                  className="w-[10rem] border p-2 border-gray-300"
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
              {chapters.length === 0 ? (
                <p className=" mb-[1rem]">
                  Tidak ada data chapter saat ini. Silakan tambahkan chapter
                  baru.
                </p>
              ) : (
                <ul>
                  {chapters.map((chapter, chapterIndex) => (
                    <li key={chapterIndex}>
                      <strong className="flex space-x-2">
                        <h2 className="text-[1.2rem]">
                          Chapter: {chapter.name}
                        </h2>
                        <button onClick={() => removeChapter(chapterIndex)}>
                          <BackspaceIcon className="w-[1.3rem] text-red-700 " />
                        </button>
                      </strong>
                      <ul className="">
                        {chapter.modules.map((module, moduleIndex) => (
                          <li
                            key={moduleIndex}
                            className="flex flex-col w-[100%] justify-between"
                          >
                            <div className="mb-2">
                              <h2 className="block">
                                {`Module: ${module.title}`}
                              </h2>
                            </div>
                            <div className="mb-2">
                              <span className="block">
                                {`Duration: ${module.duration}`}
                              </span>
                            </div>
                            <div>
                              <span className="block">
                                {`URL: ${module.url}`}
                              </span>
                            </div>
                            <button
                              onClick={() =>
                                removeModule(chapterIndex, moduleIndex)
                              }
                              className="mt-2 bg-[#FFC27A] hover:bg-[#FFA337] text-white font-bold py-1 px-2 rounded"
                            >
                              <XMarkIcon className="w-[1.2rem] text-red-700" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex mt-4 flex-col  ">
                <label className="text-sm font-semibold">Chapter Name: </label>
                <input
                  className="rounded-lg border p-2 border-gray-300 "
                  type="text"
                  value={inputChapterName}
                  onChange={(e) => setInputChapterName(e.target.value)}
                />
                <button
                  onClick={addChapter}
                  className="bg-[#FFC27A] hover:bg-[#FFA337] text-white font-bold py-2 px-4 rounded mx-auto my-2 w-[13rem] h-[2rem]"
                >
                  Tambahkan Chapter
                </button>
              </div>

              {chapters.length > 0 && (
                <>
                  <label className="text-sm font-semibold">
                    Pilih Chapter:{" "}
                  </label>
                  <select
                    className="border p-2 border-gray-300"
                    value={selectedChapterIndex}
                    onChange={(e) =>
                      setSelectedChapterIndex(parseInt(e.target.value))
                    }
                  >
                    {chapters.map((chapter, index) => (
                      <option key={index} value={index}>
                        {chapter.name}
                      </option>
                    ))}
                  </select>
                </>
              )}

              <label className="text-sm font-semibold">Module Title: </label>
              <input
                className="rounded-lg border p-2 border-gray-300"
                type="text"
                value={inputModuleTitle}
                onChange={(e) => setInputModuleTitle(e.target.value)}
              />

              <label className="text-sm font-semibold">Module Duration: </label>
              <input
                className="rounded-lg border p-2 border-gray-300"
                type="number"
                value={inputModuleDuration}
                onChange={(e) => setInputModuleDuration(e.target.value)}
              />

              <label className="text-sm font-semibold">Module URL: </label>
              <input
                className="rounded-lg border p-2 border-gray-300"
                type="text"
                value={inputModuleUrl}
                onChange={(e) => setInputModuleUrl(e.target.value)}
              />

              <button
                onClick={addModule}
                className="bg-[#FFC27A] hover:bg-[#FFA337] text-white font-bold py-2 px-4 rounded mx-auto my-2 w-[11rem] h-[2rem]"
              >
                Tambah Module
              </button>
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
