'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge-1.js')

describe('challenge-1: returns a string', function () {
  it('returns the correct value', function () {
    expect(typeof challenge([
      {word: 'fizz', number: 3},
      {word: 'buzz', number: 5}],
    60)[3]).to.equal('string')
  })
})

describe('challenge-1: starts at 1', function () {
  it('returns the correct value', function () {
    expect(challenge([
      {word: 'fizz', number: 3},
      {word: 'buzz', number: 5}],
    60)[0]).to.equal('1')
  })
})

describe('challenge-1: fizzbuzz', function () {
  it('returns the correct value', function () {
    expect(challenge([
      {word: 'fizz', number: 3},
      {word: 'buzz', number: 5}],
    60)[14]).to.equal('fizzbuzz')
  })
})

describe('challenge-1: fizzfuzzbuzz', function () {
  it('returns the correct value', function () {
    expect(challenge([
      {word: 'fizz', number: 3},
      {word: 'buzz', number: 5},
      {word: 'fuzz', number: 4}],
    60)[59]).to.equal('fizzfuzzbuzz')
  })
})

describe('challenge-1: fizzfuzzbuzzbezzbozz', function () {
  it('returns the correct value', function () {
    expect(challenge([
      {word: 'fizz', number: 3},
      {word: 'buzz', number: 5},
      {word: 'fuzz', number: 4},
      {word: 'bozz', number: 12},
      {word: 'bezz', number: 10}],
    60)[59]).to.equal('fizzfuzzbuzzbezzbozz')
  })
})
