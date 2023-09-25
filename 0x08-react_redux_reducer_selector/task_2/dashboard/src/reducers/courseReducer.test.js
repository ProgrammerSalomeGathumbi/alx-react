import courseReducer from './courseReducer';
import * as actionTypes from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the default state (empty array)', () => {
    const initialState = courseReducer(undefined, {});
    expect(initialState).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS action', () => {
    const data = [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ];
    const action = {
      type: actionTypes.FETCH_COURSE_SUCCESS,
      data: data,
    };
    const newState = courseReducer(undefined, action);

    const expectedState = data.map(course => ({ ...course, isSelected: false }));
    expect(newState).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE action', () => {
    const initialState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const action = {
      type: actionTypes.SELECT_COURSE,
      index: 1,
    };
    const newState = courseReducer(initialState, action);

    const expectedState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    expect(newState).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE action', () => {
    const initialState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const action = {
      type: actionTypes.UNSELECT_COURSE,
      index: 1,
    };
    const newState = courseReducer(initialState, action);

    const expectedState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    expect(newState).toEqual(expectedState);
  });
});
