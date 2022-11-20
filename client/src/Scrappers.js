const puppeteer = require('puppeteer');
/******************************************************************************************************************/
var GET_11 = async function (page,st11,st12,st3){
    var isimler_SOL = []
    var isimler_SAG = []
    for (var i = 1; i < 13; i++) {
        try {
            var st2 = i;
            var [el] = await page.$x(st11 + st2 + st3);
            if (el != null)
            {
                var txt = await el.getProperty('textContent');
                var rawTxt = await txt.jsonValue();
                isimler_SOL.push(rawTxt);
            }
            if (el != null)
            {
                var [el] = await page.$x(st12 + st2 + st3);
                var txt = await el.getProperty('textContent');
                var rawTxt = await txt.jsonValue();
                isimler_SAG.push(rawTxt);
            }

        } catch (err) { console.error(err.message);}
    }
    var LISTE = []; 
    LISTE.push(isimler_SOL);
    LISTE.push(isimler_SAG);
    return LISTE;
}
/******************************************************************************************************************/
var GET_YEDEK = async function (page, st11, st12, st3,st4) {
    var isimler_SOL = []
    var isimler_SAG = []

    for (var i = 1; i < 11; i++) {
        try {
            var st2 = i;
            var [el1] = await page.$x(st11 + st2 + st3);
            if (el1 != null) {
                var txt = await el1.getProperty('textContent');
                var rawTxt = await txt.jsonValue();


                var [el2] = await page.$x(st11 + st2 + st4);
                if (el2 != null) { rawTxt = rawTxt + " <-> "; }
                isimler_SOL.push(rawTxt);
            }

            var [el1] = await page.$x(st12 + st2 + st3);
            if (el1 != null) {
                var txt = await el1.getProperty('textContent');
                var rawTxt = await txt.jsonValue();


                var [el2] = await page.$x(st11 + st2 + st4);
                if (el2 != null) { rawTxt = rawTxt + " <-> "; }
                isimler_SAG.push(rawTxt);
            }

        } catch (err) { /*console.error(err.message);*/ }
    }
    var LISTE = [];
    LISTE.push(isimler_SOL);
    LISTE.push(isimler_SAG);
    return LISTE;
}
/******************************************************************************************************************/
var GET_TRAINER = async function (page, st11, st12, st3) {
    var isimler = []


    var [el] = await page.$x(st11 + "tbody/tr[11]" + st3);
    var txt = await el.getProperty('textContent');
    var rawTxt = await txt.jsonValue();
    isimler.push(rawTxt);

    var [el] = await page.$x(st12 + "tbody/tr[11]" + st3);
    var txt = await el.getProperty('textContent');
    var rawTxt = await txt.jsonValue();
    isimler.push(rawTxt);
   
    return isimler;
}
/******************************************************************************************************************/
var start = async function (url) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto(url)
    
    var st11 = new String('//*[@id="main"]/main/div[6]/div/div/div[1]/div[3]/div[2]/div[');
    var st12 = new String('//*[@id="main"]/main/div[6]/div/div/div[2]/div[3]/div[2]/div[');
    var st3 = new String(']/div[2]/span/a');

    var XX = await GET_11(page, st11, st12, st3);

    console.log("\nOyuncular sol: ");
    for (var i = 0; i < XX[0].length; i++) {console.log("\t"+XX[0][i]);}
    console.log("\nOyuncular sag: ");
    for (var i = 0; i < XX[1].length; i++) { console.log("\t" + XX[1][i]); }
    console.log("-------------------------------------------------------- ");
    /*******************************************************************************************/
    var st11 = "//*[@id='main']/main / div[6] / div / div / div[1] / div[4] / table / tbody / tr["
    var st12 = "//*[@id='main']/main / div[6] / div / div / div[2] / div[4] / table / tbody / tr["
    var st3 = "]/td[2]/a";
    var st4 = "]/td[2]/span";

    var XX = await GET_YEDEK(page, st11, st12, st3, st4);

    console.log("\nYEDEKLER sol: ");
    for (var i = 0; i < XX[0].length; i++) { console.log("\t" + XX[0][i]); }
    console.log("\nYEDEKLER sag: ");
    for (var i = 0; i < XX[1].length; i++) { console.log("\t" + XX[1][i]); }
    console.log("-------------------------------------------------------- ");
    /*******************************************************************************************/
    var st11 = "//*[@id='main']/main/div[6]/div/div/div[1]/div[4]/table/"; 
    var st12 = "//*[@id='main']/main/div[6]/div/div/div[2]/div[4]/table/"; 
    var st3 = "/td[2]/a";

    var XX = await GET_TRAINER(page, st11, st12, st3);

    console.log("\nTEKNIK DIREKTOR sol: \t" + XX[0]);
    console.log("\nTEKNIK DIREKTOR sag: \t" + XX[1]); 
    console.log("-------------------------------------------------------- ");
    /*******************************************************************************************/
    browser.close();
};
/******************************************************************************************************************/
(
    async () => {
        await start("https://www.transfermarkt.com/istanbulspor_trabzonspor/index/spielbericht/3854849");
        console.log("_________________________________________________");
        await start("https://www.transfermarkt.com/sivasspor_gaziantep-fk/index/spielbericht/3854846");


        console.log("_________________________________________________");
        await start("https://www.transfermarkt.com/spielbericht/index/spielbericht/3860336");
    }
)();
