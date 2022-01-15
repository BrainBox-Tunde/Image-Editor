function handleClicks() {
  let count = 0;
  $('.js-click-counter').text(count);
  $('.js-clicker').click(function (event) {
    count += 2;
    $('.js-click-counter').text(count);
  });
}
$(handleClicks)