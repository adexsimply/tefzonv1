'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string("first_name").notNullable()
      table.string("last_name").notNullable()
      table.string("phone_number").notNullable()
      table.string("date_of_birth")
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('country_id').notNullable()
      table.integer('gender_id').notNullable()
      table.integer('team_id').notNullable()
      table.dateTime("is_activated_at");
      //table.string('username', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
