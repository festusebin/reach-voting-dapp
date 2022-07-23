import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

console.log('Creating a starting balance');
const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(startingBalance);
console.log('Hello, alice and bob');

console.log('launching...');
const ctcAlice = accAlice.contract(backend);

console.log('starting backends...');

const users = [];

const startBobs = async () => {
  const newBob = async (who) => {
    const acc = await stdlib.newTestAccount(startingBalance);
    const ctc = acc.contract(backend, ctcAlice.getInfo());
    users.push(acc.getAddress());
  };
  await newBob('Bob 1');
  await newBob('Bob 2');

  console.log(users);
};

await ctcAlice.p.Alice({
  // Alice interacts object
  ready: () => {
    console.log('Alice is ready');
    startBobs();
  },
});

console.log('Goodbye, Alice and Bob');