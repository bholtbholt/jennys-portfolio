(() => {
  const form = document.getElementById('js-submit-form');
  const formResponse = document.getElementById('js-form-response');

  form.onsubmit = e => {
    e.preventDefault();

    const formElements = Array.from(form);
    const data = {};

    // reset form response message
    formResponse.innerHTML = '';
    formResponse.classList.remove('_success', '_warning', '_slide-in');

    formElements.map(input => (data[input.name] = input.value));

    // Construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback function
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        formElements.filter(input => input.type !== 'hidden').map(input => (input.value = ''));
        formResponse.classList.add('_success', '_slide-in');
        formResponse.innerHTML = "Thanks for the message. I'll be in touch shortly.";
      } else {
        formResponse.classList.add('_warning', '_slide-in');
        formResponse.innerHTML =
          'Something went wrong. Please try again, or <a href="mailto:jennypreswick@gmail.com">email me directly</a>.';
      }
    };
  };
})();
