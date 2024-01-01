import React, { useState } from "react";

import { BackspaceIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { UsepostDataCourses } from "../services/admin/post-courses";

export const ModalAddCourse = ({ setOpenModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(0);
  const [author, setAuthor] = useState("");
  const [level, setLevel] = useState("beginner");
  const [category_id, setCategoryId] = useState(1);
  const [requirements, setrequirements] = useState([]);
  const [InputRequirment, setInputRequirment] = useState("");
  const [trailer, settrailer] = useState(false);
  const [teleGrup, setteleGrup] = useState("");
  const [chapters, setChapters] = useState([]);

  const [inputChapterName, setInputChapterName] = useState("");
  const [inputModuleTitle, setInputModuleTitle] = useState("");
  const [inputModuleDuration, setInputModuleDuration] = useState("");
  const [inputModuleUrl, setInputModuleUrl] = useState("");
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    if (file) {
      setImage(file);
    }
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
        isTrailer: trailer,
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
  


  const { mutate: PostCourses } = UsepostDataCourses();

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
    if (e.target.id === "teleGrup") {
      setteleGrup(e.target.value);
    }
  };

  const Post = () => {
    PostCourses({
      title: title,
      description: description,
      image: image,
      price: parseInt(price),
      author: author,
      telegram_group: teleGrup,
      level: level,
      category_id: parseInt(category_id),
      requirements: requirements,
      chapters: chapters,
    });
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
              setOpenModal(false);
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
                onChange={handleInput}
                placeholder="title"
                id="title"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Harga</label>
              <input
                className="rounded-lg border p-2 border-gray-300"
                onChange={handleInput}
                placeholder="price"
                id="price"
                type="number"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Author</label>
              <input
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
                className="rounded-lg border p-2 border-gray-300"
                onChange={handleInput}
                placeholder="teleGrup"
                id="teleGrup"
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
                className="rounded-lg border p-2 border-gray-300 resize-none h-[8rem]"
                onChange={handleInput}
                placeholder="description"
                id="description"
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold"> Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4"
              />
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
                <p className="mb-4 text-gray-600">
                  Tidak ada data chapter saat ini. Silakan tambahkan chapter
                  baru.
                </p>
              ) : (
                <ul className="list-disc pl-4">
                  {chapters.map((chapter, chapterIndex) => (
                    <li key={chapterIndex} className="mb-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">
                          Chapter: {chapter.name}
                        </h2>
                        <button onClick={() => removeChapter(chapterIndex)}>
                          <BackspaceIcon className="w-5 h-5 text-red-700" />
                        </button>
                      </div>
                      <ul className="list-disc pl-8">
                        {chapter.modules.map((module, moduleIndex) => (
                          <li
                            key={moduleIndex}
                            className="flex items-center justify-between"
                          >
                            <div>
                              <h2 className="text-base ">
                                Module: {module.title}
                              </h2>
                              <p className="text-sm text-gray-500">
                                Duration: {module.duration} minutes
                              </p>
                              <p className="text-sm text-gray-500">
                                URL:{" "}
                                <a href={module.url} className="text-blue-500">
                                  {module.url}
                                </a>
                              </p>
                              <p className="text-sm text-gray-500">
                                Trailer: {module.isTrailer ? "True" : "False"}
                              </p>
                            </div>
                            <button
                              onClick={() =>
                                removeModule(chapterIndex, moduleIndex)
                              }
                            >
                              <XMarkIcon className="w-4 h-4 text-red-700" />
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
                    className="rounded-lg border p-2 border-gray-300  "
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
              <div className="flex flex-col">
                <label className="text-sm font-semibold"> Trailer</label>
                <select
                  className="w-[10rem] border p-2 border-gray-300"
                  value={trailer}
                  onChange={(e) => settrailer(e.target.value)}
                >
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
              </div>

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
              setOpenModal(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={Post}
            className="bg-[#FFC27A] hover:bg-[#FFA337] text-white font-bold py-2 px-4 rounded"
          >
            Post Course
          </button>
        </div>
      </div>
    </div>
  );
};
