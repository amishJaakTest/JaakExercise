import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import jsdom from 'jsdom';
import sinon from 'sinon';

chai.use(sinonChai);
chai.use(chaiAsPromised);
const dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;
global.navigator = global.window.navigator;
global.window.reactSettings = {};

const PromiseHelper = {
  success(promiseObj, expectationsFunction, doneFunction) {
    if (!promiseObj) {
      throw new Error('Promise undefined');
    }
    new Promise((resolve, reject) => {
      promiseObj.then((result) => {
        try {
          expectationsFunction(result);
          resolve();
        } catch (e) {
          reject(e);
        }
      }, (error) => {
        reject(new Error(`Promise Rejected: ${error} , ${JSON.stringify(error)}`));
      });
    }).then(doneFunction, doneFunction);
  },
  reject(promiseObj, expectationsFunction, doneFunction) {
    if (!promiseObj) {
      throw new Error('Promise undefined');
    }
    new Promise((resolve, reject) => {
      promiseObj.then((result) => {
        reject(new Error(`Promise was not rejected:  ${JSON.stringify(result)}`));
      }, (error) => {
        try {
          expectationsFunction(error);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    }).then(doneFunction, doneFunction);
  }
};


module.exports = { expect: chai.expect, PromiseHelper, sinon };
