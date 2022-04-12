// variables
let inv = 0;
let maxInv = 50;
let wallet = 7.5;
let value = 0;
let moneyPerClick = 0.1;
let packSel = "swsh1";
let rarity;
let itemCounter = 0;
let inventory = {};
let inventoryUpgPrice = 15;
let inventoryUpgrades = 0;
let clickUpgPrice = 25;
let clickUpgrades = 0;

//settings
let popup = true;
let clickSell = true;

// statistics
let totalMoneyAccepted = 0;
let totalMoneySpent = 0;
let totalCardsSold = 0;
let totalPacksOpened = 0;
let totalEnergyPulled = 0;
let totalCommonsPulled = 0;
let totalUncommonsPulled = 0;
let totalReversePulled = 0;
let totalReverseSecretsPulled = 0;
let totalRaresPulled = 0;
let totalHoloRaresPulled = 0;
let totalFullArtsPulled = 0;
let totalUltraRaresPulled = 0;
let totalSecretRaresPulled = 0;

// dont save
let lastRand;
let random;
let selectedCards;
let cntrlIsPressed = false;
let sortDirection = 'forw';

// collection
const collection = {
    swshPromo: {

    },
    swsh1: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh2: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh3: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh4: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh5: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    mcd1: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh6: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        subsetCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        subsetCollected: {}
    },
    swsh7: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh8: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh9: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    cele1: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh10: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh11: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        subsetCollected: {}
    }
}

loadGameState()

updateInv();
updateWallet();
updateValue();
updateStats();
updateShopItems();
updateProductShop()

document.getElementById('popupCheckbox').checked = !popup;
document.getElementById('clickCheckbox').checked = clickSell;

// tabs
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContent.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

// clear state button
const clearState = document.querySelector('.clearGameState');
let clearSave = 0;
clearState.addEventListener('click', () => {
    clearState.innerHTML = "Are you sure?";
    clearSave ++;
    if (clearSave == 2) {
        clearGameState();
    }
});

// save game button
const gameSave = document.querySelector('.saveGame');
gameSave.addEventListener('click', () => {
    gameSave.innerHTML = "Saved!";
    saveGameState();
});

// settings dropdown
const settingBtn = document.querySelector('.settings');
const settingMenu = document.querySelector('.settingsMenu');
let menuOpen = false;
settingBtn.addEventListener('click', () => {
    if (!menuOpen) {
        settingMenu.classList.add('open');
        menuOpen = true;
    } else {
        settingBtn.classList.remove('open');
        settingMenu.classList.remove('open');
        menuOpen = false;
        clearState.innerHTML = "Clear Game Save";
        gameSave.innerHTML = "Save";
        clearSave = 0;
    }
});

// settings
$('#popupCheckbox').change(function() {
    if (this.checked) {
        popup = false;
    } else {
        popup = true;
    }
    saveGameState()
});

$('#clickCheckbox').change(function() {
    if (this.checked) {
        clickSell = true;
    } else {
        clickSell = false;
    }
    resetInventory()
    saveGameState()
});

$(document).keydown(function(event){
    if(event.which=="17")
        cntrlIsPressed = true;
});

$(document).keyup(function(){
    cntrlIsPressed = false;
});

// display pack shop
for (let i in Object.keys(packs)){
    if (i == 0) {
    }else {
        updatePack(Object.keys(packs)[i]);
    }
    i++;
}

// default pack
drawPack();
document.getElementById("pack").setAttribute("onclick", "openPack('"+packSel+"')");
document.getElementById(packSel + "Opt").classList.add("active");


// functions
function openPack(pack, free) {
    let sum = 0;
    for (let i in packs[pack].contents) {
        sum += packs[pack].contents[i];
        i++;
    }
    inv += sum;
    if (inv > maxInv) {
        inv -= sum;
        return false;
    }
    inv -= sum;

    if (!free) {
        let spent = packs[pack].price;
        wallet -= spent;
        if (wallet < 0) {
            wallet += spent;
            return;
        }
        totalMoneySpent += spent;
    }

    totalPacksOpened ++;

    if (popup) {
        // console.log($('#unboxContainer').modal({show:true}));
        console.log("attempted modal")
        $('#unboxContainer').toggle()
    }

    let i = 0;
    while (i < packs[pack].contents[0]) {
        openEnergy();
        totalEnergyPulled ++;
        i++;
    }
    i = 0;
    randCard("common", packs[pack].contents[1])
    while (i < packs[pack].contents[1]) {
        openCard("common", selectedCards[i], pack);
        totalCommonsPulled ++;
        i++;
    }
    i = 0;
    randCard("uncommon", packs[pack].contents[1])
    while (i < packs[pack].contents[2]) {
        openCard("uncommon", selectedCards[i], pack);
        totalUncommonsPulled ++;
        i++;
    }
    i = 0;
    while (i < packs[pack].contents[3]) {
        randReverse();
        i++;
    }
    i = 0;
    while (i < packs[pack].contents[4]) {
        randRare();
        i++;
    }
    updateWallet();
    updateStats();
    saveGameState();
    return true;
}

function openEnergy() {
    random = Math.floor(Math.random() * ObjectLength(cards.energy));

    let card = cards.energy[Object.keys(cards.energy)[random]];
    let itemId = "item"+itemCounter;

    inventory[itemId] = {
        id: itemId,
        set: "energy",
        name: card.name,
        num: card.num,
        price: card.price,
        rarity: -1,
        type: card.type,
        holo: 0,
        img: card.img,
        locked: false,
        jumbo: false
    }

    const selectedCard = itemDisp(inventory[itemId].name, inventory[itemId].price, inventory[itemId].img);
    drawItem(selectedCard, raritySwitch(inventory[itemId].rarity), itemId, inventory[itemId].holo);

    itemCounter ++;
    value += inventory[itemId].price;
    updateInv();
    updateValue();
}

function openCard(rarity, cardNum, pack, reverse, isPack, jumbo) {
    if (jumbo == null) jumbo = false;
    if (!isPack){
        const cardSel = "card" + cardNum;
        // console.log(cardTot);
        let card = cards[pack][rarity][cardSel];
        let itemId = "item" + itemCounter;

        if (reverse) {
            inventory[itemId] = {
                id: itemId,
                set: pack,
                name: card.name,
                num: card.num,
                price: card.revPrice,
                rarity: card.rarity,
                type: card.type,
                holo: 2,
                img: card.img,
                locked: false,
                jumbo: jumbo
            }
            let temp = inventory[itemId].name;
            const array = temp.split("|");
            temp = array[0] + holoCheck(inventory[itemId].holo) + " |" + array[1];
            inventory[itemId].name = temp;
        }else {
            inventory[itemId] = {
                id: itemId,
                set: pack,
                name: card.name,
                num: card.num,
                price: card.price,
                rarity: card.rarity,
                type: card.type,
                holo: card.holo,
                img: card.img,
                locked: false,
                jumbo: jumbo
            }
        }
        const selectedCard = itemDisp(inventory[itemId].name, inventory[itemId].price, inventory[itemId].img);
        drawItem(selectedCard, raritySwitch(inventory[itemId].rarity), itemId, inventory[itemId].holo);
        value += inventory[itemId].price;
    }else {
        let itemId = "item" + itemCounter;
        inventory[itemId] = {
            id: itemId,
            set: pack,
            name: packs[pack].name,
            num: -1,
            price: 0,
            rarity: -2,
            type: "pack",
            holo: 0,
            img: packs[pack].img,
            locked: false,
            jumbo: jumbo
        }
        drawItem("", "", itemId, "", isPack, pack)
    }

    // console.log(inventory);
    itemCounter ++;
    updateInv();
    updateValue();
}

function randCard(rarity, cardPulls) {
    const min = 1;
    const max = ObjectLength(cards[packSel][rarity]);
    selectedCards = [];
    while (selectedCards.length < cardPulls) {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        // console.log(selectedCards.includes(random))
            while (selectedCards.includes(random)) {
                random = Math.floor(Math.random() * (max - min + 1)) + min;
            }
        selectedCards.push(random);
    }
}

function selectReverseRarity() {
    const randNum = Math.random();
    if (randNum >= 0.5) {
        // console.log("common")
        return "common";
    }else if (randNum >= 0.2) {
        // console.log("uncommon")
        return "uncommon";
    }else if (randNum >= 0.05) {
        // console.log("rare")
        return "rare";
    }else {
        // console.log("holoRare")
        return "holoRare";
    }
}

function accept () {
    wallet += moneyPerClick;
    totalMoneyAccepted += moneyPerClick;
    updateWallet();
    updateStats();
}

function randReverse() {
    const randNum = Math.random();
    if (ObjectLength(cards[packSel].reverseSecret) === 0){
        const tempRarity = selectReverseRarity();
        randCard(tempRarity, 1)
        openCard(tempRarity, selectedCards[0], packSel, true);
        totalReversePulled ++;
    }else {
        if (randNum >= 0.3){
            // normal reverse
            const tempRarity = selectReverseRarity();
            randCard(tempRarity, 1)
            openCard(tempRarity, selectedCards[0], packSel, true);
            totalReversePulled ++;
        }else{
            // secret reverse
            randCard("reverseSecret", 1)
            openCard("reverseSecret", selectedCards[0], packSel);
            totalReverseSecretsPulled ++;
        }
    }
}

function randRare() {
    let randNum = Math.random();
    if (randNum >= 0.6){
        // normal rare
        randCard("rare", 1)
        openCard("rare", selectedCards[0], packSel);
        totalRaresPulled ++;
    }else if (randNum >= 0.2){
        // holo rare
        randCard("holoRare", 1)
        openCard("holoRare", selectedCards[0], packSel);
        totalHoloRaresPulled ++;
    }else if (randNum >= 0.01){
        // ultra rare
        randNum = Math.random();
        if (randNum >= 0.3) {
            randCard("ultraRare", 1)
            openCard("ultraRare", selectedCards[0], packSel);
            totalUltraRaresPulled ++;
        } else {
            // full art
            randCard("fullArt", 1)
            openCard("fullArt", selectedCards[0], packSel);
            totalFullArtsPulled ++;
        }
    }else{
        // secret rare
        randCard("secretRare", 1)
        openCard("secretRare", selectedCards[0], packSel);
        totalSecretRaresPulled ++;
    }
}

function drawPack() {
    const min = 1;
    const max = packs[packSel].imgNum;
    if (max != 1) {
        if (lastRand === undefined) {
            random = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        else {
            random = Math.floor(Math.random() * (max - min    )) + min;
            if (random >= lastRand) random += 1;
        }
        lastRand = random;
        random = random+".png";
    }else {
        random = 1+".png";
    }

    document.getElementById("packDisplayImage").src = packs[packSel].img+random;
    document.getElementById("packName").innerHTML = packs[packSel].name;
    document.getElementById("packPrice").innerHTML = "Price: $"+packs[packSel].price.toFixed(2);
}

function itemDisp(name, price, img) {
    const temp = [];
    temp.push(name, price, img);
    return temp;
}

function drawItem(array, rarity, itemId, holo, isPack, pack) {
    // console.log(array)
    if (isPack) {
        const min = 1;
        const max = packs[pack].imgNum;
        if (max != 1) {
            if (lastRand === undefined) {
                random = Math.floor(Math.random() * (max - min + 1)) + min;
            }
            else {
                random = Math.floor(Math.random() * (max - min    )) + min;
                if (random >= lastRand) random += 1;
            }
            lastRand = random;
            random = random+".png";
        }else {
            random = "1"+".png";
        }
        const packImg = packs[pack].img+random;

        $(".inventoryItems").append('<div class ="inventoryItem pack" id="'+ itemId +'" title="' + packs[pack].name + '"><img src="' + packImg + '"> </div>')
        if (clickSell) document.getElementById(itemId).setAttribute("onclick", "clickPack('"+itemId+"','"+pack+"')");
        inv += 1;
    }else {
        const name = array[0];
        const price = "$" + array[1].toFixed(2);
        const img = array[2];
        $(".inventoryItems").append('<div class="inventoryItem ' + rarity + revCheck(holo) +'" id="'+ itemId +'" title="' + name + '"><div class="cardPrice">' + price + '</div> <img src=' + img + '> </div>');
        if (clickSell) document.getElementById(itemId).setAttribute("onclick", "clickItem('"+itemId+"')");
        if (inventory[itemId].jumbo) {
            inv += 4
        }else {
            inv +=1;
        }
    }
    if (inventory[itemId].locked) document.getElementById(itemId).classList.add('locked');
    if (inventory[itemId].jumbo) document.getElementById(itemId).classList.add('jumbo');
}

function clickPack(itemId, pack) {
    const div = document.getElementById(itemId);
    if (cntrlIsPressed) {
        if (div.classList.contains('locked')) {
            div.classList.remove('locked');
            inventory[itemId].locked = false;
        } else {
            div.classList.add('locked');
            inventory[itemId].locked = true;
        }
    }else {
        const div = document.getElementById(itemId);
        if (div.classList.contains('locked')) {
            return
        }else {
            if (openPack(pack, true)) {
                div.parentNode.removeChild(div);
                inv -= 1;
                delete inventory[itemId];
            }

            updateInv()
            updateValue();
            updateStats();
            saveGameState();
        }
    }
}

function sortToggle(method) {
    if (sortDirection == 'forw') {
        sortDirection = 'back';
    }else {
        sortDirection = 'forw';
    }
    sortInventory(method)
}

function sortInventory(method) {
    let sortArray = [];
    for (let i in inventory) {
        sortArray.push([i, inventory[i][method], inventory[i]])
    }
    sortArray.sort(function(a,b){
        if (method == 'name' || method == 'type' || method == 'set') {
            if (sortDirection === 'back') {
                if(a[1] > b[1]) { return -1; }
                if(a[1] < b[1]) { return 1; }
                return 0;
            }else {
                if(a[1] < b[1]) { return -1; }
                if(a[1] > b[1]) { return 1; }
                return 0;
            }
        }else {
            if (sortDirection === 'back') {
                return b[1] - a[1];
            }else {
                return a[1] - b[1];
            }
        }
    })
    inv = 0;
    inventoryClear()
    for (let i in sortArray) {
        inventory[sortArray[i][0]] = {
            id: sortArray[i][2].id,
            set: sortArray[i][2].set,
            name: sortArray[i][2].name,
            num: sortArray[i][2].num,
            price: sortArray[i][2].price,
            rarity: sortArray[i][2].rarity,
            type: sortArray[i][2].type,
            holo: sortArray[i][2].holo,
            img: sortArray[i][2].img,
            locked: sortArray[i][2].locked,
            jumbo: sortArray[i][2].jumbo
        }
    }
    drawInventory()
    updateInv()
    saveGameState()
}

function drawInventory() {
    for (let x in inventory) {
        if (inventory[x].type == "pack") {
            drawItem("", "", inventory[x].id, "", true, inventory[x].set)
        }else {
            const selectedCard = itemDisp(inventory[x].name, inventory[x].price, inventory[x].img);
            // console.log(selectedCard)
            drawItem(selectedCard, raritySwitch(inventory[x].rarity), inventory[x].id, inventory[x].holo);
        }
    }
}

function resetInventory() {
    $('.inventoryItems').html("");
    inv = 0;
    drawInventory()
}

function raritySwitch(rarity){
    switch(rarity){
        case -1:
            return "energy";
        case 0:
            return "promo";
        case 1:
            return "common";
        case 2:
            return "uncommon";
        case 3:
            return "rare";
        case 4:
            return "holoRare";
        case 5:
            return "ultraRare";
        case 6:
            return "reverseSecret";
        case 7:
            return "secretRare";
    }
}

function clickItem(itemId) {
    const div = document.getElementById(itemId);
    if (cntrlIsPressed) {
        if (div.classList.contains('locked')) {
            div.classList.remove('locked');
            inventory[itemId].locked = false;
            saveGameState()
        } else {
            div.classList.add('locked');
            inventory[itemId].locked = true;
            saveGameState()
        }
    }else {
        sellItem(itemId)
    }
}

function sellItem(itemId) {
    const div = document.getElementById(itemId);
    if (div.classList.contains('locked')) {
        return
    }else {
        div.parentNode.removeChild(div);
        if (div.classList.contains('jumbo')) {
            inv -= 4;
        }else {
            inv --;
        }
        wallet += inventory[itemId].price;
        value -= inventory[itemId].price;
        delete inventory[itemId];
        totalCardsSold ++;

        updateInv()
        updateWallet();
        updateValue();
        updateStats();
    }
}

function selectPack(selection) {
    packSel = selection;
    let packDel = [];
    drawPack();
    for (let x in Object.keys(packs)) {
        packDel.push(Object.keys(packs)[x]);
        const element = document.getElementById(packDel[x] + "Opt");
        if (element.classList.contains("active")) {
            element.classList.remove("active");
        }
    }
    document.getElementById("pack").setAttribute("onclick", "openPack("+packSel+")");
    document.getElementById(packSel + "Opt").classList.add("active");

    saveGameState();
}

function holoCheck(check) {
    if (check === 2) {
        return "(Reverse)";
    }else if (check === 3) {
        return " (Holo)";
    }else if (check === 4) {
        return " (Secret)";
    }else if (check === 5) {
        return " (Full Art)"
    }else {
        return "";
    }
}

function revCheck(check) {
    if (check === 1) {
        return " ultraHolo";
    }else if (check === 2) {
        return " reverseHolo";
    }else if (check === 3) {
        return " holo";
    }else if (check === 4) {
        return " secretHolo";
    }else if (check===5) {
        return " ultraHolo";
    }else {
        return "";
    }
}

function upgradeInventory() {
    wallet -= inventoryUpgPrice;
    if (wallet >= 0) {
        totalMoneySpent += inventoryUpgPrice;
        maxInv ++;
        inventoryUpgrades ++;
        inventoryUpgPrice *= 1.05;
    }else {
        wallet += inventoryUpgPrice;
    }
    updateInv();
    updateWallet();
    updateShopItems();
    updateStats();
    saveGameState();
}

function upgradeClick() {
    wallet -= clickUpgPrice;
    if (wallet >= 0) {
        totalMoneySpent += clickUpgPrice;
        moneyPerClick += 0.01;
        clickUpgrades ++;
        clickUpgPrice *= 1.05;
    }else {
        wallet += clickUpgPrice;
    }
    updateInv();
    updateWallet();
    updateShopItems();
    updateStats();
    saveGameState();
}

function purchaseProduct(prod) {
    prodIndex = product[prod]
    inv += prodIndex.totalContents;
    if (inv > maxInv) {
        inv -= prodIndex.totalContents;
        return;
    }
    inv -= prodIndex.totalContents;

    wallet -= prodIndex.price;
    if (wallet < 0) {
        wallet += prodIndex.price;
        return;
    }
    totalMoneySpent += prodIndex.price;
    for (let i in prodIndex.contents) {
        prodIndex.contents[i]();
    }
    updateWallet()
    updateStats()
    saveGameState()
}

function ObjectLength(object) {
    let length = 0;
    for(const key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
}

function randSel2(item1, item2) {
    const randNum = Math.random()
    if (randNum >= 0.5) {
        eval(item1)
    }else {
        eval(item2)
    }
}

function updateInv() {
    document.getElementById("inv").innerHTML = "<span class=\"infoName\">Inventory Space: </span>"+inv+"/"+maxInv;
}

function updateWallet() {
    document.getElementById("wallet").innerHTML = "<span class=\"infoName\">Wallet:</span> $"+wallet.toFixed(2);
}

function updateValue() {
    value = Math.abs(value);
    document.getElementById("value").innerHTML = "Value: $"+value.toFixed(2);
}

function updateStats() {
    document.getElementById("totalMoneyAccepted").innerHTML = "$"+totalMoneyAccepted.toFixed(2);
    document.getElementById("totalMoneySpent").innerHTML = "$"+totalMoneySpent.toFixed(2);
    document.getElementById("totalCardsSold").innerHTML = totalCardsSold;
    document.getElementById("totalPacksOpened").innerHTML = totalPacksOpened;
    document.getElementById("totalEnergyPulled").innerHTML = totalEnergyPulled;
    document.getElementById("totalCommonsPulled").innerHTML = totalCommonsPulled;
    document.getElementById("totalUncommonsPulled").innerHTML = totalUncommonsPulled;
    document.getElementById("totalRaresPulled").innerHTML = totalRaresPulled;
    document.getElementById("totalReversePulled").innerHTML = totalReversePulled;
    document.getElementById("totalHoloRaresPulled").innerHTML = totalHoloRaresPulled;
    document.getElementById("totalUltraRaresPulled").innerHTML = totalUltraRaresPulled;
    document.getElementById("totalFullArtsPulled").innerHTML = totalFullArtsPulled;
    document.getElementById("totalReverseSecretsPulled").innerHTML = totalReverseSecretsPulled;
    document.getElementById("totalSecretRaresPulled").innerHTML = totalSecretRaresPulled;
}

function updatePack(packId) {
    document.getElementById(packId).innerHTML = "<div class=\"imageBorder\">\n" +
        "                                    <img src=\""+packs[packId].img+1+".png\" alt=\""+packs[packId].name+"\">\n" +
        "                                </div>\n" +
        "                                <div class=\"title\">"+packs[packId].name+"</div>\n" +
        "                                <div class=\"desc\">"+packs[packId].desc+"</div>\n" +
        "                                <div class=\"price\">Pack Price: $"+packs[packId].price.toFixed(2)+"</div>\n" +
        "                                <div class=\"amount\">Collected: "+collection[packId].collectedTotal+"/"+packs[packId].cards+"</div>";
}

function updateShopItems() {
    document.getElementById("shopInvUpgPrc").innerHTML = "Price: $"+inventoryUpgPrice.toFixed(2);
    document.getElementById("shopInvUpgAmt").innerHTML = "Amount: "+inventoryUpgrades;
    document.getElementById("shopClkUpgPrc").innerHTML = "Price: $"+clickUpgPrice.toFixed(2);
    document.getElementById("shopClkUpgAmt").innerHTML = "Amount: "+clickUpgrades;
}

function updateProductShop() {
    for (let i in Object.keys(product)){
        document.getElementById("product"+i+"Nme").innerHTML = product["prod"+i].name;
        document.getElementById("product"+i+"Dsc").innerHTML = product["prod"+i].desc;
        document.getElementById("product"+i+"Prc").innerHTML = "Price: $"+product["prod"+i].price.toFixed(2);
    }
}

function inventoryClear() {
    inventory = {};
    $('.inventoryItems').html("");
}

function saveGameState() {
    const string = {
        // "inv": inv,
        "maxInv": maxInv,
        "wallet": wallet,
        "value": value,
        "moneyPerClick": moneyPerClick,
        "packSel": packSel,
        "rarity": rarity,
        "itemCounter": itemCounter,
        "inventory": inventory,
        "inventoryUpgPrice": inventoryUpgPrice,
        "inventoryUpgrades": inventoryUpgrades,
        "clickUpgPrice": clickUpgPrice,
        "clickUpgrades": clickUpgrades,

        "popup": popup,
        "clickSell": clickSell,

        "totalMoneyAccepted": totalMoneyAccepted,
        "totalMoneySpent": totalMoneySpent,
        "totalCardsSold": totalCardsSold,
        "totalPacksOpened": totalPacksOpened,
        "totalEnergyPulled": totalEnergyPulled,
        "totalCommonsPulled": totalCommonsPulled,
        "totalUncommonsPulled": totalUncommonsPulled,
        "totalReversePulled": totalReversePulled,
        "totalReverseSecretsPulled": totalReverseSecretsPulled,
        "totalRaresPulled": totalRaresPulled,
        "totalHoloRaresPulled": totalHoloRaresPulled,
        "totalFullArtsPulled": totalFullArtsPulled,
        "totalUltraRaresPulled": totalUltraRaresPulled,
        "totalSecretRaresPulled": totalSecretRaresPulled
    };

    localStorage.setItem("savegame", JSON.stringify(string));
    console.log("Game Saved.");

    document.querySelector('.saveIndicator').classList.add('open');
    setTimeout(function (){
        document.querySelector('.saveIndicator').classList.remove('open');
    },3000);
}

function loadGameState() {
    if (localStorage.getItem("savegame") !== null) {
        inventoryClear();
        const saveGame = JSON.parse(localStorage.getItem("savegame"));
        //console.log(saveGame);

        // inv = saveGame["inv"];
        maxInv = saveGame["maxInv"];
        wallet = saveGame["wallet"];
        value = saveGame["value"];
        moneyPerClick = saveGame["moneyPerClick"];
        packSel = saveGame["packSel"];
        rarity = saveGame["rarity"];
        itemCounter = saveGame["itemCounter"];
        inventory = saveGame["inventory"];
        inventoryUpgPrice = saveGame["inventoryUpgPrice"];
        inventoryUpgrades = saveGame["inventoryUpgrades"];
        clickUpgPrice = saveGame["clickUpgPrice"];
        clickUpgrades = saveGame["clickUpgrades"];

        popup = saveGame["popup"];
        clickSell = saveGame["clickSell"];

        totalMoneyAccepted = saveGame["totalMoneyAccepted"];
        totalMoneySpent = saveGame["totalMoneySpent"];
        totalCardsSold = saveGame["totalCardsSold"];
        totalPacksOpened = saveGame["totalPacksOpened"];
        totalEnergyPulled = saveGame["totalEnergyPulled"];
        totalCommonsPulled = saveGame["totalCommonsPulled"];
        totalUncommonsPulled = saveGame["totalUncommonsPulled"];
        totalReversePulled = saveGame["totalReversePulled"];
        totalReverseSecretsPulled = saveGame["totalReverseSecretsPulled"];
        totalRaresPulled = saveGame["totalRaresPulled"];
        totalHoloRaresPulled = saveGame["totalHoloRaresPulled"];
        totalFullArtsPulled = saveGame["totalFullArtsPulled"];
        totalUltraRaresPulled = saveGame["totalUltraRaresPulled"];
        totalSecretRaresPulled = saveGame["totalSecretRaresPulled"];

        drawInventory();

        console.log("Game Save found. Successfully loaded.");
    } else {
        console.log("No save game detected.")
    }
}

function clearGameState() {
    localStorage.removeItem("savegame");
    console.log("Game save deleted!");
    location.reload();
}

setInterval(saveGameState, 30000);