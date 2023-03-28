export default (text: string, DOM: HTMLAnchorElement) => {
  let i=0;
  const timer = setInterval(() => {
    if (text[i] === '<') {      
      DOM.innerHTML += text.substring(i,text.indexOf('>', i)+1);     
      i = text.indexOf('>', i) + 1;
    } else {      
      DOM.innerHTML += text[i];
      i++;
    }
    if (i === text.length) {
      clearInterval(timer);
    }
  }, 50);
  return { }
}