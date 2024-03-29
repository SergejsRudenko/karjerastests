<?php
/*
Template Name: Tests page
*/


get_header();
$results = get_fields('option')['result_page'];
$contacts = get_fields('option')['contacts'];
$texts = get_fields('option')['info'];

?>

<main>
	<section class="first overlay" style="background-image: url(<?php echo get_field('images', 'option')['tests_page_background_image'];?>)">
		<div class="container firstPart">
			<div class="first__inner">
				<div class="left">
					<h1 class="first__title"><?php echo $texts['part_one_big_title'];?>
					<!-- <a href="#" class="back__button none">Atpakaļ<i class="arrow"></i></a> -->

					</h1>
					<a href="#" class="back__button none">Atpakaļ<i class="arrow"></i></a>
				</div>
				<div class="right">
					<div class="first__info">
						<div class="first__info-title"><?php echo $texts['part_one_title'];?></div>
						<ul class="first__info-list">
							<li><?php echo $texts['part_one_question'];?></li>
							<li><?php echo $texts['part_one_eta'];?></li>
						</ul>
						<div class="button__wrapper">
							<a href="#" class="featured__link first__questions">Turpināt Testu</a>
						</div>
					</div>
					<form action="" class="questions__form first__questions-form">
		<div class="swiper desktop">
			<div class="swiper-wrapper">
				<?php
				$counter = 0;
				$counterNo = 1;
						if( have_rows('main_questions') ): while ( have_rows('main_questions') ) : the_row();?>
						<div class="swiper-slide">
							<div class="questions">
								<div class="one">
									<div class="pagination mobilePagination"><span><?php echo $counterNo; ?></span>/<?php echo sizeof(get_field('main_questions'))*2;?></div>      
									<p class="question"><?php echo get_sub_field('question'); ?></p>
									<div class="answers">
										<input type="radio" value="true" id="answerYes<?php echo $counter; ?>" class="question__input" hidden name="question<?php echo $counter; ?>">
										<label class="noselect" for="answerYes<?php echo $counter; ?>">JĀ</label>
										<input type="radio" value="false" id="answerNo<?php echo $counter; ?>" class="question__input" hidden name="question<?php echo $counter; ?>">
										<label class="noselect" for="answerNo<?php echo $counter; ?>">NĒ</label>
										<a class="refresh__button"></a>
									</div>
								</div>
								<div class="two">
								<div class="pagination mobilePagination"><span><?php echo $counterNo+1; ?></span>/<?php echo count(get_field('main_questions'))*2;?></div>      
									<p class="question"><?php echo get_sub_field('question_two');?></p>
									<div class="answers">
										<input type="radio" value="true" id="answerYes<?php echo $counterNo; ?>" class="question__input" hidden name="question<?php echo $counterNo;?>">
										<label class="noselect" for="answerYes<?php echo $counterNo; ?>">JĀ</label>
										<input type="radio" value="false" id="answerNo<?php echo $counterNo; ?>" class="question__input" hidden name="question<?php echo $counterNo;?>">
										<label class="noselect" for="answerNo<?php echo $counterNo; ?>">NĒ</label>
										<a class="refresh__button"></a>
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
			   
			<div class="swiper-button-prev">Atpakaļ</div>
			<div class="swiper-button-next">Tālāk</div>
			<div class="swiper-pagination"></div>
			</div>
		<div class="firstButtonWrapper">
			<button type="submit" class="featured__link button__link none">Turpināt</button>
		</div>
		</form>
		<!-- <pre id="log"></pre> -->
				</div>
			</div>
		</div>
	</section>
	
	<div class="container">
		
	</div>

	<?php
		if( have_rows('follow_questions') ): while ( have_rows('follow_questions') ) : the_row();?>
		<div class="followQuestions" data-title="<?php echo get_sub_field('title');?>" data-progname="<?php echo get_sub_field('program_name');?>" data-question="<?php echo get_sub_field('questions');?>" data-name="<?php echo get_sub_field('faculty_name');?>" data-full="<?php echo get_sub_field('faculty_description');?>" data-description="<?php echo get_sub_field('faculty_short_description');?>" data-page="<?php echo get_sub_field('faculty_page');?>" data-color="<?php echo get_sub_field('faculty_color');?>" data-image="<?php echo get_sub_field('faculty_image');?>" hidden>Hidden</div>
	<?php 
		endwhile; endif;
    ?>
	<section class="results none" style="background-image: url(<?php echo get_template_directory_uri() . '/assets/images/results.jpg';?>)">

	</section>

	<section id="contact" class="contact overlay-purple none " style="background-image: url(<?php echo get_field('images', 'option')['contacts_background_image'];?>)">
		<div class="container">
			<div class="contact__inner">
				<div class="contact__info">
					<div class="contact__info-title"><?php echo $contacts['good_title'];?></div>
					<!-- <div class="contact__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div> -->
					<div class="contact__info-mail"><?php echo $contacts['good_text'];?></div>
				</div>
				<?php echo do_shortcode('[contact-form-7 id="105" title="Untitled" html_class="contact__form"]'); ?>
			</div>
		</div>
	</section>
<div class="none resultstext" hidden>
		<?php echo $results['result_text'];?>
</div>
</main>
<?php
get_sidebar();
get_footer();
