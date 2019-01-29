var docs = {
    'Syntax Search': 001,
    'Google Search': 002,
    'Calculate': 003,
    'Browse': 004,
    'Me' : 005,
    'Save Webpage' : 006,
    'Walk' : 007,
    'Memo' : 008,
    'Multi Clip Board' :009,
    'Speech' : 010,
    'Word Cloud' : 011,
    'PDF Utilities' : 012,
    'Parts of Speech' : 013,
    'Named Entity Recongnition' : 014,
    'Spell Correction' : 015,
    'Text Summarisation' : 022,
    'Sentiment Analysis' : 020,
    'Snippet Manager' : 023,
    'Wikipedia' : 024,
    'Sketch' : 016,
    'Analyse' :017,
    'Medium' : 018,
    'Text Replace' : 019,
    'App Manager' : 021
};
var sortable = [];

for (var doc in docs) {
    sortable.push([doc, docs[doc]]);
}

sortable.sort();

var sidenav = document.getElementById('mySidenav');

for(i=0; i<sortable.length; i++)
  sidenav.innerHTML += '<a href="#'+sortable[i][1]+'">'+sortable[i][0]+'</a>'
