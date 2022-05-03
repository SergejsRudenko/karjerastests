<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package karjerastest
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="theme-color" content="#1b5089">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
	<?php $ga_id = 'G-5H60KWS93Q'; ?>
	<script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo $ga_id; ?>"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
	</script>
	
	<?php $cookies = get_fields('options')['cookies']; ?>
<script>
	function endableCookies(){
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GTA-CODE');
	}
</script>	
<!-- Cookie Consent by https://www.CookieConsent.com -->
<script>
    var cookie_dialog = <?php echo json_encode($cookies['cookie_notice_data'], JSON_HEX_APOS); ?>;
        cookie_dialog = cookie_dialog.replace(/'/g, '"');
    var cookieTranslationEN = cookie_dialog;
</script>	

<script type="text/javascript" src="<?php bloginfo("template_url"); ?>/assets/js/build/cookieconsent.min.js" async></script>
<!-- aaa --> 
<script type="text/plain" cookie-consent="strictly-necessary">
</script>
<!-- end of aaa-->

<!-- bbb -->
<script type="text/plain" cookie-consent="functionality">

</script>
<!-- end of bbb-->

<!-- tracker -->
<script type="text/plain" cookie-consent="tracking">

</script>
<!-- end of tracker-->
<!-- adds -->
<script type="text/plain" cookie-consent="targeting">
    endableCookies();
</script>
<!-- end of adds-->

<noscript>ePrivacy and GPDR Cookie Consent by <a href="https://www.CookieConsent.com/" rel="nofollow noopener">Cookie Consent</a></noscript>
<!-- End Cookie Consent by https://www.CookieConsent.com -->
</head>
<a href="/" class="logo"></a>
<body <?php body_class(); ?>>

