<?php
/*
Template Name: Tests page
*/


get_header();
?>

<main>
	<section class="first overlay" style="background-image: url(<?php echo get_template_directory_uri() . '/assets/images/main.jpg';?>)">
		<div class="container">
			<div class="first__inner">
				<div class="left">
					<h1 class="first__title">Pirmā jautājumu sadaļa</h1>
				</div>
				<div class="right">
					<div class="first__info">
						<div class="first__info-title">Rūpīgi izlasi jautājumu un atbildi ar “jā” vai “nē”.</div>
						<ul class="first__info-list">
							<li>14 jautājumi</li>
							<li>Aptuvenais izpildes laiks: 3 minūtes </li>
						</ul>
						<div class="button__wrapper">
							<a href="#" class="featured__link first__questions">Turpināt Testu</a>
						</div>
					</div>
					<form action="" class="questions__form first__questions-form">
		<div class="swiper desktop">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
				<?php
				$counter = 0;
				$counterNo = 1;
						if( have_rows('main_questions') ): while ( have_rows('main_questions') ) : the_row();?>
						<div class="swiper-slide">
						<div class="left">
							<h1 class="slider__title">Pirmā jautājumu sadaļa</h1>
						</div>
							<div class="questions">
								<div class="one">      
									<p class="question"><?php echo get_sub_field('question'); ?></p>
									<div class="answers">
										<input type="radio" value="true" id="answerYes<?php echo $counter; ?>" hidden name="question<?php echo $counter; ?>">
										<label for="answerYes<?php echo $counter; ?>">JĀ</label>
										<input type="radio" value="false" id="answerNo<?php echo $counter; ?>" hidden name="question<?php echo $counter; ?>">
										<label for="answerNo<?php echo $counter; ?>">NĒ</label>
									</div>
								</div>
								<div class="two">
									<p class="question"><?php echo get_sub_field('question_two');?></p>
									<div class="answers">
										<input type="radio" value="true" id="answerYes<?php echo $counterNo; ?>" hidden name="question<?php echo $counterNo;?>">
										<label for="answerYes<?php echo $counterNo; ?>">JĀ</label>
										<input type="radio" value="false" id="answerNo<?php echo $counterNo; ?>" hidden name="question<?php echo $counterNo;?>">
										<label for="answerNo<?php echo $counterNo; ?>">NĒ</label>
									</div>
								</div>
								
								<input type="hidden" name="folow-data" class="follow__questions" data-id="<?php echo $counter;?>" data-follow="<?php echo get_sub_field('follow_up_question_list');?>">
							</div>
						</div>
						<?php 
						$counter += 2;
						$counterNo += 2;
						endwhile; endif;
				?>
 			</div>
			    <!-- If we need pagination -->

			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev">Atpakaļ</div>
			<div class="swiper-button-next">Tālāk</div>

			<!-- If we need scrollbar -->
			<div class="swiper-pagination"></div>

			</div>

		<button type="submit" class="featured__link button__link">Turpināt</button>
		</form>
		<!-- <pre id="log"></pre> -->
				</div>
			</div>
		</div>
		<!-- Slider main container -->

    <!-- Slides -->
    

	</section>
	
	<div class="container">
		
	</div>

	<?php
		if( have_rows('follow_questions') ): while ( have_rows('follow_questions') ) : the_row();?>
		<div class="followQuestions" data-title="<?php echo get_sub_field('title');?>" data-question="<?php echo get_sub_field('questions');?>" data-name="<?php echo get_sub_field('faculty_name');?>" data-description="<?php echo get_sub_field('faculty_short_description');?>" data-page="<?php echo get_sub_field('faculty_page');?>" hidden>Hidden</div>
	<?php 
		endwhile; endif;
    ?>
	<section class="results none" style="background-image: url(<?php echo get_template_directory_uri() . '/assets/images/results.jpg';?>)">
		
	</section>

	<!-- <section class="contact overlay-purple" style="background-image: url(<?php echo get_template_directory_uri() . '/assets/images/contact.jpg';?>)">
		<div class="container">
			<div class="contact__inner">
				<div class="contact__info">
					<div class="contact__info-title">Vēlies saņemt vairāk informācijas?</div>
					<div class="contact__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
					<div class="contact__info-mail">Piesakies konsultācijai aizpildot kontaktformu vai rakstot uz e-pastu <a href="mailto: karjera@lu.lv" class="">karjera@lu.lv</a></div>
				</div>
				<form action="" class="contact__form">
					<input type="text" name="name" id="" placeholder="Vārds, Uzvārds *" required>
					<input type="text" name="email" id="" placeholder="E-pasts *" required>
					<input type="text" name="comment" id="" placeholder="Komentārs">
					<div class="checkbox__wrapper">
						<input type="checkbox" name="accept" id="checkbox">
						<label for="checkbox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </label>
					</div>
					<button type="submit">Pieteikties</button>
				</form>
			</div>
		</div>
	</section> -->
</main>

<?php
get_sidebar();
get_footer();
