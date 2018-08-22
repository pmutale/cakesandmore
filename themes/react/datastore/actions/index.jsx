import fetch from 'isomorphic-fetch'
import { setTimeout } from 'timers';

/**
 * 
 * Progress of the cake selection 
 * 
 */ 


// --------------Main------------------- //

export const PROGRESS_MAIN_SUCCESS = 'PROGRESS_MAIN_SUCCESS';
export const PROGRESS_MAIN_EDITING = 'PROGRESS_MAIN_EDITING';

const progressMainData = () =>  ({
	type:  PROGRESS_MAIN_SUCCESS,
})

const progressMainEditing = () =>  ({
	type:  PROGRESS_MAIN_EDITING,
})

export const manageMainProgress = (dispatch, getState) => {
	return dispatch(progressMainData())
}

export const manageMainProgressEditing = (dispatch, getState) => {
	return dispatch(progressMainEditing())
}

// --------------Flavour------------------- //

export const PROGRESS_FLAVOUR_SUCCESS = 'PROGRESS_FLAVOUR_SUCCESS';
export const PROGRESS_FLAVOUR_EDITING = 'PROGRESS_FLAVOUR_EDIT';

const ProgressFlavourData = () => ({
	type: PROGRESS_FLAVOUR_SUCCESS
})

const ProgressFlavourEdit = () => ({
	type: PROGRESS_FLAVOUR_EDITING
})

export const manageProgressFlavour = (dispatch, getState) => {
	return dispatch(ProgressFlavourData())
}

export const manageProgressFlavourEdit = (dispatch, getState) => {
	return dispatch(ProgressFlavourEdit())
}

// ----------------Shape----------------- //

export const PROGRESS_SHAPE_SUCCESS = 'PROGRESS_SHAPE_SUCCESS';
export const PROGRESS_SHAPE_EDITING = 'PROGRESS_SHAPE_EDITING';

const ProgressShapeData = () => ({
	type: PROGRESS_SHAPE_SUCCESS
})

const ProgressShapeEdit= () => ({
	type: PROGRESS_SHAPE_EDITING
})

export const manageProgressShape = (dispatch, getState) => {
	return dispatch(ProgressShapeData())
}

export const manageProgressShapeEdit = (dispatch, getState) => {
	return dispatch(ProgressShapeEdit())
}

// --------------Size------------------- //

export const PROGRESS_SIZE_SUCCESS = 'PROGRESS_SIZE_SUCCESS';
export const PROGRESS_SIZE_EDITING = 'PROGRESS_SIZE_EDITING';

const ProgressSizeData = () => ({
	type: PROGRESS_SIZE_SUCCESS
})

const ProgressSizeEdit = () => ({
	type: PROGRESS_SIZE_EDITING
})

export const manageProgressSize = (dispatch, getState) => {
	return dispatch(ProgressSizeData())
}

export const manageProgressSizeEdit = (dispatch, getState) => {
	return dispatch(ProgressSizeEdit())
}

// --------------Toppings------------------- //

export const PROGRESS_TOPPINGS_SUCCESS = 'PROGRESS_TOPPINGS_SUCCESS';
export const PROGRESS_TOPPINGS_EDITING = 'PROGRESS_TOPPINGS_EDITING';


const ProgressToppingsData = () => ({
	type: PROGRESS_TOPPINGS_SUCCESS
})

const ProgressToppingsEdit = () => ({
	type: PROGRESS_TOPPINGS_EDITING
})

export const manageProgressToppings = (dispatch, getState) => {
	return dispatch(ProgressToppingsData())
}

export const manageProgressToppingsEdit = (dispatch, getState) => {
	return dispatch(ProgressToppingsEdit())
}

// ----------------Extras----------------- //

export const PROGRESS_EXTRAS_SUCCESS = 'PROGRESS_EXTRAS_SUCCESS';
export const PROGRESS_EXTRAS_EDITING = 'PROGRESS_EXTRAS_EDITING';

const ProgressExtrasData = () => ({
	type: PROGRESS_EXTRAS_SUCCESS
})

const ProgressExtrasEdit = () => ({
	type: PROGRESS_EXTRAS_EDITING
})

export const manageProgressExtras = (dispatch, getState) => {
	return dispatch(ProgressExtrasData())
}

export const manageProgressExtrasEdit = (dispatch, getState) => {
	return dispatch(ProgressExtrasEdit())
}

/**
 * 
 * Getting Data from the Server
 * 
 */ 

export const GET_DATA = 'GET_DATA';

const getData = () => ({
	type: GET_DATA
})

export const fetchingData = (dispatch, getState) => {
	return fetch('/themes/cake_detail/5').then(response => response.json().then(json => ({
		cake: json
	})))
}

/**
 * 
 * Posting Data to the Server
 * 
 */ 

export const POST_DATA = 'GET_DATA';

const postData = () => ({
	type: POST_DATA
})

export const postCakeData = (dispatch, getState) => {
	return fetch('/themes/cake_list/').then(response => response.json().then(json => ({
		cake: json
	})))
}
