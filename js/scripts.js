var lista = [];
lista = $('li');

$("input[type='text']").fadeOut();

$('#keyboard').on('click', function () {
  $("input[type='text']").fadeToggle();
});

$("input[type='text']").on('keypress', function (e) {
  var inputVal = $(this).val();
  var lista = $('li');

  if (e.which === 13) {
    $('ul').append(
      "<li><span class='remove'><i class='far fa-trash-alt'></i></span> " +
        inputVal +
        '</li>'
    );
    $("input[type='text']").val('');
  }
});

$(document).on('click', 'li', function () {
  $(this).toggleClass('selected');
});

$('#lista').on('click', '.remove', function () {
  $(this).parent().fadeOut();
});
