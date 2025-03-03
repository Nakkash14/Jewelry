import React from "react";
import { motion } from "framer-motion";
import { CameraIcon } from "lucide-react";
import "./UserProfile.css";

const UserProfile = () => {
  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (confirmDelete) {
      alert("Your account has been deleted.");
      // API call for account deletion would go here.
    }
  };

  return (
    <motion.div className="profile-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="profile-card">
        {/* Profile Picture Section */}
        {/* <div className="profile-pic-container">
          <img src="/profile-placeholder.jpg" alt="Profile" className="profile-pic" />
          <label className="profile-pic-upload">
            <CameraIcon className="icon" />
            <input type="file" className="hidden" />
          </label>
        </div> */}

        {/* User Details */}
        <p className="user-name">John Doe</p>
        <p className="user-email">📧 johndoe@example.com</p>
        <p className="user-phone">📞 +1234567890</p>
        <p className="user-birthday">🎂 Birthday: February 20, 1985</p>
        <p className="user-location">📍 Location: New York, USA</p>
        {/* <p className="user-preferred-jewelry">💎 Preferred Jewelry: Rings, Necklaces</p> */}
        {/* <p className="user-status">✅ Account Status: Active</p> */}
        <p className="user-address">🏠 Address: 123 Jewelry St, Diamond City</p>
        <p className="user-join-date">📅 Joined: January 1, 2020</p>

        {/* Buttons */}
        <div className="button-group">
          <button className="edit-button">Edit Profile</button>
          <button className="delete-button" onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;