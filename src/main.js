import {romanNumerals} from './roman-numerals.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    var inputNumber = $("#inputNumber").val();
    inputNumber = Math.abs(inputNumber).toString();
    var result = romanNumerals(inputNumber);
    $("#result").append(inputNumber + " = " + result + '<br>');
    $("#form").trigger("reset");
  });
});
romanNumerals();
$();
