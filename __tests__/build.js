import esQuestion from '../dist/index.es.js';
import umdQuestion from '../dist/index.js';
import pkgQuestion from '../';

describe('test rollup build', () => {
  test('rollup ES build', () => {
    expect(esQuestion).toEqual('ES THE ANSWER TO LIFE UNIVERSE AND EVERYTHING IS 42');
  });

  test('rollup UMD build', () => {
    expect(umdQuestion).toEqual('UMD THE ANSWER TO LIFE UNIVERSE AND EVERYTHING IS 42');
  });

  test('node should prefer module', () => {
    expect(pkgQuestion).toEqual('UMD THE ANSWER TO LIFE UNIVERSE AND EVERYTHING IS 42');
  });
});
