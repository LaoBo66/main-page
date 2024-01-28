function updateTime() {
    const now = new Date();
  
    function getFormattedDate() {
      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth() + 1;
      var year = today.getFullYear();
      var formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
      return formattedDate;
    }
  
    const date = getFormattedDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
  
    // 添加“当前时间：”字样，并格式化时间，忽略秒数
    const formattedTime = '当前时间：' + date + ' ' + (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);
    
    document.getElementById('current-time').innerText = formattedTime;
  }
  
  setInterval(updateTime, 1000); // 更新间隔改为每秒
  


  //留个时间精确到秒的
  /*
  function updateTime() {
  const now = new Date();

  function getFormattedDate() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
    return formattedDate;
  }

  const date = getFormattedDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // 添加“当前时间：”字样，并格式化时间
  const formattedTime = '当前时间：' + date + ' ' + (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
  
  document.getElementById('current-time').innerHTML = formattedTime;
}

setInterval(updateTime, 1000); // 更新间隔每秒一次
*/
