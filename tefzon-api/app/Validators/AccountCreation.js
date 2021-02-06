"use strict";

class AccountCreation {
  get sanitizationRules() {
    return {
      email: "trim|normalize_email",
      password: "trim",
    };
  }

  get rules() {
    return {
      first_name: "required",
      last_name: "required",
      email: "required|email|unique:users,email",
      password: "required|min:6",
      gender_id: "required",
      date_of_birth:"required",
      country_id:"required",
      phone_number: "string|required|min:10",
    };
  }

  get messages() {
    return {
      "first_name.required": "First Name is required",
      "last_name.required": "Last Name is required",
      "email.required": "Email is required",
      "email.email": "Email is invalid",
      "email.unique": "An account with this Email exists",
      "password.required": "Password is required",
      "gender_id.required": "Gender  is required",
      "date_of_birth.required": "Date of birth  is required",
      "country_id.required": "Country is required",
      "phone_number.required":"phone_number is required",
      "phone_number.min":"Phone number is too short.Expected a minimum of 10 characters",
      "password.min": "Password too short. Expected a minimum of 6 characters",
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json({
      status_code: 400,
      status: "Invalid",
      description: "Invalid Data",
      message: errorMessages[0].message,
    });
  }
}

module.exports = AccountCreation;
