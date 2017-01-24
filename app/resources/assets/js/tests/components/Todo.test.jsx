var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('Todo, </Todo>', () =>
{
	it('should exist', () =>
	{
		expect(Todo).toExist();
	});

	it('should call toggle with id on click', () => {
		var todoData = {
	      id: 112,
	      text: 'Test features',
	      completed: true
	    };

	    var spy = expect.createSpy();
	    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/> );
		var $el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalled(112);


	});
});