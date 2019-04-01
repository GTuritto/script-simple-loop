var generateNumbers = {

  //  setting variables

  settings: {
    startVal:   1,
    endVal:     100,
    mod3Str:    "Fizz",
    mod5Str:    "Buzz"
  },

  init: function() {

    // append string to DOM
    let container = document.querySelector('.content');
    container.appendChild( this.printNumbers() );

  },


  printNumbers: function() {
    /**
    * @desc loops through startval and endval defined in settings
        if divisible by 3, print out 'Fizz'
        if divisible by 5, print out 'Buzz'
        if divisible by both 3 and 5, brint out 'FizzBuzz'
    * @param none
    * @return string - a string of prnted values
  */
    const s = this.settings;

    let el = document.createElement('div'),
        isMod3, isMod5;

    for (let i = s.startVal; i <= s.endVal; i++) {
      // loop through numbers between startVal and endVal

      // set string if divisible by 3 or 5
      isMod3 = (i%3 === 0) ? s.mod3Str : '';
      isMod5 = (i%5 === 0) ? s.mod5Str : '';


      if ((isMod3 === '') && (isMod5 === '')) {
        //  if number is not divisible by 3 or 5 just print out the number
        el.innerHTML += i;

      } else {
        //  print out the correct string
        el.innerHTML += isMod3 + isMod5;
      }

      // add a break to make readable
      el.innerHTML += '<br />';

    }


    return el;
  }
};

(function() {

  generateNumbers.init();

})();