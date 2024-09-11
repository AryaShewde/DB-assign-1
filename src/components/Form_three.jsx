import React from 'react'

const Form_three = ({ nextStep, handleFormData, prevStep, values }) => {
    const submitFormData = (e) => {
        e.preventDefault();
        nextStep();
    };
    return (
        <div className='fromone'>
            <h1>Page 3</h1>
            <form onSubmit={submitFormData}>
                <div>
                    <span>Occupation</span>
                    <input
                        type="text"
                        defaultValue={values.occupation}
                        placeholder="Occupation"
                        onChange={handleFormData("occupation")}
                        required
                    />
                </div>
                <div>
                    <span>Aadhar Card No</span>
                    <input
                        type="number"
                        defaultValue={values.adharno}
                        placeholder="Aadhar Card No"
                        onChange={handleFormData("adharno")}
                        required
                    />
                </div>
                <div>
                    <span>Credit/Debit Card No</span>
                    <input
                        type="number"
                        defaultValue={values.cardno}
                        placeholder="Credit/Debit Card No"
                        onChange={handleFormData("cardno")}
                        required
                    />
                </div>
                <div>
                    <span>Expiration Date</span>
                    <input
                        type="date"
                        defaultValue={values.expirationDate}
                        placeholder="Expiration Date"
                        onChange={handleFormData("expirationDate")}
                        required
                    />
                </div>
                <div>
                    <span>CVV Code</span>
                    <input
                        type="number"
                        defaultValue={values.cvvcode}
                        placeholder="CVV Code"
                        onChange={handleFormData("cvvcode")}
                        required
                    />
                </div>
                <div className='btns'>
                    <button onClick={prevStep}>
                        Previous
                    </button>

                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form_three
