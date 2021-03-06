import Camera from './Camera.js';
import Entity from './Entity.js';
import Timer from './Timer.js';
import {loadLevel} from './loaders.js';
import {createMario} from './entities.js';
import {setupKeyboard} from './input.js'
import {createCollisionLayer, createCameraLayer} from './layers.js';
import {setupMouseControl} from './debug.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


Promise.all([
  createMario(),
  loadLevel('1-1'),
]).then(([mario, level]) => {

  const camera = new Camera();

  mario.pos.set(64, 64);

  level.entities.add(mario);
  level.comp.layers.push(createCollisionLayer(level), createCameraLayer(camera));

  const input = setupKeyboard(mario);
  input.listenTo(window);

  setupMouseControl(canvas, mario, camera);


  const timer = new Timer(1/60);

  timer.update = function update(deltaTime) {
    level.comp.draw(context, camera);
    level.update(deltaTime);
  }

  timer.start();

});
