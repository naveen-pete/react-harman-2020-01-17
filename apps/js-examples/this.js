console.log('this:', this);

function sayHi() {
  console.log('hi');
  console.log('inside sayHi() this:', this);
}

sayHi();

const person = {
  name: 'Ram',
  email: 'ram@gmail.com',


  show: function () {
    // const self = this;
    console.log('name:', this.name, ' email:', this.email);
    console.log('person.show() this:', this);

    // const changeName = function () {
    //   self.name = 'shyam';
    //   console.log('changeName() this:', this);
    // };

    const changeName = () => {
      p.name = 'shyam';
      console.log('changeName() this:', this);
    };

    changeName();
    console.log('name:', this.name, ' email:', this.email);

  }
};

person.show();


