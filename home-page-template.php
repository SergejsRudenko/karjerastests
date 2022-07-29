<?php
/*
Template Name: Home page
*/


get_header();
?>

<main>
	<section class="hero">
			<div class="hero__left" style="background-image: url(<?php echo get_field('images', 'option')['main_page_hero_image'];?>)"></div>
			<div class="hero__right"></div>
		<div class="container">
			<div class="hero__inner">
				<div class="left">
					<div class="hero__title">Sveiks, sevis izzinātāj!</div>
				</div>
				<div class="right">
					<div class="hero__info">
						<div class="hero__text">Ja reiz esi te ielūkojies/-usies, tātad meklē atbildes par to, kas Tevi interesē un ko nākotnē varētu studēt.<br>Izpildot šo testu, saņemsi atbildes uz tev aktuālajiem jautājumiem par studijām un nākotnes karjeru.</div>
						<ul class="hero__list">
							<li>Tests ir sadalīts divās daļās. </li>
							<li>Izlasi rūpīgi jautājumus un sniedz godīgas atbildes, lai tests būtu pilnvērtīgs un Tev patiesi noderīgs! </li>
							<li>Izvēlies klusu vietu, kur ir iespēja koncentrēties.</li>
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
