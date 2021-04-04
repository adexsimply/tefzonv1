'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PointSettingSchema extends Schema {
  up () {
    this.create('point_settings', (table) => {
      table.increments()
      table.integer("param_id")
      table.integer("points")
      table.integer("season_id")
      table.timestamps()
    })
  }

  down () {
    this.drop('point_settings')
  }
}

module.exports = PointSettingSchema
