'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WeekSeasonsSchema extends Schema {
  up () {
    this.create('week_seasons', (table) => {
      table.increments()
      table.integer("week")
      table.integer("season")
      table.boolean("is_current_week").defaultTo(1)
      table.boolean("is_current_season").defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('week_seasons')
  }
}

module.exports = WeekSeasonsSchema
