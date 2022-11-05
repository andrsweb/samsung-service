document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

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
} )


