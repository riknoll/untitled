let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . 3 . 3 . . . 3 3 3 . . . 
    . . . 3 . 3 . . . . 3 . . 3 . . 
    . . . 3 . 3 . . . . . 3 . 3 . . 
    . . . 3 3 3 . . . . . 3 . 3 . . 
    . . . 3 3 . . . . . . 3 . 3 . . 
    . . . 3 . 3 . . . . 3 . 3 . . . 
    . . . . 3 . 3 3 . . 3 3 3 . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundImage(img`
    .7.....7..7.......3......33333333................3......3...............................333...............2.....................................................
    .......................33...3....33.............3......3..............................33.................2......................................................
    ......................3.....3......3...........3.......3............................33...................2......................................................
    ......................3.....3.......3.........3.......3...........................33....................2.......................................................
    ......................3.....3........3......33.......3..........................33......................2.......................................................
    .....................3.......3........3....3.........3........................33.......................2........................................................
    ....................3.........3.......3...3.........3........777777773333333333333333333...............2........................................................
    ....................3..........3.......3.3..........3....777733333...777333333..........3333...........2........................................................
    ....................3..........3........3..........3.7777...........33..773...33............333.......2.........................................................
    ....................3..........3.......3.........3777.............33....3377....33.............3......2.........................................................
    ................................3....33.......77773............333.....3....77....3............3......2.........................................................
    ................................33..77.3337777....3..........33......33.....3377333333333......3.....2..........................................................
    .................................377.3337733.....3..........3.......33333333....77...3...33....3.....2..........................................................
    .................................3.33..3.........3........33.....3333.............77..3....33..3.....2..2.......................................................
    ................................7.3....3.........3.......3....3333...3333333........773......333....2.22.22.....................................................
    ...............................7.3....3..........3......3...33..7777777.....333333....77.......33...22.....2....................................................
    ..............................7.3.....3.........3.....33.33377773......7777.......3333..7.....3..3322.......22..................................................
    ....................3............7.3......3.....3...33.3377733....................................2.2.........2.................................................
    ....................3...........7.3......3......3..3..377.333...................................22..2..........2................................................
    .........................33.....73.......33333......333..37..3.3...............................2...2............22..............................................
    .........................33....73.......3........3333...37..3..3..............................2....2..............2.............................................
    ..........................3...73........3.....333...3..37..3..3......77777...................2.....2...............22...........................................
    ..........................333.7........3............3.37..3..3....777.......................2......2.................2..........................................
    ........................333..33........3............33.7.3..3...77.........................2......2.................2...........................................
    ..........................3.7.3.......3.............337.3..3.377..........................2.......2.................2...........................................
    ..........................3.7.333....33.............37.3...3773..........................2........2.................2...........................................
    ........................33333.3..3..3..............37..3..77...3........................2.........2.................2...........................................
    ..........................3..3333.33..............373..377.............................2..........2.................2...........................................
    ..........................3..3...333.............3.73..73.............................2..........2.................2............................................
    ..........................3..3.....3............3.7.3.733............................2...........2.................2............................................
    ..........................3..3.....3............37..37.33...........................2............2.................2............................................
    .........................73.3......3...........37...7..3............................2............2.................2............................................
    ........................7...3.....3............37..73..3...........................2.............2.................2............................................
    ........................7...3.....3............7...73..3..........................2.............2..................2............................................
    .......................7.3..3.....3...........37..7.3..3.........................2..............2.................2...2.........................................
    .......................7.3..3.....3...........37.7..3.33........................2...............2.................2.22..........................................
    .......................7.3..3....3.............................................2................2..........22.....22.2..........................................
    .......................7.3..3...3.............................................2................2222222.2222..2...22..2..........................................
    .......................73...3...3............................................2........2222222222....222......2.22.2.2...........................................
    .....7....7..7.........733..3...3...........................................2222222222.........2..22...22....22..2..2...........................................
    ......7...7..7........7.3...3..3...........37.....................2222222222...................2.2.......2..222..2.2............................................
    .......7...7......7...7.3....33..........337...............2222222......3.2....................22.........22..2..2.2...................22.......................
    ........7..7......7...7.3...3.3........33737.........3...22..............2...3...............222222......222...2.2.2.................22..2......................
    .........7..7.....7...7.3..3...3.....33..737.........3.22...............2.3....33...........2.2..2.....22...2..2.22................22....2......................
    ..........7.7.....7...73........3....................22.................2..3..3............2.22..2....2......2.2.22.............222......2......................
    ..........7.7.....77.7.3.........3..................2........3.........2.................22.2.2..2...2........2.2.2...........22.........2......................
    .....................7............3................2..................2.................2..2..2.2...2.........2222..........22............2.....................
    .....................7.............3..............2...................2................2...2.2..2..2..........2.22.......222..............2.....................
    .....................7..............33...........2...................2................2...2..2..2.2..........2..222....22.................2.....................
    .....................7................3.........2...................2................2...2...2.2.2...........2..2..2.22...................2.....................
    .....................7..........................2...................2...............2...2....2.22...........2..2..222....................2......................
    ....................7...........................2..................2...............2...2....2..2............2..222...2.................22.......................
    ....................7...........................2..................2.............22...2.....2.2.............2.22......2...............2.........................
    ..............222222222222222...................2.................2.............2....2......222............222.2.......2.............2..3.......................
    ............22......7........22222222...........2................2.............2....2.......22...........222.2.2.......2...........22...3.......................
    ..........22........7................222222222..2................2............2....2.......222.........22.2.2..2........2.........2.....3.......................
    .........22........7....................7.....22222222..........2........7...2....2..........2.......22...22..2..........2.......2......3.......................
    ...........2222....7....................7.......2.....222222222.2.......7.2222222222222222222222....2.....22..2..........2.....22.......3.......................
    ...............222.7.................3..7.......2..............22222222222.2....2.....222222222.....2....22...2..........2....2.........3.......................
    ..................22222222222222222223..7.......2.............2..222222222222222222222.2....22.....2.....2....2...........2..2..................................
    ...................7...............3.2222222222222222222222222222....2..2.....2....222222222.2....2.....22....2...........222...................................
    .3337...3.........33.............7..7............2...........2.....22..2.....2.........2...22222222.....2....2............2.....................................
    ....37333...........33...........7..7............2..........2....22...2.....2..........2...2.2..2..222222..2222..........22.....................................
    33333377........7.33.............7..7.............2.........2...2....2.....2...........2.22..2..2.....2222222..22......222......................................
    7....3..73......7...33...........37.7.............2........2..22....2......2...........22....2.2.....222...2....2.....2..2......................................
    .77...3..7......7.....3..........37.7..............2.......222.....2......2...........22.2222222222222....2.....2....2..2.......................................
    ...77.3...7.....7......3..3......37.7...............2.....22.....22......2...........2.2.....2....222.....2.....2..22...2.......................................
    .....773...7....7.......33.3.....37.7...............2....22.....2.......2..........22..2....22...22.2....2.......22.....2.......................................
    .......77..7....7...........3....3.77................2..22.....2.......2..........2....2....22..2..2....2........2.....2........................................
    3333...3.77.7...7...........3......77................2222.....2.......2.........22.....2...2.2.2..2....2.......222.....2...........................3............
    ....33333..77...7...........3......77...............2222......2......2.........2......2...2..22..2.....2......2..2....2............................3............
    ........333377..7...........3.......7..............2..22.....2......2........22.......2..2...2..2.....2.....22....2...2............................3............
    ........3...377..7...........3...................22...22....2......2........2........2..2...22.2.....2....22......2..2.............................3............
    ........3.....77.7.......3...3.................22......222..2.....2........2.........2..2..2.22......2..22........2..2.............................3............
    7...333333....7733.......3....................2.........2.22......2......22.........2..2..2..2......2222.........2..2..............................3............
    .733..3.3......77733....3....................2...........22.22....2.....2...........2.2..2...2.....22............2..2.............................3.............
    .................7......3....................2...........22...222.2...22...........2..2.22..22...22.............2..2..............................3.............
    .................7.....3.........3..........2............22......22..2............2...22.2.2.2.22.2.............2..2..............................3.............
    .................7.....3.........3.........2............2.2......2.22.............2..22...2.222..2..............2.2..............................3..............
    .................7...............3........2.............2..2.....22..222.........2...2...222.2..2..............2.2...............................3..............
    .................7...............3........2............2....22..22......22.......2..2.222.2..2.2...............2.2..............................3...............
    .................7...............3.......2.............2......222.........22....2..222.2..2..2.2..............2.2...............................3...............
    .................7................3.....2.............2......222.2..........22..22222.2....2.22..............2.2...............................3................
    ..................7...............3.....2.............2....22...2222..........222..2..2....2.2..............2.2...............................3.................
    ..................7...............3.....2.............2..22..7....2.2..........2...2.2.....2.2..............22..............................33..................
    ...................7..............3.....2.........3..2.22...7......2.2........2...2.2......22.2............22.............................33....................
    ...................7..............3.....2........3...22....777......222......22....2......22..2...........22............................33......................
    ....................7.............3.....2....3..32222....77...........222...22...........2..222..........2......................................................
    .....................7....77......3.....2..222222...2...7..............22222............2.....22.......22.......................................................
    ......................77....77777..3....222...3......2....................2...........22.......22.....22........................................................
    ........................77.......7777777.............2...............................2..........222222..........................................................
    ...................................3..................2............................22...........2.22............................................................
    ....................................3.................2...........................2.............22..............................................................
    ....................................3..................2........................22..............................................................................
    .....................................3.................2.......................2.........7..................7.737.....3.........................................
    ......................................3.......7.........2.....................2..............................77.73....3.........................................
    ......................................3.......7.........2...................22...............................7777.33..3.........................................
    .......................................3......7..........2.................2..................................77.7..33..........................................
    .........................................................2...............22...................................7.77...3..........................................
    ..........................................................2............22.....................................777.7..33.........................................
    ..........................................................2.........222........................................77.7..3..........................................
    ...........................................................2.....222...........................................7.77..3..........................................
    ...........................................................2..222..............................................7777..3..........................................
    ............................................................22.................................................77.7..3..........................................
    ..............................................................................................................37.77..3..........................................
    ...............................................................................................................7377...3.........................................
    .........................................................................777777777777777......777777777........7.77.............................................
    .....................................................................7777..............................77......7.7733...........................................
    ....................................................7..........777777777.................................77....7.77..33.........................................
    .............................................................777........777...............................7....7.77.............................................
    ..............................................................7............777.............................7...777..............................................
    ..............................................................................77............................7..777..............................................
    ................................................................................777.........................7..777..............................................
    ............................................................................................................7..777..............................................
    ............................................................................................................7.7.77..............................................
    ............................................................................................................77..77..............................................
    ............................................................................................................7...77..............................................
    ...........................................................................................................77...77..............................................
    .........................................................................................................77.7..777..............................................
    ......................................................................................................777...7..777..............................................
    `)
tiles.setTilemap(tilemap`level1`)