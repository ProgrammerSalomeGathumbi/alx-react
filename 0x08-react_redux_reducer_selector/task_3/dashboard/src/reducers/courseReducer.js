import * as actionTypes from '../actions/courseActionTypes';

const initialState = [];

export default courseReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_COURSE_SUCCESS:
      return action.data.map(course => ({ ...course, isSelected: false }));

    case actionTypes.SELECT_COURSE:
      const selectedIndex = action.index;
      return state.map((course, index) => 
        index === selectedIndex ? { ...course, isSelected: true } : course
      );

    case actionTypes.UNSELECT_COURSE:
      const unselectedIndex = action.index;
      return state.map((course, index) => 
        index === unselectedIndex ? { ...course, isSelected: false } : course
      );

    default:
      return state;
  }
};
