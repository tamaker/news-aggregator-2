var ghpages = require('gh-pages');

function finishedRunningCallback(){
    console.log('done. Auto-generated commit ' + new Date().toLocaleString())
}
ghpages.publish('/Applications/MAMP/htdocs/node/news-aggregate-file', {
    branch: 'master',
    repo: 'https://github.com/tamaker/news-aggregate-site',
    message: 'Auto-generated commit ' + new Date().toLocaleString()
  }, finishedRunningCallback);