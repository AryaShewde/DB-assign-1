import React from 'react'

const Form_one = ({ nextStep, handleFormData, values }) => {
    const submitFormData = (e) => {
        e.preventDefault();
        nextStep();
    };
    return (
        <div className='fromone'>
            <h1>Page 1</h1>
            <form onSubmit={submitFormData}>
                <div className='spacediv'>
                    <div>
                        <span>First Name</span>
                        <input
                            name="firstName"
                            defaultValue={values.firstName}
                            type="text"
                            placeholder="First Name"
                            onChange={handleFormData("firstName")}
                            required
                        />
                    </div>
                    <div>
                        <span>Last Name</span>
                        <input
                            name="lastName"
                            defaultValue={values.lastName}
                            type="text"
                            placeholder="Last Name"
                            onChange={handleFormData("lastName")}
                            required
                        />
                    </div>
                </div>
                <div>
                    <span>email</span>
                    <input
                        name="email"
                        defaultValue={values.email}
                        type="email"
                        placeholder="Email"
                        onChange={handleFormData("email")}
                        required
                    />
                </div>
                <div>
                    <span>Phone Number</span>
                    <input
                        name="phone"
                        defaultValue={values.phone}
                        type="number"
                        placeholder="Phone Number"
                        onChange={handleFormData("phone")}
                        required
                    />
                </div>
                <div>
                    <span>Gender</span>
                    <input
                        name="gender"
                        defaultValue={values.gender}
                        type="text"
                        placeholder="Gender"
                        onChange={handleFormData("gender")}
                        required
                    />
                </div>
                <div>
                    <span>Age</span>
                    <input
                        name="age"
                        defaultValue={values.age}
                        type="number"
                        placeholder="Age"
                        onChange={handleFormData("age")}
                        required
                    />
                </div>
                <button type="submit">
                    Next
                </button>
            </form>
        </div>
    )
}

export default Form_one
