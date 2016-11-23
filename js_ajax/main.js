//Create GLOBAL variable below here on line 2
var global_result;
var first_movie;
var good_pic;
// var the_element;
$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result=result;
                // good_pic=global_result.feed.entry[0]['im:image'][2].label;
                for (i=0; i<global_result.feed.entry.length; i++) {
                    var title_director=global_result.feed.entry[i].title.label;
                    var best_pic=global_result.feed.entry[i]['im:image'][2].label;
                    var the_element=$('<img>',{src: best_pic});
                    var the_element_title=$('<p>').text(title_director);
                    the_element.appendTo($('#main'));
                    the_element_title.appendTo($('#main'));
                }


            }
        });
        console.log('End of click function');
    });
});