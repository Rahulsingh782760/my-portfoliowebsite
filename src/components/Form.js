import React from "react";
import '../components/FormStyle.css';

const Form = () => {
    return (
        <>
            <form>
                <div class="row">
                    <div class="col">
                        <label>First Name : </label>
                        <input type="text" class="form-first" placeholder="First name" />
                    </div>
                    <div class="col">
                        <label>Last Name : </label>
                        <input type="text" class="form-last" placeholder="Last name" />
                    </div>
                    <div class="col">
                        <label>Email</label>
                        <input type="email" class="form-email" placeholder="First name" />
                    </div>
                    <div class="col">
                        <label>Message</label>
                        <textarea row="6" placeholder="Type your message here"></textarea>
                    </div>
                    <button type="submit" class="btn ">Submit</button>
                </div>
            </form>

        </>
    )
}

export default Form;