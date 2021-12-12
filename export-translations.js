const fs = require('fs');
const { parse, stringify } = require('csv');
const path = require('path');

const filePath = path.resolve(__dirname, './public/locales');
const translationsDirPath = path.resolve(__dirname, './translations');

const en = 'en';
const zh = 'zh';

const stringifyOptions = {
  header: true,
  columns: { key: 'key', en, zh },
};

const fsFileCallback = function (error) {
  if (error) {
    throw error;
  }
};

const fileStringify = (values, name, path) => {
  const translationsValues = fs.readFileSync(`${translationsDirPath}/${name}.json`);
  let data = JSON.parse(translationsValues);
  Object.entries(values).forEach(([key, value]) => {
    data[key] = { key, ...data[key], [path]: value };
  });
  fs.writeFileSync(`${translationsDirPath}/${name}.json`, JSON.stringify(data));
  return stringify(Object.values(data), stringifyOptions, (err, output) => {
    if (err) throw err;
    const path = `${translationsDirPath}/${name}.csv`;
    fs.writeFile(path, output, 'utf8', fsFileCallback);
  });
};

const publicCsv = (values, path, name) => {
  return fileStringify(values, name, path);
};

if (!fs.existsSync(translationsDirPath)) {
  fs.mkdirSync(translationsDirPath);
}

const getCsv = () =>
  fs.readdir(filePath, (err, data) => {
    if (err) throw err;
    data.forEach((path) => {
      const getDirAllTranslation = fs.readdirSync(`${filePath}/${path}`);
      getDirAllTranslation.forEach((name) => {
        if (!fs.existsSync(`${translationsDirPath}/${name}`, '')) {
          fs.writeFileSync(`${translationsDirPath}/${name}`, JSON.stringify({}));
        }
        const translationsData = fs.readFileSync(`${filePath}/${path}/${name}`);
        publicCsv(JSON.parse(translationsData), path, name.split('.json')[0]);
      });
    });
  });

const getJson = () =>
  fs.readdir(translationsDirPath, (err, data) => {
    if (err) throw err;
    data
      .filter((value) => value.includes('.csv'))
      .forEach((path) => {
        const csvFile = fs.readFileSync(`${translationsDirPath}/${path}`);

        parse(csvFile, () => {});
      });
  });

const modules = {
  getCsv: () => getCsv(),
  getJson: () => getJson(),
};

module.exports = modules[process.argv[2]]();
