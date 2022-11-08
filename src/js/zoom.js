import mediumZoom from 'medium-zoom'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	mediumZoom( images )
})

const images = [ document.querySelectorAll( '.zoom' ) ]

mediumZoom( '.zoom',  {
	margin: 20,
	background: '#000000',
	scrollOffset: 1000,
} )


