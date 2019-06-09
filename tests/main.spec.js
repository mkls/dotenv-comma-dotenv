'use strict';

const dotenvHaphap = require('../main');
const test = require('tape');

test('parse', t => {
  const parsed = dotenvHaphap.config('tests/fixture.env');

  t.equal(typeof parsed, 'object', 'should return an object');

  t.equal(parsed.BASIC, 'basic', 'sets basic environment variable');

  t.equal(parsed.AFTER_LINE, 'after_line', 'reads after a skipped line');

  t.equal(parsed.EMPTY, '', 'defaults empty values to empty string');

  t.equal(parsed.SINGLE_QUOTES, 'single_quotes', 'escapes single quoted values');

  t.equal(
    parsed.SINGLE_QUOTES_SPACED,
    '    single quotes    ',
    'respects surrounding spaces in single quotes'
  );

  t.equal(parsed.DOUBLE_QUOTES, 'double_quotes', 'escapes double quoted values');

  t.equal(
    parsed.DOUBLE_QUOTES_SPACED,
    '    double quotes    ',
    'respects surrounding spaces in double quotes'
  );

  t.equal(
    parsed.EXPAND_NEWLINES,
    'expand\nnew\nlines',
    'expands newlines but only if double quoted'
  );

  t.equal(
    parsed.DONT_EXPAND_UNQUOTED,
    'dontexpand\\nnewlines',
    'expands newlines but only if double quoted'
  );

  t.equal(
    parsed.DONT_EXPAND_SQUOTED,
    'dontexpand\\nnewlines',
    'expands newlines but only if double quoted'
  );

  t.notOk(parsed.COMMENTS, 'ignores commented lines');

  t.equal(parsed.EQUAL_SIGNS, 'equals==', 'respects equals signs in values');

  t.equal(parsed.RETAIN_INNER_QUOTES, '{"foo": "bar"}', 'retains inner quotes');

  t.equal(parsed.RETAIN_LEADING_DQUOTE, '"retained', 'retains leading double quote');

  t.equal(parsed.RETAIN_LEADING_SQUOTE, "'retained", 'retains leading single quote');

  t.equal(parsed.RETAIN_TRAILING_DQUOTE, 'retained"', 'reatins trailing double quote');

  t.equal(parsed.RETAIN_TRAILING_SQUOTE, "retained'", 'retains trailing single quote');

  t.equal(parsed.RETAIN_INNER_QUOTES_AS_STRING, '{"foo": "bar"}', 'retains inner quotes');

  t.equal(
    parsed.TRIM_SPACE_FROM_UNQUOTED,
    'some spaced out string',
    'retains spaces in string'
  );

  t.equal(
    parsed.USERNAME,
    'therealnerdybeast@example.tld',
    'parses email addresses completely'
  );

  t.equal(parsed.SPACED_KEY, 'parsed', 'parses keys and values surrounded by spaces');

  t.end();
});