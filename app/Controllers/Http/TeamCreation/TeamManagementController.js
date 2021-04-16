'use strict'
const TeamSquad = use("App/Models/TeamSquad");
const TeamName = use("App/Models/TeamName");
const Player = use("App/Models/Player");
const Config = use("Config");
const Database = use("Database")
const makeExternalRequestFeature = use("App/Features/MakeExternalRequestFeature")
const moment = use("moment");



class TeamManagementController {

    async createTeam({ request , response, auth }){
        try {
            const user  = auth.current.user
            let {squad_selection,team_name  } = request.all()

            const teamNameLookup = await Database.raw(`select * from team_names TN where TN.team_name = '${team_name}' `,)

            if(teamNameLookup[0][0]){
                return response.status(400).json({
                    status:"Error", 
                    status_code:400, 
                    message: "Team name exists please choose another Team Name"
                 }) 
            }
            const teamNameCreation  = await TeamName.create({
                user_id:user.id, 
                team_name:team_name
            })

            const squadCreation  = await TeamSquad.findOrCreate({
                user_id:user.id,
                team_name_id:teamNameCreation.id,
            })
            const playerEndpoint  =  Config.get("rapidApi.getPlayerbyId")
            let year = moment().format("YYYY");
            let yearInt = parseInt(year)-1

            squad_selection.forEach(myFunction);
                async function myFunction(item){
                    let itemId  = parseInt(item.id)
                    let currentPlayerEndpoint = `${playerEndpoint}?id=${itemId}&season=${yearInt}`
                     const responseFromApi = await new makeExternalRequestFeature({endpoint:`${currentPlayerEndpoint}`}).makeGetRequest()
                     let currentPlayerDetails  =  responseFromApi.results.response[0].player
                    if ( !item.is_captain){
                        item.is_captain = 0
                    }
                  console.log("currentPlayerDetails",currentPlayerDetails.name, currentPlayerDetails.id,squadCreation.id, item.wing, item.is_captain);
                    await Player.findOrCreate({
                        player_name:currentPlayerDetails.name,
                        player_id:currentPlayerDetails.id,
                        squad_id:squadCreation.id,
                        wing:item.wing,
                        is_captain: item.is_captain 
                    })
                }

            return response.status(200).json({
                result: teamNameCreation,
                label: `Team Creation`,
                statusCode: 200,
                message: `Team Creation Fetched successfully`,
            })
                     
        } catch (createTeamError) {
            console.log("createTeamError >>>>> ", createTeamError);
          return response.status(500).json({
              status:"Internal Server Error", 
              status_code:500, 
              message: "There was an error creating team "
           }) 
        }
    }

    async editTeam({ request , response, auth }){
        try {
            const user  = auth.current.user
            let {squad_selection } = request.all()

            const teamSquadCheck  = await TeamSquad.query().where({
                user_id:user.id
            }).first()

            if(!teamSquadCheck){
                return response.status(400).send({
                    status:"error",
                    message:"User team does not exist . Check the Team name and try again ",
                    status_code:400
                })
            }

            const playerEndpoint  =  Config.get("rapidApi.getPlayerbyId")
            let year = moment().format("YYYY");
            let yearInt = parseInt(year)-1

            squad_selection.forEach(myFunction);

            async function myFunction(item){
                    let itemId  = parseInt(item.id)
                    let currentPlayerEndpoint = `${playerEndpoint}?id=${itemId}&season=${yearInt}`

                    let currentPlayerInfo =  await Player.query().where({
                        player_id:item.id
                    }).first() 
                if(currentPlayerInfo){
                    const responseFromApi = await new makeExternalRequestFeature({endpoint:`${currentPlayerEndpoint}`}).makeGetRequest()
                    let currentPlayerDetails  =  responseFromApi.results.response[0].player
                    if ( !item.is_captain){
                        item.is_captain = 0
                    }
                    currentPlayerInfo.merge({
                        player_name:currentPlayerDetails.name,
                        player_id:currentPlayerDetails.id,
                        wing:item.wing,
                        is_captain: item.is_captain 
                    })   

                    await currentPlayerInfo.save();

                }
                else{
                    let itemId  = parseInt(item.id)
                    let currentPlayerEndpoint = `${playerEndpoint}?id=${itemId}&season=${yearInt}`
                    const responseFromApi = await new makeExternalRequestFeature({endpoint:`${currentPlayerEndpoint}`}).makeGetRequest()
                    let currentPlayerDetails  =  responseFromApi.results.response[0].player
                    if ( !item.is_captain){
                        item.is_captain = 0
                    }
                    await Player.findOrCreate({
                        player_name:currentPlayerDetails.name,
                        player_id:currentPlayerDetails.id,
                        squad_id:teamSquadCheck.id,
                        wing:item.wing,
                        is_captain: item.is_captain 
                    })
                }
                
                
            }

            return response.status(200).json({
                result: teamSquadCheck,
                label: `Team Creation`,
                statusCode: 200,
                message: `Team Creation Updated successfully`,
            })
                     
        } catch (UpdateTeamError) {
            console.log("UpdateTeamError >>>>> ", UpdateTeamError);
          return response.status(500).json({
              status:"Internal Server Error", 
              status_code:500, 
              message: "There was an error Updating team "
           }) 
        }
    }


    viewUserTeam({request , response , auth }){
        try {

            let teamNameCreation = [
                {
                    player_name: "Neymar Jnr.",    
                    wing: "DF",
                    team_id:2,
                    squad_id:1
                },
                 {
                    player_name: "Gary Van",    
                    wing: "GK",
                    team_id:2,
                    squad_id:1
                },
                 {
                    player_name: "Paul Pogba",    
                    wing: "MF",
                    team_id:2,
                    squad_id:1
                }
        
            ]
            return response.status(200).json({
                result: teamNameCreation,
                label: `Team Creation`,
                statusCode: 200,
                message: `User team Fetched successfully`,
            })
                     
            
        } catch (viewUserTeamError) {
            console.log(" selectSquadPlayer Error >>>>> ", viewUserTeamError);
            return response.status(500).json({
                status:"Internal Server Error", 
                status_code:500, 
                message: "There was an error viewing User Team  Player"
             })  
        }

    }


}

module.exports = TeamManagementController
