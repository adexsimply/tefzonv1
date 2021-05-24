"use strict";

const Config = use("Config");
const Env = use("Env");
const axios = require('axios');


const safeAwait = require("safe-await");

class MakeExternalRequestFeature {
  constructor(data) {
    this.data = data;
  }


  /**
   * make get request to api
   *
   * @returns {Object}
   */
  async makeGetRequest() {

    const {
      endpoint 
    } = this.data;
    const options = {
        method: 'GET',
        headers: {
            "x-rapidapi-key": "994bb0668emshbcbf3bf20b13bccp1327cejsn8eb694f88862",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "useQueryString": true
        },
        url:endpoint
      };


    const [getRequestDataError, getRequestData] = await safeAwait(
        axios(options) 
    );

    if (getRequestDataError) {
      return {
        results: getRequestDataError,
        label: `External Request Data Error`,
        statusCode: 400,
        message: `There was an error making External Request `,
      };
    }
    return {
      results: getRequestData.data,
      statusCode: 200,
      status: "success",
      message: "Fetched External Request Data",
    };
  }

    /**
   * make post request to External api
   *
   * @returns {Object}
   */
  async makePostRequest() {

    const {
      endpoint,
      data
    } = this.data;
    const options = { 
        method: 'POST',
        headers: {
            "x-rapidapi-key": "994bb0668emshbcbf3bf20b13bccp1327cejsn8eb694f88862",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "useQueryString": true
        },
        url:endpoint
      };
    const [postRequestDataError, postRequestData] = await safeAwait(
        axios(options) 
    );
    if (postRequestDataError) {
      return {
        results: postRequestDataError,
        label: `External Request Data Error`,
        statusCode: 400,
        message: `There was an error making External get Request `,
      };
    }
    return {
      results: postRequestData.data,
      statusCode: 200,
      status: "success",
      message: "Fetched External Request Data",
    };
  }
}

module.exports = MakeExternalRequestFeature;
