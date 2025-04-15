import axios from "axios";
import { useEffect, useState } from "react";

function ViewNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:3002/api/notes/get", {
          withCredentials: true,
        });
        console.log(res);
        setNotes(res.data);
      } catch (error) {
        console.log("errrrr", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Notes</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {notes.map((note, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{note.title}</h3>
            <p className="text-gray-300 whitespace-pre-wrap">{note.content}</p>
            <p className="text-sm text-gray-500 mt-4">
              Created on: {new Date(note.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewNotes;
