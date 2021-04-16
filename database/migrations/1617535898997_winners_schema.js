'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WinnersSchema extends Schema {
  up () {
    this.create('winners', (table) => {
      table.increments()
      table.integer("user_id")
      table.integer("week_id")
      table.integer("position")
      table.integer("prize_id")
      table.timestamps()
    })
  }

  down () {
    this.drop('winners')
  }
}

module.exports = WinnersSchema
