import theAnswer from 'the-answer';
import _ from 'lodash';

const anObject = { a: 'a' };

const { a } = anObject;


export default _.upperCase(`The answer to life, universe and everything is : ${theAnswer}`);
export {
  a,
}
