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
					<div class="swiper-pagination"></div>

				</div>
				<div class="right">
					<div class="first__info">
						<div class="first__info-title">Rūpīgi izlasi jautājumu un atbildi ar “jā” vai “nē”.</div>
						<ul class="first__info-list">
							<li>14 jautājumi</li>
							<li>Aptuvenais izpildes laiks: 3 minūtes </li>
						</ul>
						<a href="#" class="featured__link first__questions">Turpināt Testu</a>
					</div>
					<form action="" class="questions__form first__questions-form">
		<div class="swiper">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
		<?php
		$counter = 0;
		$counterNo = 1;
                if( have_rows('main_questions') ): while ( have_rows('main_questions') ) : the_row();?>
				<div class="swiper-slide">
					<div class="questions">
						<div class="one">      
							<p class="question"><?php echo get_sub_field('question'); ?></p>
							<div class="answers">
								<input type="radio" value="true" id="answerYes<?php echo $counter; ?>" hidden checked name="question<?php echo $counter; ?>">
								<label for="answerYes<?php echo $counter; ?>">JĀ</label>
								<input type="radio" value="false" id="answerNo<?php echo $counter; ?>" hidden name="question<?php echo $counter; ?>">
								<label for="answerNo<?php echo $counter; ?>">NĒ</label>
							</div>
						</div>
						<div class="two">
							<p class="question"><?php echo get_sub_field('question_two');?></p>
							<div class="answers">
								<input type="radio" value="true" id="answerYes<?php echo $counterNo; ?>" hidden checked name="question<?php echo $counterNo;?>">
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
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>

			<!-- If we need scrollbar -->
			<div class="swiper-scrollbar"></div>
			</div>
		<button type="submit" class="submit">Submit</button>
		</form>
		<pre id="log"></pre>
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
		<div class="followQuestions" data-title="<?php echo get_sub_field('title');?>" data-question="<?php echo get_sub_field('questions');?>" hidden>Hidden</div>
	<?php 
		endwhile; endif;
    ?>
</main>

<?php
get_sidebar();
get_footer();
