import React from 'react'

export default class TopBar extends React.Component {
	render() {
		return (
			<div>
				<div className='pull-left'>
					{/* Welcome to CakesAndMore */}
				</div> 
				<div className='pull-right'>
					{/* My CakesAndMore | ShoppingCart */}
				</div> 
			</div>
		)
	}
}