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
        {}, // empty body
        { withCredentials: true } // ensures cookies are sent
      );
  
      // Navigate to login page after successful logout
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400">Knowledge Vault</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
        >
          Logout
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Notes Section */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition">
            <h2 className="text-2xl font-semibold mb-2">📝 Notes</h2>
            <p className="text-gray-300 mb-4">
              Create and manage your notes for anything you want to remember or
              explore.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/dashboard/notes"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
              >
                View Notes
              </Link>
              <Link
                to="/dashboard/notes/create"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
              >
                Create Note
              </Link>
            </div>
          </div>

          {/* Todos Section */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition">
            <h2 className="text-2xl font-semibold mb-2">✅ Todos</h2>
            <p className="text-gray-300 mb-4">
              Track your daily tasks, mark them done, and stay productive.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/dashboard/todos"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
              >
                View Todos
              </Link>
              <Link
                to="/dashboard/todos/create"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
              >
                Create Todo
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Built with 💙 by Hema Esther</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
