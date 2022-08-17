<?php
/*
Template Name: Home page
*/


get_header();
$texts = get_fields('option')['info'];

?>

<main>
	<section class="hero">
			<div class="hero__left" style="background-image: url(<?php echo get_field('images', 'option')['main_page_hero_image'];?>)"></div>
			<div class="hero__right"></div>
		<div class="container">
			<div class="hero__inner">
				<div class="left">
					<div class="hero__title"><?php echo $texts['front_page_title'];?></div>
				</div>
				<div class="right">
					<div class="hero__info">
						<div class="hero__text"><?php echo $texts['front_page_text_title'];?></div>
						<ul class="hero__list">
							<li><?php echo $texts['front_page_bullet_one'];?></li>
							<li><?php echo $texts['front_page_bullet_two'];?></li>
							<li><?php echo $texts['front_page_bullet_three'];?></li>
						</ul>
						<div class="button__wrapper">
							<a href="/tests" class="featured__link">Sākt testu</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<?php
get_sidebar();
get_footer();
