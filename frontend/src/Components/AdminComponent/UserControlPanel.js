import React from "react";

export default function UserControlPanel({ users, deleteUser, aktulisieren})
{
  return (
    <div className="container bg-light py-5 mt-5 rounded-end">
      <Link to={"/fragenManagement"}>
        <button type="button" class="btn btn-secondary float-end btn-sm">
          Admin Panel
        </button>
      </Link>

      <h1 className="display-5 fw-bold">Welocme to Quiz App</h1>
      <h1 style={{ fontFamily: "cursive" }}>User List</h1>

      <table class="table table-success table-striped">
      <thead>
    <tr>
      <th scope="col">User Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name </th>
      <th scope="col">Password</th>
      <th scope="col">Geburtsjahr</th>
      <th scope="col">E-Mail</th>
      <th scope="col" colSpan={"2"}>
      Process
    </th>
    </tr>
  </thead>
  <tbody>
   
  </tbody>
</table>
}

  
      {/* <form onSubmit={handleSubmit}>
      
        <div
          style={{ fontFamily: "cursive", textAlign: "left" }}
          class="col-md-4 my-3"
        >
          <label for="">Enter your E-mail:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={handleInput}
          />
        </div>
        <div
          style={{ fontFamily: "cursive", textAlign: "left" }}
          class="col-md-4 my-3"
        >
          <label for="">Enter your Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div
          style={{ fontFamily: "cursive", textAlign: "left" }}
          class="col-md-4" >
        <button
          style={{ float: "left" }}
          onClick={handleSubmit}
          className="btn btn-primary btn-m"
        >
          Start the Quiz!!
        </button>
        <Link to={"/question"}>
        <button>
          GECICI bUTTON
        </button>
        </Link>
        </div>
        
        <div
          style={{ fontFamily: "cursive", textAlign:"end" }}
          className="col-md-4" >
          <Link  to={"/userRegister"}>
          <button className="btn btn-secondary btn-m ">
            Create Account
          </button>
        </Link>
        </div>
       
      </form> */}
      <div className="pt-4" style={{ textAlign: "left" }}></div>
    </div>
  );
};
export default UserControlPanel;