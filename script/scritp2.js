$( document ).ready(function() {
$('div.tags-container').tagSort({
  items: '.item-tagsort',
  tagElement: 'span',
  tagClassPrefix: false,
  itemTagsView: false,
  itemTagsSeperator: ' ',
  itemTagsElement: false,
  sortType: 'exclusive',
  fadeTime: 0,
  reset: false,
  sortAlphabetical: false
});
});
