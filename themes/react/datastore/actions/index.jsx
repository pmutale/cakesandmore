import fetch from 'isomorphic-fetch'
import { setTimeout } from 'timers';

/**
 * 
 * Progress of the cake selection 
 * 
 */ 

export const PROGRESS_MAIN_SUCCESS = 'PROGRESS_MAIN_SUCCESS';
export const PROGRESS_FLAVOUR_SUCCESS = 'PROGRESS_FLAVOUR_SUCCESS';
export const PROGRESS_SHAPE_SUCCESS = 'PROGRESS_SHAPE_SUCCESS';
export const PROGRESS_SIZE_SUCCESS = 'PROGRESS_SIZE_SUCCESS';
export const PROGRESS_TOPPINGS_SUCCESS = 'PROGRESS_TOPPINGS_SUCCESS';
export const PROGRESS_EXTRAS_SUCCESS = 'PROGRESS_EXTRAS_SUCCESS';

const progressData = () =>  ({
	type:  PROGRESS_MAIN_SUCCESS,
})

const ProgressFlavourData = () => ({
	type: PROGRESS_FLAVOUR_SUCCESS
})

const ProgressShapeData = () => ({
	type: PROGRESS_SHAPE_SUCCESS
})

const ProgressSizeData = () => ({
	type: PROGRESS_SIZE_SUCCESS
})

const ProgressToppingsData = () => ({
	type: PROGRESS_TOPPINGS_SUCCESS
})

const ProgressExtrasData = () => ({
	type: PROGRESS_EXTRAS_SUCCESS
})

export const manageProgress = (dispatch, getState) => {
	return dispatch(progressData())
}

export const manageProgressFlavour = (dispatch, getState) => {
	return dispatch(ProgressFlavourData())
}

export const manageProgressShape = (dispatch, getState) => {
	return dispatch(ProgressShapeData())
}

export const manageProgressSize = (dispatch, getState) => {
	return dispatch(ProgressSizeData())
}

export const manageProgressToppings = (dispatch, getState) => {
	return dispatch(ProgressToppingsData())
}

export const manageProgressExtras = (dispatch, getState) => {
	return dispatch(ProgressExtrasData())
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
	return dispatch(getData())
}
