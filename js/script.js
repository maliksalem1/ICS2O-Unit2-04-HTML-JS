// Created by: maliksalem1
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const base = parseInt(document.getElementById('base').value)
  const hight = parseInt(document.getElementById('hight').value)

  // process
  const area = 1/2 * base * hight

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
