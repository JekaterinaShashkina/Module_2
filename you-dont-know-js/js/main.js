'use strict';
const ad = document.querySelector('.ads');
ad.remove();
const items = document.querySelector('.items');
const itemOne = document.querySelector('.item_one');
const itemTwo = document.querySelector('.item_two');
const itemThree = document.querySelector('.item_three');
const itemFour = document.querySelector('.item_four');
const itemFive = document.querySelector('.item_five');
const itemSix = document.querySelector('.item_six');
items.append(itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix);

const propsItemTwo = document.querySelectorAll('.props__item_two');
const propsItemThree = document.querySelectorAll('.props__item_three');
const propsItemFour = document.querySelectorAll('.props__item_four');
const propsItemFive = document.querySelectorAll('.props__item_five');
const propsItemSix = document.querySelectorAll('.props__item_six');

const propsTwo = itemTwo.querySelector('.props__list');
const propsThree = itemThree.querySelector('.props__list');
const propsFour = itemFour.querySelector('.props__list');
const propsFive = itemFive.querySelector('.props__list');
const propsSix = itemSix.querySelector('.props__list');

propsTwo.append(...propsItemTwo);
propsThree.append(...propsItemThree);
propsFour.append(...propsItemFour);
propsFive.append(...propsItemFive);
propsSix.append(...propsItemSix);

propsItemFour[3].after(propsItemFour[0]);
propsSix.prepend(itemTwo.querySelector('h2'));
propsFive.prepend(itemSix.querySelector('h2'));
propsTwo.prepend(itemFive.querySelector('h2'));
const titleThree = itemThree.querySelector('h2');
titleThree.textContent = 'This и прототипы объектов';
