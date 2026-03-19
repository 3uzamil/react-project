import React, { useState } from "react";
import Header from "../components/Header";

export default function Register() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    index: "",
  });
  let [userData, setUserData] = useState([]);
  let inputControl = (event) => {
    let inputValue = event.target.value;
    let inputName = event.target.name;
    let oldData = { ...formData };
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  let formHandle = (event) => {
    event.preventDefault();
    let filterCheck = userData.filter((v,i) => (v.email == formData.email || v.phone == formData.phone) && i !== formData.index);
    if (filterCheck.length == 0) {
    console.log(filterCheck);
    if(formData.index === ""){
      let oldData = [...userData, formData];
      setUserData(oldData);
    }
    else{
      let oldData = [...userData];
      oldData[formData.index] = formData;
      setUserData(oldData);
    }
    setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        index: "",
      });
    } else {
      alert("Email or Phone already exist...");
    }
  };
  let deleteFunc = (indexNumber) => {
    let filterData = userData.filter((v, i) => i != indexNumber);
    setUserData(filterData);
  };
  let editFunc = (indexNumber) => {
    let filterData = userData.filter((v, i) => i == indexNumber)[0];
    filterData.index = indexNumber;
    setFormData(filterData);

  };
  let items = userData.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.address}</td>
        <td>
          <button onClick={() => deleteFunc(index)}>Delete</button>
          <button onClick={() => editFunc(index)}>Edit</button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <Header pageName={"Registeration Form"} />
      <section className="registerationSection">
        <form className="form" onSubmit={formHandle}>
          <label>Name</label>
          <input
            type="text"
            onChange={inputControl}
            name="name"
            value={formData.name}
            required
          />
          <label>Email</label>
          <input
            type="text"
            onChange={inputControl}
            name="email"
            value={formData.email}
            required
          />
          <label>Phone</label>
          <input
            type="text"
            onChange={inputControl}
            name="phone"
            value={formData.phone}
            required
          />
          <label>Address</label>
          <textarea
            type="text"
            onChange={inputControl}
            name="address"
            value={formData.address}
            required
          />
          <button type="submit">
            {formData.index === "" ? "Save" : "Update"}
          </button>
        </form>
        <div className="outputContainer">
          <table border={"2px"}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{items != [] ? items : ""}</tbody>
          </table>
        </div>
      </section>
    </>
  );
}
