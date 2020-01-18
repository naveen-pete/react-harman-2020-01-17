const john = {
  name: 'john',
  email: 'john@gmail.com'
};

const ram = {
  name: 'ram',
  email: 'ram@gmail.com'
};

function showPerson(skill1, skill2) {
  console.log('name:', this.name, ' email:', this.email);
  console.log('skills:', skill1, skill2);
}

// showPerson.call(john, 'dotnet ', 'java');
// showPerson.call(ram, 'angular ', 'react');

// showPerson.apply(john);
// showPerson.apply(ram, ['angular ', 'react']);

const newShowPerson = showPerson.bind(john, 'dotnet ', 'java');
newShowPerson();