import { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        phone_number: "",
        is_active: true,
        role: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const resultData = await response.json();
            console.log("Signup result: ", resultData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                className="bg-white shadow-lg rounded-lg p-6 w-96"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

                {/* Username */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">Username</label>
                    <input 
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
                    <input 
                        type="text"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Role Selection */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">Role</label>
                    <select 
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Doctor">Doctor</option>
                        <option value="Patient">Patient</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;