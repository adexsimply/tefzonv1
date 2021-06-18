'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayersSchema extends Schema {
  up () {
    this.create('players', (table) => {
      table.increments()
      table.string("player_name")
      table.text("player_image")
      table.integer("player_id")
     
      table.timestamps()
    })
  }

  down () {
    this.drop('players')
  }
}

module.exports = PlayersSchema
