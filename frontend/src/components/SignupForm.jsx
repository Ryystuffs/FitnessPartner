import React from "react";
import { useState } from "react";
import { API_URL } from "../config";
const SignupForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState(initialState);
  const resetForm = () => {
    setForm(initialState);
  };
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
      if (e) {
        e.preventDefault();
      }
      try {
        if (form.password !== form.confirmPassword){
          console.error("password not the same")
          return;
        }
        setIsSubmitting(true);
        const response = await fetch(`${API_URL}/signup`, {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        if (response.status === 200) {
          console.log(json.message);
        } else {
          console.error(json.error);
        }
        resetForm();
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsSubmitting(false);
      }
    };
  return (
    <div>
      <form>
        <input type="name" placeholder="username" name="username" onChange={handleChange} value={form.username}/>
        <input type="email" placeholder="email" name="email" onChange={handleChange} value={form.email} />
        <input type="password" placeholder="password" name="password" onChange={handleChange} value={form.password} />
        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          onChange={handleChange}
          value={form.confirmPassword}
        />
        <button onClick={handleSubmit} disabled={isSubmitting}> {isSubmitting ? "Signing in" : "Sign up"}</button>
      </form>
    </div>
  );
};

export default SignupForm;
