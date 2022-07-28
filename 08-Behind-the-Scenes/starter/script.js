'use strict';

const marco = {
  firstName: 'Marco',
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`)

};


marco.greet();
