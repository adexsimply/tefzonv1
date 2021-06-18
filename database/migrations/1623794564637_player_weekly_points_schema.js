'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayerWeeklyPointsSchema extends Schema {
  up () {
    this.create('player_weekly_points', (table) => {
      table.increments()
      table.integer("player_id")
      table.integer("week_season_id")
      table.integer("points_total")
      table.timestamps()
    })
  }

  down () {
    this.drop('player_weekly_points')
  }
}

module.exports = PlayerWeeklyPointsSchema
