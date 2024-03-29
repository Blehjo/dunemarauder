import { CHATCOMMENT_ACTION_TYPES, ChatComment } from './chatcomment.types';

import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload
} from '../../utils/reducer/reducer.utils';

export type ChatCommentCreateStart = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.CREATE_START, { chatId: number, chatcommentValue: string | null, mediaLink: File | null }
>;

export type ChatCommentCreateSuccess = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.CREATE_SUCCESS, 
    ChatComment[]
>;

export type ChatCommentCreateFailed = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.CREATE_FAILED,
    Error
>;

export type ChatCommentUpdateStart = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.UPDATE_START,
    { chatcommentId: number, chatcommentValue: string, mediaLink: string }
>;

export type ChatCommentUpdateSuccess = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.UPDATE_SUCCESS, 
    ChatComment[]
>;

export type ChatCommentUpdateFailed = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.UPDATE_FAILED,
    Error
>;
   
export type ChatCommentDeleteStart = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.DELETE_START,
    { chatcommentId: number }
>;

export type ChatCommentDeleteSuccess = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.DELETE_SUCCESS, 
    ChatComment[]
>;

export type ChatCommentDeleteteFailed = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.DELETE_FAILED,
    Error
>;
   
export type ChatCommentFetchSingleStart = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.FETCH_SINGLE_START,
    { chatcommentId: number }
>;

export type ChatCommentFetchSingleSuccess = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.FETCH_SINGLE_SUCCESS, 
    ChatComment[]
>;

export type ChatCommentFetchSingleFailed = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.FETCH_SINGLE_FAILED,
    Error
>;

export type ChatCommentFetchUserChatsStart = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.FETCH_USER_CHATCOMMENTS_START,
    { userId: number }
>;

export type ChatCommentFetchUserChatsSuccess = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.FETCH_USER_CHATCOMMENTS_SUCCESS, 
    ChatComment[]
>;

export type ChatCommentFetchUserChatsFailed = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.FETCH_USER_CHATCOMMENTS_FAILED,
    Error
>;

export type ChatCommentFetchAllStart = Action<
    CHATCOMMENT_ACTION_TYPES.FETCH_ALL_START
>;

export type ChatCommentFetchAllSuccess = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS, 
    ChatComment[]
>;

export type ChatCommentFetchAllFailed = ActionWithPayload<
    CHATCOMMENT_ACTION_TYPES.FETCH_ALL_FAILED,
    Error
>;

export const chatcommentCreateStart = withMatcher(
    (chatId: number, chatcommentValue: string | null, mediaLink: File | null): ChatCommentCreateStart => 
    createAction(CHATCOMMENT_ACTION_TYPES.CREATE_START, { chatId, chatcommentValue, mediaLink })
);

export const chatcommentCreateSuccess = withMatcher(
    (chatcomment: ChatComment[]): ChatCommentCreateSuccess => 
    createAction(CHATCOMMENT_ACTION_TYPES.CREATE_SUCCESS, chatcomment)
);

export const chatcommentCreateFailed = withMatcher(
    (error: Error) => 
    createAction(CHATCOMMENT_ACTION_TYPES.CREATE_START, error)
);
 
export const chatcommentUpdateStart = withMatcher(
    (chatcommentId: number, chatcommentValue: string, mediaLink: string, userId: number): ChatCommentUpdateStart => 
    createAction(CHATCOMMENT_ACTION_TYPES.UPDATE_START, { chatcommentId, chatcommentValue, mediaLink, userId })
);

export const chatcommentUpdateSuccess = withMatcher(
    (chatcomment: ChatComment[]): ChatCommentUpdateSuccess => 
    createAction(CHATCOMMENT_ACTION_TYPES.UPDATE_SUCCESS, chatcomment)
);

export const chatcommentUpdateFailed = withMatcher(
    (error: Error): ChatCommentUpdateFailed => 
    createAction(CHATCOMMENT_ACTION_TYPES.UPDATE_FAILED, error)
);

export const chatcommentDeleteStart = withMatcher(
    (chatcommentId: number): ChatCommentDeleteStart => 
    createAction(CHATCOMMENT_ACTION_TYPES.DELETE_START, { chatcommentId })
);

export const chatcommentDeleteSuccess = withMatcher(
    (chatcomment: ChatComment[]): ChatCommentDeleteSuccess => 
    createAction(CHATCOMMENT_ACTION_TYPES.DELETE_SUCCESS, chatcomment)
);

export const chatcommentDeleteFailed = withMatcher(
    (error: Error) => 
    createAction(CHATCOMMENT_ACTION_TYPES.DELETE_START, error)
);

export const chatcommentFetchSingleStart = withMatcher(
    (chatcommentId: number): ChatCommentFetchSingleStart => 
    createAction(CHATCOMMENT_ACTION_TYPES.FETCH_SINGLE_START, { chatcommentId })
);

export const chatcommentFetchSingleSuccess = withMatcher(
    (chatcomments: ChatComment[]): ChatCommentFetchSingleSuccess => 
    createAction(CHATCOMMENT_ACTION_TYPES.FETCH_SINGLE_SUCCESS, chatcomments)
);

export const chatcommentFetchSingleFailed = withMatcher(
    (error: Error): ChatCommentFetchSingleFailed => 
    createAction(CHATCOMMENT_ACTION_TYPES.FETCH_SINGLE_FAILED, error)
);

export const chatcommentFetchUserChatsStart = withMatcher(
    (userId: number): ChatCommentFetchUserChatsStart => 
    createAction(CHATCOMMENT_ACTION_TYPES.FETCH_USER_CHATCOMMENTS_START, { userId })
);

export const chatcommentFetchUserChatsSuccess = withMatcher(
    (chatcomment: ChatComment[]): ChatCommentFetchUserChatsSuccess => 
    createAction(CHATCOMMENT_ACTION_TYPES.FETCH_USER_CHATCOMMENTS_SUCCESS, chatcomment)
);

export const chatcommentFetchUserChatsFailed = withMatcher(
    (error: Error): ChatCommentFetchUserChatsFailed => 
    createAction(CHATCOMMENT_ACTION_TYPES.FETCH_USER_CHATCOMMENTS_FAILED, error)
);

export const chatcommentFetchAllStart = withMatcher(
    (chatcomment: ChatComment[]): ChatCommentFetchAllStart => 
    createAction(CHATCOMMENT_ACTION_TYPES.FETCH_ALL_START, chatcomment)
);

export const chatcommentFetchAllSuccess = withMatcher(
    (chatcomment: ChatComment[]): ChatCommentFetchAllSuccess => 
    createAction(CHATCOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS, chatcomment)
);

export const chatcommentFetchAllFailed = withMatcher(
    (error: Error): ChatCommentFetchAllFailed => 
    createAction(CHATCOMMENT_ACTION_TYPES.FETCH_ALL_FAILED, error)
);