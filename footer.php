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

<!-- <footer class="footer">
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
</footer> -->
<footer class="footer">
    <div class="container">
        <div class="footer__inner">
            <a href="#" class="footer__logo"></a>
            <div class="footer__social">
                <div class="footer__social-title">Seko mums</div>
                <ul>
                    <li><a class="icon-lu-social-new-fb" href="https://www.facebook.com/latvijasuniversitate/" target="_blank"></a></li>
                    <li><a class="icon-lu-social-new-tw" href="https://twitter.com/universitatelv" target="_blank"></a></li>
                    <li><a class="icon-lu-social-new-ig" href="https://www.youtube.com/user/universitatelv" target="_blank"></a></li>
                    <li><a class="icon-lu-social-new-yt" href="https://www.instagram.com/universitate/" target="_blank"></a></li>
                    <li><a class="icon-lu-social-new-linked" href="https://www.linkedin.com/school/latvijas-universitate/" target="_blank"></a></li>
                </ul>
            </div>
            <div class="footer__menu">
                <ul>
                    <li><a href="https://www.karjera.lu.lv/" target="_blank">Karjeras Centrs</a></li>
                    <li><a href="https://www.lu.lv/gribustudet/studiju-programmas/bakalaura-limena-studijas/
" target="_blank">Studiju programmas</a></li>
                    <li><a href="https://www.lu.lv/studijas/fakultates-1/" target="_blank">Fakultātes</a></li>
                    <li><a href="https://www.lu.lv/par-mums/par-lu/" target="_blank">Par LU</a></li>
                </ul>
            </div>
            <div class="footer__badges none">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/badge_1.png' ?>" alt="">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/badge_1.png' ?>" alt="">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/badge_2.png' ?>" alt="">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/badge_2.png' ?>" alt="">
            </div>
        </div>
        <div class="footer__after">
            <div class="footer__after-copyright">© 2022 Latvijas Universitāte. Visas tiesības aizsargātas</div>
            <a href="https://www.lu.lv/par-mums/privatuma-atruna/" class="footer__after-privacy" target="_blank">Privātuma politika</a>
        </div>
    </div>
</footer>

</body>

<?php wp_footer(); ?>

</body>
</html>
