"use strict"
const PointRanking = use("App/Models/PointRanking");
const PointSetting = use("App/Models/PointSetting");
const Player = use("App/Models/Player");
const League = use("App/Models/League");
const makeExternalRequestFeature = use("App/Features/MakeExternalRequestFeature");
const Config = use("Config");
const Env = use("Env");
const moment = use('moment')
const safeAwait = require("safe-await");

class UpdateRankingFeature {
  constructor(data) {
    this.data = data;
  }

  async updateRankings(){
    try {

      // get today fixtures 
      // run each player by fixture 
      // update user stats 


      const fixturesBaseUrl = Config.get("rapidApi.getWeekFixturesEndpoint")
      const statsFixtureEndpoint = Config.get("rapidApi.getStatsByFixtures")
      const currentyear = new Date().getFullYear() - 1;
      // let today = moment().format('YYYY-MM-DD')
      let today = "2020-06-07"


      const Endpontss =`${fixturesBaseUrl}?league=39&season=${currentyear}&date=${today}`

      const teamEndpoints = [ 
        `${fixturesBaseUrl}?league=39&season=${currentyear}&date=${today}`,
        `${fixturesBaseUrl}?league=135&season=${currentyear}&date=${today}`,
        `${fixturesBaseUrl}?league=61&season=${currentyear}&date=${today}`,
        `${fixturesBaseUrl}?league=78&season=${currentyear}&date=${today}`,
        `${fixturesBaseUrl}?league=140&season=${currentyear}&date=${today}`
        ];        


      let promises = [];
      for (let i = 0; i < teamEndpoints.length; i++) {
        const responseFromApi = await new makeExternalRequestFeature(
          {endpoint:teamEndpoints[i]
         }
        ).makeGetRequest()
        let responseTeamObject = responseFromApi.results
        console.log(responseTeamObject);

          // promises.push(responseTeamObject.results)
        
      } 
      // Promise.all(promises)

      // let fixtureResponse = promises

      // console.log({promises});

      // squad_selection.forEach(myFunction);
      // async function myFunction(item){
      //     let itemId  = parseInt(item.id)
      //     let currentPlayerEndpoint = `${playerEndpoint}?id=${itemId}&season=${yearInt}`
      //      const responseFromApi = await new makeExternalRequestFeature({endpoint:`${currentPlayerEndpoint}`}).makeGetRequest()
      //      let currentPlayerDetails  =  responseFromApi.results.response[0].player
      //     if ( !item.is_captain){
      //         item.is_captain = 0
      //     }
      //     if ( !item.is_substitute){
      //         item.is_substitute = 0
      //     }
      
      //   console.log("currentPlayerDetails",currentPlayerDetails, currentPlayerDetails.id);
      //     await Player.findOrCreate({
      //         player_name:currentPlayerDetails.name,
      //         player_id:currentPlayerDetails.id,
      //         player_image:currentPlayerDetails.photo,
      //         squad_id:squadCreation.id,
      //         wing:item.wing,
      //         is_substitute:item.is_substitute,
      //         is_captain: item.is_captain 
      //     })
      // }

    } catch (updatePointsError) {
      console.log("update Points rankings >>>>> ", updatePointsError);
      return {
          status:"Internal Server Error", 
          status_code:500, 
          message: "There was an error updating Points "
       }
    }
  }
}

module.exports = UpdateRankingFeature


