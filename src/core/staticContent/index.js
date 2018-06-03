import ru from './ru.json';

const locales = { ru };

let activeDict;

const flatten = (json, result = {}, prefix) => {
  const r = result;
  Object.keys(json)
    .forEach((key) => {
      const resKey = prefix ? `${prefix}.${key}` : key;
      const value = json[key];

      if (typeof value === 'string') {
        r[resKey] = value;
      } else if (typeof value === 'object') {
        flatten(value, result, resKey);
      }
    });

  return r;
};

export const setLocale = (locale) => {
  activeDict = flatten(locales[locale]);
};


export const getLocaleKeys = (key) => {
  if (!activeDict[key]) {
    return '-';
  }

  return activeDict[key];
};

setLocale('ru');
