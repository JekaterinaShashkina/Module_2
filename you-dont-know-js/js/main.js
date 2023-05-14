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
items.textContent = '';
items.append(itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix);
const propsItemTwo = document.querySelectorAll('.props__item_two');
const propsItemThree = document.querySelectorAll('.props__item_three');
const propsItemFour = document.querySelectorAll('.props__item_four');
const propsItemFive = document.querySelectorAll('.props__item_five');
const propsItemSix = document.querySelectorAll('.props__item_six');

// console.log(...propsItemFive);
// const itemThreeChild = ;
// const itemFiveChild = ;
// const itemTwoChild = ;
// const itemFourChild = ;
// const itemSixChild = ;

const propsTwo = itemTwo.lastElementChild.querySelector('.props__list');
const propsThree = itemThree.lastElementChild.querySelector('.props__list');
const propsFour = itemFour.lastElementChild.querySelector('.props__list');
const propsFive = itemFive.lastElementChild.querySelector('.props__list');
const propsSix = itemSix.lastElementChild.querySelector('.props__list');

propsTwo.textContent = '';
propsThree.textContent = '';
propsFour.textContent = '';
// console.log(propsThree);
propsFive.textContent = '';
propsSix.textContent = '';

// console.log(propsSix);
// propsSix.append(...propsItemSix);
propsTwo.append(...propsItemTwo);
propsThree.append(...propsItemThree);
propsFour.append(...propsItemFour);
propsFive.append(...propsItemFive);
propsSix.append(...propsItemSix);
console.log(propsFour.querySelector('.props__item_four'));

// console.log(propsThree);
