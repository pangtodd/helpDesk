import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import ticketListReducer from '../../reducers/ticket-list-reducer';


test('Check that initial state of ticketListReducer matches root reducer', () => {
  expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, { type: null }));
});

test('Check that initial state of formVisibleReducer matches root reducer', () => {
  expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
});

let store = createStore(rootReducer);