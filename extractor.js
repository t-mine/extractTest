

// アドレス抽出ボタン押下処理
let address_extract_button_event = function() {
  let target_url = document.getElementById('url_text').value;
  let nodeCommand = 'node extractorProcessNightmare.js ' + target_url;
  // 参考URL https://github.com/segmentio/nightmare/issues/1084
  var childProcess = require('child_process').exec;
  let extractProcess = childProcess(nodeCommand);
  extractProcess.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
  });
  extractProcess.stderr.on('data', function(data) {
    console.log('stderr: ' + data);
  });
  extractProcess.on('close', function(code) {
    console.log('closing code: ' + code);
  });
}

onload = function() {
  let address_extract_button = document.getElementById('address_extract_button');
  address_extract_button.addEventListener("click", address_extract_button_event);
}
