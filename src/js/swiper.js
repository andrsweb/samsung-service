import Swiper, { Autoplay, EffectFlip } from 'swiper';

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	testiSwiper()
} )

const testiSwiper = () => {

	const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        direction: 'horizontal',
		loop: true,
        spaceBetween: 50,
        grabCursor: 1,

        modules: [ Autoplay, EffectFlip ],
        autoplay: {
            delay: 3000,
            },

            effect: 'flip',
            flipEffect: {
                slideShadows: false,
            },
	} )
}