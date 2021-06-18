'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayerPointSettingSchema extends Schema {
  up () {
    this.create('player_point_settings', (table) => {
      table.increments()
      table.integer("point_param_id")
      table.integer("player_label")
      table.timestamps()
    })
  }

  down () {
    this.drop('player_point_settings')
  }
}

module.exports = PlayerPointSettingSchema
