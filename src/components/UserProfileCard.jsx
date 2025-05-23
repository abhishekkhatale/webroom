import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";

const UserProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      console.log(user);
    }
  }, []);

  if (!user) {
    return (
      <div className="md:col-span-3 bg-white rounded-xl border border-gray-200 p-6">
        <p className="text-gray-600">Loading user profile...</p>
      </div>
    );
  }

  return (
    <div className="md:col-span-3 bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center space-x-4">
        <div className="bg-black p-3 rounded-full">
          <FiUser className="text-white text-2xl" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-black">{user.name}</h2>
          <p className="text-gray-600">{user.course}</p>
          <p className="text-gray-500 text-sm">{user.year}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
