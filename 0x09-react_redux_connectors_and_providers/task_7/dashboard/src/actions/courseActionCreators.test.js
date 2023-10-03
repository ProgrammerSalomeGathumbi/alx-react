import { selectCourse, unSelectCourse, fetchCourses, setCourses } from '../courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from '../courseActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('selectCourse action creator', () => {
  it('should create an action to select a course', () => {
    const index = 1;
    const expectedAction = {
      type: SELECT_COURSE,
      index,
    };
    expect(selectCourse(index)).toEqual(expectedAction);
  });
});

describe('unSelectCourse action creator', () => {
  it('should create an action to unselect a course', () => {
    const index = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      index,
    };
    expect(unSelectCourse(index)).toEqual(expectedAction);
  });
});

describe('fetchCourses action creator', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates SET_COURSES when fetching courses has been done', () => {
    fetchMock.getOnce('/dist/courses.json', {
      body: { courses: [{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }] },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: SET_COURSES,
        courses: [{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }],
      },
    ];

    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
