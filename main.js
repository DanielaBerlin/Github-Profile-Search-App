import * as v from './js/variables.js';

v.form.addEventListener('submit', (e) => {
  e.preventDefault();
  //   let user = v.search.value;
  // let user = v.search.value.replace(/\s+/g, "");
    let user = v.search.value.split(' ').join('');

  alert(user);
});
