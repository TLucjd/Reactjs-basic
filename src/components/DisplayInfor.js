import React, { useState } from "react";
import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShowHideListUsers, setShowHideListUsers] = useState(true);

  const handleShowHideListUsers = () => {
    setShowHideListUsers(!isShowHideListUsers);
  };

  return (
    <div className="display-infor-container">
      <button onClick={() => handleShowHideListUsers()}>
        {isShowHideListUsers === true ? "Hide list users" : "Show list users"}
      </button>
      {isShowHideListUsers && (
        <>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
