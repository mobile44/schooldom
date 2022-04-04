import React from "react";
//import AuthService from "./AuthService";
import SchoolService from "./SchoolService";

const SchoolList = () => {
  const currentList = SchoolService.getSchoolList();
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>School List</strong>
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentList.accessToken.substring(0, 20)} ...{" "}
        {currentList.accessToken.substr(currentList.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentList.id}
      </p>
      <p>
        <strong>School:</strong> {currentList.school_name}
      </p>
      {/*<strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>*/}
    </div>
  );
};
export default SchoolList;