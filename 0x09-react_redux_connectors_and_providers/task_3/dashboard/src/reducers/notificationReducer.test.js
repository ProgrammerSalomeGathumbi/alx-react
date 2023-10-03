import notificationReducer from './notificationReducer';
import * as actionTypes from '../actions/notificationActionTypes';
import { Map } from 'immutable';

describe('notificationReducer', () => {
  it('should return the default state', () => {
    const initialState = notificationReducer(undefined, {});
    expect(initialState).toEqual(
      Map({
        filter: actionTypes.NotificationTypeFilters.DEFAULT,
        notifications: Map(),
      })
    );
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const data = [
      {
        id: 1,
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
      },
      {
        id: 3,
        type: 'urgent',
        value: 'New data available',
      },
    ];
    const action = {
      type: actionTypes.FETCH_NOTIFICATIONS_SUCCESS,
      data: data,
    };
    const newState = notificationReducer(undefined, action);

    const expectedState = Map({
      filter: actionTypes.NotificationTypeFilters.DEFAULT,
      notifications: Map({
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      }),
    });
    expect(newState).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ action', () => {
    const initialState = Map({
      filter: actionTypes.NotificationTypeFilters.DEFAULT,
      notifications: Map({
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      }),
    });
    const action = {
      type: actionTypes.MARK_AS_READ,
      index: 2,
    };
    const newState = notificationReducer(initialState, action);

    const expectedState = Map({
      filter: actionTypes.NotificationTypeFilters.DEFAULT,
      notifications: Map({
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      }),
    });
    expect(newState).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER action', () => {
    const initialState = Map({
      filter: actionTypes.NotificationTypeFilters.DEFAULT,
      notifications: Map(),
    });
    const action = {
      type: actionTypes.SET_TYPE_FILTER,
      filter: actionTypes.NotificationTypeFilters.URGENT,
    };
    const newState = notificationReducer(initialState, action);

    const expectedState = Map({
      filter: actionTypes.NotificationTypeFilters.URGENT,
      notifications: Map(),
    });
    expect(newState).toEqual(expectedState);
  });
});
