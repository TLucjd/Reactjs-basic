import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUser = (props) => {
  const [showModalCreateUser, setshowModalCreateUser] = useState(false);
  return (
    <div className="manage-user-container">
      <h2 className="title">Manage User Page</h2>
      <div className="users-content">
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setshowModalCreateUser(true)}
          >
            <FcPlus />
            Add new user
          </button>
        </div>

        <div className="table-users-container">Table user information</div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setshowModalCreateUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
