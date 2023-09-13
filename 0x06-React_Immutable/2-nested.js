import { getIn, fromJs} from 'immutable';

export default function accessImmutableObject(object, array) {
   return getIn(fromJs(object), array);
}
