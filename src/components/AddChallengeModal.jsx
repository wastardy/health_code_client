import { useState } from "react";
import useStore from "../store/useChallengesStore";

// eslint-disable-next-line react/prop-types
const AddChallengeModal = ({ onClose }) => {
  const { addChallenge } = useStore();
  const [selectedIcon, setSelectedIcon] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const icons = [
    "src/assets/logos/test1.png",
    "src/assets/logos/test2.png",
    "src/assets/logos/test3.png",
    "src/assets/logos/test4.png",
    "src/assets/logos/test5.png",
  ];

  const handleSubmit = () => {
    if (selectedIcon && title && description) {
      const newChallenge = {
        id: Date.now(),
        icon: selectedIcon,
        title,
        description,
      };
      addChallenge(newChallenge);
      onClose();
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <h2 className="text-xl font-bold mb-4">Add a New Challenge</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Section</label>
          <div className="flex justify-around">
            {icons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="challenge icon"
                className={`w-12 h-12 rounded-lg cursor-pointer ${
                  selectedIcon === icon ? "bg-[#a8a6ad54] p-1 drop-shadow-md" : ""
                }`}
                onClick={() => setSelectedIcon(icon)}
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-center gap-2">
          <button
            className="btn bg-[#a27a7ab5] rounded-3xl drop-shadow-lg px-4 py-1"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="btn bg-[#7aa299b5] rounded-3xl drop-shadow-lg px-4 py-1"
            onClick={handleSubmit}
          >
            Add Challenge
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddChallengeModal;
