'reach 0.1';

const maxAttach = 5;

export const main = Reach.App(() => {
  const common = {
    ready: Fun([], Null),
  }
  const A = Participant('Alice', {
    // Alice interacts interface here
    //ready: Fun([], Null),
    ...common,
    setAttach: Fun([Address], Null),
    setAttachFail: Fun([Address], Null),
  });

  const B = API('Bob', {
    // Bobs interact interface here
    attach: Fun([], Bool),
  });

  const C = API('Charlie', {
    end: Fun([], Bool),
  });

  const V = View({
    setAttachers: Array(Address, maxAttach),
    setAliceAddress: Address,
  });
  
  init()

  A.publish();
  V.setAliceAddress.set(A);
  A.interact.ready();

  const firstAttach = Array.replicate(maxAttach, A);

  const [done, numAttached, attachers] = parallelReduce([false, 0, firstAttach])
    .define(() => {
      V.setAttachers.set(attachers);
    })
    .invariant(numAttached <= maxAttach)
    .while(!done)
    .api(
      B.attach,
      () => { },
      () => 0,
      (returnFunc) => {
        const isAttach = (numAttached < maxAttach && !(fromMaybe(attachers.indexOf(this), (() => false), ((_) => true)))) ? true : false;
        returnFunc(isAttach);
        if (isAttach) {
          A.interact.setAttach(this);
        }
        else {
          A.interact.setAttachFail(this);
        }
        const isIncrease = (isAttach) ? 1 : 0;
        const newAttach = (isAttach) ? attachers.set(numAttached, this) : attachers;

        return [done, numAttached + isIncrease, newAttach];
      }
    )
    .api(
      C.end,
      () => {
        assume(this == A);
      },
      () => 0,
      (returnFunc) => {
        require(this == A);
        returnFunc(true);

        return [true, numAttached, attachers];
      }
    );
  transfer(balance()).to(A);
  commit();
  exit();
});