import { useState } from "react";

const UserForm = ({handleAddUsersData}) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: 0,
    gender: "male",
  });

  const handleChange = (event) => {
    const value =
      event.target.name === "age"
        ? parseInt(event.target.value, 10)
        : event.target.value;
    setUserInfo((prev) => {
      return {
        ...prev,
        [event.target.name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddUsersData(userInfo);
    console.log(userInfo);
  }

  return (
    <div className="userform-container">
      <form onSubmit={handleSubmit}>
        <div className="userform__input userform__input--name">
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" name="name" onChange={handleChange}/>
        </div>
        <div className="userform__input userform__input--age">
          <label htmlFor="age">Age : </label>
          <input type="number" id="age" name="age" onChange={handleChange}/>
        </div>
        <div className="userform__input--gender">
          <span>Gender : </span>
          <select name="gender" onChange={handleChange}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
