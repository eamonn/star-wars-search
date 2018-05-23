// import * as enforcementActions from './actions';
// import * as enforcementLoginPageActions from './actions';
// import {
// 	LOAD_ENFORCEMENT_USERS_BY_OPERATOR_ID_FAILURE, LOAD_ENFORCEMENT_USERS_BY_OPERATOR_ID_SUCCESS,
// 	LOAD_ENFORCEMENT_USERS_BY_OPERATOR_ID_WITH_PAGINATION
// } from './actions';
//
//
// export interface EnforcementUserMap {
// 	[id: string]: string;
// }
//
// export interface EnforcementLoginUIState {
// 	hasLoadedOnce?: boolean;
// 	selectedUserIds?: Array<number>;          // Done
// 	tableData?: Array<number>;                // Done
//
// 	showDeleteModal?: boolean;
// 	isDeleting?: boolean;
//
// 	currentPage?: number;
// 	perPage?: string;
// 	totalRecords?: number | null;               // Next
//
// 	isWaitingForAPI?: boolean;
//
// 	enforcementUsers: EnforcementUserMap;
// 	isLoading: boolean;
// }
//
// export const initialState: EnforcementLoginUIState = {
// 	hasLoadedOnce: false,
// 	selectedUserIds: [],
// 	tableData: [],
//
// 	showDeleteModal: false,
// 	isDeleting: false,
//
// 	// Set to these values to copy the default pagination values in the service.
// 	// These values get set based on the response from the service.
// 	currentPage: 1,
// 	perPage: 'ok',
// 	totalRecords: 0,
//
// 	isWaitingForAPI: false,
//
// 	enforcementUsers: {},
// 	isLoading: false
// };
//
// export function reducer(state: EnforcementLoginUIState = initialState,
//                         action: enforcementLoginPageActions.Actions | enforcementActions.Actions): EnforcementLoginUIState {
//
// 	switch (action.type) {
// 		case enforcementLoginPageActions.TOGGLE_SELECT_USER_ID: {
// 			const selectedIds: Array<number> = [...state.selectedUserIds];
// 			const selectedLocation: number = selectedIds.indexOf(action.payload);
//
// 			// Remove/Add depending on whether they exist already
// 			if (selectedLocation > -1) {
// 				selectedIds.splice(selectedLocation, 1);
// 			} else {
// 				selectedIds.push(action.payload);
// 			}
//
// 			return {
// 				...state,
// 				selectedUserIds: selectedIds
// 			};
// 		}
//
// 		case enforcementLoginPageActions.SELECT_ALL_USER_ID: {
// 			if (state.tableData.length === state.selectedUserIds.length) {
// 				// All selected already so empty
// 				return {
// 					...state,
// 					selectedUserIds: []
// 				};
// 			}
//
// 			return {
// 				...state,
// 				selectedUserIds: [...state.tableData]
// 			};
// 		}
//
// 		case enforcementLoginPageActions.AWAIT_API_RESPONSE: {
// 			return {
// 				...state,
// 				isWaitingForAPI: action.payload
// 			};
// 		}
//
// 		case enforcementLoginPageActions.SET_TABLE_DATA_IDS: {
// 			return {
// 				...state,
// 				tableData: action.payload,
// 				hasLoadedOnce: true
// 			};
// 		}
//
// 		case enforcementLoginPageActions.SET_PAGINATION_DATA: {
// 			return {
// 				...state,
// 				// As the offset isn't page based, but records and 0 based
// 				// need to adjust it here to represent the page
// 				currentPage: +(+action.payload.offset / +action.payload.limit) + 1,
// 				totalRecords: action.payload.total,
// 				perPage: action.payload.limit,
// 				// Reset the selected ids when changing pagination data
// 				selectedUserIds: []
// 			};
// 		}
//
// 		case enforcementLoginPageActions.SHOW_DELETE_SELECTED: {
// 			return {
// 				...state,
// 				showDeleteModal: action.payload
// 			};
// 		}
//
// 		case enforcementLoginPageActions.DELETE_SELECTED_RECORDS: {
// 			return {
// 				...state,
// 				isDeleting: true
// 			};
// 		}
//
// 		case enforcementActions.DELETE_USERS_BY_IDS_SUCCESS:
// 		case enforcementActions.DELETE_USERS_BY_IDS_FAILURE: {
// 			return {
// 				...state,
// 				isDeleting: false
// 			};
// 		}
//
// 		case LOAD_ENFORCEMENT_USERS_BY_OPERATOR_ID_SUCCESS: {
// 			const sortedUsers: EnforcementUserMap = {
// 				...state.enforcementUsers
// 			};
//
// 			action.payload.data.map((user: any) => {
// 				sortedUsers[user.id] = Object.assign({}, user);
// 			});
//
// 			return {
// 				...state,
// 				enforcementUsers: sortedUsers,
// 				isLoading: false
// 			};
// 		}
//
// 		case LOAD_ENFORCEMENT_USERS_BY_OPERATOR_ID_WITH_PAGINATION: {
// 			return {
// 				...state,
// 				isLoading: true
// 			};
// 		}
//
// 		case LOAD_ENFORCEMENT_USERS_BY_OPERATOR_ID_FAILURE: {
// 			return {
// 				...state,
// 				isLoading: false
// 			};
// 		}
//
// 		default: {
// 			return state;
// 		}
// 	}
// }
