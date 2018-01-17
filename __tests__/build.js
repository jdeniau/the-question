import esQuestion from '../dist/index.es.js';
import umdQuestion from '../dist/index.js';

describe('test rollup build', () => {
  test('rollup ES build', () => {
    expect(esQuestion).toEqual('THE ANSWER TO LIFE UNIVERSE AND EVERYTHING IS 42');
  });

  test('rollup UMD build', () => {
    expect(umdQuestion).toEqual('THE ANSWER TO LIFE UNIVERSE AND EVERYTHING IS 42');
  });
});
