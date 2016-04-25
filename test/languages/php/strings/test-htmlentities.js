// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var htmlentities = require('/Users/kvz/code/phpjs/src/php/strings/htmlentities.js')

describe('php.strings.htmlentities.js', function () {
  it('should pass example 1', function (done) {
    htmlentities('Kevin & van Zonneveld')
    var expected = 'Kevin &amp; van Zonneveld'
    var result = htmlentities('Kevin & van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    htmlentities("foo'bar","ENT_QUOTES")
    var expected = 'foo&#039;bar'
    var result = htmlentities("foo'bar","ENT_QUOTES")
    expect(result).to.deep.equal(expected)
    done()
  })
})