import { createSelector } from 'reselect';

const selectCourses = (state) => state.courses;

export const getAllCourses = createSelector(
  [selectCourses],
  (courses) => courses.toList().valueSeq()
);
