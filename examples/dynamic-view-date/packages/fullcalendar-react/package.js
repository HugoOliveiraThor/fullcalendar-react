Package.describe({
  name: 'jss:fullcalendar-react',
  version: '0.1.0',
  summary: 'React wrapper for fullcalendar',
  git: 'https://github.com/alonoslav/fullcalendar-react',
  documentation: 'README.md',
});

// eslint-disable-next-line func-names, prefer-arrow-callback
Package.onUse(function (api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
  ]);

  api.mainModule('lib/FullCalendar.js', 'client');
});

Npm.depends({
  fullcalendar: '3.7.0',
  'fullcalendar-scheduler': '1.9.0',
});
