// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var Count = require('/Users/kvz/code/phpjs/src/golang/strings/Count.js')

describe('golang.strings.Count.js', function () {
  it('should pass example 1', function (done) {
    Count("cheese", "e")
    var expected = 3
    var result = Count("cheese", "e")
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    Count("five", "") // before & after each rune
    var expected = 5
    var result = Count("five", "") // before & after each rune
    expect(result).to.deep.equal(expected)
    done()
  })
})