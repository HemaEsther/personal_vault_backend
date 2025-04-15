import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateNotes() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post("http://localhost:3002/api/notes/create", {title,content},{
            withCredentials:true
        })
        // console.log("res from backend", res)
        if(res.status===200){
            navigate("/dashboard/notes/view");
        }
    } catch (error) {
        console.log("error in creating notes", error)
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-gray-800 p-8 rounded-2xl shadow-lg space-y-4"
      >
        <h2 className="text-4xl font-bold text-center">Create New Note</h2>

        <div>
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            className="w-full p-4 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title for your note"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Content</label>
          <textarea
            className="w-full h-[250px] p-4 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note here..."
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 px-6 py-2 rounded-lg font-semibold"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNotes;
