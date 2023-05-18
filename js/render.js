export const render = (arr, { element, markup }) => {
  //get element to put in
  let findEl = document.querySelector(element);

  //generate HTML markup for an array of items & replace HTML with it
  arr.length
    ? (findEl.innerHTML = arr.map((item) => markup(item)).join(""))
    : (findEl.innerHTML = markup());
};
