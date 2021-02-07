'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SettingsCountrySchema extends Schema {
  up () {
    this.create('settings_countries', (table) => {
      table.increments()
      table.string('country_label', 60).notNullable().unique()
      table.integer('created_by').defaultTo(1)
      table.boolean('is_deleted').defaultTo(0)
      table.integer('deleted_by')
      table.timestamps()
    })
  }

  down () {
    this.drop('settings_countries')
  }
}

module.exports = SettingsCountrySchema
