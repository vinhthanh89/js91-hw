import "./style.css";
import NameCard from "../NameCard";

const TotalUser = ({ usersData }) => {
  const userList = usersData.map((user) => {
    const { name, age, gender } = user;
    return <NameCard name={name} age={age} gender={gender} />;
  });

  const totalUser = usersData.length;
  const totalAge = usersData.reduce((sumAge, user) => sumAge + user.age, 0);
  const totalMale = usersData.filter((user) => user.gender === "male").length;
  const totalFeMale = usersData.filter(
    (user) => user.gender === "female"
  ).length;

  return (
    <div className="totaluser">
      <div className="userlist">{userList}</div>
      <div className="user--static">
        <p>Total User : {totalUser} </p>
        <p>Total Age : {totalAge}</p>
        <p>Total Male : {totalMale}</p>
        <p>Total Female : {totalFeMale}</p>
      </div>
    </div>
  );
};

export default TotalUser;
