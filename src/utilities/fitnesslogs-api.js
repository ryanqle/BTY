import sendRequest from './send-request';
const BASE_URL = '/api/fitnesslogs';

export function getFitnessLog(userId){
    return sendRequest(`${BASE_URL}?userId=${userId}`)
}

export function createSession(session, userId) {
    return sendRequest(`${BASE_URL}/session?userId=${userId}`, 'POST', session)
}