// Import necessary dependencies
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../landingPage/Footer";
import { getAuth, signOut } from "firebase/auth";

export const Admin = () => {
  // State to store the list of users
  const [users, setUsers] = useState([]);
  const auth = getAuth();

  // useEffect to fetch the list of users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Make an Axios request to fetch the list of users
        const response = await axios.get(`${import.meta.env.VITE_BULLISH_API_BASE_URL}/admin`);

        const { listOfUsers } = response.data;
        // Set the users state with the data from the response
        setUsers(listOfUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // Call the async function
    fetchUsers();
  }, []); // Empty dependency array ensures the useEffect runs only once

  console.log(users);

  const navigate = useNavigate();

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("error while signing out user");
    } finally {
      navigate("/");
    }
  };

  const downloadData = () => {
    try {
      // Extract necessary user data for download
      const userData = users.map((user) => ({
        Name: user.displayName,
        Email: user.email,
        Created_At: user.metadata.creationTime,
      }));

      // Convert the data to a JSON string
      const jsonData = JSON.stringify(userData, null, 2);

      // Create a Blob containing the data
      const blob = new Blob([jsonData], { type: 'application/json' });

      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'user_data.txt';

      // Append the link to the body
      document.body.appendChild(downloadLink);

      // Trigger the click event on the link
      downloadLink.click();

      // Remove the link from the DOM
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error downloading data:", error);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col py-4 items-center text-center gap-12">
      <div className="content_container py-8 px-4 lg:p-12 relative overflow-hidden ">
        <div
          style={{
            zIndex: 1,
          }}
          className="w-full flex flex-col items-center text-center gap-12"
        >
          <h2 className="text-3xl font-bold uppercase">Authenticated Users</h2>

          <div className="w-full overflow-x-scroll md:overflow-hidden">
            <table className="min-w-full  rounded-lg border border-gray-300 ">
              <thead className="bg-main_bg">
                <tr className="sm:grid sm:grid-cols-2 md:grid-cols-3">
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Created At</th>
                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 ">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="sm:grid sm:grid-cols-2 md:grid-cols-3 items-center "
                  >
                    <td className="py-2 px-4">{user.displayName}</td>
                    <td className="py-2 px-4">{user.email}</td>
                    <td className="py-2 px-4">{user.metadata.creationTime}</td>
                    {/* Add more columns as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button onClick={downloadData} className="main_button" role="button">
          Download
        </button>
      </div>
      <div className="flex gap-12">
        <Link to="/">
          <button className="main_button" role="button">
            Back
          </button>
        </Link>

        <button onClick={signOutUser} className="main_button" role="button">
          Sign Out
        </button>
      </div>
      <Footer />
    </div>
  );
};
