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
        if( ! burgerButton && ! headerInner ) return

        if( ! headerInner.classList.contains( 'opened') ) {
            headerInner.classList.add( 'opened' )
            burgerButton.classList.add( 'opened' )
            disableBodyScroll( getTargetElement() )
        } else {
            headerInner.classList.remove( 'opened' )
            burgerButton.classList.remove( 'opened' )
            enableBodyScroll( getTargetElement() )
        }

        window.addEventListener( 'resize', () => {
            const windowWidth = window.innerWidth
            const WINDOW_WIDTH_MD = 767

            if( windowWidth >= WINDOW_WIDTH_MD ) {
                headerInner.classList.remove( 'opened' )
                burgerButton.classList.remove( 'opened' )
                enableBodyScroll( getTargetElement() )
            }
        } )
    } )
}




