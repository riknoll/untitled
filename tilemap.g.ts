// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004040404040404040404040404040404040606060601010404000004040404040606060606060600040000040404040406060603030606000400000101040404060604060607070006000003010400040606060707070700070704030401040406060707060603000604070303010404060607060605070007070707030104040606070606070600070700070301040404060707070707000600070703030404040600000000000007000007070404040406060700070607070007070404040404040007070707070707000504040404040404000407070707000005040404040404040402040304050305040404040404040404040404040400040404040404`, img`
. . . . . . . . 2 . . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . 2 . 2 . 2 . . . . 2 . . . . 
. 2 . 2 2 2 . . . . . 2 2 . . . 
. 2 2 2 . . . . . . . 2 2 . . . 
. 2 . 2 2 . . . . . . . 2 . . . 
. 2 . . . 2 . . . . . 2 2 . . . 
. 2 . . . 2 . . . 2 2 . 2 . . . 
. 2 . . . 2 2 . . 2 . . 2 . . . 
. 2 . . . . . . 2 . . 2 . . . . 
. . . . . . . . 2 2 2 . . . . . 
. . 2 . . . . . . 2 2 2 2 . . . 
. . . . 2 . . . . 2 2 2 2 2 . . 
. . . . . 2 . . 2 . 2 2 . 2 . . 
. . . . . 2 2 . 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles0,sprites.castle.tilePath2,sprites.castle.tileGrass2,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
