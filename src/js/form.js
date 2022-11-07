import { disableBodyScroll, enableBodyScroll, } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    switchForm()
})

const switchForm = () => {
    const headerForm        =   document.querySelector( '.header-form' )
    const formButtons       =   document.querySelectorAll( '.button.open-form' )

    if ( ( ! headerForm ) && ( ! formButtons ) ) return

    formButtons.forEach( formButton => {

        formButton.addEventListener( 'click', () => {
            setTargetElement( document.querySelector( '#form-lock' ) )
            if ( ! headerForm.classList.contains( 'opened' ) ) {
                headerForm.classList.add( 'opened' )
                disableBodyScroll( getTargetElement() )
            }
        } )
    } )

    headerForm.addEventListener( 'click', e => {
        e.stopPropagation()

        const target = e.target

        if ( target.className && target.classList.contains( 'header-form' ) ) {
            enableBodyScroll( getTargetElement() )
            headerForm.classList.remove( 'opened' )
        }
    } )
}