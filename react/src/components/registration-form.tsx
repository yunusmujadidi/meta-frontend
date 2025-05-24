import { useState } from "react";

export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      alert("Account successfully created");
      clearForm();
    } else {
      alert("Something went wrong");
    }
  };

  const PasswordErrorMessages = () => {
    return (
      <div className=" text-red-600">Password Minimum is 8 characters</div>
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRole("");
  };

  const isFormValid = () => {
    const isFirstNameValid = firstName.trim() !== "";
    const isEmailValid = email.trim() !== "" && validateEmail(email);
    const isPasswordValid = password.length >= 8;
    const isRoleValid = role === "individual" || role === "business";
    return isFirstNameValid && isEmailValid && isPasswordValid && isRoleValid;
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Sign Up</h1>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            min={8}
          />
          {password.length > 0 && password.length < 8 && (
            <PasswordErrorMessages />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select a role</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
          </select>
        </div>

        <button
          disabled={!isFormValid}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
        >
          Create an account
        </button>
      </form>
    </div>
  );
};
