<?php

/**
 * Clean incoming value from trash.
 *
 * @param	mixed	$value	Some value to clean.
 * @return	mixed	$value	The same value, but cleaned.
 */
function as_clean_value( $value )
{
	$value = trim( $value );
	$value = stripslashes( $value );
	$value = strip_tags( $value );

	return htmlspecialchars( $value );
}

/**
 * Function checks if value length is between min and max parameters.
 *
 * @param   string	$value  Specific string..
 * @param   int		$min    Minimum symbols value length.
 * @param   int		$max	Maximum symbols value length.
 * @return  bool            True if OK, false if value length is too small or large.
 */
function as_check_length( string $value, int $min, int $max ): bool
{
	return ! ( mb_strlen( $value ) < $min || mb_strlen( $value ) > $max );
}

/**
 * Function checks name symbols.
 *
 * @param   string  $name   Some name.
 * @return  bool            True if OK, false if string has bad symbols.
 */
function as_check_name( string $name ): bool
{
	return preg_match('/^[a-zа-я\s]+$/iu', $name );
}

/**
 * Function checks phone symbols.
 *
 * @param   string  $phone  Some phone number.
 * @return  bool            True if OK, false if string has bad symbols.
 */
function as_check_phone( string $phone ): bool
{
	return preg_match('/^[0-9()+\-\s]+$/iu', $phone );
}

$person_phone		= isset( $_POST['phone'] ) ? as_clean_value( $_POST['phone'] ) : null;

// Prepare message for mail.
$message = "Привет!\n" .
	"Форма обратной связи:\n\n" .
	"Имя - $person_name\n" .
	"Телефон - $person_phone\n" .
	"Сообщение - $person_text\n\n\n" .
// Mail headers.
$headers = "From: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n" .
	"Reply-To: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n" .
	"X-Mailer: PHP/" . phpversion();

$result = mail('some@mail.com', 'Форма обратной связи', $message, $headers );

if( $result )
	echo 'Спасибо! Мы свяжемся с Вами в ближайшее время.';	// Success.
else
	echo 'Ошибка отправки. Пожалуйста, попробуйте позже.';	// Failed.

die();

