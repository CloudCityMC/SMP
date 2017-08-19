# Item Prices

<style>
#findblocks {
    background-image: url('https://www.w3schools.com/css/searchicon.png');
    background-position: 10px 12px;
    background-repeat: no-repeat;
    width: 100%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
}
#blocks {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #ddd;
    font-size: 18px;
}
#blocks th, #blocks td {
    text-align: left;
    padding: 12px;
}
#block tr {
    border-bottom: 1px solid #ddd;
}
</style>

<script>
function lookWords() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("findblocks");
  filter = input.value.toUpperCase();
  table = document.getElementById("blocks");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
</script>

<input type="text" id="findblocks" onkeyup="lookWords()" placeholder="Search for items..">

{:#blocks}
Item Name | Item ID | Price | Buyable?
--------|--------|-------|------
Oak Log | 17 | $32 | No
Spruce Log | 17:1 | $32 | No
Birch Log | 17:2 | $32 | No
Jungle Log | 17:3 | $32 | No
White Wool | 35 | $48 | No
Orange Wool | 35:1 | $64 | No
Magenta Wool | 35:2 | $64 | No
Light Blue Wool | 35:3 | $64 | No
Yellow Wool | 35:4 | $64 | No
Lime Wool | 35:5 | $76 | No
Pink Wool | 35:6 | $64 | No
Gray Wool | 35:7 | $80 | No
Light Gray Wool | 35:8 | $64 | No
Cyan Wool | 35:9 | $484 | No
Purple Wool | 35:10 | $488 | No
Blue Wool | 35:11 | $912 | No
Brown Wool | 35:12 | $176 | No
Green Wool | 35:13 | $56 | No
Red Wool | 35:14 | $64 | No
Black Wool | 35:15 | $64 | No
Oak Sapling | 6 | $32 | Yes
Spruce Sapling | 6:1 | $32 | Yes
Birch Sapling | 6:2 | $32 | Yes
Jungle Sapling | 6:3 | $32 | Yes
Acacia Sapling | 6:4 | $32 | Yes
Dark Oak Sapling | 6:5 | $32 | Yes
Stone Button | 77 | $1 | No
Arrow | 262 | $14 | No
Leather | 334 | $64 | No
Leather Helmet | 298 | $320 | No
Leather Chestplate | 299 | $512 | No
Leather Leggings | 300 | $448 | No
Leather Boots | 301 | $256 | No
Wooden Pickaxe | 270 | $32 | No
Wooden Shovel | 269 | $16 | No
Wooden Axe | 271 | $32 | No
Wooden Hoe | 290 | $24 | No
Wooden Sword | 268 | $20 | No
Wood Door | 324 | $16 | No
Wooden Pressure Plate | 72 | $16 | No
Stone Pickaxe | 274 | $11 | No
Stone Shovel | 273 | $9 | No
Stone Axe | 275 | $11 | No
Stone Sword | 272 | $6 | No
Stone Hoe | 291 | $10 | No
Stone | 1 | $1 | No
Cobblestone | 4 | $1 | No
Mossy Cobblestone | 48 | $9 | No
Iron Pickaxe | 257 | $776 | No
Iron Shovel | 256 | $264 | No
Iron Axe | 258 | $776 | No
Iron Hoe | 292 | $520 | No
Iron Sword | 267 | $516 | No
Iron Helmet | 306 | $1280 | No
Iron Chestplate | 307 | $2048 | No
Iron Leggings | 308 | $1792 | No
Iron Boots | 309 | $1024 | No
Iron Ingot | 265 | $256 | Yes
Iron Block | 42 | $2304 | No
Iron Door | 330 | $512 | No
Gold Ingot | 266 | $2048 | Yes
Gold Block | 41 | $18432 | No
Golden Apple | 322 | $16512 | No
Golden Pickaxe | 285 | $6152 | No
Golden Shovel | 284 | $2056 | No
Golden Axe | 286 | $6152 | No
Golden Sword | 283 | $4100 | No
Golden Hoe | 294 | $4104 | No
Golden Helmet | 314 | $10240 | No
Golden Chestplate | 315 | $16384 | No
Golden Leggings | 316 | $14336 | No
Golden Boots | 317 | $8192 | No
Diamond | 264 | $8192 | Yes
Diamond Block | 57 | $73728 | No
Diamond Pickaxe | 278 | $24584 | No
Diamond Shovel | 277 | $8200 | No
Diamond Axe | 279 | $24584 | No
Diamond Sword | 276 | $16388 | No
Diamond Hoe | 293 | $16392 | No
Diamond Helmet | 310 | $40960 | No
Diamond Chestplate | 311 | $65536 | No
Diamond Leggings | 312 | $57344 | No
Diamond Boots | 313 | $32768 | No
Coal | 263 | $128 | Yes
Redstone | 331 | $64 | Yes
Redstone Torch | 76 | 68 | No
Lapis | 351:4 | $864 | Yes
Emerald | 388 | $16384 | Yes
Ink Sac | 351 | $16 | No
Cocoa Beans | 351:3 | $128 | No
Raw Fish | 349 | $64 | No
Cooked Fish | 350 | $64 | No
Fishing Rod | 346 | $36 | No
Minecart | 328 | $1280 | No
Storage Minecart | 342 | $1344 | No
Oak Leaves | 18 | $1 | No
Spruce Leaves | 18:1 | $1 | No
Birch Leaves | 18:2 | $1 | No
Jungle Leaves | 18:3 | $1 | No
Feather | 288 | $48 | No
Mushroom Soup | 282 | $32 | No
Bread | 297 | $72 | No
Crafting Table | 58 | $32 | No
Red Mushroom | 39 | $32 | No
Brown Mushroom | 40 | $32 | No
Torch | 50 | $9 | No
Grass | 2 | $2 | No
Snowball | 332 | $1 | No
Slimeball | 341 | $32 | No
Oak Fence | 85 | $13 | No
Bricks | 45 | $64 | No
Noteblock | 25 | $128 | No
Clay Ball | 337 | $16 | No
Bucket | 325 | $768 | No
Poppy | 38 | $16 | No
Steak | 364 | $64 | Yes
Grilled Pork | 320 | $64 | Yes
Gravel | 13 | $4 | No
Furnace | 61 | $8 | No
Dispenser | 23 | $119 | No
Seeds | 295 | $16 | No
Painting | 321 | $80 | No
Sand | 12 | $1 | No
Bookshelf | 47 | $528 | No
Jack-o-lantern | 91 | $153 | No
Oak Boat | 333 | $40 | No
String | 287 | $12 | Yes
Cactus | 81 | $8 | No
Gunpowder | 289 | $192 | Yes
Rails | 66 | $96 | No
Egg | 344 | $32 | No
Dandelion | 37 | $16 | No
Obsidian | 49 | $64 | No
Dirt | 3 | $1 | No
Lever | 69 | $5 | No
Cake | 354 | $216 | No
Pumpkin | 86 | $144 | No
Bed | 355 | $168 | No
Clock | 347 | $8256 | No
Sign | 323 | $17 | No
Saddle | 329 | $192 | No
TNT | 46 | $964 | Yes
Apple | 260 | $128 | Yes
Redstone Repeater | 356 | $203 | No
Clay | 82 | $64 | No
Stick | 280 | $4 | No
Paper | 339 | $32 | No
Brick | 336 | $64 | No
Chest | 54 | $64 | No
Sandstone | 24 | $4 | No
Compass | 345 | $1088 | No
Sugar Cane | 338 | $32 | No
Sponge | 19 | $128 | No
Bone | 352 | $144 | No
Glass | 20 | $1 | No
Wheat | 296 | $24 | No
Ladder | 65 | $9 | No
Bowl | 281 | $6 | No
Glowstone Dust | 348 | $384 | No
Book | 340 | $160 | No
Bow | 261 | $48 | No
Sugar | 353 | $32 | No
Blaze Rod | 369 | $1536 | Yes
Ender Pearl | 368 | $1024 | Yes
Exp Bottle | 384 | $256 | Yes
Shield | 442 | $296 | Yes
Name Tag | 421 | $192 | Yes
Nether Star | 399 | $139264 | Yes
Ghast Tear | 370 | $4096 | Yes
Cooked Chicken | 366 | $64 | Yes
Netherrack | 87 | $1 | No
Emerald Block | 133 | $147456 | Yes
Nether Wart | 372 | $1536 | No
Wooden Trapdoor | 96 | $1536 | No
Beetroot | 434 | $64 | No
Beetroot Seed | 435 | $16 | No
Potato | 392 | $64 | No
Carrot | 391 | $64 | No
Raw Rabbit | 411 | $64 | No
Gold Nugget | 371 | $227 | No
Rotten Flesh | 367 | $32 | No
Spider Eye | 375 | $128 | No
Iron Horse Armor | 417 | $2048 | No
Gold Horse Armor | 418 | $16384 | No
Diamond Horse Armor | 419 | $65536 | No
End Crystal | 426 | $5895 | No
Shulker Shell | 450 | $2048 | No
Lilypad | 111 | $16 | No
Iron Trapdoor | 167 | $2048 | No
Raw Beef | 363 | $64 | No
Flint | 318 | $4 | No
Raw Porkchop | 319 | $64 | No
Raw Mutton | 423 | $64 | No
Raw Chicken | 365 | $64 | No
Cooked Mutton | 424 | $64 | No
Shears | 359 | $512 | No
Tripwire Hook | 131 | $134 | No
Spruce Boat | 444 | $40 | No
Birch Boat | 445 | $40 | No
Acacia Boat | 447 | $40 | No
Dark Oak Boat | 448 | $40 | No
Jungle Boat | 446 | $40 | No
Magma Block | 213 | $128 | No
Sandstone Stairs | 128 | $6 | No
Chorus Fruit | 432 | $192 | No
Melon | 360 | $16 | No
Melon Block | 103 | $144 | No
Melon Seed | 362 | $16 | Np
Poisonous Potatoes | 394 | $64 | No
13 Disc | 2256 | $2048 | No
Cat Disc | 2257 | $2048 | No
Blocks Disc | 2258 | $2048 | No
Chirp Disc | 2259 | $2048 | No
Far Disc | 2260 | $2048 | No
Mall Disc | 2261 | $2048 | No
Mellohi Disc | 2262 | $2048 | No
Stal Disc | 2263 | $2048 | No
Strad Disc | 2264 | $2048 | No
Ward Disc | 2265 | $2048 | No
11 Disc | 2266 | $2048 | No
Wait Disc | 2267 | $2048 | No
