import React from 'react'

const Form_last = ({ values }) => {
    const { firstName,
        lastName,
        email,
        phone,
        gender,
        age,
        username,
        password,
        address,
        country,
        village,
        occupation,
        adharno,
        cardno,
        expirationDate,
        cvvcode } = values;
    return (
        <div className='details'>
            <h1 className='success'>Submitted Successfully</h1>
            <div className='detail'>
                <div><span>First Name: </span>{firstName}</div>
                <div><span>Last Name: </span>{lastName}</div>
                <div><span>Email: </span>{email}</div>
                <div><span>Phone no: </span>{phone}</div>
                <div><span>Gender: </span>{gender}</div>
                <div><span>Age: </span>{age}</div>
                <div><span>Username: </span>{username}</div>
                <div><span>Password: </span>{password}</div>
                <div><span>Address: </span>{address}</div>
                <div><span>Country: </span>{country}</div>
                <div><span>Village: </span>{village}</div>
                <div><span>Occupation: </span>{occupation}</div>
                <div><span>Aadhar No: </span>{adharno}</div>
                <div><span>Credit/Debit Card No: </span>{cardno}</div>
                <div><span>Expiration Date: </span>{expirationDate}</div>
                <div><span>CVV Code: </span>{cvvcode}</div>
            </div>
        </div>
    )
}

export default Form_last
