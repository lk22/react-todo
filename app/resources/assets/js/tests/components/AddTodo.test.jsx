var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

var {AddTodo} = require('AddTodo');

describe('Add todo component <AddTodo />', () =>
{
	it('should exists', () =>
	{
		expect(AddTodo).toExist();
	});

	it('should dispatch ADD_TODO action when valid todo text', () =>
	{


		var value = 'learn to test react components';
		var action = {
			type: 'ADD_TODO',
			text: value
		};
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.text.value = value;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should not dispatch ADD_TODO action when invalid todo text', () =>
	{
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.text.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});