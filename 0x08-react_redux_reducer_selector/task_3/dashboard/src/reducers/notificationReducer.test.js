import notificationReducer from './notificationReducer';
import * as actionTypes from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the default state', () => {
    const initialState = notificationReducer(undefined, {});
    expect(initialState).toEqual({
      filter: actionTypes.NotificationTypeFilters.DEFAULT,
      notifications: [],
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const data = [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available"
      }
    ];
    const action = {
      type: actionTypes.FETCH_NOTIFICATIONS_SUCCESS,
      data: data,
    };
    const newState = notificationReducer(undefined, action);

    const expectedState = {
      filter: actionTypes.NotificationTypeFilters.DEFAULT,
      notifications: data.map(notification => ({
        ...notification,
        isRead: false,
      })),
    };
    expect(newState).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ action', () => {
    const initialState = {
      filter: actionTypes.NotificationTypeFilters.DEFAULT,
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        },
      ],
    };
    const action = {
      type: actionTypes.MARK_AS_READ,
      index: 1,
    };
    const newState = notificationReducer(initialState, action);

    const expectedState = {
      filter: actionTypes.NotificationTypeFilters.DEFAULT,
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        },
      ],
    };
    expect(newState).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER action', () => {
    const initialState = {
      filter: actionTypes.NotificationTypeFilters.DEFAULT,
      notifications: [],
    };
    const action = {
      type: actionTypes.SET_TYPE_FILTER,
      filter: actionTypes.NotificationTypeFilters.URGENT,
    };
    const newState = notificationReducer(initialState, action);

    const expectedState = {
      filter: actionTypes.NotificationTypeFilters.URGENT,
      notifications: [],
    };
    expect(newState).toEqual(expectedState);
  });
});

