import sendRequest from './send-request';
const BASE_URL = '/api/fitnesslogs';

export function getFitnessLog(userId){
    return sendRequest(`${BASE_URL}?userId=${userId}`)
}

export function createSession(session, userId) {
    return sendRequest(`${BASE_URL}/session?userId=${userId}`, 'POST', session)
}

export function getSession(sessionId){
    return sendRequest(`${BASE_URL}/${sessionId}`)
}

export function endWorkout(sessionId){
    return sendRequest(`${BASE_URL}/${sessionId}/end`, 'POST')
}

export function getCategories(){
    return sendRequest(`${BASE_URL}/categories`)
}

export function getWorkouts(category){
    return sendRequest(`${BASE_URL}/workouts?category=${category}`)
}

export function addExercise(sessionId, formData){
    return sendRequest(`${BASE_URL}/${sessionId}/exercise`, 'POST', formData)
}

export function getExercise(sessionId, exerciseId){
    return sendRequest(`${BASE_URL}/${sessionId}/exercise?exercise=${exerciseId}`)
}

export function deleteSession(sessionId){
    return sendRequest(`${BASE_URL}/${sessionId}`, 'DELETE')
}