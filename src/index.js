import http from 'http';
import { cube, foo, graph } from './config.js/index.js';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Kolia\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

(() => {
  graph.options = {
      color:'blue',
      thickness:'3px'
  };
   
  graph.draw();
  console.log(cube(3)); // 27
  console.log(foo);    // 4.555806215962888
  

})();


export default server;