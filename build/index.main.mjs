// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  
  return {
    infos: {
      setAliceAddress: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v220, v227, v228, v229, v233] = svs;
            return (await ((async () => {
              
              
              return v220;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      setAttachers: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v220, v227, v228, v229, v233] = svs;
            return (await ((async () => {
              
              
              return v227;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc3, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Data({
    Bob_attach0_65: ctc1,
    Charlie_end0_65: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v222, time: v221, didSend: v22, from: v220 } = txn1;
      
      ;
      
      const v225 = [v220, v220, v220, v220, v220];
      const v227 = v225;
      const v228 = false;
      const v229 = stdlib.checkedBigNumberify('./index.rsh:39:65:decimal', stdlib.UInt_max, '0');
      const v230 = v221;
      const v233 = stdlib.checkedBigNumberify('./index.rsh:31:3:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v245 = v228 ? false : true;
        
        return v245;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v220,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v222, time: v221, didSend: v22, from: v220 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:35:19:application',
    fs: ['at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)', 'at ./index.rsh:35:19:application call to "liftedInteract" (defined at: ./index.rsh:35:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v225 = [v220, v220, v220, v220, v220];
  let v227 = v225;
  let v228 = false;
  let v229 = stdlib.checkedBigNumberify('./index.rsh:39:65:decimal', stdlib.UInt_max, '0');
  let v230 = v221;
  let v233 = stdlib.checkedBigNumberify('./index.rsh:31:3:after expr stmt', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v245 = v228 ? false : true;
    
    return v245;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v271], secs: v273, time: v272, didSend: v128, from: v270 } = txn2;
    switch (v271[0]) {
      case 'Bob_attach0_65': {
        const v274 = v271[1];
        undefined /* setApiDetails */;
        ;
        const v281 = stdlib.lt(v229, stdlib.checkedBigNumberify('./index.rsh:3:19:decimal', stdlib.UInt_max, '5'));
        const v282 = ['None', null];
        const v283 = await stdlib.Array_asyncReduce([v227], v282, async([v285], v284, v286) => {
          let v287;
          switch (v284[0]) {
            case 'None': {
              const v288 = v284[1];
              v287 = true;
              
              break;
              }
            case 'Some': {
              const v289 = v284[1];
              v287 = false;
              
              break;
              }
            }
          const v290 = stdlib.addressEq(v270, v285);
          const v291 = v287 ? v290 : false;
          const v292 = ['Some', v286];
          const v293 = v291 ? v292 : v284;
          
          return v293;})
        let v294;
        switch (v283[0]) {
          case 'None': {
            const v295 = v283[1];
            v294 = false;
            
            break;
            }
          case 'Some': {
            const v296 = v283[1];
            v294 = true;
            
            break;
            }
          }
        const v297 = v294 ? false : true;
        const v298 = v281 ? v297 : false;
        const v299 = v298;
        await txn2.getOutput('Bob_attach', 'v299', ctc3, v299);
        if (v298) {
          stdlib.protect(ctc0, await interact.setAttach(v270), {
            at: './index.rsh:53:31:application',
            fs: ['at ./index.rsh:53:31:application call to [unknown function] (defined at: ./index.rsh:53:31:function exp)', 'at ./index.rsh:53:31:application call to "liftedInteract" (defined at: ./index.rsh:53:31:application)', 'at ./index.rsh:49:20:application call to [unknown function] (defined at: ./index.rsh:49:20:function exp)'],
            msg: 'setAttach',
            who: 'Alice'
            });
          
          }
        else {
          stdlib.protect(ctc0, await interact.setAttachFail(v270), {
            at: './index.rsh:56:35:application',
            fs: ['at ./index.rsh:56:35:application call to [unknown function] (defined at: ./index.rsh:56:35:function exp)', 'at ./index.rsh:56:35:application call to "liftedInteract" (defined at: ./index.rsh:56:35:application)', 'at ./index.rsh:49:20:application call to [unknown function] (defined at: ./index.rsh:49:20:function exp)'],
            msg: 'setAttachFail',
            who: 'Alice'
            });
          
          }
        const v307 = v298 ? stdlib.checkedBigNumberify('./index.rsh:58:41:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:58:45:decimal', stdlib.UInt_max, '0');
        let v308;
        if (v298) {
          const v310 = stdlib.Array_set(v227, v229, v270);
          v308 = v310;
          }
        else {
          v308 = v227;
          }
        const v311 = stdlib.add(v229, v307);
        const cv227 = v308;
        const cv228 = v228;
        const cv229 = v311;
        const cv230 = v272;
        const cv233 = v233;
        
        v227 = cv227;
        v228 = cv228;
        v229 = cv229;
        v230 = cv230;
        v233 = cv233;
        
        continue;
        break;
        }
      case 'Charlie_end0_65': {
        const v322 = v271[1];
        undefined /* setApiDetails */;
        ;
        const v362 = stdlib.addressEq(v270, v220);
        stdlib.assert(v362, {
          at: './index.rsh:71:16:application',
          fs: ['at ./index.rsh:70:20:application call to [unknown function] (defined at: ./index.rsh:70:20:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v363 = true;
        await txn2.getOutput('Charlie_end', 'v363', ctc3, v363);
        const cv227 = v227;
        const cv228 = true;
        const cv229 = v229;
        const cv230 = v272;
        const cv233 = v233;
        
        v227 = cv227;
        v228 = cv228;
        v229 = cv229;
        v230 = cv230;
        v233 = cv233;
        
        continue;
        break;
        }
      }
    
    }
  ;
  return;
  
  
  };
export async function _Bob_attach3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_attach3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_attach3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Bob_attach0_65: ctc4,
    Charlie_end0_65: ctc4
    });
  const ctc6 = stdlib.T_Null;
  
  
  const [v220, v227, v228, v229, v233] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc2, ctc3, ctc3]);
  const v253 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:47:10:application call to [unknown function] (defined at: ./index.rsh:47:10:function exp)', 'at ./index.rsh:39:56:application call to "runBob_attach0_65" (defined at: ./index.rsh:45:9:function exp)', 'at ./index.rsh:39:56:application call to [unknown function] (defined at: ./index.rsh:39:56:function exp)'],
    msg: 'in',
    who: 'Bob_attach'
    });
  const v257 = ['Bob_attach0_65', v253];
  
  const txn1 = await (ctc.sendrecv({
    args: [v220, v227, v228, v229, v233, v257],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v271], secs: v273, time: v272, didSend: v128, from: v270 } = txn1;
      
      switch (v271[0]) {
        case 'Bob_attach0_65': {
          const v274 = v271[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_attach"
            });
          ;
          const v281 = stdlib.lt(v229, stdlib.checkedBigNumberify('./index.rsh:3:19:decimal', stdlib.UInt_max, '5'));
          const v282 = ['None', null];
          const v283 = await stdlib.Array_asyncReduce([v227], v282, async([v285], v284, v286) => {
            let v287;
            switch (v284[0]) {
              case 'None': {
                const v288 = v284[1];
                v287 = true;
                
                break;
                }
              case 'Some': {
                const v289 = v284[1];
                v287 = false;
                
                break;
                }
              }
            const v290 = stdlib.addressEq(v270, v285);
            const v291 = v287 ? v290 : false;
            const v292 = ['Some', v286];
            const v293 = v291 ? v292 : v284;
            
            return v293;})
          let v294;
          switch (v283[0]) {
            case 'None': {
              const v295 = v283[1];
              v294 = false;
              
              break;
              }
            case 'Some': {
              const v296 = v283[1];
              v294 = true;
              
              break;
              }
            }
          const v297 = v294 ? false : true;
          const v298 = v281 ? v297 : false;
          const v299 = v298;
          const v300 = await txn1.getOutput('Bob_attach', 'v299', ctc2, v299);
          
          const v307 = v298 ? stdlib.checkedBigNumberify('./index.rsh:58:41:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:58:45:decimal', stdlib.UInt_max, '0');
          let v308;
          if (v298) {
            const v310 = stdlib.Array_set(v227, v229, v270);
            v308 = v310;
            }
          else {
            v308 = v227;
            }
          const v311 = stdlib.add(v229, v307);
          const v561 = v308;
          const v562 = v228;
          const v563 = v311;
          const v565 = v233;
          if (v228) {
            sim_r.txns.push({
              kind: 'from',
              to: v220,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Charlie_end0_65': {
          const v322 = v271[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v271], secs: v273, time: v272, didSend: v128, from: v270 } = txn1;
  switch (v271[0]) {
    case 'Bob_attach0_65': {
      const v274 = v271[1];
      undefined /* setApiDetails */;
      ;
      const v281 = stdlib.lt(v229, stdlib.checkedBigNumberify('./index.rsh:3:19:decimal', stdlib.UInt_max, '5'));
      const v282 = ['None', null];
      const v283 = await stdlib.Array_asyncReduce([v227], v282, async([v285], v284, v286) => {
        let v287;
        switch (v284[0]) {
          case 'None': {
            const v288 = v284[1];
            v287 = true;
            
            break;
            }
          case 'Some': {
            const v289 = v284[1];
            v287 = false;
            
            break;
            }
          }
        const v290 = stdlib.addressEq(v270, v285);
        const v291 = v287 ? v290 : false;
        const v292 = ['Some', v286];
        const v293 = v291 ? v292 : v284;
        
        return v293;})
      let v294;
      switch (v283[0]) {
        case 'None': {
          const v295 = v283[1];
          v294 = false;
          
          break;
          }
        case 'Some': {
          const v296 = v283[1];
          v294 = true;
          
          break;
          }
        }
      const v297 = v294 ? false : true;
      const v298 = v281 ? v297 : false;
      const v299 = v298;
      const v300 = await txn1.getOutput('Bob_attach', 'v299', ctc2, v299);
      if (v128) {
        stdlib.protect(ctc6, await interact.out(v274, v300), {
          at: './index.rsh:46:7:application',
          fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:7:function exp)', 'at ./index.rsh:51:19:application call to "returnFunc" (defined at: ./index.rsh:49:20:function exp)', 'at ./index.rsh:49:20:application call to [unknown function] (defined at: ./index.rsh:49:20:function exp)'],
          msg: 'out',
          who: 'Bob_attach'
          });
        }
      else {
        }
      
      const v307 = v298 ? stdlib.checkedBigNumberify('./index.rsh:58:41:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:58:45:decimal', stdlib.UInt_max, '0');
      let v308;
      if (v298) {
        const v310 = stdlib.Array_set(v227, v229, v270);
        v308 = v310;
        }
      else {
        v308 = v227;
        }
      const v311 = stdlib.add(v229, v307);
      const v561 = v308;
      const v562 = v228;
      const v563 = v311;
      const v565 = v233;
      if (v228) {
        ;
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Charlie_end0_65': {
      const v322 = v271[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Charlie_end3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Charlie_end3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Charlie_end3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Bob_attach0_65: ctc4,
    Charlie_end0_65: ctc4
    });
  const ctc6 = stdlib.T_Null;
  
  
  const [v220, v227, v228, v229, v233] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc2, ctc3, ctc3]);
  const v259 = ctc.selfAddress();
  const v261 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:66:10:application call to [unknown function] (defined at: ./index.rsh:66:10:function exp)', 'at ./index.rsh:39:56:application call to "runCharlie_end0_65" (defined at: ./index.rsh:64:9:function exp)', 'at ./index.rsh:39:56:application call to [unknown function] (defined at: ./index.rsh:39:56:function exp)'],
    msg: 'in',
    who: 'Charlie_end'
    });
  const v263 = stdlib.addressEq(v259, v220);
  stdlib.assert(v263, {
    at: './index.rsh:67:15:application',
    fs: ['at ./index.rsh:66:10:application call to [unknown function] (defined at: ./index.rsh:66:10:function exp)', 'at ./index.rsh:66:10:application call to [unknown function] (defined at: ./index.rsh:66:10:function exp)', 'at ./index.rsh:39:56:application call to "runCharlie_end0_65" (defined at: ./index.rsh:64:9:function exp)', 'at ./index.rsh:39:56:application call to [unknown function] (defined at: ./index.rsh:39:56:function exp)'],
    msg: null,
    who: 'Charlie_end'
    });
  const v266 = ['Charlie_end0_65', v261];
  
  const txn1 = await (ctc.sendrecv({
    args: [v220, v227, v228, v229, v233, v266],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v271], secs: v273, time: v272, didSend: v128, from: v270 } = txn1;
      
      switch (v271[0]) {
        case 'Bob_attach0_65': {
          const v274 = v271[1];
          
          break;
          }
        case 'Charlie_end0_65': {
          const v322 = v271[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Charlie_end"
            });
          ;
          const v363 = true;
          const v364 = await txn1.getOutput('Charlie_end', 'v363', ctc2, v363);
          
          sim_r.txns.push({
            kind: 'from',
            to: v220,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v271], secs: v273, time: v272, didSend: v128, from: v270 } = txn1;
  switch (v271[0]) {
    case 'Bob_attach0_65': {
      const v274 = v271[1];
      return;
      break;
      }
    case 'Charlie_end0_65': {
      const v322 = v271[1];
      undefined /* setApiDetails */;
      ;
      const v362 = stdlib.addressEq(v270, v220);
      stdlib.assert(v362, {
        at: './index.rsh:71:16:application',
        fs: ['at ./index.rsh:70:20:application call to [unknown function] (defined at: ./index.rsh:70:20:function exp)'],
        msg: null,
        who: 'Charlie_end'
        });
      const v363 = true;
      const v364 = await txn1.getOutput('Charlie_end', 'v363', ctc2, v363);
      if (v128) {
        stdlib.protect(ctc6, await interact.out(v322, v364), {
          at: './index.rsh:65:7:application',
          fs: ['at ./index.rsh:65:7:application call to [unknown function] (defined at: ./index.rsh:65:7:function exp)', 'at ./index.rsh:72:19:application call to "returnFunc" (defined at: ./index.rsh:70:20:function exp)', 'at ./index.rsh:70:20:application call to [unknown function] (defined at: ./index.rsh:70:20:function exp)'],
          msg: 'out',
          who: 'Charlie_end'
          });
        }
      else {
        }
      
      ;
      return;
      
      break;
      }
    }
  
  
  };
export async function Bob_attach(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_attach expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_attach expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Bob_attach3(ctcTop, interact);}
  };
export async function Charlie_end(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Charlie_end expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Charlie_end expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Charlie_end3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_attach()byte`, `Charlie_end()byte`],
    pure: [`setAliceAddress()address`, `setAttachers()address[5]`],
    sigs: [`Bob_attach()byte`, `Charlie_end()byte`, `setAliceAddress()address`, `setAttachers()address[5]`]
    },
  appApproval: `BiAJAAEDIAWt9c6RCMuB1YYOq5aujgUCJgMBAQEAACI1ADEYQQKSKmRJIls1AYEIWzUCNhoAF0lBAG0iNQQjNQZJIQUMQAAuSSEGDEAADiEGEkQqNf8pNP9QQgBjIQUSRDQBJBJEKWQoZFBJNQNXIKA1B0ICO0khBwxAABkhBxJENAEkEkQpZChkUEk1A1cAIDUHQgIbgaD1nrQBEkQqNf8oNP9QQgAYNhoCFzUENhoDNhoBF0khCAxAASghCBJEJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpXACA1/1cgoDX+gcEBWzX9gckBWzX8STUFNfuABNnfPAs0+1CwNPsiVUAAu4EJrzX5IjX4NP4lNPgLJVg19zT5IlVAAAYjNfZCAAYiNfZCAAA0+Sg0+BZQNPYxADT3EhBNNfk0+CMISTX4IQQMQP/ENPkiVUAABiI1+EIABiM1+EIAADT9IQQMNPgUEDX3gAgAAAAAAAABKzT3FlEHCFCwNPcWUQcINQc090EAHTT+IiU0/QtSMQBQNP4lSTT9CwiBoAFSUDX2QgAENP419jT/NPY0A1fAARc0/SIjNPdNCDIGNPxCAFwxADT/EkSACQAAAAAAAAFrAbAoNQc0/zT+IzT9MgY0/EIAOSISRIGgjQaIAOgiNAESRDQESSISTDQCEhFEgARfDav6sDEAMQAxAFAxAFAxAFAxAFAiIjIGIkIAADX/Nf41/TX8Nfs1+jT8QQATsSKyATT/sggjshA0+rIHs0IAKDT6NPtQKVA0/RZQNP8WUClLAVcAf2coSwFXf1JnSCQ1ATIGNQJCABwxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 209,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T8",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_attach0_65",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Charlie_end0_65",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T8",
                "name": "v271",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v299",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v363",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bob_attach",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Charlie_end",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T8",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_attach0_65",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Charlie_end0_65",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T8",
                "name": "v271",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "setAliceAddress",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "setAttachers",
    "outputs": [
      {
        "internalType": "address payable[5]",
        "name": "",
        "type": "address[5]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001645380380620016458339810160408190526200002691620003db565b60008055436003556200003862000220565b60408051338152835160208083019190915284015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008d3415600962000102565b80513390819052815160200181905281516040018190528151606001819052815160800152620000bc6200023a565b8051339052815160208083018051929092528151600091018190528151604001819052815143606090910152905160800152620000f9816200012c565b505050620004fb565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b806020015160200151156200019a578051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156200017e573d6000803e3d6000fd5b506000808055600181905562000197906002906200025d565b50565b620001a46200029c565b8151516001600160a01b031681526020808301805151828401526000604080850182905282518101516060860152915160809081015190850152600390554360015551620001f59183910162000446565b604051602081830303815290604052600290805190602001906200021b929190620002de565b505050565b6040518060200160405280620002356200036d565b905290565b60408051606081018252600091810191825290815260208101620002356200038b565b5080546200026b90620004be565b6000825580601f106200027c575050565b601f016020900490600052602060002090810190620001979190620003c4565b6040518060a0016040528060006001600160a01b03168152602001620002c16200036d565b815260200160001515815260200160008152602001600081525090565b828054620002ec90620004be565b90600052602060002090601f0160209004810192826200031057600085556200035b565b82601f106200032b57805160ff19168380011785556200035b565b828001600101855582156200035b579182015b828111156200035b5782518255916020019190600101906200033e565b5062000369929150620003c4565b5090565b6040518060a001604052806005906020820280368337509192915050565b6040518060a00160405280620003a06200036d565b81526020016000151581526020016000815260200160008152602001600081525090565b5b80821115620003695760008155600101620003c5565b600060408284031215620003ee57600080fd5b604080519081016001600160401b03811182821017156200041f57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200043a57600080fd5b60208201529392505050565b81516001600160a01b039081168252602080840151610120840192919081850160005b60058110156200048a57825185168252918301919083019060010162000469565b50505050506040830151620004a360c084018215159052565b50606083015160e08301526080909201516101009091015290565b600181811c90821680620004d357607f821691505b60208210811415620004f557634e487b7160e01b600052602260045260246000fd5b50919050565b61113a806200050b6000396000f3fe6080604052600436106100795760003560e01c806355566afe1161004b57806355566afe1461010d5780638323075714610115578063ab53f2c61461012a578063d9d7e3ee1461014d57005b8063162f2bdb146100825780631e93b0f11461009f578063253474a4146100be57806343f4c6c0146100eb57005b3661008057005b005b61008a610160565b60405190151581526020015b60405180910390f35b3480156100ab57600080fd5b506003545b604051908152602001610096565b3480156100ca57600080fd5b506100d361019f565b6040516001600160a01b039091168152602001610096565b3480156100f757600080fd5b50610100610262565b6040516100969190610cc1565b61008a610321565b34801561012157600080fd5b506001546100b0565b34801561013657600080fd5b5061013f610353565b604051610096929190610cfb565b61008061015b366004610d58565b6103f0565b600061016a610a58565b6020810151516001908190525060408051808201909152600080825260208201526101958282610420565b6020015192915050565b600060036000541415610253576000600280546101bb90610d86565b80601f01602080910402602001604051908101604052809291908181526020018280546101e790610d86565b80156102345780601f1061020957610100808354040283529160200191610234565b820191906000526020600020905b81548152906001019060200180831161021757829003601f168201915b505050505080602001905181019061024c9190610e75565b5192915050565b61025f600060076108b9565b90565b61026a610a94565b600360005414156103155760006002805461028490610d86565b80601f01602080910402602001604051908101604052809291908181526020018280546102b090610d86565b80156102fd5780601f106102d2576101008083540402835291602001916102fd565b820191906000526020600020905b8154815290600101906020018083116102e057829003601f168201915b50505050508060200190518101906101959190610e75565b61025f600060086108b9565b600061032b610a58565b60208181015151600090819052604080518082019091528181529182015261024c8282610420565b60006060600054600280805461036890610d86565b80601f016020809104026020016040519081016040528092919081815260200182805461039490610d86565b80156103e15780601f106103b6576101008083540402835291602001916103e1565b820191906000526020600020905b8154815290600101906020018083116103c457829003601f168201915b50505050509050915091509091565b604080518082019091526000808252602082015261041c61041636849003840184610f1c565b82610420565b5050565b610430600360005414600d6108b9565b815161044b90158061044457508251600154145b600e6108b9565b60008080556002805461045d90610d86565b80601f016020809104026020016040519081016040528092919081815260200182805461048990610d86565b80156104d65780601f106104ab576101008083540402835291602001916104d6565b820191906000526020600020905b8154815290600101906020018083116104b957829003601f168201915b50505050508060200190518101906104ee9190610e75565b90506104f8610ab2565b7f27d146f0165d479c3209112a2cf87d6a0d43eb5a8f4fbcf6188ab9560de4cc223385604051610529929190610fc8565b60405180910390a1600060208501515151600181111561054b5761054b610d70565b14156107dd5761055d3415600a6108b9565b80516000908190528151602001819052815160408301525b600581101561065f578260200151816005811061059457610594611030565b60200201516001600160a01b03166060830152600060408301515160018111156105c0576105c0610d70565b14156105d257600160808301526105f9565b600160408301515160018111156105eb576105eb610d70565b14156105f957600060808301525b60a0820180516001905251604001819052608082015161061a576000610634565b81606001516001600160a01b0316336001600160a01b0316145b610642578160400151610648565b8160a001515b6040830152806106578161105c565b915050610575565b5060408101516020820181905251600090600181111561068157610681610d70565b141561069357600060c08201526106ba565b600160208201515160018111156106ac576106ac610d70565b14156106ba57600160c08201525b60058260600151106106cd5760006106e0565b8060c001516106dd5760016106e0565b60005b151560e082018190526040519081527e0acba50f28bf76150c92aa6f40d12d517cda65166784f42629b979b6d7ce749060200160405180910390a160e0810180511515845251156107495761073e82602001518360600151336108de565b610100820152610755565b60208201516101008201525b61075d610b56565b825181516001600160a01b03909116905261010082015160208083018051929092526040850151915191151591015260e082015161079c57600061079f565b60015b83606001516107ae9190611077565b60208201805160400191909152805143606090910152608080850151915101526107d78161096e565b506108b3565b60016020850151515160018111156107f7576107f7610d70565b14156108b3576108093415600b6108b9565b8151610821906001600160a01b03163314600c6108b9565b604051600181527f25d012a08a5440fd4e8b586d26126df5c4e28bf6f9b861ef39004768fc9e74f79060200160405180910390a160016020840152610864610b56565b825181516001600160a01b03909116905260208084015181830180519190915280516001920191909152606080850151825160400152815143910152608080850151915101526107d78161096e565b50505050565b8161041c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b6108e6610a94565b60005b60058110156109405784816005811061090457610904611030565b602002015182826005811061091b5761091b611030565b6001600160a01b039092166020929092020152806109388161105c565b9150506108e9565b508181846005811061095457610954611030565b6001600160a01b0390921660209290920201529392505050565b806020015160200151156109d8578051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109be573d6000803e3d6000fd5b50600080805560018190556109d590600290610b77565b50565b6109e0610bb1565b8151516001600160a01b031681526020808301805151828401526000604080850182905282518101516060860152915160809081015190850152600390554360015551610a2f9183910161108f565b60405160208183030381529060405260029080519060200190610a53929190610bf1565b505050565b604051806040016040528060008152602001610a8f6040805160808101825260006020820181815292820181905260608201529081905b905290565b6040518060a001604052806005906020820280368337509192915050565b60408051610180810182526000610120820181815261014083018290526101608301829052825282516060808201855282825260208083018490528286018490528085019290925284518082018652838152808301849052808601849052848601528084018390526080840183905284519081018552828152908101829052928301529060a082019081526000602082018190526040820152606001610a8f610a94565b60408051606081018252600091810191825290815260208101610a8f610c75565b508054610b8390610d86565b6000825580601f10610b93575050565b601f0160209004906000526020600020908101906109d59190610cac565b6040518060a0016040528060006001600160a01b03168152602001610bd4610a94565b815260200160001515815260200160008152602001600081525090565b828054610bfd90610d86565b90600052602060002090601f016020900481019282610c1f5760008555610c65565b82601f10610c3857805160ff1916838001178555610c65565b82800160010185558215610c65579182015b82811115610c65578251825591602001919060010190610c4a565b50610c71929150610cac565b5090565b6040518060a00160405280610c88610a94565b81526020016000151581526020016000815260200160008152602001600081525090565b5b80821115610c715760008155600101610cad565b60a08101818360005b6005811015610cf25781516001600160a01b0316835260209283019290910190600101610cca565b50505092915050565b82815260006020604081840152835180604085015260005b81811015610d2f57858101830151858201606001528201610d13565b81811115610d41576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215610d6a57600080fd5b50919050565b634e487b7160e01b600052602160045260246000fd5b600181811c90821680610d9a57607f821691505b60208210811415610d6a57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715610df457610df4610dbb565b60405290565b6040516020810167ffffffffffffffff81118282101715610df457610df4610dbb565b6040516060810167ffffffffffffffff81118282101715610df457610df4610dbb565b80516001600160a01b0381168114610e5757600080fd5b919050565b80151581146109d557600080fd5b8051610e5781610e5c565b60006101208284031215610e8857600080fd5b610e90610dd1565b610e9983610e40565b8152602084603f850112610eac57600080fd5b610eb4610dd1565b8060c0860187811115610ec657600080fd5b8387015b81811015610ee857610edb81610e40565b8452928401928401610eca565b508184860152610ef781610e6a565b60408601525050505060e0830151606082015261010090920151608083015250919050565b60008183036080811215610f2f57600080fd5b6040516040810181811067ffffffffffffffff82111715610f5257610f52610dbb565b604052833581526060601f1983011215610f6b57600080fd5b610f73610dfa565b9150610f7d610e1d565b602085013560028110610f8f57600080fd5b81526040850135610f9f81610e5c565b60208201526060850135610fb281610e5c565b6040820152825260208101919091529392505050565b6001600160a01b0383168152815160208083019190915282015151805160a0830191906002811061100957634e487b7160e01b600052602160045260246000fd5b80604085015250602081015115156060840152604081015115156080840152509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561107057611070611046565b5060010190565b6000821982111561108a5761108a611046565b500190565b81516001600160a01b039081168252602080840151610120840192919081850160005b60058110156110d15782518516825291830191908301906001016110b2565b505050505060408301516110e960c084018215159052565b50606083015160e0830152608090920151610100909101529056fea264697066735822122021414964efc70d96f4dc16e880994b038a91e6b5a04e1820f13ce8fc6380ff8664736f6c634300080c0033`,
  BytecodeLen: 5701,
  Which: `oD`,
  version: 7,
  views: {
    setAliceAddress: `setAliceAddress`,
    setAttachers: `setAttachers`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:78:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:39:56:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_attach": Bob_attach,
  "Charlie_end": Charlie_end
  };
export const _APIs = {
  Bob: {
    attach: Bob_attach
    },
  Charlie: {
    end: Charlie_end
    }
  };
