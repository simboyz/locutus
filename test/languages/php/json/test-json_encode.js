// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var json_encode = require('/Users/kvz/code/phpjs/src/php/json/json_encode.js')

describe('php.json.json_encode.js', function () {
  it('should pass example 1', function (done) {
    json_encode('Kevin')
    var expected = '"Kevin"'
    var result = json_encode('Kevin')
    expect(result).to.deep.equal(expected)
    done()
  })
})