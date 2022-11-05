document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showMoreCards( '.cards-button' )
} )

const showMoreCards = ( button ) => {
	const cardsButton = document.querySelector( button )

	if ( ! cardsButton ) return

	cardsButton.addEventListener( 'click', () => {
		const cards = document.querySelectorAll( '.card:not(.visible)' )

		if ( ! cards.length ) {
			cardsButton.remove()
			return
		}

		for ( let i = 0; i < 8; i++ ) {
			if ( ! cards[i] ) break

			cards[i].style.height = cards[i].querySelector( '.card-inner' ).getBoundingClientRect().height + 'px'
			cards[i].classList.add( 'visible' )
		}

		if ( cards.length <= 8 ) cardsButton.remove()
	} )
}

window.addEventListener( 'resize', () => {
	const cards = document.querySelectorAll( '.card.visible' )

	if ( ! cards.length ) return

	cards.forEach( card => {
		card.style.height = card.querySelector( '.card-inner' ).getBoundingClientRect().height + 'px'
	} )
} )
