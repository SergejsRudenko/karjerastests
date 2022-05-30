<?php
/**
 * karjerastest functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package karjerastest
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.8' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function karjerastest_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on karjerastest, use a find and replace
		* to change 'karjerastest' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'karjerastest', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'karjerastest' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'karjerastest_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'karjerastest_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function karjerastest_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'karjerastest_content_width', 640 );
}
add_action( 'after_setup_theme', 'karjerastest_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function karjerastest_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'karjerastest' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'karjerastest' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'karjerastest_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function karjerastest_scripts() {
	wp_enqueue_style( 'karjerastest-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_enqueue_style( 'swiper', get_template_directory_uri() . '/assets/files/swiper-bundle.min.css', array(), _S_VERSION );
	wp_enqueue_style( 'cookies', get_template_directory_uri() . '/assets/files/style_cookies.css', array(), _S_VERSION );
	wp_enqueue_style( 'karjerastest-style-main', get_template_directory_uri() . '/assets/css/style.min.css', array(), _S_VERSION );
	wp_style_add_data( 'karjerastest-style', 'rtl', 'replace' );

	wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', get_template_directory_uri() . '/assets/files/plugins/jquery.min.js', array(), '3.6.0', true  );
    wp_enqueue_script( 'jquery');

	wp_enqueue_script( 'karjerastest-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'karjerastest-cookie-consent', get_template_directory_uri() . '/assets/files/cookieconsent.js', array('jquery'), _S_VERSION, true );
	wp_enqueue_script( 'karjerastest-main', get_template_directory_uri() . '/assets/js/app.min.js', array('jquery'), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'karjerastest_scripts' );
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page();
	
}

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}
function lu_menus() {

	$locations = array(
		'footer'  => __( 'Footer Menu', 'lu' ),
		'footer_social' => __('Footer Social', 'lu')
	);

	register_nav_menus( $locations );
}
add_action( 'init', 'lu_menus' );
add_filter('wpcf7_validate_text', 'custom_text_validation', 20, 2);
add_filter('wpcf7_validate_text*', 'custom_text_validation', 20, 2);

function custom_text_validation($result, $tag) {
    $type = $tag->type; //object instead of array
    $name = $tag->name; //object instead of array
	$pattern = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i";
    if($name == 'email') {
        $value = $_POST[$name];
        if(!preg_match($pattern, $value )){ //new regex statement
            $result->invalidate($tag, "Invalid characters");
        }
    }
    return $result;
}
// add_filter('wpcf7_form_elements', function( $content ) {
// 	$dom = new DOMDocument();
// 	$dom->preserveWhiteSpace = false;
// 	$dom->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8'), LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
  
// 	$xpath = new DomXPath($dom);
// 	$spans = $xpath->query("//span[contains(@class, 'wpcf7-form-control-wrap')]" );
  
// 	foreach ( $spans as $span ) :
// 	  $children = $span->firstChild;
// 	  $span->parentNode->replaceChild( $children, $span );
// 	endforeach;
  
// 	return $dom->saveHTML();
//   });


//   add_action( 'phpmailer_init', 'my_phpmailer_example' );
//   function my_phpmailer_example( $phpmailer ) {
  
// 	  $phpmailer->isSMTP();     
// 	  $phpmailer->Host = 'smtp.timeweb.ru';
// 	  $phpmailer->SMTPAuth = true; // Force it to use Username and Password to authenticate
// 	  $phpmailer->Port = 25;
// 	  $phpmailer->Username = 'info@consolestuff.eu';
// 	  $phpmailer->Password = 'eHacae5F';
  
// 	  // Additional settings…
// 	  //$phpmailer->SMTPSecure = "tls"; // Choose SSL or TLS, if necessary for your server
// 	  $phpmailer->From = "info@consolestuff.eu";
// 	  $phpmailer->FromName = "Wordpress";
//   }
//   add_action( 'wp_ajax_my_action', 'my_action_callback' );
//   add_action( 'wp_ajax_nopriv_my_action', 'my_action_callback' );
//   function my_action_callback() {
// 	  if ($_SERVER["REQUEST_METHOD"] == "POST") {
// 		  # get_option( 'admin_email');
// 		  # FIX: Replace this email with recipient email
// 		  $mail_to = 'sergejs.rudenko95@gmail.com';
		  
// 		  # Sender Data
// 		  $name = trim($_POST["name"]);
// 		  $email = trim($_POST["email"]);
// 		  $message = trim($_POST["comment"]);
		  
// 		  if ( empty($name) OR empty($email) OR empty($message)) {
// 			  # Set a 400 (bad request) response code and exit.
// 			  http_response_code(400);
// 			  echo "Please complete the form and try again.";
// 			  exit;
// 		  }
		  
// 		  # Mail Content
// 		  $content = "Name: $name\n";
// 		  $content .= "Email: $email\n\n";
// 		  $content .= "Message:\n$message\n";
  
// 		  # email headers.
// 		  $headers = "From: Wordpress <info@consolestuff.eu>";
  
// 		  # Send the email.
// 		  $success = wp_mail($mail_to, $phone, $content, $headers);
// 		  if ($success) {
// 			  # Set a 200 (okay) response code.
// 			  http_response_code(200);
// 			  echo "Thank You! Your message has been sent.";
// 		  } else {
// 			  # Set a 500 (internal server error) response code.
// 			  http_response_code(500);
// 			  echo "Oops! Something went wrong, we couldn't send your message.";
// 		  }
  
// 	  } else {
// 		  # Not a POST request, set a 403 (forbidden) response code.
// 		  http_response_code(403);
// 		  echo "There was a problem with your submission, please try again.";
// 	  }
  
// 	  // выход нужен для того, чтобы в ответе не было ничего лишнего, только то что возвращает функция
// 	  wp_die();
//   }