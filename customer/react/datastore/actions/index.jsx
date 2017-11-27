import fetch from 'isomorphic-fetch'
import { setTimeout } from 'timers';


/**
 * 
 * Getting Profile Data from the Server
 * 
 */ 

export const GET_PROFILE_DATA = 'GET_PROFILE_DATA';

const getUserData = () => ({
	type: GET_PROFILE_DATA
})

export const fetchingUserData = (dispatch, getState) => {
	return fetch('/customer/profiledata/').then(response => response.json().then(json => ({
		user_profile: json
	})))
}
