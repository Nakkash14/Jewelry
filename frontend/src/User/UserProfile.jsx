// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import "./UserProfile.css";

// const UserProfile = () => {
//   const navigate = useNavigate();

//   const handleDeleteAccount = () => {
//     const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
//     if (confirmDelete) {
//       alert("Your account has been deleted.");
//       // API call to delete the account goes here
//     }
//   };

//   return (
//     <motion.div className="classic-profile-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//       <div className="classic-profile-card">
//         <h1 className="classic-title">User Profile</h1>

//         <div className="classic-details">
//           <div className="detail-row"><strong>Name:</strong> John Doe</div>
//           <div className="detail-row"><strong>Email:</strong> johndoe@example.com</div>
//           <div className="detail-row"><strong>Phone:</strong> +1 234 567 890</div>
//           <div className="detail-row"><strong>Birthday:</strong> February 20, 1985</div>
//           <div className="detail-row"><strong>Location:</strong> New York, USA</div>
//           <div className="detail-row"><strong>Address:</strong> 123 Jewelry St, Diamond City</div>
//           <div className="detail-row"><strong>Joined:</strong> January 1, 2020</div>
//         </div>

//         <div className="classic-buttons">
//           <button className="btn-classic edit" onClick={() => navigate("/edit-profile")}>Edit Profile</button>
//           <button className="btn-classic delete" onClick={handleDeleteAccount}>Delete Account</button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default UserProfile;








import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // Add actual account deletion logic here
      alert("Your account has been deleted.");
    }
  };

  const userDetails = [
    { label: "Full Name", value: "John Doe" },
    { label: "Email Address", value: "johndoe@example.com" },
    { label: "Contact Number", value: "+1 234 567 890" },
    { label: "Date of Birth", value: "February 20, 1985" },
    { label: "Current Location", value: "New York, USA" },
    { label: "Residential Address", value: "123 Jewelry St, Diamond City" },
    { label: "Member Since", value: "January 1, 2020" },
  ];

  return (
    <motion.div
      className="user-profile-page luxury-background"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="luxury-profile-card">
        <h1 className="luxury-profile-title">User Profile</h1>

        <div className="luxury-profile-info">
          {userDetails.map(({ label, value }, index) => (
            <div className="luxury-profile-row" key={index}>
              <span className="luxury-label">{label}</span>
              <span className="luxury-value">{value}</span>
            </div>
          ))}
        </div>

        <div className="luxury-profile-actions">
          <button className="btn luxury-edit-btn" onClick={() => navigate("/edit-profile")}>
            Edit Profile
          </button>
          <button className="btn luxury-delete-btn" onClick={handleDeleteAccount}>
            Delete Account
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;