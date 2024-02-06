// Import necessary dependencies
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../landingPage/Footer";
import { getAuth, signOut } from "firebase/auth";
import { Helmet } from "react-helmet";
import { FallingLines } from "react-loader-spinner";

export const Admin = () => {
  // State to store the list of users
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  // useEffect to fetch the list of users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Make an Axios request to fetch the list of users
        const response = await axios.get(
          `${import.meta.env.VITE_BULLISH_API_BASE_URL}/admin`
        );

        const { listOfUsers } = response.data;
        const sortedUsers = listOfUsers.sort(
          (a, b) =>
            new Date(b.metadata.creationTime) -
            new Date(a.metadata.creationTime)
        );
        setUsers(sortedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    // Call the async function
    fetchUsers();
  }, []); // Empty dependency array ensures the useEffect runs only once

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
      const blob = new Blob([jsonData], { type: "application/json" });

      // Create a download link
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "Bullish Users.txt";

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
    <>
      <Helmet>
        <title>Admin Dashboard | Bullish Network</title>
        <meta
          name="description"
          content="Access the admin dashboard of the Bullish Network to manage website functionalities and view signed-up account information, including names, emails, and dates of creation. Join our community for financial empowerment and insights."
        />
        <meta
          name="keywords"
          content="admin, dashboard, Bullish Network, community, financial empowerment"
        />
        <meta name="author" content="Bullish Network" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Admin Dashboard | Bullish Network" />
        <meta
          property="og:description"
          content="Access the admin dashboard of the Bullish Network to manage website functionalities and view signed-up account information, including names, emails, and dates of creation. Join our community for financial empowerment and insights."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/duh30yscb/image/upload/v1700042311/bullish_network/1-min_v4ujuu.png"
        />
        <meta property="og:url" content="https://bullishnetwork.xyz/admin" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Admin Dashboard | Bullish Network"
        />
        <meta
          name="twitter:description"
          content="Access the admin dashboard of the Bullish Network to manage website functionalities and view signed-up account information, including names, emails, and dates of creation. Join our community for financial empowerment and insights."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/duh30yscb/image/upload/v1700042311/bullish_network/1-min_v4ujuu.png"
        />
      </Helmet>

      <div
        className="w-full min-h-screen justify-between flex flex-col pt-12 items-center text-center gap-12 relative "
        style={{ zIndex: 100 }}
      >
        <div className="blur blur-effect"></div>
        <div className="blur blur-effect-1"></div>

        <div className="content_container py-8 px-4 lg:p-12 relative overflow-hidden ">
          <div
            style={{
              zIndex: 1,
            }}
            className="w-full flex flex-col items-center text-center gap-12"
          >
            <h2 className="text-3xl font-bold uppercase">
              Authenticated Users
            </h2>

            <div className="w-full overflow-x-scroll md:overflow-hidden">
              {!loading ? (
                <div className="w-full flex flex-col items-center text-center gap-12 pb-6">
                  <table className="min-w-full  rounded-lg border border-gray-300 ">
                    <thead className="bg-main_bg">
                      <tr className="sm:grid sm:grid-cols-2 md:grid-cols-3">
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Created At</th>
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
                          <td className="py-2 px-4">
                            {user.metadata.creationTime}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <button
                    onClick={downloadData}
                    className="main_button"
                    role="button"
                  >
                    <span className="text">Download</span>
                  </button>
                </div>
              ) : (
                 <div className="flex flex-col items-center justify-center gap-6">
                  <h3 className="">Loading Data ...</h3>
                  <FallingLines
                    color="#0283C6"
                    width="50"
                    visible={true}
                    ariaLabel="falling-lines-loading"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-12">
          <Link to="/">
            <button className="main_button" role="button">
              <span className="text">Back</span>
            </button>
          </Link>

          <button onClick={signOutUser} className="main_button" role="button">
            <span className="text">Sign Out</span>
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};
