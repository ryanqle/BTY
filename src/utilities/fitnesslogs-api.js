import sendRequest from './send-request';
const BASE_URL = '/api/fitnesslogs';

export function getFitnessLog(userId){
    return sendRequest(`${BASE_URL}?userId=${userId}`)
}

export function createSession(session) {
    return sendRequest(`${BASE_URL}/session`, 'POST', session)
}