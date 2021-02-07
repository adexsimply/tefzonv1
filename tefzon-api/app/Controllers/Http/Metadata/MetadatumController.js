'use strict'

const Countries = use("App/Models/SettingsCountry")
 

class MetadatumController {
  async getMetadata({
    request,
    response,
  }) {
    try {
       const countries = await Countries.all();

      const metadata = {
        countries
      }
      return response.status(200).json({
        result: metadata,
        label: `Fetch Metadata`,
        statusCode: 200,
        message: `Metadata Fetched successfully`,
      })

    } catch (error) {
      return response.status(400).json({
        error,
        label: `Metadata Fetching`,
        statusCode: 400,
        message: `We were unable to fetch Metadata`,
      })
    }
  }
}
module.exports = MetadatumController
