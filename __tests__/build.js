import esQuestion, { a as esa } from '../dist/index.es.js';
import umdQuestion , { a as umda }from '../dist/index.js';
import pkgQuestion from '../';

describe('test rollup build', () => {
  test('rollup ES build', () => {
    expect(esQuestion).toEqual('ES THE ANSWER TO LIFE UNIVERSE AND EVERYTHING IS 42');
    expect(esa).toEqual('a');
  });

  test('rollup UMD build', () => {
    expect(umdQuestion).toEqual('UMD THE ANSWER TO LIFE UNIVERSE AND EVERYTHING IS 42');
    expect(umda).toEqual('a');
  });
});

describe('module vs main', () => {
  test('node should prefer module', () => {
    expect(pkgQuestion).toEqual('UMD THE ANSWER TO LIFE UNIVERSE AND EVERYTHING IS 42');
  });
});
