'use strict'
const Config = use("Config");
const Countries = use("App/Models/SettingsCountry")
const axios = require('axios');
const makeExternalRequestFeature = use("App/Features/MakeExternalRequestFeature")

class MetadatumController {
  async getMetadata({
    request,
    response,
  }) {
    try {
       const countries = await Countries.all();

      const metadata = {
        countries
      }
      return response.status(200).json({
        result: metadata,
        label: `Fetch Metadata`,
        statusCode: 200,
        message: `Metadata Fetched successfully`,
      })

    } catch (error) {
      return response.status(400).json({
        error,
        label: `Metadata Fetching`,
        statusCode: 400,
        message: `We were unable to fetch Metadata`,
      })
    }
  }

  async getSignUpTeamList({ response}){
        //  England
        //   league_id: 2
        //  Italy
        //    league_id: 94
        //  Germany
        //    league_id: 87
        //  Spain
        //  league_id: 8

        
       try {
        const baseUrl = Config.get("rapidApi.getTeamsByLeagueIdEndpoint")
        
        // async function getEnglandLeague() {
        //   const endpoint = `${baseUrl}/2`
        //   return await new makeExternalRequestFeature({endpoint}).makeGetRequest()
        // }

        const teamEndpoints = [ `${baseUrl}/2`, `${baseUrl}/94`, `${baseUrl}/87`,`${baseUrl}/8` ];        
          let promises = [];
          for (let i = 0; i < teamEndpoints.length; i++) {

            const responseFromApi = await new makeExternalRequestFeature({endpoint:teamEndpoints[i]}).makeGetRequest()
            promises.push(responseFromApi.results.api.teams )
          }

          Promise.all(promises)
          .then(responses => console.log("responses from request successful"));
          
          return response.status(200).json({
            results:promises,
            label: `Signup teams Fetching`,
            statusCode: 200,
            message: `Teams fetched successfully`,
          })

       } catch (error) {
         console.log("Get signup teams error ",error);
        return response.status(400).json({
          error,
          label: `Signup teams  Fetching`,
          statusCode: 400,
          message: `We were unable to fetch teams`,
        })
       }
  }
}
module.exports = MetadatumController
