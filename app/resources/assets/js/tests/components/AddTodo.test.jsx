var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

var AddTodo = require('AddTodo');

describe('Add todo component <AddTodo />', () =>
{
	it('should exists', () =>
	{
		expect(AddTodo).toExist();
	});

	it('should trigger addTodo method on valid input', () =>
	{
		var value = 'learn to test react components';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.text.value = value;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith('learn to test react components');
	});

	it('should not add todo on invalid or empty input', () =>
	{
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.text.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});