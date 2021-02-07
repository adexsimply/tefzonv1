'use strict'

/*
|--------------------------------------------------------------------------
| SettingsCountrySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

const countries = [{
    country_label: 'Nigeria'
  },
  {
    country_label: 'Afghanistan'
  },
  {
    country_label: 'Aland Islands'
  },
  {
    country_label: 'Albania'
  },
  {
    country_label: 'Algeria'
  },
  {
    country_label: 'American Samoa'
  },
  {
    country_label: 'Andorra'
  },
  {
    country_label: 'Angola'
  },
  {
    country_label: 'Anguilla'
  },
  {
    country_label: 'Antarctica'
  },
  {
    country_label: 'Antigua and Barbuda'
  },
  {
    country_label: 'Argentina'
  },
  {
    country_label: 'Armenia'
  },
  {
    country_label: 'Aruba'
  },
  {
    country_label: 'Australia'
  },
  {
    country_label: 'Austria'
  },
  {
    country_label: 'Azerbaijan'
  },
  {
    country_label: 'Bahamas'
  },
  {
    country_label: 'Bahrain'
  },
  {
    country_label: 'Bangladesh'
  },
  {
    country_label: 'Barbados'
  },
  {
    country_label: 'Belarus'
  },
  {
    country_label: 'Belgium'
  },
  {
    country_label: 'Belize'
  },
  {
    country_label: 'Benin'
  },
  {
    country_label: 'Bermuda'
  },
  {
    country_label: 'Bhutan'
  },
  {
    country_label: 'Bolivia, Plurinational State of bolivia'
  },
  {
    country_label: 'Bosnia and Herzegovina'
  },
  {
    country_label: 'Botswana'
  },
  {
    country_label: 'Brazil'
  },
  {
    country_label: 'British Indian Ocean Territory'
  },
  {
    country_label: 'Brunei Darussalam'
  },
  {
    country_label: 'Bulgaria'
  },
  {
    country_label: 'Burkina Faso'
  },
  {
    country_label: 'Burundi'
  },
  {
    country_label: 'Cambodia'
  },
  {
    country_label: 'Cameroon'
  },
  {
    country_label: 'Canada'
  },
  {
    country_label: 'Cape Verde'
  },
  {
    country_label: 'Cayman Islands'
  },
  {
    country_label: 'Central African Republic'
  },
  {
    country_label: 'Chad'
  },
  {
    country_label: 'Chile'
  },
  {
    country_label: 'China'
  },
  {
    country_label: 'Christmas Island'
  },
  {
    country_label: 'Cocos (Keeling) Islands'
  },
  {
    country_label: 'Colombia'
  },
  {
    country_label: 'Comoros'
  },
  {
    country_label: 'Congo'
  },
  {
    country_label: 'Congo, The Democratic Republic of the Congo'
  },
  {
    country_label: 'Cook Islands'
  },
  {
    country_label: 'Costa Rica'
  },
  {
    country_label: "Cote d'Ivoire"
  },
  {
    country_label: 'Croatia'
  },
  {
    country_label: 'Cuba'
  },
  {
    country_label: 'Cyprus'
  },
  {
    country_label: 'Czech Republic'
  },
  {
    country_label: 'Denmark'
  },
  {
    country_label: 'Djibouti'
  },
  {
    country_label: 'Dominica'
  },
  {
    country_label: 'Dominican Republic'
  },
  {
    country_label: 'Ecuador'
  },
  {
    country_label: 'Egypt'
  },
  {
    country_label: 'El Salvador'
  },
  {
    country_label: 'Equatorial Guinea'
  },
  {
    country_label: 'Eritrea'
  },
  {
    country_label: 'Estonia'
  },
  {
    country_label: 'Ethiopia'
  },
  {
    country_label: 'Falkland Islands (Malvinas)'
  },
  {
    country_label: 'Faroe Islands'
  },
  {
    country_label: 'Fiji'
  },
  {
    country_label: 'Finland'
  },
  {
    country_label: 'France'
  },
  {
    country_label: 'French Guiana'
  },
  {
    country_label: 'French Polynesia'
  },
  {
    country_label: 'Gabon'
  },
  {
    country_label: 'Gambia'
  },
  {
    country_label: 'Georgia'
  },
  {
    country_label: 'Germany'
  },
  {
    country_label: 'Ghana'
  },
  {
    country_label: 'Gibraltar'
  },
  {
    country_label: 'Greece'
  },
  {
    country_label: 'Greenland'
  },
  {
    country_label: 'Grenada'
  },
  {
    country_label: 'Guadeloupe'
  },
  {
    country_label: 'Guam'
  },
  {
    country_label: 'Guatemala'
  },
  {
    country_label: 'Guernsey'
  },
  {
    country_label: 'Guinea'
  },
  {
    country_label: 'Guinea-Bissau'
  },
  {
    country_label: 'Guyana'
  },
  {
    country_label: 'Haiti'
  },
  {
    country_label: 'Holy See (Vatican City State)'
  },
  {
    country_label: 'Honduras'
  },
  {
    country_label: 'Hong Kong'
  },
  {
    country_label: 'Hungary'
  },
  {
    country_label: 'Iceland'
  },
  {
    country_label: 'India'
  },
  {
    country_label: 'Indonesia'
  },
  {
    country_label: 'Iran, Islamic Republic of Persian Gulf'
  },
  {
    country_label: 'Iraq'
  },
  {
    country_label: 'Ireland'
  },
  {
    country_label: 'Isle of Man'
  },
  {
    country_label: 'Israel'
  },
  {
    country_label: 'Italy'
  },
  {
    country_label: 'Jamaica'
  },
  {
    country_label: 'Japan'
  },
  {
    country_label: 'Jersey'
  },
  {
    country_label: 'Jordan'
  },
  {
    country_label: 'Kazakhstan'
  },
  {
    country_label: 'Kenya'
  },
  {
    country_label: 'Kiribati'
  },
  {
    country_label: "Korea, Democratic People's Republic of Korea"
  },
  {
    country_label: 'Korea, Republic of South Korea'
  },
  {
    country_label: 'Kuwait'
  },
  {
    country_label: 'Kyrgyzstan'
  },
  {
    country_label: 'Laos'
  },
  {
    country_label: 'Latvia'
  },
  {
    country_label: 'Lebanon'
  },
  {
    country_label: 'Lesotho'
  },
  {
    country_label: 'Liberia'
  },
  {
    country_label: 'Libyan Arab Jamahiriya'
  },
  {
    country_label: 'Liechtenstein'
  },
  {
    country_label: 'Lithuania'
  },
  {
    country_label: 'Luxembourg'
  },
  {
    country_label: 'Macao'
  },
  {
    country_label: 'Macedonia'
  },
  {
    country_label: 'Madagascar'
  },
  {
    country_label: 'Malawi'
  },
  {
    country_label: 'Malaysia'
  },
  {
    country_label: 'Maldives'
  },
  {
    country_label: 'Mali'
  },
  {
    country_label: 'Malta'
  },
  {
    country_label: 'Marshall Islands'
  },
  {
    country_label: 'Martinique'
  },
  {
    country_label: 'Mauritania'
  },
  {
    country_label: 'Mauritius'
  },
  {
    country_label: 'Mayotte'
  },
  {
    country_label: 'Mexico'
  },
  {
    country_label: 'Micronesia, Federated States of Micronesia'
  },
  {
    country_label: 'Moldova'
  },
  {
    country_label: 'Monaco'
  },
  {
    country_label: 'Mongolia'
  },
  {
    country_label: 'Montenegro'
  },
  {
    country_label: 'Montserrat'
  },
  {
    country_label: 'Morocco'
  },
  {
    country_label: 'Mozambique'
  },
  {
    country_label: 'Myanmar'
  },
  {
    country_label: 'Namibia'
  },
  {
    country_label: 'Nauru'
  },
  {
    country_label: 'Nepal'
  },
  {
    country_label: 'Netherlands'
  },
  {
    country_label: 'Netherlands Antilles'
  },
  {
    country_label: 'New Caledonia'
  },
  {
    country_label: 'New Zealand'
  },
  {
    country_label: 'Nicaragua'
  },
  {
    country_label: 'Niger'
  },
  {
    country_label: 'Niue'
  },
  {
    country_label: 'Norfolk Island'
  },
  {
    country_label: 'Northern Mariana Islands'
  },
  {
    country_label: 'Norway'
  },
  {
    country_label: 'Oman'
  },
  {
    country_label: 'Pakistan'
  },
  {
    country_label: 'Palau'
  },
  {
    country_label: 'Palestinian Territory, Occupied'
  },
  {
    country_label: 'Panama'
  },
  {
    country_label: 'Papua New Guinea'
  },
  {
    country_label: 'Paraguay'
  },
  {
    country_label: 'Peru'
  },
  {
    country_label: 'Philippines'
  },
  {
    country_label: 'Pitcairn'
  },
  {
    country_label: 'Poland'
  },
  {
    country_label: 'Portugal'
  },
  {
    country_label: 'Puerto Rico'
  },
  {
    country_label: 'Qatar'
  },
  {
    country_label: 'Romania'
  },
  {
    country_label: 'Russia'
  },
  {
    country_label: 'Rwanda'
  },
  {
    country_label: 'Reunion'
  },
  {
    country_label: 'Saint Barthelemy'
  },
  {
    country_label: 'Saint Helena, Ascension and Tristan Da Cunha'
  },
  {
    country_label: 'Saint Kitts and Nevis'
  },
  {
    country_label: 'Saint Lucia'
  },
  {
    country_label: 'Saint Martin'
  },
  {
    country_label: 'Saint Pierre and Miquelon'
  },
  {
    country_label: 'Saint Vincent and the Grenadines'
  },
  {
    country_label: 'Samoa'
  },
  {
    country_label: 'San Marino'
  },
  {
    country_label: 'Sao Tome and Principe'
  },
  {
    country_label: 'Saudi Arabia'
  },
  {
    country_label: 'Senegal'
  },
  {
    country_label: 'Serbia'
  },
  {
    country_label: 'Seychelles'
  },
  {
    country_label: 'Sierra Leone'
  },
  {
    country_label: 'Singapore'
  },
  {
    country_label: 'Slovakia'
  },
  {
    country_label: 'Slovenia'
  },
  {
    country_label: 'Solomon Islands'
  },
  {
    country_label: 'Somalia'
  },
  {
    country_label: 'South Africa'
  },
  {
    country_label: 'South Sudan'
  },
  {
    country_label: 'South Georgia and the South Sandwich Islands'
  },
  {
    country_label: 'Spain'
  },
  {
    country_label: 'Sri Lanka'
  },
  {
    country_label: 'Sudan'
  },
  {
    country_label: 'Suricountry_label'
  },
  {
    country_label: 'Svalbard and Jan Mayen'
  },
  {
    country_label: 'Swaziland'
  },
  {
    country_label: 'Sweden'
  },
  {
    country_label: 'Switzerland'
  },
  {
    country_label: 'Syrian Arab Republic'
  },
  {
    country_label: 'Taiwan'
  },
  {
    country_label: 'Tajikistan'
  },
  {
    country_label: 'Tanzania, United Republic of Tanzania'
  },
  {
    country_label: 'Thailand'
  },
  {
    country_label: 'Timor-Leste'
  },
  {
    country_label: 'Togo'
  },
  {
    country_label: 'Tokelau'
  },
  {
    country_label: 'Tonga'
  },
  {
    country_label: 'Trinidad and Tobago'
  },
  {
    country_label: 'Tunisia'
  },
  {
    country_label: 'Turkey'
  },
  {
    country_label: 'Turkmenistan'
  },
  {
    country_label: 'Turks and Caicos Islands'
  },
  {
    country_label: 'Tuvalu'
  },
  {
    country_label: 'Uganda'
  },
  {
    country_label: 'Ukraine'
  },
  {
    country_label: 'United Arab Emirates'
  },
  {
    country_label: 'United Kingdom'
  },
  {
    country_label: 'United States'
  },
  {
    country_label: 'Uruguay'
  },
  {
    country_label: 'Uzbekistan'
  },
  {
    country_label: 'Vanuatu'
  },
  {
    country_label: 'Venezuela, Bolivarian Republic of Venezuela'
  },
  {
    country_label: 'Vietnam'
  },
  {
    country_label: 'Virgin Islands, British'
  },
  {
    country_label: 'Virgin Islands, U.S.'
  },
  {
    country_label: 'Wallis and Futuna'
  },
  {
    country_label: 'Yemen'
  },
  {
    country_label: 'Zambia'
  },
  {
    country_label: 'Zimbabwe'
  }
]

class SettingsCountrySeeder {
  async run() {
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
    await Database.truncate('settings_countries')
    await Database.table('settings_countries').insert(countries)
    await Database.raw('SET FOREIGN_KEY_CHECKS = 1;')
  }
}

module.exports = SettingsCountrySeeder
