const operateMapper = {
  newFile: {
    funcName: 'showFileCreate',
    text: '新建文件',
  },
  newFolder: {
    funcName: 'showFolderCreate',
    text: '新建文件夹',
  },
  resetFileName: {
    funcName: 'resetFileName',
    text: '重命名文件',
  },
  resetFolderName: {
    funcName: 'resetFolderName',
    text: '重命名文件夹子',
  },
  copy: {
    funcName: 'copy',
    text: '复制',
  },
  paste: {
    funcName: 'paste',
    text: '粘贴',
  },
  share: {
    funcName: 'openShare',
    text: '分享',
  },
  history: {
    funcName: 'getSnapshots',
    text: '查看历史版本',
  },
};

const mySwitch = {
  // fileIsrootIssharedIsmine: [], // 是根目录就不可能是文件， 排除
  // fileIsrootNotSharedIsmine: [], // 是根目录就不可能是文件， 排除
  // fileNotrootIssharedIsmine: [], // 如果是自己建立的， 就不会有shared, 排除
  fileNotrootNotsharedIsmine: ['resetFileName', 'copy', 'openShare', 'history'],
  // folderIsrootIssharedIsmine: [], // 如果是自己建立的， 就不会有shared, 排除
  folderIsrootNotsharedIsmine: ['newFile', 'newFolder', 'paste'],
  // folderNotrootissharedIsmine: [], // 如果是自己建立的， 就不会有shared, 排除
  folderNotrootNotsharedIsmine: ['newFile', 'newFolder', 'resetFolderName', 'copy', 'paste', 'share'],
  // fileIsrootIssharedNotmine: [], // 是根目录就不可能是文件， 排除
  // fileIsrootNotSharedNotmine: [], // 是根目录就不可能是文件， 排除
  fileNotrootIssharedNotmine: ['copy', 'history'], //
  // fileNotrootNotsharedNotmine: [], // 什么也没有
  folderIsrootIssharedNotmine: ['paste', 'newFile', 'newFolder'],
  // folderIsrootNotsharedNotmine: [], // 什么也没有
  folderNotrootIssharedNotmine: ['paste', 'newFile', 'newFolder', 'copy'],
  // folderNotrootNotsharedNotmine: [], // 什么也没有
};

// function getAuthority(type, path, shared) {
//   let caseIndex = type;
//   const isRoot = path.indexOf('/') === -1;
//   const isMine = shared === undefined;
//   caseIndex += isRoot ? 'Isroot' : 'Notroot';
//   caseIndex += shared ? 'Isshared' : 'Notshared';
//   caseIndex += isMine ? 'Ismine' : 'Notmine';
//   console.log(caseIndex);
//   console.log(mySwitch[caseIndex]);
// }

// getAuthority('file', 'woater_test/ok', true);
// getAuthority('folder', 'woater_test/ok', true);



function getAuthority(type, path, shared, fileType) {
  let auth = [];
  const isRoot = path.indexOf('/') === -1;
  if (shared === false)return auth;
  if (shared === true){
      if (type === 'file'){
          auth.push('copy');
          if (fileType === 'notebook') {
              auth.push('history');
          }
      }
      if (type === 'folder') {
          auth.push('paste');
          auth.push('newFile');
          auth.push('newFolder');
          if (!isRoot)auth.push('copy');         
      }
  }
  if (shared === undefined) {
      if(type === 'file') {
          auth.push('resetFileName');
          auth.push('copy');  
          if(fileType === 'notebook') {
              auth.push('share');
              auth.push('history');       
          }
      }
      if(type === 'folder') {
          auth.push('paste');
          auth.push('newFile');
          auth.push('newFolder');
          if (!isRoot){
              auth.push('copy'); 
              auth.push('resetFolderName');          
          }
      }
  }
  return auth;
}

let auth = getAuthority('folder', 'woater_test/ok', true);
console.log(auth);



