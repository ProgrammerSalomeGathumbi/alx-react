import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES  } from './courseActionTypes';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index,
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
}
export const boundSelectCourse = (index) => (dispatch) => {
  dispatch(selectCourse(index));
};

export const boundUnSelectCourse = (index) => (dispatch) => {
  dispatch(unSelectCourse(index));
};

export function setCourses(courses) {
  return {
    type: SET_COURSES,
    courses,
  };
}

export function fetchCourses() {
  return (dispatch) => {
    return fetch('/dist/courses.json') 
      .then(response => response.json())
      .then(data => {
        dispatch(setCourses(data));
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  };
}
