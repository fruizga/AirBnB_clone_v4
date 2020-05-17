$(document).ready(function () {
  const NewAmenity = {};
  $('input[type=checkbox]').click(function () {
    if (this.checked) {
      NewAmenity[$(this).data('id')] = $(this).data('name');
    } else {
      delete NewAmenity[$(this).data('id')];
    }
    $('.amenities h4').text(Object.values(NewAmenity).join(', '));
  });
});
