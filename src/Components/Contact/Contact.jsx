import React, { useState } from "react";
import "./Contact.css";
import Farmer from "../../Images/farmer.png";
import Contact1 from "../../Images/contact1.png";
import Contact2 from "../../Images/contact2.png";
import { Fade } from "react-reveal";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [payModal, setPayModal] = useState(false);

  const TogglePayModal = () => {
    setPayModal(!payModal);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <div className="contact">
      <Fade left>
        <img className="contact1" src={Contact1} alt="" />
        <img className="contact2" src={Contact2} alt="" />
        <div className="c-card">
          <div className="c-top">
            <img src={Farmer} alt="" />
          </div>
          <div className="c-bottom">
            <h1>Still are you hesitating?</h1>
            <p>
              Your work is going to fill a large part of your life, and the only
              way to be truly satisfied.
            </p>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div className="texts">
                <label className="contact-label">
                  <input
                    className={`inputs ${errors.name && "invalid"}`}
                    {...register("name", { required: " " })}
                    onKeyUp={() => {
                      trigger("name");
                    }}
                    type="text"
                    placeholder="Enter your name"
                  />
                </label>
                <label className="contact-label">
                  <input type="number" required placeholder="+375259577762"  className={`inputs ${errors.number && "invalid"}`}
                    {...register("number", {
                      required: "Number is required",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Invalid phone no",
                        
                      },
                    })}
                    onKeyUp={() => {
                      trigger("number");
                    }} />
                </label>
              </div>
              <textarea
                
                id="textarea"
                  name="textarea"
                cols="60"
                rows="10"
                placeholder="Enter your subject"
                className={`contact-textarea ${errors.textarea && "invalid"}`}
                  {...register("textarea", {
                    required: "Number is required",
                    minLength: {
                      value: 10,
                      message: "Minimum Required length is 10",
                    },
                    maxLength: {
                      value: 50,
                      message: "Maximum allowed length is 50",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("textarea");
                  }}
              ></textarea>

              <button  onClick={() => TogglePayModal()}
                type="submit"
                className="form-btn">Send Message</button>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
