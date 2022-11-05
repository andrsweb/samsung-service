import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    toggleBurger()
} )

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    const header = document.querySelector( '.header' )
    const rate = document.querySelector( '.rate-link' )

    if (scrollTop > 0) {
        if ( ! header.classList.contains( 'scrolled' ) )
            header.classList.add( 'scrolled' )

    }   else {
        if ( header.classList.contains( 'scrolled' ) )
            header.classList.remove( 'scrolled' )
    }

    if( scrollTop > 1000 ) {
        rate.classList.add( 'scrolled' )
    } else {
        if( scrollTop < 400 )
        rate.classList.remove( 'scrolled' )
    }
})

const toggleBurger = () => {
    const burgerButton = document.querySelector( '.burger-button')
    const headerInner = document.querySelector( '.header-inner' )
    setTargetElement( document.querySelector( '#body-lock' ) )

    burgerButton.addEventListener( 'click', () => {

        if( ! headerInner.classList.contains( 'opened') ) {
            headerInner.classList.add( 'opened' )
            burgerButton.classList.add( 'opened' )
            disableBodyScroll( getTargetElement() )
        } else {
            headerInner.classList.remove( 'opened' )
            burgerButton.classList.remove( 'opened' )
            enableBodyScroll( getTargetElement() )
        }
    } )
}


