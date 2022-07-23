import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const getBalance = async (who) => stdlib.formatCurrency(await stdlib.balanceOf(who), 4);

const newAcc = async (who) => {
  const startingBalance = stdlib.parseCurrency(100);

  const acc = await stdlib.newTestAccount(startingBalance);
  const addr = stdlib.formatAddress(acc.getAddress());
  console.log(`Generating a new account ${who} with ${await getBalance(acc)} tokens and address ${addr}`);  
  return acc;
}

const newBob = async (who, ctcInfo) => {
  console.log('');

  const acc = await newAcc(who);
  console.log(`${who} joins the contract`);
  const ctcBob = acc.contract(backend, ctcInfo);

  const aliceAddr = stdlib.formatAddress((await ctcBob.v.setAliceAddress())[1]);
  console.log(`${who} deploys the contract ${aliceAddr}`);

  const attArray = await ctcBob.v.setAttachers();
  if (attArray[0] === 'Some') {
    console.log(`${who} sees the current Attachers:`);

    let cnt = 0;
    for(let i in attArray[1]) {
      const addr = stdlib.formatAddress(attArray[1][i]);
      if (addr === aliceAddr) continue;

      cnt++;
      console.log(' '+cnt+': '+addr);
    }
    if (cnt === 0) {
      console.log(`${who} sees no attached yet.`);
    }
  }

  console.log(`${who} is attaching to the contract...`);
  const didAttach = await ctcBob.a.B.attach();

  if (!didAttach) {
    console.log(`${who} is unable to attach to the contract. It's reached the maximum number.`);
    process.exit();
  }
  else {
    console.log(`${who} has successfully attached to the contract.`);
  }
}

const interact = (async () => {
  const isAlice = await ask.ask(`Are you deploying the contract?`,ask.yesno);

  if (isAlice) {
    const acc = await newAcc('Alice');
    console.log('Alice is Deploying the contract...');
    const ctcAlice = await acc.contract(backend);

    await Promise.all([
      backend.Alice(ctcAlice, {
        ready: async () => {
          const ctcInfoD = JSON.stringify(await ctcAlice.getInfo());
          console.log(`Alice is ready to accept attachers...`);
          console.log(`The contract has deployed as: ${ctcInfoD}`);
        },
        setAttach: (addr) => {
          console.log(`Alice sees the address ${stdlib.formatAddress(addr)} has attached to the contract.`);
        },
        setAttachFail: (addr) => {
          console.log(`Alice sees that ${stdlib.formatAddress(addr)} tried but was unable to join the contract.`);
        }
      }),
    ]);

  }
  else {
    const ctcInfoA = await ask.ask(`Enter the contract string:`,JSON.parse);

    for(let i = 1; i <= 6; i++) {
      await newBob(`Bob${i}`,ctcInfoA);
    }

  }

  process.exit();
});

const noninteract = (async () => {
  const acc = await newAcc('Alice');
  console.log('Alice is Deploying the contract...');
  const ctc = await acc.contract(backend);

  await Promise.all([
    backend.Alice(ctc, {
      ready: async () => {
        const ctcInfo = await ctc.getInfo();
        console.log(`Alice is ready to accept attachers...`);
        console.log(`The contract has deployed as: ${JSON.stringify(ctcInfo)}`);
        console.log('');

        for(let i = 1; i <= 6; i++) {
          await newBob(`Bob${i}`,ctcInfo);
        }
      },
      setAttach: (addr) => {
        console.log(`Alice sees address ${stdlib.formatAddress(addr)} has attached to the contract.`);
      },
      setAttachFail: (addr) => {
        console.log(`Alice sees that ${stdlib.formatAddress(addr)} tried but was unable to join the contract.`);
      }
    }),
  ]);

  process.exit();
});

const isInteractive = await ask.ask('Do you want to run in Interactive Mode?',ask.yesno);
if (isInteractive) {
  console.log('');
  console.log('Running in interactive mode...');
  console.log('');
  interact();
}
else {
  console.log('');
  console.log('Running in non-interactive mode...');
  console.log('');
  noninteract();
}