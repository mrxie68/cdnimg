

let gridInstance = null;  // 保存 Muuri 实例的全局变量

// 初始化 Muuri 网格
function initMuuri() {
  if (gridInstance) {
    gridInstance.destroy();
  }

  if (!document.querySelector('.grid')) {
    console.error('Muuri 网格元素不存在');
    return;
  }

  gridInstance = new Muuri('.grid', {
    dragEnabled: true,
    dragContainer: document.querySelector('.drag-container'),
    dragAutoScroll: { targets: [window] },
    layout: (grid, layoutId, items, width, height, callback) => {
      var layout = {
        id: layoutId,
        items: items,
        slots: [],
        styles: {},
      };

      var item,
        m,
        x = 0,
        y = 0,
        w = 0,
        h = 0;

      for (var i = 0; i < items.length; i++) {
        item = items[i];
        x += w;
        y += h;
        m = item.getMargin();
        w = item.getWidth() + m.left + m.right;
        h = item.getHeight() + m.top + m.bottom;
        layout.slots.push(x, y);
      }

      w += x;
      h += y;

      layout.styles.width = w + 'px';
      layout.styles.height = h + 'px';

      callback(layout);
    },
  });

  console.log('Grid 对象:', gridInstance);
}

// 初始加载时初始化 Muuri
document.addEventListener('DOMContentLoaded', () => {
  initMuuri();
  
  const swup = new window.Swup();  // 使用 window.Swup

  if (swup) {
    console.log('Swup 已初始化');
    swup.hooks.on('contentReplaced', initMuuri);
  } else {
    console.log('Swup 初始化失败');
  }
});
