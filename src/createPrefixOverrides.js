const { rules } = require('@patriarche/stylelint-config-base');

function createModuleOverrides(prefixes) {
  const computedPrefixes = ['App'];
  for (let i = 0; i < prefixes.length; i += 1) {
    const prefix = prefixes[i];
    if (typeof prefix !== 'string') {
      throw new Error('Module name is not string type');
    }
    computedPrefixes.push(prefix.charAt(0).toUpperCase() + prefix.slice(1));
  }
  const joined = computedPrefixes.join('|');
  const pattern = `((mk|pux)-((${joined})|(The(${joined}))))[A-Z][a-zA-Z0-9]+`;

  return [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        ...rules,
        'selector-class-pattern': [
          new RegExp(pattern),
          { resolveNestedSelectors: false }],
      },
    },
  ];
}

module.exports = createModuleOverrides;
