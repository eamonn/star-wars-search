// import { Action } from '@ngrx/store';
//
// /* tslint:disable */
// export const SET_TABLE_DATA_IDS         = '[Enforcement Login] Set table data ids';
// export const TOGGLE_SELECT_USER_ID      = '[Enforcement Login] Toggle Select User Id';
// export const SELECT_ALL_USER_ID         = '[Enforcement Login] Toggle Selected All User Id';
// export const AWAIT_API_RESPONSE         = '[Enforcement Login] Await API response';
// export const SET_PAGINATION_DATA        = '[Enforcement Login] Set pagination data';
// export const NAVIGATE_TO_PAGE           = '[Enforcement Login] Navigate to Page';
// export const SHOW_DELETE_SELECTED       = '[Enforcement Login] Show Delete Selected';
// export const DELETE_SELECTED_RECORDS    = '[Enforcement Login] Delete Selected Records';
//
// export const LOAD_ENFORCEMENT_USERS_BY_OPERATOR_ID_SUCCESS =         '[Enforcement Login] Load EnforcementUsers By Operator Id Success';
// export const LOAD_ENFORCEMENT_USERS_BY_OPERATOR_ID_FAILURE =         '[Enforcement Login] Load EnforcementUsers By Operator Id Failure';
// export const LOAD_ENFORCEMENT_USERS_BY_OPERATOR_ID_WITH_PAGINATION = '[Enforcement Login] Load EnforcementUsers By Operator Id with Pagination';
// export const DELETE_USERS_BY_IDS =                                   '[Enforcement Login] Delete Users By Ids';
// export const DELETE_USERS_BY_IDS_SUCCESS =                           '[Enforcement Login] Delete Users By Ids Success';
// export const DELETE_USERS_BY_IDS_FAILURE =                           '[Enforcement Login] Delete Users By Ids Failure';
// /* tslint:enable */
//
// export class SetTableDataIdsAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = SET_TABLE_DATA_IDS;
// 	/* tslint:enable */
//
// 	constructor(public payload: Array<number>) {}
// }
// export class AwaitAPIResponseAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = AWAIT_API_RESPONSE;
// 	/* tslint:enable */
//
// 	constructor(public payload: boolean ) {}
// }
//
// export class ToggleSelectUserIdAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = TOGGLE_SELECT_USER_ID;
// 	/* tslint:enable */
//
// 	constructor(public payload: number) {}
// }
//
// export class ToggleSelectedAllUserIdAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = SELECT_ALL_USER_ID;
// 	/* tslint:enable */
// }
//
// export class SetPaginationDataAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = SET_PAGINATION_DATA;
// 	/* tslint:enable */
// 	constructor(public payload: {offset: number; total: number; limit: number}) {}
// }
//
// export class NavigateToPageAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = NAVIGATE_TO_PAGE;
// 	/* tslint:enable */
// 	constructor(public payload: number) {}
// }
//
// export class ShowDeleteSelectedAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = SHOW_DELETE_SELECTED;
// 	/* tslint:enable */
//
// 	constructor(public payload: boolean) {}
// }
//
// export class DeleteSelectedRecordsAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = DELETE_SELECTED_RECORDS;
// 	/* tslint:enable */
// }
//
// export class LoadEnforcementUsersByOperatorIdSuccessAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = LOAD_ENFORCEMENT_USERS_BY_OPERATOR_ID_SUCCESS;
// 	/* tslint:enable */
//
// 	constructor(public payload: any) {}
// }
//
// export class LoadEnforcementUsersByOperatorIdFailureAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = LOAD_ENFORCEMENT_USERS_BY_OPERATOR_ID_FAILURE;
// 	/* tslint:enable */
//
// 	constructor(public payload: string) {}
// }
//
// export class LoadEnforcementUserByOperatorIdWithPaginationAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = LOAD_ENFORCEMENT_USERS_BY_OPERATOR_ID_WITH_PAGINATION;
// 	/* tslint:enable */
//
// 	constructor(
// 		public payload: { requestedPage?: number, perPage?: number }
// 	) {}
// }
//
// export class DeleteSelectedUserIdsAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = DELETE_USERS_BY_IDS;
// 	/* tslint:enable */
//
// 	constructor(
// 		public payload: Array<number>
// 	) {}
// }
//
// export class DeleteSelectedUserIdsSuccessAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = DELETE_USERS_BY_IDS_SUCCESS;
// 	/* tslint:enable */
// }
//
//
// export class DeleteSelectedUserIdsFailureAction implements Action {
// 	/* tslint:disable */
// 	public readonly type = DELETE_USERS_BY_IDS_FAILURE;
// 	/* tslint:enable */
// }
//
// export type Actions
// 	= ToggleSelectUserIdAction
// 	| ToggleSelectedAllUserIdAction
// 	| AwaitAPIResponseAction
// 	| SetPaginationDataAction
// 	| NavigateToPageAction
// 	| ShowDeleteSelectedAction
// 	| DeleteSelectedRecordsAction
// 	| SetTableDataIdsAction
// 	| LoadEnforcementUsersByOperatorIdSuccessAction
// 	| LoadEnforcementUsersByOperatorIdFailureAction
// 	| DeleteSelectedUserIdsAction
// 	| DeleteSelectedUserIdsSuccessAction
// 	| DeleteSelectedUserIdsFailureAction
// 	| LoadEnforcementUserByOperatorIdWithPaginationAction;
