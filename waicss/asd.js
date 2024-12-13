import swup from '@swup/astro';
import Muuri from 'muuri';

// 初始化 Muuri 网格
function initMuuri() {
  const grid = new Muuri('.grid', {
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

  console.log('Grid 对象:', grid);
}

// 初始加载时初始化 Muuri
document.addEventListener('DOMContentLoaded', initMuuri);

// 使用 Swup 钩子监听页面加载完成
document.addEventListener('swup:contentReplaced', initMuuri);
