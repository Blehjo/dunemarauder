import axios from "axios";
import { MessageComment } from "../../store/messagecomment/messagecomment.types";

const api = "https://localhost:7098/api/messagecomment";

const headers = {
  'Accept': 'application/x-www-form-urlencoded',
  'Content-Type': 'application/x-www-form-urlencoded'
}

export async function getSingleMessageComment(messageId: number): Promise<MessageComment> {
  const response = await axios({
    method: 'get',
    url: `${api}/${messageId}`,
    headers: headers,
    withCredentials: true
  });
  const result = await response.data;
  return result;
}

export async function getAllMessageComments(): Promise<MessageComment[]> {
  const response = await axios({
    method: 'get',
    url: api,
    headers: headers,
    withCredentials: true
  });
  const result = await response.data;
  return result;
}

export async function getUserMessageComments(userId: number): Promise<MessageComment[]> {
  const response = await axios({
    method: 'get',
    url: `${api}/user/${userId}`,
    headers: headers,
    withCredentials: true
  });
  const result = await response.data;
  return result;
}

export async function getUsersMessageComments(): Promise<MessageComment[]> {
  const response = await axios({
    method: 'get',
    url: `${api}/user/messages`,
    headers: headers,
    withCredentials: true
  });
  const result = await response.data;
  return result;
}

export async function getMessageComments(): Promise<MessageComment[]> {
  const response = await axios({
    method: 'get',
    url: `${api}/user`,
    headers: headers,
    withCredentials: true
  });
  const result = await response.data;
  return result;
}

export async function addMessageComment(messageCommentValue: string, mediaLink: string): Promise<MessageComment[]> {
  const response = await axios({
    method: 'post',
    url: api,
    data: {
      messageCommentValue,
      mediaLink
    },
    headers: headers,
    withCredentials: true
  });
  const result = await response.data;
  return result;
}

export async function editMessageComment(messageCommentId: number, messageCommentValue: string, mediaLink: string): Promise<MessageComment[]> {
  const response = await axios({
    method: 'put',
    url: `${api}/${messageCommentId}`, 
    data: {
      messageCommentId,
      messageCommentValue,
      mediaLink
    },
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
  });
  const result = await response.data;
  return result;
}

export async function deleteMessageComment(messagecommentId: number): Promise<MessageComment[]> {
  const response = await axios({ 
    method: 'delete',
    url: `${api}/${messagecommentId}`,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
  });
  const result = await response.data;
  return result;
}