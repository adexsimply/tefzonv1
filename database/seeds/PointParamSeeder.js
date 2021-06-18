'use strict'

/*
|--------------------------------------------------------------------------
| PointParamSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use("Database");

let params = [
  {
    param_type: "Goal",
    player_type:"Striker"
  },
  {
    param_type: "Goal",
    player_type:"Midfeilder"
  },
  {
    param_type: "Goal",
    player_type:"Defender"
  },
  {
    param_type: "Goal",
    player_type:"Goalkeeper"
  },
  {
    param_type: "Goal Assist",
    player_type:"Striker"
  },
  {
    param_type: "Goal Assist",
    player_type:"Midfeilder"
  },
  {
    param_type: "Goal Assist",
    player_type:"Defender"
  },
  {
    param_type: "Goal Assist",
    player_type:"Goalkeeper"
  },
  {
    param_type: "Clean Sheet",
    player_type:"Striker"
  },
  {
    param_type: "Clean Sheet",
    player_type:"Midfeilder"
  },
  {
    param_type: "Clean Sheet",
    player_type:"Defender"
  },
  {
    param_type: "Clean Sheet",
    player_type:"Goalkeeper"
  },
 
]
class PointParamSeeder {
  async run () {
    await Database.raw("SET FOREIGN_KEY_CHECKS = 0;");
    await Database.truncate("point_params");
    await Database.table("point_params").insert(params);
    await Database.raw("SET FOREIGN_KEY_CHECKS = 1;");
  }
}

module.exports = PointParamSeeder
