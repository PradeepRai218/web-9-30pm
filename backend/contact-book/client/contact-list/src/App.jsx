import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
function App() {
  let apiBaseUrl = `http://localhost:8000/enquiry/`;

  const [formData, setFormData] = useState({
    studentName: "",
    studentEmail: "",
    studentPhone: "",
  });
  const [contacts, setContacts] = useState([]);

  let handleChange = (e) => {
    let inputName = e.target.name; //email
    let inputValue = e.target.value;

    let obj = { ...formData };
    obj[inputName] = inputValue;

    setFormData(obj);

    console.log(inputName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${apiBaseUrl}save`, formData)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes._status) {
           Swal.fire({
              title: "Data Added!",
              text: "new enquiry created",
              icon: "success",
            });
          getEnquiry();
          // e.target.reset()
          setFormData({
            studentName: "",
            studentEmail: "",
            studentPhone: "",
          });
        }
      });
  };

  let getEnquiry = () => {
    axios
      .get(`${apiBaseUrl}view`)
      .then((res) => res.data)
      .then((finalRes) => {
        setContacts(finalRes.data);

        // console.log(finalRes.data);
      });
  };

  let delEnquiry = (delId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${apiBaseUrl}delete/${delId}`)
          .then((res) => res.data)
          .then((finalRes) => {
            getEnquiry();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });

       
      }
    });

    // if (confirm("Are you Sure Want to Delete?")) {
    //   axios
    //     .delete(`${apiBaseUrl}delete/${delId}`)
    //     .then((res) => res.data)
    //     .then((finalRes) => {
    //       getEnquiry();
    //     });
    // }
  };

  useEffect(() => {
    getEnquiry();
  }, []);

  return (
    <div className="flex h-screen w-full">
      {/* Left Side - Form (25% width) */}
      <div className="w-1/4 bg-gray-50 p-6 border-r border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Enter name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="studentEmail"
              value={formData.studentEmail}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="studentPhone"
              value={formData.studentPhone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Enter phone number"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Add Contact
          </button>
        </form>
      </div>

      {/* Right Side - Table (Auto width) */}
      <div className="flex-1 p-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact List</h2>
        {contacts.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            <p>
              No contacts added yet. Add a contact using the form on the left.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                    Sr No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                    Phone Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contacts.map((obj, index) => {
                  return (
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                        {index + 1}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                        {obj.studentName}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                        {obj.studentEmail}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                        {obj.studentPhone}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                        <button
                          onClick={() => delEnquiry(obj._id)}
                          className="bg-red-500 rounded-[10px] p-2 text-white"
                        >
                          Delete
                        </button>
                        |
                        <button className="bg-green-500 rounded-[10px] p-2 text-white">
                          Edit
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
