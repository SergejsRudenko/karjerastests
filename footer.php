<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package karjerastest
 */

?>

<footer class="footer">
    <div class="footer__grid">
        <div class="footer__wrapper">
        <a href="#!" class="footer__logo">
            <img src="<?php echo get_template_directory_uri() . '/assets/images/logo_white.svg' ?>" alt="Footer logo">
        </a>
        <div class="footer__socialMenu">
            <div class="shareBar">
                <ul class="shareBar__list">
                    <li><a href="#!" class="icon-lu-social-new-fb"></a></li>
                    <li><a href="#!" class="icon-lu-social-new-ig"></a></li>
                    <li><a href="#!" class="icon-lu-social-new-tw"></a></li>
                    <li><a href="#!" class="icon-lu-social-new-yt"></a></li>
                    <li><a href="#!" class="icon-lu-social-new-linked"></a></li>
                </ul>
            </div>
        </div>
        </div>
        <ul class="footer__menu">
            <li><a href="#!" class="footer__menuLink">Kontakti</a></li>
            <li><a href="#!" class="footer__menuLink">Vietnes karte</a></li>
            <li><a href="#!" class="footer__menuLink">Karte un norādes</a></li>
        </ul>
        
        <div class="footer__rankedBadge">
            <img src="<?php echo get_template_directory_uri() . '/assets/images/ranked_badge.svg' ?>" alt="Ranked badge">
            <img src="<?php echo get_template_directory_uri() . '/assets/images/the_badge_2021.svg' ?>" alt="Ranked badge">
            <img src="<?php echo get_template_directory_uri() . '/assets/images/ranked_badge.svg' ?>" alt="Ranked badge">
            <img src="<?php echo get_template_directory_uri() . '/assets/images/the_badge_2021.svg' ?>" alt="Ranked badge">
            <img src="<?php echo get_template_directory_uri() . '/assets/images/ranked_badge.svg' ?>" alt="Ranked badge">
            <img src="<?php echo get_template_directory_uri() . '/assets/images/ranked_badge.svg' ?>" alt="Ranked badge">
        </div>
    </div>
    <div class="footer__grid footer__after">
    <div class="footer__copyright">
        © 2018 Latvijas Universitāte. Visas tiesības aizsargātas
    </div>
    <div class="footer__copyright">
        <a href="#" class="footer__copyright-link">Privātuma politika</a>
    </div>
    </div>
    
    <div class="edit-cookie__button">Sīkdatnes</div>
</footer>

</body>

<?php wp_footer(); ?>

</body>
</html>
