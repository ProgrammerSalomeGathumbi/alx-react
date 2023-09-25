import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map({
  courses: Map(),
});

export default courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data.entities);
      return state.set('courses', normalizedData.entities.courses);

    case SELECT_COURSE:
    case UNSELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], action.type === SELECT_COURSE);

    default:
      return state;
  }
};
