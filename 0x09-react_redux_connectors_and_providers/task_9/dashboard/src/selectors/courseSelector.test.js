import { Map } from 'immutable';
import { getAllCourses } from './courseSelector';

describe('getAllCourses selector', () => {
  it('should return an empty list if no courses are available', () => {
    const state = {
      courses: Map(),
    };
    const courses = getAllCourses(state);
    expect(courses).toEqual([]);
  });

  it('should return a list of courses', () => {
    const state = {
      courses: Map({
        1: { id: 1, title: 'Course 1' },
        2: { id: 2, title: 'Course 2' },
      }),
    };
    const courses = getAllCourses(state);
    expect(courses).toEqual([
      { id: 1, title: 'Course 1' },
      { id: 2, title: 'Course 2' },
    ]);
  });

  it('should return courses in the order they were added', () => {
    const state = {
      courses: Map({
        2: { id: 2, title: 'Course 2' },
        1: { id: 1, title: 'Course 1' },
      }),
    };
    const courses = getAllCourses(state);
    expect(courses).toEqual([
      { id: 2, title: 'Course 2' },
      { id: 1, title: 'Course 1' },
    ]);
  });
});
