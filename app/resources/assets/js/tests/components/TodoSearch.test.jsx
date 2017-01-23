var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

var TodoSearch = require('TodoSearch');

describe('TodoSearch component', () =>
{
	it('should exist', () =>
	{
		expect(TodoSearch).toExist();
	});
});