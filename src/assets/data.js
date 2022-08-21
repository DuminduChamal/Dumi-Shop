// assets
import beans from "./produces/beans.jpeg";
import beetroot from "./produces/beetroot.jpeg";
import brinjal from "./produces/brinjal.jpeg";
import carrot from "./produces/carrot.jpeg";
import cashew from "./producescashew.jpeg";
import ladyfingers from "./produces/ladyfingers.jpeg";

import bun from "./bakery/bun.jpg";
import chickenBun from "./bakery/chicken_bun.jpg";
import chocolateMousse from "./bakery/chocolate_mousse.jpg";
import eggBun from "./bakery/egg_bun.jpg";
import frenchBread from "./bakery/french_bread.jpg";
import watalappan from "./bakery/watalappan.jpg";

import appleJuice from "./beverages/apple_juice.jpg";
import cocaCola from "./beverages/coca_cola.jpg";
import mangoJuice from "./beverages/mango_juice.jpeg";
import orangeJuice from "./beverages/orange_juice.jpeg";
import sprite from "./beverages/sprite.jpg";
import water from "./beverages/water_bottle.jpg";

import chedder from "./dairy/chedder_cheese.png";
import curd from "./dairy/curd.jpg";
import iceCream from "./dairy/ice_cream.jpg";
import milk from "./dairy/milk.jpg";
import swissCheese from "./dairy/swiss_cheese.jpg";
import yogurt from "./dairy/yogurt.jpg";

import cuttleFish from "./fish/Cuttlefish.jpg";
import mackerel from "./fish/Mackerel.jpg";
import octupus from "./fish/octupus.jpg";
import prawns from "./fish/prawns.jpg";
import salmon from "./fish/salmon.jpg";
import sardines from "./fish/sardines.jpg";

import beef from "./meat/beef.jpg";
import chicken from "./meat/chicken.jpg";
import lamb from "./meat/lamb.jpg";
import mutton from "./meat/mutton.jpg";
import pork from "./meat/pork.jpg";
import turkey from "./meat/turkey.jpg";

const produces = [
    {
      productID: "produce-01",
      name: "Carrot",
      image: carrot,
      price: 100,
      producerName: "Mr. Fernando"
    },
    {
      productID: "produce-02",
      name: "Brinjal",
      image: brinjal,
      price: 200,
      producerName: "Mr. Perera"
    },
    {
      productID: "produce-03",
      name: "Beans",
      image: beans,
      price: 300,
      producerName: "Mr. Perera"
    },
    {
      productID: "produce-04",
      name: "Ladyfingers",
      image: ladyfingers,
      price: 400,
      producerName: "Mr. Perera"
    },
    {
      productID: "produce-05",
      name: "Beetroot",
      image: beetroot,
      price: 500,
      producerName: "Mr. Perera"
    },
    {
      productID: "produce-06",
      name: "Cashew",
      image: cashew,
      price: 1000,
      producerName: "Mr. Perera"
    },
  ];

  const bakery = [
    {
      productID: "bakery-01",
      name: "Bun",
      image: bun,
      price: 50,
      producerName: "Mr. Fernando"
    },
    {
      productID: "bakery-02",
      name: "Chicken Bun",
      image: chickenBun,
      price: 200,
      producerName: "Mr. Perera"
    },
    {
      productID: "bakery-03",
      name: "Chocolate Mousse",
      image: chocolateMousse,
      price: 200,
      producerName: "Mr. Devapriya"
    },
    {
      productID: "bakery-04",
      name: "Egg Bun",
      image: eggBun,
      price: 150,
      producerName: "Mr. Silva"
    },
    {
      productID: "bakery-05",
      name: "French Bread",
      image: frenchBread,
      price: 400,
      producerName: "Mr. Perera"
    },
    {
      productID: "bakery-06",
      name: "Watalappan",
      image: watalappan,
      price: 300,
      producerName: "Mr. Rathnayake"
    },
  ];

  const beverages = [
    {
      productID: "beverages-01",
      name: "Apple Juice",
      image: appleJuice,
      price: 300,
      producerName: "Mr. Fernando"
    },
    {
      productID: "beverages-02",
      name: "Coca Cola",
      image: cocaCola,
      price: 200,
      producerName: "Mr. Alwis"
    },
    {
      productID: "beverages-03",
      name: "Mango Juice",
      image: mangoJuice,
      price: 200,
      producerName: "Mr. Denipitiya"
    },
    {
      productID: "beverages-04",
      name: "Orange Juice",
      image: orangeJuice,
      price: 300,
      producerName: "Mr. Silva"
    },
    {
      productID: "beverages-05",
      name: "Sprite",
      image: sprite,
      price: 150,
      producerName: "Mr. Perera"
    },
    {
      productID: "beverages-06",
      name: "Water",
      image: water,
      price: 50,
      producerName: "Mr. Rathnayake"
    },
  ];

  const dairy = [
    {
      productID: "dairy-01",
      name: "Cheddar Cheese",
      image: chedder,
      price: 700,
      producerName: "Mr. Fernando"
    },
    {
      productID: "dairy-02",
      name: "Curd",
      image: curd,
      price: 200,
      producerName: "Mr. Alwis"
    },
    {
      productID: "dairy-03",
      name: "Ice Cream",
      image: iceCream,
      price: 200,
      producerName: "Mr. Denipitiya"
    },
    {
      productID: "dairy-04",
      name: "Milk",
      image: milk,
      price: 300,
      producerName: "Mr. Silva"
    },
    {
      productID: "dairy-05",
      name: "Swiss Cheesa",
      image: swissCheese,
      price: 400,
      producerName: "Mr. Perera"
    },
    {
      productID: "dairy-06",
      name: "Yogurt",
      image: yogurt,
      price: 50,
      producerName: "Mr. Rathnayake"
    },
  ];

  const fish = [
    {
      productID: "fish-01",
      name: "Cuttle Fish",
      image: cuttleFish,
      price: 600,
      producerName: "Mr. Fernando"
    },
    {
      productID: "fish-02",
      name: "Mackerek",
      image: mackerel,
      price: 200,
      producerName: "Mr. Alwis"
    },
    {
      productID: "fish-03",
      name: "Octupus",
      image: octupus,
      price: 800,
      producerName: "Mr. Denipitiya"
    },
    {
      productID: "fish-04",
      name: "Prawns",
      image: prawns,
      price: 700,
      producerName: "Mr. Silva"
    },
    {
      productID: "fish-05",
      name: "Salmon",
      image: salmon,
      price: 500,
      producerName: "Mr. Perera"
    },
    {
      productID: "fish-06",
      name: "Sardines",
      image: sardines,
      price: 250,
      producerName: "Mr. Rathnayake"
    },
  ];

  const meat = [
    {
      productID: "meat-01",
      name: "Beef",
      image: beef,
      price: 700,
      producerName: "Mr. Fernando"
    },
    {
      productID: "meat-02",
      name: "Chicken",
      image: chicken,
      price: 500,
      producerName: "Mr. Alwis"
    },
    {
      productID: "meat-03",
      name: "Lamb",
      image: lamb,
      price: 600,
      producerName: "Mr. Denipitiya"
    },
    {
      productID: "meat-04",
      name: "Mutton",
      image: mutton,
      price: 500,
      producerName: "Mr. Silva"
    },
    {
      productID: "meat-05",
      name: "Pork",
      image: pork,
      price: 400,
      producerName: "Mr. Perera"
    },
    {
      productID: "meat-06",
      name: "Turkey",
      image: turkey,
      price: 450,
      producerName: "Mr. Rathnayake"
    },
  ];