import React from 'react'

const Form_two = ({ nextStep, handleFormData, prevStep, values }) => {
    const submitFormData = (e) => {
        e.preventDefault();
        nextStep();
    };
    return (
        <div className='fromone'>
            <h1>Page 2</h1>
            <form onSubmit={submitFormData}>
                <div>
                    <span>Username</span>
                    <input
                        type="username"
                        placeholder="Username"
                        defaultValue={values.username}
                        onChange={handleFormData("username")}
                        required
                    />
                </div>
                <div className='spacediv'>
                    <div>
                        <span>Password</span>
                        <input
                            type="password"
                            placeholder="Password"
                            defaultValue={values.password}
                            onChange={handleFormData("password")}
                            required
                        />
                    </div>
                    <div>
                        <span>Confirm Password</span>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            defaultValue={values.cpassword}
                            onChange={handleFormData("cpassword")}
                            required
                        />
                    </div>
                </div>
                <div>
                    <span>Address</span>
                    <input
                        type="text"
                        placeholder="Address"
                        defaultValue={values.address}
                        onChange={handleFormData("address")}
                        required
                    />
                </div>
                <div>
                    <span>Country</span>
                    <input
                        type="text"
                        placeholder="Country"
                        defaultValue={values.country}
                        onChange={handleFormData("country")}
                        required
                    />
                </div>
                <div>
                    <span>Village</span>
                    <input
                        type="text"
                        placeholder="Village"
                        defaultValue={values.village}
                        onChange={handleFormData("village")}
                        required
                    />
                </div>
                <div className='btns'>
                    <button onClick={prevStep}>
                        Previous
                    </button>
                    <button type="submit">
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form_two
