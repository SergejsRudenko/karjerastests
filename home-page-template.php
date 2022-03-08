<?php
/*
Template Name: Home page
*/


get_header();
?>

<main>
	<section class="hero">
		<div class="container">
			<div class="hero__inner">
				<div class="left" style="background-image: url(<?php echo get_template_directory_uri() . '/assets/images/hand.jpg';?>)">
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
						<a href="#" class="featured__link">Sākt testu</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="container">
		<form action="" class="questions__form">
		<?php
		$counter = 0;
		$counterNo = 1;
                if( have_rows('main_questions') ): while ( have_rows('main_questions') ) : the_row();?>
					<div class="questions">      
						<p class="question"><?php echo get_sub_field('question'); ?></p>
						<div class="answers">
							<input type="radio" value="true" id="answerYes<?php echo $counter; ?>" checked name="question<?php echo $counter; ?>">
							<label for="answerYes<?php echo $counter; ?>">YES</label>
							<input type="radio" value="false" id="answerNo<?php echo $counter; ?>" name="question<?php echo $counter; ?>">
							<label for="answerNo<?php echo $counter; ?>">NO</label>
						</div>
						<p class="question"><?php echo get_sub_field('question_two');?></p>
						<div class="answers">
							<input type="radio" value="true" id="answerYes<?php echo $counter; ?>" checked name="question<?php echo ++$counter;?>">
							<?php $counter--; ?>
							<label for="answerYes<?php echo $counter; ?>">YES</label>
							<input type="radio" value="false" id="answerNo<?php echo $counter; ?>" name="question<?php echo ++$counter;?>">
							<?php $counter--; ?>
							<label for="answerNo<?php echo $counter; ?>">NO</label>
						</div>
						<input type="hidden" name="folow-data" class="follow__questions" data-id="<?php echo $counter;?>" data-follow="<?php echo get_sub_field('follow_up_question_list');?>">
					</div>
                <?php 
				$counter += 2;
				// $counterNo += 2;
				endwhile; endif;
        ?>
		<button type="submit" class="submit">Submit</button>
		</form>
		<pre id="log"></pre>
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
