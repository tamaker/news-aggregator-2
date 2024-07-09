var ghpages = require('gh-pages');
require('dotenv').config();

function finishedRunningCallback(){
    console.log('done. Auto-generated commit ' + new Date().toLocaleString())
}
ghpages.publish(process.env.APP_PATH, {
    branch: 'master',
    repo: process.env.REPO_URL,
    message: 'Auto-generated commit ' + new Date().toLocaleString()
  }, finishedRunningCallback);