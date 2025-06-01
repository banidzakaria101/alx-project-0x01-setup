import { UserProps, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserProps>({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
          <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
          <input type="text" name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
          <input type="text" name="website" placeholder="Website" value={user.website} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
          <button type="submit" className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
          <button type="button" onClick={onClose} className="w-full mt-2 text-gray-600 hover:text-gray-800">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;