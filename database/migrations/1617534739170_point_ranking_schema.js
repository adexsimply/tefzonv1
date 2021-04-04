'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PointRankingSchema extends Schema {
  up () {
    this.create('point_rankings', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('point_rankings')
  }
}

module.exports = PointRankingSchema
