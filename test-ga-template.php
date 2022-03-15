<?php
/*
Template Name: Template for GA page
*/


get_header();
?>

<main>
<a href="#" id="testEvent" style="justify-content: center; display: flex;">PUSH ME</a>

<section class="contact overlay-purple" style="background-image: url(<?php echo get_template_directory_uri() . '/assets/images/contact.jpg';?>)">
		<div class="container">
			<div class="contact__inner">
				<div class="contact__info">
					<div class="contact__info-title">Vēlies saņemt vairāk informācijas?</div>
					<!-- <div class="contact__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div> -->
					<div class="contact__info-mail">Piesakies konsultācijai aizpildot kontaktformu vai rakstot uz e-pastu <a href="mailto: karjera@lu.lv" class="">karjera@lu.lv</a></div>
				</div>
				<?php echo do_shortcode('[contact-form-7 id="43" title="Untitled" html_class="contact__form"]'); ?>
				<!-- <form action="<?php echo admin_url('admin-ajax.php');?>" method="post" class="contact__form">
					
					<input type="hidden" name="action" value="my_action">
					<input type="text" name="name" id="" placeholder="Vārds, Uzvārds *" required>
					<input type="text" name="email" id="" placeholder="E-pasts *" required>
					<input type="text" name="comment" id="" placeholder="Komentārs">
					<div class="checkbox__wrapper">
						<input type="checkbox" name="accept" id="checkbox" required>
						<label for="checkbox">Piekrītu privātuma politikai</label>
					</div>
					<button class="featured__link contact__button" type="submit">Pieteikties</button>
					<div class="alert alert-success contact__msg" style="display: none" role="alert">
						Paldies, jūsu ziņa aizūtīta.
					</div>
				</form> -->
			</div>
		</div>
</section>

</main>
<?php
get_sidebar();
get_footer();
