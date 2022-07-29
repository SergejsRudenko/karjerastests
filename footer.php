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
$footer = get_fields('option')['footer'];
?>

<footer class="footer">
    <div class="container">
        <div class="footer__inner">
            <a href="https://www.lu.lv/" class="footer__logo"></a>
            <div class="footer__social">
                <div class="footer__social-title"><?php echo $footer['links_title'];?></div>
                <?php wp_nav_menu([
              'theme_location'  => 'footer_social',
              'container'       => false,
              'menu_class'      => '',
              'echo'            => true,
              'depth'           => 1,
            ]) ?>
            </div>
            <!-- <div class="footer__menu"> -->
            <?php wp_nav_menu([
              'theme_location'  => 'footer',
              'container'       => 'div',
              'container_class' => 'footer__menu',
              'menu_class'      => '',
              'echo'            => true,
              'depth'           => 1,
            ]) ?>
                <!-- <ul>
                    <li><a href="https://www.karjera.lu.lv/" target="_blank">Karjeras Centrs</a></li>
                    <li><a href="https://www.lu.lv/gribustudet/studiju-programmas/bakalaura-limena-studijas/
" target="_blank">Studiju programmas</a></li>
                    <li><a href="https://www.lu.lv/studijas/fakultates-1/" target="_blank">Fakultātes</a></li>
                    <li><a href="https://www.lu.lv/par-mums/par-lu/" target="_blank">Par LU</a></li>
                </ul> -->
            <!-- </div> -->
            <div class="footer__badges">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/badge_1.png' ?>" alt="">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/badge_1.png' ?>" alt="">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/badge_2.png' ?>" alt="">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/badge_2.png' ?>" alt="">
            </div>
        </div>
        <div class="footer__after">
            <div class="footer__after-copyright">© <?php echo date("Y"); ?> Latvijas Universitāte. Visas tiesības aizsargātas</div>
            <a href="https://www.lu.lv/par-mums/privatuma-atruna/" class="footer__after-privacy" target="_blank">Privātuma politika</a>
        </div>
    </div>
</footer>

</body>

<?php wp_footer(); ?>

</body>
</html>
