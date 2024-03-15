var personName = '';
personName = prompt('What is your name?') || '';
var lowercase = personName.toLowerCase();
var uppercase = personName.toUpperCase();
var titlecase = personName.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).
    toLowerCase(); }).join(' ');
if (personName !== null && personName !== '') {
    alert("Hello ".concat(personName, ", Here are your name in:\nLowerCase: ").concat(lowercase, "\nUppercase: ").concat(uppercase, "\nTitleCase: ").concat(titlecase));
}
else {
    alert('Please fill your name !');
}
