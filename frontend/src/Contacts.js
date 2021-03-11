import { Table } from "react-bootstrap";
import React from "react";
import { useHistory } from "react-router-dom";
const contactList = [
  {
    id: 1,
    fullName: "Arvind Dhakar",
    phoneNumber: 9669621469,
    address: "Bhawarkuan",
  },
  {
    id: 2,
    fullName: "Neeraj Dhakar",
    phoneNumber: 9575780376,
    address: "Laxmi Ganj",
  },
  {
    id: 3,
    fullName: "Girraj Dhakar",
    phoneNumber: 9926230284,
    address: "Transport Nagar",
  },
  {
    id: 4,
    fullName: "Kailash Dhakar",
    phoneNumber: 9691301507,
    address: "Dixit Colony Mohana",
  },
  {
    id: 5,
    fullName: "Ashutosh Dhakar",
    phoneNumber: 1234567890,
    address: "Khaan khajura",
  },
  {
    id: 6,
    fullName: "Rishika Dhakar",
    phoneNumber: 99262930284,
    address: "Chango Modi",
  },
  {
    id: 7,
    fullName: "Gourav Dhakar",
    phoneNumber: 9669621469,
    address: "Bhawarkuan",
  },
  {
    id: 8,
    fullName: "Sushma Dhakar",
    phoneNumber: 9575780376,
    address: "Laxmi Ganj",
  },
  {
    id: 9,
    fullName: "Bandana Dhakar",
    phoneNumber: 9926230284,
    address: "Transport Nagar",
  },
  {
    id: 10,
    fullName: "Monika Dhakar",
    phoneNumber: 9691301507,
    address: "Dixit Colony Mohana",
  },
  {
    id: 11,
    fullName: "Banabari Dhakar",
    phoneNumber: 1234567890,
    address: "Khaan khajura",
  },
  {
    id: 12,
    fullName: "Ramesh Dhakar",
    phoneNumber: 99262930284,
    address: "Chango Modi",
  },
  {
    id: 13,
    fullName: "Angad Dhakar",
    phoneNumber: 9669621469,
    address: "Bhawarkuan",
  },
  {
    id: 14,
    fullName: "Narayani Dhakar",
    phoneNumber: 9575780376,
    address: "Laxmi Ganj",
  },
  {
    id: 15,
    fullName: "Alka Dhakar",
    phoneNumber: 9926230284,
    address: "Transport Nagar",
  },
  {
    id: 16,
    fullName: "Baijanti Dhakar",
    phoneNumber: 9691301507,
    address: "Dixit Colony Mohana",
  },
  {
    id: 17,
    fullName: "Vindra Dhakar",
    phoneNumber: 1234567890,
    address: "Khaan khajura",
  },
  {
    id: 18,
    fullName: "Kalawati Dhakar",
    phoneNumber: 99262930284,
    address: "Chango Modi",
  },
];

export const Contacts = () => {
  const history = useHistory();
  const handleClick = (e, index) => {
    e.preventDefault();
    console.log(contactList[index]["fullName"], "Name");

    history.push({
      pathname: "/details",
      // search: "?query=abc",
      state: { ...contactList[index] },
    });
  };

  return (
    // <div>
    <Table
      striped
      bordered
      hover
      className="text-xl bg-red-50 cursor-pointer font-semibold"
      // color={theme.colors.primary}
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone No.</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {contactList.map((personDetails, idx) => (
          <tr onClick={(e) => handleClick(e, idx)} key={idx}>
            <td>{idx + 1}</td>
            <td>{personDetails.fullName}</td>
            <td>{personDetails.phoneNumber}</td>
            <td>{personDetails.address}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    // </div>
  );
};
