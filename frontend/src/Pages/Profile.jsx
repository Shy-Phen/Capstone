import { useAuthStore } from "../store/authStore";

const Profile = () => {
  const { authUser, logout } = useAuthStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">User Profile</h1>
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Name:</span>
            <span className="font-medium">{authUser.username}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Email:</span>
            <span className="font-medium">{authUser.email}</span>
          </div>
          <button onClick={logout}>LogOut</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
