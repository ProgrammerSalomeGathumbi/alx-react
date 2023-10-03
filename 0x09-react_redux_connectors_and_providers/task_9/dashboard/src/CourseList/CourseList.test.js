import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
];
describe('CourseList component tests', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<CourseList />);

		expect(wrapper.exists()).toBe(true);
	});

	it('renders 5 different rows', () => {
                const wrapper = shallow(<CourseList listCourses={listCourses} />);

		expect(wrapper.find('thead').children()).toHaveLength(2);
		wrapper.find('thead').forEach((node) => {
	           expect(node.equals(<CourseListRow textFirstCell='Course name' textSecondCell='Credit'
                                       isHeader={true}/>)
		);
		});

		expect(wrapper.find('tbody').children()).toHaveLength(3);
		expect(wrapper.find('tbody').childAt(0).html()).toEqual('<tr><td>ES6</td><td>60</td></tr>');
		expect(wrapper.find('tbody').childAt(1).html()).toEqual('<tr><td>Webpack</td><td>20</td></tr>');
		expect(wrapper.find('tbody').childAt(2).html()).toEqual('<tr><td>React</td><td>40</td></tr>');	
       });
       it('renders correctely when passed a list of courses', () => {
		const wrapper = shallow(<CourseList listCourses={listCourses} />);

		expect(wrapper.find('tbody').children()).toHaveLength(3);
		expect(wrapper.find('tbody').childAt(0).html()).toEqual('<tr><td>ES6</td><td>60</td></tr>');
		expect(wrapper.find('tbody').childAt(1).html()).toEqual('<tr><td>Webpack</td><td>20</td></tr>');
		expect(wrapper.find('tbody').childAt(2).html()).toEqual('<tr><td>React</td><td>40</td></tr>');
	});

  it('dispatches fetchCourses action when mounted', () => {
    const fetchCoursesMock = jest.fn();
    shallow(<CourseList listCourses={listCourses} fetchCourses={fetchCoursesMock} />);
    expect(fetchCoursesMock).toHaveBeenCalled();
  });

  it('dispatches selectCourse action when a row is checked', () => {
    const selectCourseMock = jest.fn();
    const wrapper = shallow(<CourseList listCourses={listCourses} selectCourse={selectCourseMock} />);
    wrapper.find('CourseListRow').at(0).prop('onChangeRow')(true);
    expect(selectCourseMock).toHaveBeenCalledWith('1');
  });

  it('dispatches unSelectCourse action when a row is unchecked', () => {
    const unSelectCourseMock = jest.fn();
    const wrapper = shallow(<CourseList listCourses={listCourses} unSelectCourse={unSelectCourseMock} />);
    wrapper.find('CourseListRow').at(0).prop('onChangeRow')(false);
    expect(unSelectCourseMock).toHaveBeenCalledWith('1');
  });
});
