'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TeamSquad extends Model {
    players(){
        return this.hasMany('App/Models/Player' ,'id',"squad_id")
    }
    teamName(){
        return this.hasOne("App/Models/TeamName",'user_id',"user_id")
    }
}
module.exports = TeamSquad
