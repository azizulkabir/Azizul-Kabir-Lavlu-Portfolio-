import React from 'react';

const Form = () => {
    return (
        <div className='col-lg-6 col-md-6 mx-auto p-4'>
            <form className='w-100  text-white '>
                    <h3>Please Fill-up The Form And Submit </h3>
                    <div class="mb-3">
                        <label for="exampleInputText" class="form-label">Your Name</label>
                        <input type="text" class="form-control" id="exampleInputText" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputText" class="form-label">Mobile Number</label>
                        <input type="number" class="form-control" id="exampleInputText" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Your Text</label>
                        <input type="text" class="form-control" id="exampleInputText" />
                    </div>
                    <button type="submit" class="btn btn-secondary">Submit</button>
                </form>
        </div>
    );
};

export default Form;