import { expect, describe, it } from "vitest";
import { Item, AgedCheese, BasicItem, Theater, Conjure, Legendary, items, updateQuality, itemFactory } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new BasicItem("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toEqual(2);
    expect(testItem.sellIn).toEqual(4);
  });
});

describe('degradeQuailty', () => {
  it('checks that basic items do not render a negative in quality', () => {
    const rotten = new BasicItem ('rotten', 2, 0);
    items.push(rotten);

    updateQuality();

    expect(rotten.quality).toEqual(0);
    expect(rotten.sellIn).toEqual(1);

  });
});

describe('degradedQualityQuicker', () => {
  it('checks that after sellin = 0 quality degrades twice as fast', () => {
    const spolied = new BasicItem ('spolied', 0, 6);
    items.push(spolied);

    updateQuality();

    expect(spolied.quality).toEqual(4);
    expect(spolied.sellIn).toEqual(0);
  });
});

describe('cheeseRisingQuailty', () => {
  it('checks that brie cheese increases in quality the older it gets', () => {
    const cheese = new AgedCheese ('Aged Brie', 0, 50);
    items.push(cheese);

    updateQuality();

    expect(cheese.quality).toEqual(50);
    expect(cheese.sellIn).toEqual(0);
  });
});

describe('testLegendary', () => {
  it('checks that legendary items remain the same', () => {
    const creepyHand = new Legendary ('Sulfuras, Hand of Ragnaros', 0, 80);
    items.push(creepyHand);

    updateQuality();

    expect(creepyHand.quality).toEqual(80);
    expect(creepyHand.sellIn).toEqual(0);
  });
});

describe('testConcert', () => {
  it('checks that concert ticket increase quality by one when more than 10 sellin left', () => {
    const concert1 = new Theater ('Backstage passes to a TAFKAL80ETC concert', 12, 23);
    items.push(concert1);

    updateQuality();

    expect(concert1.sellIn).toEqual(11);
    expect(concert1.quality).toEqual(24);
  });

  it('checks that concert ticket increase quality by two when less than 10 sellin left', () => {
    const concert2 = new Theater ('Backstage passes to a TAFKAL80ETC concert', 10, 24);
    items.push(concert2);

    updateQuality();

    expect(concert2.quality).toEqual(26);
    expect(concert2.sellIn).toEqual(9);
  });

  it('checks that concert ticket increase quality by three when less than 5 sellin left', () => {
    const concert3 = new Theater ('Backstage passes to a TAFKAL80ETC concert', 5, 40);
    items.push(concert3);

    updateQuality();

    expect(concert3.quality).toEqual(43);
    expect(concert3.sellIn).toEqual(4);
  });

  it('checks that concert ticket drops to 0 after concert', () => {
    const concert4 = new Theater ('Backstage passes to a TAFKAL80ETC concert', 0, 48);
    items.push(concert4);

    updateQuality();

    expect(concert4.quality).toEqual(0);
    expect(concert4.sellIn).toEqual(0);
  });

  it('checks that concert ticket cannot exceed 50', () => {
    const concert5 = new Theater ('Backstage passes to a TAFKAL80ETC concert', 12, 50);
    items.push(concert5);

    updateQuality();

    expect(concert5.quality).toEqual(50);
    expect(concert5.sellIn).toEqual(11);
  });
});

describe('databaseTest', () => {
  it('checks that all fields are present or set to "0"', () => {
    const db = new Item ('Carrot');
    items.push(db);

    updateQuality();

    expect(db.quality).toEqual(0);
    expect(db.sellIn).toEqual(0);
  });
});

describe('conjureTest', () => {
  it('checks that Conjure Items degrade in quailty by twice', () => {
    const magicCake = new Conjure ('Conjured Mana Cake', 5, 6);
    items.push(magicCake);

    updateQuality();

    expect(magicCake.quality).toEqual(4);
    expect(magicCake.sellIn).toEqual(4);
  });
});