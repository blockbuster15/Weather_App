console.log('Starting app');

setTimeout(() => {
  console.log('Inside second callback');
},0);

setTimeout(() => {
  console.log('Inside of Callback');
},2000);

console.log('Finishing up');
