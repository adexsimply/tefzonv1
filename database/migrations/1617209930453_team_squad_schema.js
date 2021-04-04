'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeamSquadSchema extends Schema {
  up () {
    this.create('team_squads', (table) => {
      table.increments()
      table.integer("user_id")
      table.integer("player_id")
      table.integer("season_id")
      table.integer("week_id")
      table.boolean("is_captain").defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('team_squads')
  }
}

module.exports = TeamSquadSchema
