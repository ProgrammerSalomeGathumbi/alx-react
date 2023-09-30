import { schema } from 'normalizr';

export const courseSchema = new schema.Entity('courses');

export function coursesNormalizer(data) {
  return normalize(data, [courseSchema]);
}
