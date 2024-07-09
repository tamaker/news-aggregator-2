var ghpages = require('gh-pages');
require('dotenv').config();

console.log(process.env.APP_PATH, process.env.REPO_URL)

function finishedRunningCallback(){
    console.log('done. Auto-generated commit ' + new Date().toLocaleString())
}
ghpages.publish(process.env.APP_PATH, {
    branch: 'master',
    repo: process.env.REPO_URL,
    message: 'Auto-generated commit ' + new Date().toLocaleString()
  }, finishedRunningCallback);