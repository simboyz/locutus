// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var ctype_lower = require('/Users/kvz/code/phpjs/src/php/ctype/ctype_lower.js')

describe('php.ctype.ctype_lower.js', function () {
  it('should pass example 1', function (done) {
    ctype_lower('abc')
    var expected = true
    var result = ctype_lower('abc')
    expect(result).to.deep.equal(expected)
    done()
  })
})