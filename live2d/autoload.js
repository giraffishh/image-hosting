// One base URL for runtime, styles, model list and model assets.
// This file is also the entry point when served with a JavaScript MIME type.
(() => {
  const base = new URL('.', document.currentScript.src).href;
  if (screen.width < 768 || window.__giraffishLive2DLoading) return;
  window.__giraffishLive2DLoading = true;
  function resource(name, type) {
    return new Promise((resolve, reject) => {
      const element = document.createElement(type === 'css' ? 'link' : 'script');
      if (type === 'css') { element.rel = 'stylesheet'; element.href = base + name; }
      else { element.src = base + name; element.async = false; }
      element.onload = resolve;
      element.onerror = () => reject(new Error('Live2D resource failed: ' + name));
      document.head.appendChild(element);
    });
  }
  (async () => {
    await resource('waifu.css', 'css');
    await resource('live2dcubismcore.min.js', 'js');
    await resource('live2d.min.js', 'js');
    await resource('waifu-tips.js', 'js');
    window.initWidget({
      waifuPath: base + 'waifu-tips.json',
      cdnPath: base,
      tools: ['hitokoto', 'switch-model', 'switch-texture', 'photo', 'info', 'quit']
    });
  })().catch(error => {
    window.__giraffishLive2DLoading = false;
    console.error('[Live2D]', error);
  });
})();
