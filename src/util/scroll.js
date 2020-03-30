function getAbsoluteHeight(el) {
  el = typeof el === 'string' ? document.querySelector(el) : el;

  const styles = window.getComputedStyle(el);
  const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);

  return Math.ceil(el.offsetHeight + margin);
}

function windowScroll() {
  let lastScrollTop = 0;
  const w = window;
  w.addEventListener(
    'scroll',
    e => {
      const headerGlobal = document.querySelector('#HeaderGlobal');

      if (e.scrollY === lastScrollTop) return;

      if (w.scrollY > lastScrollTop) {
        if (
          w.scrollY > headerGlobal.offsetHeight &&
          !headerGlobal.classList.contains('fixed')
        ) {
          headerGlobal.classList.add('fixed');
          const mB = `${getAbsoluteHeight(headerGlobal)}px`;
          document.querySelector('body').style.marginTop = mB;
        }
      } else {
        headerGlobal.classList.remove('fixed');
        document.querySelector('body').style.removeProperty('margin-top');
      }
      // console.log(w.scrollY < lastScrollTop ? 'Cima' : 'Baixo');
      lastScrollTop = w.scrollY;
    },
    true
  );
}

function windowOnLoad() {
  window.onload = () => {
    windowScroll();
  };
}

export default windowOnLoad();
