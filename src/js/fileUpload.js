import { request } from '../public/request.js';
import { saveAs } from 'file-saver';
import axios from 'axios';

window.onload = function () {
  const fileBtn = document.getElementById('file');
  fileBtn.addEventListener('change', (file) => {
    const fd = new FormData();
    fd.append('file', fileBtn.files[0]);
    console.log(fd.get('file'), '222222222', file, fileBtn.files[0])
    axios.post('http://localhost:9999/api/upload', fd)
    // request({
    //   url: '/upload',
    //   method: 'post',
    //   data: {file: fileBtn.files[0]},
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   }
    // }).then(res => {
    //   console.log(res)
    // })
  })

  const TestGet = document.getElementById('testGet');
  TestGet.addEventListener('click', () => {
    request({
      url: '/home',
      method: 'get',
      data: { type: 'get' }
    }).then((res) => {
      console.log(res, 'get')
    })
  })

  const TestPost = document.getElementById('testPost');
  TestPost.addEventListener('click', () => {
    request({
      url: '/index',
      method: 'post',
      headers: { "Content-Type": 'application/json' },
      data: { type: 'post', object: { name: '1111111' } }
    }).then((res) => {
      console.log(res, 'get')
    })
  })

  // 存储图片
  document.getElementById('downloadImg').addEventListener('click', () => {
    saveAs('https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png')
  })

  document.getElementById('exportExcelBtn').addEventListener('click', () => {
    request({
      url: '/export',
      method: 'post',
      responseType: 'blob',
      headers: { "Content-Type": 'application/json' },
      data: { name: '小' }
    }).then((res) => {
      console.log(res, 'get')
    })
  })
}