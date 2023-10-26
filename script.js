async function getAdvise() {
    if ($('#blockquote').css('display') === 'none') {
      let response = await fetch('https://api.adviceslip.com/advice')
      let data = await response.json()
      let advice = data.slip.advice;
      $('#display').text(advice);
      $('#blockquote').fadeIn(1000);
    } else {
      $('#blockquote').fadeOut(1000);
    }
  }