const { remote, dialog } = require('electron');
const updater = remote.require('electron-simple-updater');

const AppName = ' 更新';
const Message = {
  error: '检查更新出错',
  checking: '正在检查更新...',
  updateAvailable: '发现新版本，点击确定后开始下载：',
  updateNotAvailabe: '当前已经是最新版本！',
  downloaded: '新版本已下载，将在重启程序后更新至：'
};

updateHandle();
appendId();

function appendId () {
  // console.log('当前的版本:', updater.version, '当前的构建id:', updater.buildId);
  const versionDOM = document.getElementById("version");
  versionDOM.innerHTML = 'version' + updater.version +'当前的构建id:' + updater.buildId;
}

function updateHandle() {
  updater.on('update-available', (meta) => {
    // log('[updater] update avaiable', meta.version);
    if (window.confirm(Message.updateAvailable + meta.version)) {
      console.log('==========starting download============');
      updater.downloadUpdate();
    }
  });

  updater.on('update-not-available', () => {
    window.alert(Message.updateNotAvailabe);
  });

  updater.on('update-downloading', () => {});

  updater.on('update-downloaded', (meta) => {
    // log('[updater] update downloaded', meta.version);

    if (window.confirm(Message.downloaded + meta.version)) {
      try {
        updater.quitAndInstall();
      } catch (e) {
        window.alert('安装失败', '无法安装更新程序。');
      }
    }
  });

  updater.on('error', (err) => {
    // log('[updater] update error', err);
    if (err !== 'Could not get code signature for running application') {
      window.alert(Message.error + err);
    }    
  });

  updater.checkForUpdates();
}
