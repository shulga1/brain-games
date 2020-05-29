import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const nameUser = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anonymous',
  });

  console.log(`Hello, ${nameUser}!`);

  return nameUser;
};
