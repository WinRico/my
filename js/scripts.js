
    const copartLocations = [

        { id: "ABILENE",name: "ABILENE (TX)", fee: 470, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        { id: "ADELANTO",name: "ADELANTO (CA)",fee: 300, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500 },
        { id: "AKRON",name: "AKRON (OH)",fee: 555, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        { id: "ALBANY",name: "ALBANY (NY)",fee: 340, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        { id: "ALBUQUERQUE", name: "ALBUQUERQUE (NM)", fee: 680, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        { id: "ALTOONA",name: "ALTOONA (PA)",fee: 500, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        { id: "AMARILLO",name: "AMARILLO (TX)",fee: 660, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        { id: "ANCHORAGE", name: "ANCHORAGE (AK)", fee: 2830, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        { id: "ANDREWS",name: "ANDREWS (TX)",fee: 550, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        { id: "ANTELOPE",name: "ANTELOPE (CA)",fee: 430, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "APPLETON",name: "APPLETON (WI)",fee: 480, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "ATLANTA EAST",name: "ATLANTA EAST (GA)",fee: 380, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "ATLANTA NORTH",name: "ATLANTA NORTH (GA)",fee: 380, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500 },
        {id: "ATLANTA SOUTH",name: "ATLANTA SOUTH (GA)",fee: 380, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "ATLANTA WEST",name: "ATLANTA WEST (GA)",fee: 380, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "AUGUSTA",name: "AUGUSTA (GA)",fee: 345, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "AUSTIN",name: "AUSTIN (TX)",fee: 360, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "BAKERSFIELD",name: "BAKERSFIELD (CA)",fee: 330, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "BALTIMORE",name: "BALTIMORE (MD)",fee: 340, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "BALTIMORE EAST ",name: "BALTIMORE EAST (MD)",fee: 380, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "BATON ROUGE",name: "BATON ROUGE (LA)",fee: 460, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "BILLINGS",name: "BILLINGS (MT)",fee: 1280, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "BIRMINGHAM",name: "BIRMINGHAM (AL)",fee: 475, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "BISMARCK",name: "BISMARCK (ND)",fee: 1050, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "BOISE",name: "BOISE (ID)",fee: 1230, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "BUFFALO",name: "BUFFALO (NY)",fee: 555, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500 },
       // {id: "CALGARY",name: "Calgary (AB)",fee: 500, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500},
        {id: "CANDIA",name: "CANDIA (NH)",fee: 410, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "CARTERSVILLE",name: "CARTERSVILLE (GA)",fee: 380, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "CASPER",name: "CASPER (WY)",fee: 1130, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500 },
       // {id: "CEDAR RAPIDS",name: "CEDAR RAPIDS (IA)",fee: 500, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500},
        {id: "CHAMBERSBURG",name: "CHAMBERSBURG (PA)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "CHARLESTON",name: "CHARLESTON (WV)",fee: 570, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500 },
        {id: "CHICAGO NORTH",name: "CHICAGO NORTH (IL)",fee: 320, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "CHICAGO SOUTH",name: "CHICAGO SOUTH (IL)",fee: 320, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "CHINA GROVE",name: "CHINA GROVE (NC)",fee: 355, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "CICERO",name: "CICERO (IN)",fee: 155, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "CLEVELAND EAST",name: "CLEVELAND EAST (OH)",fee: 555, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "CLEVELAND WEST",name: "CLEVELAND WEST (OH)",fee: 555, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        //{id: "CLEWISTON",name: "CLEWISTON (FL)",fee: 500, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500},
        {id: "COLORADO SPRINGS",name: "COLORADO SPRINGS (CO)",fee: 820, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "COLUMBIA",name: "COLUMBIA (SC)",fee: 285, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "COLUMBIA MO",name: "COLUMBIA (MO)",fee: 520, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "COLUMBUS",name: "COLUMBUS (OH)",fee: 330, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "CONCORD",name: "CONCORD (NC)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500 },
        {id: "CORPUS CHRISTI",name: "CORPUS CHRISTI (TX)",fee: 440, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "CRASHEDTOYS ATLANTA",name: "CRASHEDTOYS ATLANTA (GA)",fee: 380, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "CRASHEDTOYS DALLAS",name: "CRASHEDTOYS DALLAS (TX)",fee: 390, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "CRASHEDTOYS MINNEAPOLIS",name: "MINNEAPOLIS (MN)",fee: 550, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "CRASHEDTOYS EAST",name: "CRASHEDTOYS EAST (MN)",fee: 515, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "CRASHEDTOYS SACRAMENTO",name: "SACRAMENTO (CA)",fee: 480, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "MEMPHIS",name: "MEMPHIS",fee: 525, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "DALLAS",name: "DALLAS (TX)",fee: 390, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "DALLAS SOUTH",name: "DALLAS SOUTH (TX)",fee: 390, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "DANVILLE",name: "DANVILLE (VA)",fee: 480, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "DAVENPORT",name: "DAVENPORT (IA)",fee: 550, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500 },
        {id: "DAYTON",name: "DAYTON (OH)",fee: 340, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
       // {id: "DENVER",name: "DENVER (CO)",fee: 500, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500},
        {id: "DENVER CENTRAL",name: "DENVER CENTRAL (CO)",fee: 780, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "DENVER SOUTH",name: "DENVER SOUTH (CO)",fee: 780, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "DES MOINES",name: "DES MOINES (IA)",fee: 550, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "DETROIT",name: "DETROIT (MI)",fee: 630, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "DOTHAN",name: "DOTHAN (AL)",fee: 430, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "DYER",name: "DYER (IN)",fee: 305, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "EARLINGTON",name: "EARLINGTON (KY)",fee: 565, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        //{id: "EDMONTON",name: "Edmonton (AB)",fee: 500, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500},
        {id: "EL PASO",name: "EL PASO (TX)",fee: 580, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "EUGENE",name: "EUGENE (OR)",fee: 770, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "EXETER",name: "EXETER (RI)",fee: 410, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "FAIRBURN",name: "FAIRBURN (GA)",fee: 380, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "FAYETTEVILLE",name: "FAYETTEVILLE (AR)",fee: 630, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "FLINT",name: "FLINT (MI)",fee: 630, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "FORT WAYNE",name: "FORT WAYNE (IN)",fee: 280, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "FREDERICKSBURG",name: "FREDERICKSBURG (VA)",fee: 455, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "FREETOWN",name: "FREETOWN (MA)",fee: 410, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "FRESNO",name: "FRESNO (CA)",fee: 375, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "FT. PIERCE",name: "FT. PIERCE (FL)",fee: 415, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "FT. WORTH",name: "FT. WORTH (TX)",fee: 405, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "GASTONIA",name: "GASTONIA (NC)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "GLASSBORO EAST",name: "GLASSBORO EAST (NJ)",fee: 260, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "GLASSBORO WEST", name: "GLASSBORO WEST (NJ)", fee: 260, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "GRAHAM",name: "GRAHAM (WA)",fee: 830, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        { id: "GRENADA", name: "GRENADA (MS)", fee: 620, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        //{id: "HALIFAX",name: "Halifax (NS)",fee: 500, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500},
        {id: "HAMMOND",name: "HAMMOND (IN)",fee: 305, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "HAMPTON",name: "HAMPTON (VA)",fee: 440, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "HARRISBURG",name: "HARRISBURG (PA)",fee: 320, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "HARTFORD",name: "HARTFORD (CT)",fee: 285, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "HARTFORD SPRINGFIELD",name: "HARTFORD SPRINGFIELD (CT)",fee: 285, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "HAYWARD",name: "HAYWARD DESERT (CA)",fee: 430, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "HAYWARD",name: "HAYWARD (CA)",fee: 430, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "HELENA",name: "HELENA (MT)",fee: 1280, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "HONOLULU",name: "HONOLULU (LIHUE)",fee: 3165, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "HONOLULU",name: "HONOLULU (KAILUA KONA)",fee: 2780, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "HONOLULU",name: "HONOLULU (KAPOLEI)",fee: 3130, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "HONOLULU",name: "HONOLULU (MAUI)",fee: 2340, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "HOUSTON",name: "HOUSTON (TX)",fee: 230, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "HOUSTON EAST",name: "HOUSTON EAST (TX)",fee: 230, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "INDIANAPOLIS",name: "INDIANAPOLIS (IN)",fee: 260, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "IONIA",name: "IONIA (MI)",fee: 700, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "JACKSON",name: "JACKSON (MS)",fee: 620, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "JACKSONVILLE NORTH",name: "JACKSONVILLE NORTH (FL)",fee: 280, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "JACKSONVILLE EAST",name: "JACKSONVILLE EAST (FL)",fee: 280, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "JACKSONVILLE WEST",name: "JACKSONVILLE WEST (FL)",fee: 280, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "KANSAS CITY",name: "KANSAS CITY (KS)",fee: 710, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "KINCHELOE",name: "KINCHELOE (MI)",fee: 895, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        { id: "KNOXVILLE", name: "KNOXVILLE (TN)", fee: 445, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "LANSING",name: "LANSING (MI)",fee: 605, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "LAS VEGAS",name: "LAS VEGAS (NV)",fee: 375, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "LAS VEGAS WEST",name: "Las Vegas West (NV)",fee: 405, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "LEXINGTON EAST",name: "LEXINGTON EAST (KY)",fee: 555, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "LEXINGTON WEST",name: "LEXINGTON WEST (KY)",fee: 555, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "LINCOLN",name: "LINCOLN (NE)",fee: 620, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "LITTLE ROCK",name: "LITTLE ROCK (AR)",fee: 650, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
       // {id: "LONDON",name: "London (ON)",fee: 500, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500},
        {id: "LONG BEACH",name: "LONG BEACH (CA)",fee: 250, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        { id: "LONG ISLAND", name: "LONG ISLAND (NY)", fee: 320, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "LONGVIEW",name: "LONGVIEW (TX)",fee: 400, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "LOS ANGELES",name: "LOS ANGELES (CA)",fee: 250, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "LOUISVILLE",name: "LOUISVILLE (KY)",fee: 555, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "LUFKIN",name: "LUFKIN (TX)",fee: 360, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "LUMBERTON",name: "LUMBERTON (NC)",fee: 415, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "LYMAN",name: "LYMAN (ME)",fee: 455, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "MACON",name: "MACON (GA)",fee: 345, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "MADISON",name: "MADISON (WI)",fee: 455, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "MADISON SOUTH",name: "MADISON SOUTH (WI)",fee: 455, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "MARTINEZ",name: "MARTINEZ (CA)",fee: 430, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "MCALLEN",name: "MCALLEN (TX)",fee: 440, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "MEBANE",name: "MEBANE (NC)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "MEMPHIS",name: "MEMPHIS (TN)",fee: 525, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "MENTONE",name: "Mentone (CA)",fee: 280, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "MIAMI CENTRAL",name: "MIAMI CENTRAL (FL)",fee: 445, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "MIAMI NORTH",name: "MIAMI NORTH (FL)",fee: 445, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "MIAMI SOUTH",name: "MIAMI SOUTH (FL)",fee: 445, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "MILWAUKEE",name: "MILWAUKEE (WI)",fee: 430, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "MILWAUKEE NORTH",name: "MILWAUKEE NORTH (WI)",fee: 430, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "MILWAUKEE SOUTH",name: "MILWAUKEE SOUTH (WI)",fee: 430, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "MINNEAPOLIS",name: "MINNEAPOLIS (MN)",fee: 555, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "MINNEAPOLIS NORTH",name: "MINNEAPOLIS NORTH (MN)",fee: 555, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "MOBILE",name: "MOBILE (AL)",fee: 430, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "MOBILE SOUTH",name: "MOBILE South (AL)",fee: 430, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "MOCKSVILLE",name: "MOCKSVILLE (NC)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "MONTGOMERY",name: "MONTGOMERY (AL)",fee: 430, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        //{id: "MONTREAL",name: "Montreal (QC)",fee: 500, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500},
        //{id: "NAPA",name: "NAPA (CA)",fee: 500, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500},
        {id: "NASHVILLE",name: "NASHVILLE (TN)",fee: 475, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "NEW ORLEANS",name: "NEW ORLEANS (LA)",fee: 460, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "NEWBURGH",name: "NEWBURGH (NY)",fee: 290, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "NORTH BOSTON",name: "NORTH BOSTON (MA)",fee: 410, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "NORTH CHARLESTON",name: "NORTH CHARLESTON (SC)",fee: 280, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        { id: "NORTH SEATTLE", name: "NORTH SEATTLE (WA)", fee: 830, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "OCALA",name: "OCALA (FL)",fee: 375, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "OGDEN",name: "OGDEN (UT)",fee: 620, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "OKLAHOMA CITY",name: "OKLAHOMA CITY (OK)",fee: 560, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "ORLANDO NORTH",name: "ORLANDO NORTH (FL)",fee: 375, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "ORLANDO SOUTH",name: "ORLANDO SOUTH (FL)",fee: 375, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        //{id: "OTTAWA",name: "Ottawa (ON)",fee: 500, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500},
        {id: "PASCO",name: "PASCO (WA)",fee: 830, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "PEORIA",name: "PEORIA (IL)",fee: 355, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "PHILADELPHIA",name: "PHILADELPHIA (PA)",fee: 305, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "PHILADELPHIA EAST",name: "PHILADELPHIA EAST (PA)",fee: 305, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "PHOENIX",name: "PHOENIX (AZ)",fee: 375, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "PITTSBURGH EAST",name: "PITTSBURGH EAST (PA)",fee: 500, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "PITTSBURGH NORTH",name: "PITTSBURGH NORTH (PA)",fee: 500, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "PITTSBURGH SOUTH",name: "PITTSBURGH SOUTH (PA)",fee: 500, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "PITTSBURGH WEST",name: "PITTSBURGH WEST (PA)",fee: 500, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "PORTLAND NORTH",name: "PORTLAND NORTH (OR)",fee: 730, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "PORTLAND SOUTH",name: "PORTLAND SOUTH (OR)",fee: 730, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "PUNTA GORDA",name: "PUNTA GORDA (FL)",fee: 450, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "RALEIGH",name: "RALEIGH (NC)",fee: 355, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "RALEIGH NORTH",name: "RALEIGH NORTH (NC)",fee: 355, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "RANCHO CUCAMONGA",name: "RANCHO CUCAMONGA (CA)",fee: 300, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "RAPID CITY",name: "RAPID CITY (SD)",fee: 835, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "REDDING",name: "Redding (CA)",fee: 720, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500 },
        {id: "RENO",name: "RENO (NV)",fee: 580, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "RICHMOND",name: "RICHMOND (VA)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "RICHMOND EAST",name: "RICHMOND EAST (VA)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "ROCHESTER",name: "ROCHESTER (NY)",fee: 500, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "RUTLAND",name: "Rutland (VT)",fee: 530, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "SACRAMENTO",name: "SACRAMENTO (CA)",fee: 480, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "SALT LAKE CITY",name: "SALT LAKE CITY (UT)",fee: 620, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "SAN ANTONIO",name: "SAN ANTONIO (TX)",fee: 360, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "SAN BERNARDINO",name: "SAN BERNARDINO (CA)",fee: 260, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "SAN DIEGO",name: "SAN DIEGO (CA)",fee: 330, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "SAN JOSE",name: "SAN JOSE (CA)",fee: 430, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "SAVANNAH",name: "SAVANNAH (GA)",fee: 220, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "SCRANTON",name: "SCRANTON (PA)",fee: 340, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "SEAFORD",name: "SEAFORD (DE)",fee: 340, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "SHREVEPORT",name: "SHREVEPORT (LA)",fee: 460, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "SIKESTON",name: "SIKESTON (MO)",fee: 630, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "SO SACRAMENTO",name: "SO SACRAMENTO (CA)",fee: 520, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "SOMERVILLE",name: "SOMERVILLE (NJ)",fee: 220, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "SOUTH BOSTON",name: "SOUTH BOSTON (MA)",fee: 410, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "SOUTHERN ILLINOIS",name: "SOUTHERN ILLINOIS (IL)",fee: 355, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
       // {id: "SPANAWAY",name: "SPANAWAY (WA)",fee: 500, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500},
        {id: "SPARTANBURG",name: "SPARTANBURG (SC)",fee: 330, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "SPOKANE",name: "SPOKANE (WA)",fee: 905, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "SPRINGFIELD",name: "SPRINGFIELD (MO)",fee: 520, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "ST. CLOUD",name: "ST. CLOUD (MN)",fee: 605, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "ST. LOUIS",name: "ST. LOUIS (MO)",fee: 370, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "SUN VALLEY",name: "SUN VALLEY (CA)",fee: 280, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "SYRACUSE",name: "SYRACUSE (NY)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "TALLAHASSEE",name: "TALLAHASSEE (FL)",fee: 415, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "TAMPA SOUTH",name: "TAMPA SOUTH (FL)",fee: 405, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "TANNER",name: "TANNER (AL)",fee: 445, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "TIFTON",name: "TIFTON (GA)",fee: 345, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
       // {id: "TORONTO",name: "TORONTO (ON)",fee: 500, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500},
        {id: "TRENTON",name: "TRENTON (NJ)",fee: 220, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "TUCSON",name: "TUCSON (AZ)",fee: 460, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500 },
        {id: "TULSA",name: "TULSA (OK)",fee: 610, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "VALLEJO",name: "VALLEJO (CA)",fee: 430, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "VAN NUYS",name: "VAN NUYS (CA)",fee: 300, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "WACO",name: "WACO (TX)",fee: 330, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "WALTON",name: "WALTON (KY)",fee: 580, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "WASHINGTON DC",name: "WASHINGTON DC (MD)",fee: 360, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "WAYLAND",name: "Wayland (MI)",fee: 605, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "WEST PALM BEACH",name: "WEST PALM BEACH (FL)",fee: 445, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "WEST WARREN",name: "WEST WARREN (MA)",fee: 410, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "WHEELING",name: "WHEELING (IL)",fee: 320, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "WICHITA",name: "WICHITA (KS)",fee: 700, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "WINDHAM",name: "Windham (ME)",fee: 480, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        { id: "YORK HAVEN", name: "YORK HAVEN (PA)", fee: 340, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500}
    
    ];

    const iaaiLocations = [

        {id: "Abilene",name: "Abilene (TX)",fee: 470, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "ACECarson",name: "ACE - Carson (CA)",fee: 900, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "ACEPerris",name: "ACE - Perris (CA)",fee: 900, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "AkronCanton",name: "Akron-Canton (OH)",fee: 555, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Albany", name: "Albany (NY)", fee: 340, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Altoona",name: "Altoona (PA)",fee: 500, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Albuquerque", name: "Albuquerque (NM)", fee: 680, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Amarillo",name: "Amarillo (TX)",fee: 660, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Anaheim", name: "Anaheim (CA)", fee: 210, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Anchorage",name: "Anchorage (AK)",fee: 2830, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Appleton",name: "Appleton (WI)",fee: 480, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Asheville", name: "Asheville (NC)", fee: 405, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Ashland",name: "Ashland (KY)",fee: 650, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Atlanta",name: "Atlanta (GA)",fee: 380, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "AtlantaEast",name: "Atlanta East (GA)",fee: 380, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "AtlantaNorth",name: "Atlanta North (GA)",fee: 380, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "AtlantaSouth",name: "Atlanta South (GA)",fee: 380, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        //*
        //{
        //    id: "AUSTIN",
       //     name: "AUSTIN (TX)",
       //     fee: 900, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500
       // },
        {id: "Austin",name: "Austin (TX)",fee: 340, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "AvenelNewJersey",name: "Avenel New Jersey (NJ)",fee: 200, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Baltimore", name: "Baltimore (MD)", fee: 340, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "BatonRouge",name: "Baton Rouge (LA)",fee: 460, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Billings",name: "Billings (MT)",fee: 1280, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Birmingham",name: "Birmingham (AL)",fee: 475, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Boise",name: "Boise (ID)",fee: 1230, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "BostonShirley",name: "Boston - Shirley (MA)",fee: 410, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        { id: "BowlingGreen", name: "Bowling Green (KY)", fee: 565, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},

     //   {
       //     id: "Brandon",
      //      name: "Brandon (MB)",
     //       fee: 900, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500
      //  },
        
        {id: "Bridgeport",name: "Bridgeport (PA)",fee: 295, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Buckhannon",name: "Buckhannon (WV)",fee: 570, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Buffalo",name: "Buffalo (NY)",fee: 555, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Burlington",name: "Burlington (VT)",fee: 530, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Casper",name: "Casper (WY)",fee: 1130, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "CentralNewJersey",name: "Central New Jersey (NJ)",fee: 200, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Charleston",name: "Charleston (SC)",fee: 280, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Charlotte",name: "Charlotte (NC)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Chattanooga",name: "Chattanooga (TN)",fee: 475, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500}, 
        {id: "ChicagoNorth",name: "Chicago-North (IL)",fee: 320, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "ChicagoSouth", name: "Chicago-South (IL)", fee: 320, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "ChicagoWest",name: "Chicago-West (IL)",fee: 320, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Cincinnati",name: "Cincinnati (OH)",fee: 330, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "CincinnatiSouth",name: "Cincinnati-South (OH)",fee: 330, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Clearwater",name: "Clearwater (FL)",fee: 405, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Cleveland",name: "Cleveland (OH)",fee: 555, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "ColoradoSprings",name: "Colorado Springs (CO)",fee: 820, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Colton",name: "Colton (CA)",fee: 260, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Columbia",name: "Columbia (SC)",fee: 285, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Columbus",name: "Columbus (OH)",fee: 330, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Concord",name: "Concord (NC)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "CorpusChristi",name: "Corpus Christi (TX)",fee: 440, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Culpeper",name: "Culpeper (VA)",fee: 900, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Dallas",name: "Dallas (TX)",fee: 390, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "DallasFtWorth",name: "Dallas/Ft Worth (TX)",fee: 390, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Davenport", name: "Davenport (IA)", fee: 515, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Dayton",name: "Dayton (OH)",fee: 340, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Denver",name: "Denver (CO)",fee: 780, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "DenverEast",name: "Denver East (CO)",fee: 880, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "DesMoines",name: "Des Moines (IA)",fee: 550, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Detroit", name: "Detroit (MI)", fee: 610, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Dothan",name: "Dothan (AL)",fee: 430, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Dundalk",name: "Dundalk (MD)",fee: 360, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "EastBay",name: "East Bay (CA)",fee: 430, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        //{
      //      id: "Edmonton",
      //      name: "Edmonton (AB)",
      //      fee: 900, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500
      //  },
        {id: "ElPaso",name: "El Paso (TX)",fee: 580, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Elkton",name: "Elkton (MD)",fee: 340, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Englishtown",name: "Englishtown (NJ)",fee: 200, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Erie",name: "Erie (PA)",fee: 570, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Eugene",name: "Eugene (OR)",fee: 770, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Fargo", name: "Fargo (ND)", fee: 880, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Fayetteville",name: "Fayetteville (AR)",fee: 630, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Flint",name: "Flint (MI)",fee: 630, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Fontana",name: "Fontana (CA)",fee: 260, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "FortMyers",name: "Fort Myers (FL)",fee: 450, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500}, 
        {id: "FortPierce",name: "Fort Pierce (FL)",fee: 415, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "FortWayne",name: "Fort Wayne (IN)",fee: 280, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "FortWorthNorth", name: "Fort Worth North (TX)", fee: 405, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Fredericksburg South",name: "Fredericksburg South (VA)",fee: 455, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500}, 
        {id: "Fremont",name: "Fremont (CA)",fee: 440, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Fresno",name: "Fresno (CA)",fee: 375, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "GrandRapids",name: "Grand Rapids (MI)",fee: 605, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Greensboro",name: "Greensboro (NC)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Greenville",name: "Greenville (SC)",fee: 320, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Grenada",name: "Grenada (MS)",fee: 620, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "GulfCoast",name: "Gulf Coast (MS)",fee: 620, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Hartford",name: "Hartford (CT)",fee: 285, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Hartford", name: "Hartford-South (CT)", fee: 285, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500 },
        {id: "HighDesert", name: "High Desert (CA)", fee: 310, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "HighPoint",name: "High Point (NC)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Honolulu",name: "Honolulu (Kailua Kona)",fee: 2780, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Honolulu", name: "Honolulu (Kapolei Oahu)", fee: 3130, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Honolulu",name: "Honolulu (Lihue Kauai)",fee: 3165, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Honolulu",name: "Honolulu (Maui Maui)",fee: 2340, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Houston", name: "Houston (TX)", fee: 230, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "HoustonSouth",name: "Houston South (TX)",fee: 230, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "HoustonNorth",name: "Houston-North (TX)",fee: 230, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Huntsville",name: "Huntsville (AL)",fee: 445, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Indianapolis",name: "Indianapolis (IN)",fee: 260, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "IndianapolisSouth",name: "Indianapolis South (IN)",fee: 270, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Jackson",name: "Jackson (MS)",fee: 620, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Jacksonville",name: "Jacksonville (FL)",fee: 280, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "KansasCity",name: "Kansas City (KS)",fee: 710, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "KansasCityEast",name: "Kansas City East (MO)",fee: 710, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Knoxville",name: "Knoxville (TN)",fee: 475, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Lafayette", name: "Lafayette (LA)", fee: 460, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "LasVegas", name: "Las Vegas (NV)", fee: 375, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "LAUREL",name: "LAUREL (MD)",fee: 345, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Lexington",name: "Lexington (SC)",fee: 315, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Lincoln", name: "Lincoln (IL)", fee: 380, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "LittleRock", name: "Little Rock (AR)", fee: 650, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "LIVINGSTON", name: "LIVINGSTON (LA)", fee: 460, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
       // {
       //     id: "London",
        //    name: "London (ON)",
       //     fee: 900, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500
      //  },
        {id: "LongIsland",name: "Long Island (NY)",fee: 320, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Longview",name: "Longview (TX)",fee: 400, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "LosAngeles",name: "Los Angeles (CA)",fee: 250, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "LosAngelesSouth",name: "Los Angeles South (CA)",fee: 250, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Louisville",name: "Louisville (KY)",fee: 555, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "LouisvilleNorth",name: "Louisville North (KY)",fee: 555, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Lubbock",name: "Lubbock (TX)",fee: 530, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Macon",name: "Macon (GA)",fee: 345, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Manchester", name: "Manchester (NH)", fee: 410, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "McAllen",name: "McAllen (TX)",fee: 440, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Memphis",name: "Memphis (TN)",fee: 525, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "MetroDC", name: "Metro DC (MD)", fee: 360, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Miami",name: "Miami (FL)",fee: 445, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "MiamiNorth",name: "Miami-North (FL)",fee: 445, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500 },
        {id: "Milwaukee",name: "Milwaukee (WI)",fee: 405, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500 },
        {id: "MINNEAPOLISSOUTH",name: "MINNEAPOLIS SOUTH (MN)",fee: 550, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "MinneapolisStPaul",name: "Minneapolis/St. Paul (MN)",fee: 555, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Missoula",name: "Missoula (MT)",fee: 1280, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
      //  {
       //     id: "Monticello",
        //    name: "Monticello (NY)",
       //     fee: 900, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500
      //  },
        
       // {
      //      id: "Montreal",
       //     name: "Montreal (QC)",
       //     fee: 900, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500
       // },
        {id: "Nashville",name: "Nashville (TN)",fee: 475, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "NewCastle",name: "New Castle (DE)",fee: 340, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "NewOrleans",name: "New Orleans (LA)",fee: 460, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500}, 
        {id: "NewOrleansEast",name: "New Orleans East (LA)",fee: 460, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Newburgh",name: "Newburgh (NY)",fee: 270, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "NorthHollywood",name: "North Hollywood (CA)",fee: 320, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Northern New Jersey",name: "Northern New Jersey (NJ)",fee: 200, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "NorthernVirginia",name: "Northern Virginia (VA)",fee: 455, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "OklahomaCity",name: "Oklahoma City (OK)",fee: 560, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Omaha", name: "Omaha (NE)", fee: 630, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Orlando",name: "Orlando (FL)",fee: 375, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "OrlandoNorth",name: "Orlando-North (FL)",fee: 375, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
       // {
        //    id: "Ottawa",
        //    name: "Ottawa (ON)",
       //     fee: 900, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500
       // },  
        {id: "Paducah",name: "Paducah (KY)",fee: 555, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Pensacola",name: "Pensacola (FL)",fee: 445, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "PermianBasin", name: "Permian Basin (TX)", fee: 580, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Philadelphia",name: "Philadelphia (PA)",fee: 295, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Philadelphia EAST", name: "Philadelphia EAST (PA)", fee: 295, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Phoenix ДАМБЛДОРА",name: "Phoenix (AZ)",fee: 375, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Pittsburgh",name: "Pittsburgh (PA)",fee: 500, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "PittsburghNorth",name: "Pittsburgh-North (PA)",fee: 500, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "PortMurray",name: "Port Murray (NJ)",fee: 260, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Portage",name: "Portage (WI)",fee: 455, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Portland",name: "Portland (OR)",fee: 700, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "PortlandGorham",name: "Portland - Gorham (ME)",fee: 480, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "PortlandWest",name: "Portland West (OR)",fee: 700, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Providence",name: "Providence (RI)",fee: 410, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Pulaski",name: "Pulaski (VA)",fee: 455, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Raleigh",name: "Raleigh (NC)",fee: 355, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Reno",name: "Reno (NV)",fee: 580, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Richmond",name: "Richmond (VA)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "RIVERSIDE",name: "RIVERSIDE (CA)",fee: 260, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Roanoke",name: "Roanoke (VA)",fee: 455, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Rochester",name: "Rochester (NY)",fee: 500, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Rosedale", name: "Rosedale (MD)", fee: 340, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Sacramento",name: "Sacramento (CA)",fee: 480, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "SaltLakeCity",name: "Salt Lake City (UT)",fee: 620, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "SanAntonio",name: "San Antonio (TX)",fee: 360, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "SanAntonioSouth",name: "San Antonio-South (TX)",fee: 360, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "SanDiego",name: "San Diego (CA)",fee: 330, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500 },
        {id: "SantaClarita",name: "Santa Clarita (CA)",fee: 300, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Savannah",name: "Savannah (GA)",fee: 220, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Sayreville",name: "Sayreville (NJ)",fee: 230, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Scranton",name: "Scranton (PA)",fee: 340, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Seattle",name: "Seattle (WA)",fee: 830, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "ShadySpring",name: "Shady Spring (WV)",fee: 620, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Shreveport",name: "Shreveport (LA)",fee: 460, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "SiouxFalls",name: "Sioux Falls (SD)",fee: 780, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "SouthBend",name: "South Bend (IN)",fee: 325, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "SouthernNewJersey",name: "Southern New Jersey (NJ)",fee: 260, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "SpecialtyDivision",name: "Specialty Division (IL)",fee: 320, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Spokane", name: "Spokane (WA)", fee: 905, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Springfield",name: "Springfield (MO)",fee: 560, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "StLouis",name: "St. Louis (IL)",fee: 325, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "Suffolk",name: "Suffolk (VA)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Syracuse",name: "Syracuse (NY)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Tampa",name: "Tampa (FL)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "TampaNorth",name: "Tampa North (FL)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Taunton",name: "Taunton (MA)",fee: 410, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Templeton",name: "Templeton (MA)",fee: 410, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Tidewater",name: "Tidewater (VA)",fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Tifton",name: "Tifton (GA)",fee: 345, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
       // {
        //    id: "Toronto",
        //    name: "Toronto (ON)",
        //    fee: 900, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500
       // },
        {id: "Tucson",name: "Tucson (AZ)",fee: 460, feeLight: 1600, feePark: 2000, feeCross: 2400, feeMoto: 500},
        {id: "Tulsa",name: "Tulsa (OK)",fee: 610, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
       // {
        //    id: "Vancouver",
        //    name: "Vancouver (BC)",
        //    fee: 900, feeLight: 0, feePark: 0, feeCross: 0, feeMoto: 500
       // },
        { id: "WestPalmBeach", name: "West Palm Beach (FL)", fee: 445, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500},
        {id: "Westchester",name: "Westchester (IL)",fee: 320, feeLight: 1250, feePark: 1500, feeCross: 1900, feeMoto: 500},
        {id: "WesternColorado",name: "Western Colorado (CO)",fee: 1430, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Wichita",name: "Wichita (KS)",fee: 700, feeLight: 1150, feePark: 1400, feeCross: 1750, feeMoto: 500},
        {id: "Wilmington", name: "Wilmington (NC)", fee: 385, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500 },
        {id: "YorkSprings",name: "York Springs (PA)",fee: 340, feeLight: 1050, feePark: 1300, feeCross: 1600, feeMoto: 500}
    ];

    const copartFees = [
        { min: 0.01, max: 49.99, fee: 1 },
        { min: 50, max: 99.99, fee: 1 },
        { min: 100, max: 199.99, fee: 25 },
        { min: 200, max: 299.99, fee: 60 },
        { min: 300, max: 349.99, fee: 80 },
        { min: 350, max: 399.99, fee: 90 },
        { min: 400, max: 449.99, fee: 120 },
        { min: 450, max: 499.99, fee: 130 },
        { min: 500, max: 549.99, fee: 140 },
        { min: 550, max: 599.99, fee: 150 },
        { min: 600, max: 699.99, fee: 165 },
        { min: 700, max: 799.99, fee: 185 },
        { min: 800, max: 899.99, fee: 200 },
        { min: 900, max: 999.99, fee: 215 },
        { min: 1000, max: 1199.99, fee: 230 },
        { min: 1200, max: 1299.99, fee: 255 },
        { min: 1300, max: 1399.99, fee: 275 },
        { min: 1400, max: 1499.99, fee: 280 },
        { min: 1500, max: 1599.99, fee: 290 },
        { min: 1600, max: 1699.99, fee: 305 },
        { min: 1700, max: 1799.99, fee: 315 },
        { min: 1800, max: 1999.99, fee: 325 },
        { min: 2000, max: 2399.99, fee: 355 },
        { min: 2400, max: 2499.99, fee: 380 },
        { min: 2500, max: 2999.99, fee: 400 },
        { min: 3000, max: 3499.99, fee: 450 },
        { min: 3500, max: 3999.99, fee: 500 },
        { min: 4000, max: 4499.99, fee: 600 },
        { min: 4500, max: 4999.99, fee: 625 },
        { min: 5000, max: 5999.99, fee: 650 },
        { min: 6000, max: 6999.99, fee: 675 },
        { min: 7000, max: 7999.99, fee: 700 },
        { min: 8000, max: 8999.99, fee: 725 },
        { min: 9000, max: 9999.99, fee: 725 },
        { min: 10000, max: 11499.99, fee: 750 },
        { min: 11500, max: 11999.99, fee: 760 },
        { min: 12000, max: 12499.99, fee: 775 },
        { min: 12500, max: 14999.99, fee: 790 }
    ];
    const iaaiFees = [
        { min: 0.01, max: 99.99, fee: 1 },
        { min: 100, max: 199.99, fee: 25 },
        { min: 200, max: 299.99, fee: 60 },
        { min: 300, max: 349.99, fee: 80 },
        { min: 350, max: 399.99, fee: 90 },
        { min: 400, max: 499.99, fee: 130 },
        { min: 500, max: 599.99, fee: 150 },
        { min: 600, max: 699.99, fee: 165 },
        { min: 700, max: 799.99, fee: 185 },
        { min: 800, max: 899.99, fee: 200 },
        { min: 900, max: 999.99, fee: 215 },

        { min: 1000, max: 1099.99, fee: 230 },
        { min: 1100, max: 1199.99, fee: 255 },
        { min: 1200, max: 1299.99, fee: 255 },
        { min: 1300, max: 1399.99, fee: 275 },
        { min: 1400, max: 1499.99, fee: 280 },
        { min: 1500, max: 1599.99, fee: 290 },
        { min: 1600, max: 1799.99, fee: 315 },
        { min: 1800, max: 1999.99, fee: 325 },

        { min: 2000, max: 2199.99, fee: 355 },
        { min: 2200, max: 2399.99, fee: 355 },
        { min: 2400, max: 2499.99, fee: 380 },
        { min: 2500, max: 2799.99, fee: 400 },
        { min: 2800, max: 2999.99, fee: 400 },

        { min: 3000, max: 3499.99, fee: 450 },
        { min: 3500, max: 3999.99, fee: 500 },
        { min: 4000, max: 4499.99, fee: 600 },
        { min: 4500, max: 4999.99, fee: 625 },

        { min: 5000, max: 5999.99, fee: 650 },
        { min: 6000, max: 6999.99, fee: 675 },
        { min: 7000, max: 7999.99, fee: 700 },
        { min: 8000, max: 9999.99, fee: 725 },

        { min: 10000, max: 11499.99, fee: 750 },
        { min: 11500, max: 11999.99, fee: 760 },
        { min: 12000, max: 12499.99, fee: 775 },
        { min: 12500, max: 14999.99, fee: 790 },

    ];
    const BitFee = [
        { min: 0, max: 99.99, fee: 0 },
        { min: 100, max: 499.99, fee: 49 },
        { min: 500, max: 999.99, fee: 59 },
        { min: 1000, max: 1499.99, fee: 79 },
        { min: 1500, max: 1999.99, fee: 89 },
        { min: 2000, max: 3999.99, fee: 99 },
        { min: 4000, max: 5999.99, fee: 109 },
        { min: 6000, max: 7999.99, fee: 139 },
        { min: 8000, max: 1000000, fee: 149 },

    ];
// ====== MAP ======
const locations = {
    copart: copartLocations,
    iaai: iaaiLocations
};

// ====== ELEMENTS ======
const locationSelect = document.getElementById("exampleFormControlSelect1");
const locationSearch = document.getElementById("locationSearch");
const locationDropdown = document.getElementById("locationDropdown");

const auctionRadios = document.querySelectorAll('input[name="auction"]');
const resultBox = document.getElementById("result");

// ====== RENDER ======
function updateLocations(type) {
    const list = locations[type] || [];

    locationSearch.value = "";
    locationSelect.value = "";

    locationDropdown.innerHTML = "";

    list.forEach(location => {
        const option = document.createElement("div");

        option.className = "location-option";
        option.textContent = location.name;

        option.dataset.id = location.id;

        option.addEventListener("click", function () {
            locationSearch.value = location.name;
            locationSelect.value = location.id;

            locationDropdown.style.display = "none";

            calculate();
        });

        locationDropdown.appendChild(option);
    });
}
locationSearch.addEventListener("focus", function () {
    locationDropdown.style.display = "block";
});

locationSearch.addEventListener("input", function () {
    const search = this.value.toLowerCase().trim();

    const options = locationDropdown.querySelectorAll(".location-option");

    let hasResults = false;

    options.forEach(option => {
        const name = option.textContent.toLowerCase();

        if (name.includes(search)) {
            option.style.display = "block";
            hasResults = true;
        } else {
            option.style.display = "none";
        }
    });

    locationDropdown.style.display = hasResults ? "block" : "none";

    // Якщо користувач змінив вже вибрану площадку
    // і почав вводити щось нове
    locationSelect.value = "";
});

document.addEventListener("click", function (event) {
    if (!event.target.closest(".location-search")) {
        locationDropdown.style.display = "none";
    }
});

// ====== AUCTION SWITCH ======
auctionRadios.forEach(radio => {
    radio.addEventListener("change", function () {
        updateLocations(this.id);
        calculate();
    });
});

// ====== INIT (ОДИН РАЗ!) ======
updateLocations("copart");

// ====== INPUTS ======
const inputs = [
    "pricelote",
    "poscomp",
    "repair",
    "year",
    "valm2"
];

inputs.forEach(id => {
    document.getElementById(id).addEventListener("input", calculate);
});

document.querySelectorAll("input[name='auction'], input[name='fuel'], input[name='kuzov'], select")
    .forEach(el => el.addEventListener("change", calculate));

// ====== HELPERS ======
function val(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}

function isReady() {
    return (
        document.getElementById("pricelote").value !== "" &&
        document.getElementById("valm2").value !== "" &&
        document.getElementById("year").value !== "" &&
        document.getElementById("exampleFormControlSelect1").value !== ""
    );
}
 function getCopartFee(price) {

    if (price >= 15000) {
        return price * 0.06;
    }

    for (const row of copartFees) {
        if (price >= row.min && price <= row.max) {
            return row.fee;
        }
    }

    return 0;
}
function getIAAIFee(price) {

    if (price >= 15000) {
        return price * 0.06;
    }

    for (const row of copartFees) {
        if (price >= row.min && price <= row.max) {
            return row.fee;
        }
    }

    return 0;
}

function getBitFee(price) {


    for (const row of BitFee) {
        if (price >= row.min && price <= row.max) {
            return row.fee;
        }
    }
    return 0;
}

function calculateExcise(year, engineVolume) {

    // поточний рік
    const currentYear = new Date().getFullYear() - 1;

    // кількість повних років
    let age = currentYear - year;

    if (age < 1) {
        age = 1;
    }
    // переводимо 1998 -> 1.998
    const volume = engineVolume / 1000;

    // коефіцієнт
    const coefficient = engineVolume <= 3000 ? 50 : 100;
    // формула
    const excise = volume * coefficient * age * 1.09;

    return excise;
}

// ====== CALC ======
function calculate() {

    if (!isReady()) {
        resultBox.innerHTML = "";
        return;
    }
    let broker = 0;
    function copyCalculation() {
    navigator.clipboard.writeText(calculationText)
        .then(() => {
            const button = document.querySelector(".copy-btn");

            if (button) {
                button.textContent = "✅ Скопійовано!";

                setTimeout(() => {
                    button.textContent = "📋 Скопіювати прорахунок";
                }, 2000);
            }
        })
        .catch(error => {
            console.error("Помилка копіювання:", error);
            alert("Не вдалося скопіювати прорахунок");
        });
}
    if (document.getElementById("benz").checked) {
        broker = 150;
    }

    if (document.getElementById("dyzel").checked) {
        broker = 150;
    }

    if (document.getElementById("gybryd").checked) {
        broker = 300;
    }

    if (document.getElementById("electro").checked) {
        broker = 300;
    }
    let hazardous = 0;

    if (
        document.getElementById("gybryd").checked ||
        document.getElementById("electro").checked
    ) {
        hazardous = 200;
    }
   
    let calculationText = "";
    const lot = val("pricelote");
    const expedition = 450;
    const company = val("poscomp");
    const repair = val("repair");
    const year = val("year");
    const engineVolume = val("valm2");
    const internetBitFee = getBitFee(lot);
    let  typeEngine = 0;

    if (document.getElementById("electro").checked) {
        typeEngine = 1;
    } else typeEngine = 0;

    const gateFee = 95;
    const titleShippingFees = 35;

    const auctionType = document.querySelector('input[name="auction"]:checked').id;

    const auctionFee =
        auctionType === "copart"
            ? getCopartFee(lot) + internetBitFee + gateFee + titleShippingFees
            : getIAAIFee(lot) + internetBitFee + gateFee + titleShippingFees;

    const locationId = document.getElementById("exampleFormControlSelect1").value;
    const selectedLocation = auctionType === "copart"
        ? copartLocations.find(location => location.id === locationId)
        : iaaiLocations.find(location => location.id === locationId);

//const deliveryUSA =(locations[auctionType] || []).find(location => location.id === locationId)?.fee || 0;
    const deliveryUSA = selectedLocation ? selectedLocation.fee : 0;
    const kuzov = document.querySelector('input[name="kuzov"]:checked').id;

    const sea = kuzov === "leghko"
        ? selectedLocation.feeLight
        : kuzov === "parketnyk"
            ? selectedLocation.feePark
            : kuzov === "overroud"
                ? selectedLocation.feeCross
                : kuzov === "moto"
                    ? selectedLocation.feeMoto
                    : 0;
    const insurance = lot <= 10000
        ? 100
        : lot * 0.01;
    const portDelivery = 850;
    const excise = calculateExcise(year, engineVolume);
    const mytnaSquareCostForAuto = lot + auctionFee + 1600;
    const myto = mytnaSquareCostForAuto * 0.1;
    const pdv = (mytnaSquareCostForAuto + excise + myto)*0.2
    const priceRozmyntinyaFuel = excise + myto + pdv;
    const priceRozmyntinyaElectro = ((lot + auctionFee) + 1600 + engineVolume ) * 0.2;
    const priceRozmyntinya = typeEngine != 0
        ? priceRozmyntinyaElectro
        : priceRozmyntinyaFuel;
    
    let podatokPensiaDaniila;
    const registration = 50;

        if (typeEngine > 0) {
            podatokPensiaDaniila = 0;
        } else {
            podatokPensiaDaniila = mytnaSquareCostForAuto * 0.03;
        }
    const certificate = 130;
    const costForExchange = (lot + auctionFee + deliveryUSA + sea + hazardous + insurance) * 0.031 + 100;
    const total =
        lot +
        auctionFee +
        deliveryUSA +
        sea +
        costForExchange +
        insurance +
        company +
        expedition +
        excise +
        myto +
        pdv +
        broker +
        portDelivery +
        certificate +
        registration +
        repair;
        
        resultBox.innerHTML = `
    <h3>Прорахунок:</h3>

    <div class="result-row"><span>Разом</span><span>$${total.toFixed(0)}</span></div>

    <div class="result-row"><span>Вартість лоту</span><span>$${lot}</span></div>
    <div class="result-row"><span>Аукц.збір</span><span>$${auctionFee}</span></div>
    <div class="result-row"><span>Вартість доставки (США)</span><span>$${deliveryUSA}</span></div>
    <div class="result-row"><span>Море (Texas)</span><span>$${sea}</span></div>
    <div class="result-row"><span>Комісія за переказ</span><span>$${costForExchange}</span></div>
    <div class="result-row"><span>Страховка</span><span>$${insurance.toFixed(0)}</span></div>
    <div class="result-row"><span>Послуги компанії</span><span>$${company}</span></div>

    ${hazardous > 0 
        ? `<div class="result-row"><span>Hazardous (Небезпечний вантаж)</span><span>$${hazardous}</span></div>` 
        : ""
    }

    <div class="result-row"><span>Експедиція</span><span>$${expedition}</span></div>
    <div class="result-row"><span>Доставка від порту до України</span><span>$850</span></div>
    <div class="result-row"><span>Брокер</span><span>$${broker}</span></div>
    <div class="result-row"><span>Загальна вартість розмитнення</span><span>$${priceRozmyntinya}</span></div>
    <div class="result-row"><span>Сертифікат</span><span>$130</span></div>
    <div class="result-row"><span>Постановка на обл.</span><span>$${registration}</span></div>

    ${typeEngine > 0 
        ? "" 
        : `<div class="result-row">
            <span>Пенсійний фонд</span>
            <span>$${podatokPensiaDaniila.toFixed(0)}</span>
        </div>`
    }

    <div class="result-row result-total">
        <span>Разом</span>
        <span>$${total.toFixed(0)}</span>
    </div>

    <button type="button" class="copy-btn" onclick="copyCalculation()">
        📋 Скопіювати прорахунок
    </button>
`;
   /* resultBox.innerHTML = `
        <h3>Прорахунок:</h3>

        <div class="result-row"><span>Разом</span><span>$${total.toFixed(0)}</span></div>

        <div class="result-row"><span>Вартість лоту</span><span>$${lot}</span></div>
        <div class="result-row"><span>Аукц.збір</span><span>$${auctionFee}</span></div>
        <div class="result-row"><span>Вартість доставки (США)</span><span>$${deliveryUSA}</span></div>
        <div class="result-row"><span>Море (Texas)</span><span>$${sea}</span></div>
        <div class="result-row"><span>Комісія за переказ</span><span>$${costForExchange}</span></div>
        <div class="result-row"><span>Страховка</span><span>$${insurance.toFixed(0)}</span></div>
        <div class="result-row"><span>Послуги компанії</span><span>$${company}</span></div>
        ${hazardous > 0 ? `<div class="result-row"><span>Hazardous (Небезпечний вантаж)</span><span>$${hazardous}</span></div>` : ""}
        <div class="result-row"><span>Експедиція</span><span>$${expedition}</span></div>
        <div class="result-row"><span>Доставка від порту до України</span><span>$850</span></div>
        <div class="result-row"><span>Брокер</span><span>$${broker}</span></div>
        <div class="result-row"><span>Загальна вартість розмитнення</span><span>$${priceRozmyntinya}</span></div>
        <div class="result-row"><span>Сертифікат</span><span>$130</span></div>
        <div class="result-row"><span>Постановка на обл.</span><span>$${registration}</span></div>
        ${typeEngine > 0 ? "" : `<div class="result-row"><span>Пенсійний фонд</span><span>$${podatokPensiaDaniila.toFixed(0)}</span></div>`}

        <div class="result-row result-total">
            <span>Разом</span><span>$${total.toFixed(0)}</span>
        </div>
    `;*/
    resultBox.innerHTML = `
    <h3>Прорахунок:</h3>

    <div class="result-row"><span>Разом</span><span>$${total.toFixed(0)}</span></div>

    <div class="result-row"><span>Вартість лоту</span><span>$${lot}</span></div>
    <div class="result-row"><span>Аукц.збір</span><span>$${auctionFee}</span></div>
    <div class="result-row"><span>Вартість доставки (США)</span><span>$${deliveryUSA}</span></div>
    <div class="result-row"><span>Море (Texas)</span><span>$${sea}</span></div>
    <div class="result-row"><span>Комісія за переказ</span><span>$${costForExchange}</span></div>
    <div class="result-row"><span>Страховка</span><span>$${insurance.toFixed(0)}</span></div>
    <div class="result-row"><span>Послуги компанії</span><span>$${company}</span></div>

    ${hazardous > 0 
        ? `<div class="result-row"><span>Hazardous (Небезпечний вантаж)</span><span>$${hazardous}</span></div>` 
        : ""
    }

    <div class="result-row"><span>Експедиція</span><span>$${expedition}</span></div>
    <div class="result-row"><span>Доставка від порту до України</span><span>$850</span></div>
    <div class="result-row"><span>Брокер</span><span>$${broker}</span></div>
    <div class="result-row"><span>Загальна вартість розмитнення</span><span>$${priceRozmyntinya}</span></div>
    <div class="result-row"><span>Сертифікат</span><span>$130</span></div>
    <div class="result-row"><span>Постановка на обл.</span><span>$${registration}</span></div>

    ${typeEngine > 0 
        ? "" 
        : `<div class="result-row">
            <span>Пенсійний фонд</span>
            <span>$${podatokPensiaDaniila.toFixed(0)}</span>
        </div>`
    }

    <div class="result-row result-total">
        <span>Разом</span>
        <span>$${total.toFixed(0)}</span>
    </div>

    <button id="copyCalculation" class="copy-btn">
        📋 Скопіювати прорахунок
    </button>
`;
}
calculationText = `
Прорахунок:

Разом: $${total.toFixed(0)}
Вартість лоту: $${lot}
Аукц.збір: $${auctionFee}
Вартість доставки (США): $${deliveryUSA}
Море (Texas): $${sea}
Комісія за переказ: $${costForExchange}
Страховка: $${insurance.toFixed(0)}
Послуги компанії: $${company}
${hazardous > 0 ? `Hazardous (Небезпечний вантаж): $${hazardous}\n` : ""}Експедиція: $${expedition}
Доставка від порту до України: $850
Брокер: $${broker}
Загальна вартість розмитнення: $${priceRozmyntinya}
Сертифікат: $130
Постановка на обл.: $${registration}
${typeEngine > 0 ? "" : `Пенсійний фонд: $${podatokPensiaDaniila.toFixed(0)}\n`}
Разом: $${total.toFixed(0)}
`.trim();

// ====== FIRST RUN ======
calculate();
