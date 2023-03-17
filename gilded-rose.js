class Item {
  constructor(name, sellIn = 0, quality = 0) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality(){}

}

class BasicItem extends Item {

  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }

  updateQuality(){
    if(this.sellIn > 0){
      this.sellIn --;
    }else {
      this.sellIn = 0;
    }

    if(this.quality < 50 && this.sellIn > 0){
      this.quality --;
    } else {
      this.quality = this.quality - 2;
    }
    
    if(this.quality < 0){
      this.quality = 0;
    }
  }
}

class AgedCheese extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  updateQuality(){

    if(this.quality < 50){
      this.quality ++;
    }else{
      this.quality = 50;
    }

    if(this.sellIn > 0){
      this.sellIn --;
    }else {
      this.sellIn = 0;
    }

  }

}

class Theater extends Item {

  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }

  updateQuality() {

    if(this.sellIn > 0){
      this.sellIn --;
    }else {
      this.sellIn = 0;
    }

    if(this.sellIn === 0){
      this.quality = 0;
    }else if (this.sellIn <= 5) { 
      this.quality = this.quality + 3;
    }else if(this.sellIn <= 10 && this.sellIn > 5){
      this.quality = this.quality + 2;
    }else if(this.quality > 10){
      this.quality++;
    }
    
    if(this.quality > 50){
      this.quality = 50;
    } 

  }

}

class Conjure extends Item {

  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  updateQuality(){
    if(this.quality < 50){
      this.quality = this.quality - 2;
    }else{
      this.quality = 50;
    }

    if(this.sellIn > 0){
      this.sellIn --;
    }else {
      this.sellIn = 0;
    }
  }

}

class Legendary extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }
}

let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

const updateQuality = () => {
  for (let item of items) {
      item.updateQuality();
  }
  //   if(!item.sellIn && !item.quality){
  //     item.sellIn = 0;
  //     item.quality = 0;
  //   }

  //   if(item.name === "Aged Brie"){
      
  //     if(item.quality < 50){
  //       item.quality ++;
  //     }else{
  //       item.quality = 50;
  //     }

  //     if(item.sellIn > 0){
  //       item.sellIn --;
  //     }else {
  //       item.sellIn = 0;
  //     }

    
  //   }else if(item.name === "Backstage passes to a TAFKAL80ETC concert"){

  //     if(item.sellIn > 0){
  //       item.sellIn --;
  //     }else {
  //       item.sellIn = 0;
  //     }
  
  //     if(item.sellIn === 0){
  //       item.quality = 0;
  //     }else if (item.sellIn <= 5) { 
  //       item.quality = item.quality + 3;
  //     }else if(item.sellIn <= 10 && item.sellIn > 5){
  //       item.quality = item.quality + 2;
  //     }else if(item.quality > 10){
  //       item.quality++;
  //     }
      
  //     if(item.quality > 50){
  //       item.quality = 50;
  //     }      
    
  //   }else if (item.name === "Conjured Mana Cake"){
      
  //     if(item.quality < 50){
  //       item.quality = item.quality - 2;
  //     }else{
  //       item.quality = 50;
  //     }

  //     if(item.sellIn > 0){
  //       item.sellIn --;
  //     }else {
  //       item.sellIn = 0;
  //     }

  //   }else if (item.name !== "Sulfuras, Hand of Ragnaros") {

  //     if(item.sellIn > 0){
  //       item.sellIn --;
  //     }else {
  //       item.sellIn = 0;
  //     }

  //     if(item.quality < 50 && item.sellIn > 0){
  //       item.quality --;
  //     } else {
  //       item.quality = item.quality - 2;
  //     }
      
  //     if(item.quality < 0){
  //       item.quality = 0;
  //     }

  //   }
  // }
};

console.log(items);

export { Item, AgedCheese, BasicItem, Theater, Conjure, Legendary, items, updateQuality }

// if (
//   item.name != "Aged Brie" &&
//   item.name != "Backstage passes to a TAFKAL80ETC concert"
// ) {
//   if (item.quality > 0) {
//     if (item.name != "Sulfuras, Hand of Ragnaros") {
//       item.quality = item.quality - 1;
//     }
//   }
// } else {
//   if (item.quality < 50) {
//     item.quality = item.quality + 1;
//     if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
//       if (item.sellIn < 11) {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1;
//         }
//       }
//       if (item.sellIn < 6) {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1;
//         }
//       }
//     }
//   }
// }
// if (item.name != "Sulfuras, Hand of Ragnaros") {
//   item.sellIn = item.sellIn - 1;
// }
// if (item.sellIn < 0) {
//   if (item.name != "Aged Brie") {
//     if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
//       if (item.quality > 0) {
//         if (item.name != "Sulfuras, Hand of Ragnaros") {
//           item.quality = item.quality - 1;
//         }
//       }
//     } else {
//       item.quality = item.quality - item.quality;
//     }
//   } else {
//     if (item.quality < 50) {
//       item.quality = item.quality + 1;
//     }
//   }
// }