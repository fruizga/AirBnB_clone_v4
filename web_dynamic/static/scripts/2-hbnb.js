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
  $.get('http://0.0.0.0:5001/api/v1/status/', (data, status) => {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
