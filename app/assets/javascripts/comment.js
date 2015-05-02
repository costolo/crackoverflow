$(document).on('ready page:load', function() {

  $('.comment-new-form').hide()

  $('.answer-container').on('click', '.comment-add-link', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var $target = $(event.target)
    $target.hide();
    $target.closest('.comment-list').children('.comment-new-form').show();

  })

  $('.answer-container').on('submit', '.comment-new-form', function(event) {
    event.preventDefault();

    var $target = $(event.target);
    var $answerId = $target.closest('.answer-container').children('.post-id').html()

    $.ajax({
      url: '/comments',
      type: "post",
      data: $target.serialize() + "&post_id=" + $answerId
    }).done(function(response) {

    })

  })

})