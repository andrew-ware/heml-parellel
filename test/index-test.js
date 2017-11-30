import test from 'ava';
import buildHeml from '../src';
import { Observable } from 'rxjs/Observable';

const assertElementsExist = t => ({ html, metadata }) => {
  t.truthy(html);
  t.truthy(metadata);
};

test('works alone', t => {
  t.plan(2);

  return buildHeml().map(assertElementsExist(t));
});

test('works in parallel', t => {
  t.plan(4);

  return Observable.forkJoin(buildHeml(), buildHeml()).map(assertElementsExist(t));
});
