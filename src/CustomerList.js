import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCustomer } from './redux/customerSlice';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const CustomerList = () => {
  const customers = useSelector(state => state.customers.customers); // Get customers from Redux state
  const dispatch = useDispatch(); // Redux dispatch function

  // Handle delete customer action
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      dispatch(deleteCustomer(id)); // Dispatch delete action
    }
  };

  return (
    <div className="container mt-4">
      <h2>Customer List</h2>
      <Link to="/" className="btn btn-primary mb-3">Add New Customer</Link>
      <table className="table">
        <thead>
          <tr>
            <th>PAN</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.pan}</td>
              <td>{customer.fullName}</td>
              <td>{customer.email}</td>
              <td>{customer.mobileNumber}</td>
              <td>
                <Link to={`/edit/${customer.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button onClick={() => handleDelete(customer.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
