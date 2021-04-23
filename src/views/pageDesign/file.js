function saveAs(blob, filename) {

  var type = blob.type;

  var force_saveable_type = 'application/octet-stream';

  if (type && type != force_saveable_type) { // 强制下载，而非在浏览器中打开

    var slice = blob.slice || blob.webkitSlice || blob.mozSlice;

    blob = slice.call(blob, 0, blob.size, force_saveable_type);

  }

  var url = URL.createObjectURL(blob);

  var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');

  save_link.href = url;

  save_link.download = filename;

  var event = document.createEvent('MouseEvents');

  event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

  save_link.dispatchEvent(event);

  URL.revokeObjectURL(url);

}

function download(obj) {
  let bb = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
  let filename = new Date().toISOString();
  saveAs(bb, filename + '.json');
}
function load(obj) {
  let bb = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
  let filename = new Date().toISOString();
  saveAs(bb, filename + '.json');
}

function getFileObj(file) {

  return new Promise((rs, rj) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      var data = reader.result;
      rs(JSON.parse(data))
    };
    reader.onerror = function () {
      console.log("读取失败");
      console.log(reader.error);
    };

  })

}

export {
  load,
  download,
  getFileObj
}