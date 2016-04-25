// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var getdate = require('/Users/kvz/code/phpjs/src/php/datetime/getdate.js')

describe('php.datetime.getdate.js', function () {
  it.skip('should pass example 1', function (done) {
    getdate(1055901520)
    var expected = {'seconds': 40, 'minutes': 58, 'hours': 21, 'mday': 17, 'wday': 2, 'mon': 6, 'year': 2003, 'yday': 167, 'weekday': 'Tuesday', 'month': 'June', '0': 1055901520}
    var result = getdate(1055901520)
    expect(result).to.deep.equal(expected)
    done()
  })
})