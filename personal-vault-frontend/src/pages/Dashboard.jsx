import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3002/api/auth/logout",
        {},
        { withCredentials: true }
      );
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-8">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-purple-400 drop-shadow-sm">
          Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="bg-purple-600 hover:bg-red-700 px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-md"
        >
          Logout
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-10 max-w-6xl mx-auto"
      >
        {/* Notes Section */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-purple-600/30 transition-all">
          <h2 className="text-3xl font-bold text-purple-300 mb-3">📝 Notes</h2>
          <p className="text-gray-300 mb-6">
            Create and manage your notes for anything you want to remember or explore.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/dashboard/notes"
              className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg shadow-md transition-all"
            >
              View Notes
            </Link>
            <Link
              to="/dashboard/notes/create"
              className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg shadow-md transition-all"
            >
              Create Note
            </Link>
          </div>
        </div>

        {/* Todos Section */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-purple-600/30 transition-all">
          <h2 className="text-3xl font-bold text-purple-300 mb-3">✅ Todos</h2>
          <p className="text-gray-300 mb-6">
            Track your daily tasks, mark them done, and stay productive.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/dashboard/todos"
              className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg shadow-md transition-all"
            >
              View Todos
            </Link>
            <Link
              to="/dashboard/todos/create"
              className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg shadow-md transition-all"
            >
              Create Todo
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-16 text-center text-sm text-gray-500">
        <p>Built with 💙 by Hema Esther</p>
      </div>
    </div>
  );
};

export default Dashboard;
