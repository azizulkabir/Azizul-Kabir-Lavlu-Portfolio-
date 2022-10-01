import React from 'react';

const Contact = () => {
    return (
        <div>
            <form className=' w-50 mx-auto text-white '>
                <h3>Please Fill-up The Form And Submit </h3>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-secondary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;