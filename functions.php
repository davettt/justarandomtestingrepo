<?php 
/*demo for functions childtheme file*/

function add_spectragram_files() {
    wp_register_style('spectragram',get_stylesheet_directory_uri().'/js/spectragram/spectragram.min.js',array('jquery'),'',true);
    wp_register_style('spectragramscript',get_stylesheet_directory_uri().'/js/spectragram/spectragramscript',array('spectragram'),'',true);
}
add_action('wp_enqueue_scripts','add_spectragram_files');

function spectragram_shortcode($atts, $content = null){
    $spectragramdata = shortcode_atts(array(
        'query' => '',
        'max' => '10',
        'size' => 'medium'
    ),$atts);
    wp_enqueue_script('spectragram');
    wp_enqueue_script('spectragramscript');
    wp_localize_script('spectragramscript','instag',$spectragramdata);
    $instagram_spectragram = '<ul class="instagrid"></ul>';
    return $instagram_spectragram;
}
add_shortcode('instagrid','spectragram_shortcode');

?>