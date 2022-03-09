<?php
/*
Template Name: Home page
*/


get_header();
?>

<main>
	<section class="hero">
			<div class="hero__left" style="background-image: url(<?php echo get_template_directory_uri() . '/assets/images/hand.jpg';?>)"></div>
			<div class="hero__right"></div>
		<div class="container">
			<div class="hero__inner">
				<div class="left">
					<div class="hero__title">Sveiks, sevis izzinātāj!</div>
				</div>
				<div class="right">
					<div class="hero__info">
						<div class="hero__text">Ja reiz esi te ielūkojies/-usies, tātad meklē atbildes par to, kas ir tas, kas Tevi interesē un ko nākotnē varētu studēt.<br>Izpildot šo testu, Tev noteikti taps skaidrākas ja ne visas, tad dažas atbildes uz Taviem jautājumiem.</div>
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
