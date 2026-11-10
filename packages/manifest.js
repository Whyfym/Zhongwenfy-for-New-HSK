/* One entry per package. level = HSK level, slot = 1 or 2 (card position).
   id = unique id saved in the database, pk = key inside that package's exam.js.
   code:true = needs the teacher access code; requires = must finish that package id first.
   To add a package: add a folder under packages/, then add a line here. */
window.PACKAGE_MANIFEST = [
  { id: 'h1p1', pk: 'h1p1', level: 1, slot: 1, path: 'packages/h1p1/', questions: 40, minutes: 40,  sub: 'Official sample test 样卷', code: true },
  { id: 'h2p1', pk: 'h2p1', level: 2, slot: 1, path: 'packages/h2p1/', questions: 60, minutes: 60,  sub: 'Official sample test 样卷', code: true },
  { id: 'h3p1', pk: 'p1',   level: 3, slot: 1, path: 'packages/p1/',   questions: 70, minutes: 85,  sub: 'Workbook mock test' },
  { id: 'h3p2', pk: 'p2',   level: 3, slot: 2, path: 'packages/p2/',   questions: 70, minutes: 85,  sub: 'Official sample test 样卷', code: true, requires: 'h3p1' },
  { id: 'h4p1', pk: 'h4p1', level: 4, slot: 1, path: 'packages/h4p1/', questions: 70, minutes: 85,  sub: 'Official sample test 样卷', code: true },
  { id: 'h5p1', pk: 'h5p1', level: 5, slot: 1, path: 'packages/h5p1/', questions: 72, minutes: 110, sub: 'Official sample test 样卷', code: true },
  { id: 'h6p1', pk: 'h6p1', level: 6, slot: 1, path: 'packages/h6p1/', questions: 82, minutes: 125, sub: 'Official sample test 样卷', code: true }
];
