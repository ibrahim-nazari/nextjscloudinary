import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [uploaded, setuploaded] = useState(0);
  const [data, setdata] = useState({
    title: "",
    description: "",
    url: "",
    public_id: "",
  });
  const onChange = async (event) => {
    const formData = new FormData();
    let files = event.target.files;
    formData.append("image", files[0]);
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        let uploadedData = Math.round((event.loaded * 100) / event.total);
        setuploaded(uploadedData);
      },
    };
    const { data: dataCome } = await axios.post(
      "/api/upload?path=blogs",
      formData,
      config
    );
    setdata({ ...data, public_id: dataCome.public_id, url: dataCome.url });
  };
  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setdata({ ...data, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    axios.post("/api/post", data).then(({ data }) => {
      console.log(data);
    });
  };
  console.log("data", data);
  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={submit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="title"
            onChange={handlechange}
            name="title"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow h-48 appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            onChange={handlechange}
            name="description"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Select in Image
          </label>
          <label className="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input type="file" className="hidden" onChange={onChange} />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
