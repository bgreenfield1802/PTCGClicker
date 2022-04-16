// variables
let inv = 0;
let maxInv = 50;
let maxDisCase = 4;
let wallet = 7.5;
let value = 0;
let moneyPerClick = 0.1;
let packSel = "swsh1";
let itemCounter = 0;
let inventory = {};
let inventoryUpgPrice = 15;
let inventoryUpgrades = 0;
let displayUpgPrice = 50;
let displayUpgrades = 0;
let clickUpgPrice = 25;
let clickUpgrades = 0;

//settings
let popup = true;
let clickSell = false;
let newCardSetting = true;

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
let rarity;
let lastRand;
let random;
let selectedCards;
let cntrlIsPressed = false;
let shiftIsPressed = false;
let sortDirection = 'forw';
let selectedCard;
let selectedPack;
let openSuccess;

// collection + displaycase
let displayCase = {}
let collection = {
    swshPromo: {
        collectedTotal: 0,
        collected: {},
        locked: true
    },
    swsh1: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        locked: true
    },
    swsh2: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        locked: true
    },
    swsh3: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        locked: true
    },
    futsalPromo: {
        collectedTotal: 0,
        collected: {},
        locked: true
    },
    swsh4: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        locked: true
    },
    swsh5: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        locked: true
    },
    mcd1: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        locked: true
    },
    swsh6: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        subsetCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        subsetCollected: {},
        locked: true
    },
    swsh7: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        locked: true
    },
    swsh8: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        locked: true
    },
    swsh9: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        locked: true
    },
    cele1: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        locked: true
    },
    swsh10: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        locked: true
    },
    swsh11: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        subsetCollected: {},
        locked: true
    }
}

loadGameState()

updateInv()
updateWallet()
updateValue()
updateStats()
updateShopItems()
updateProductShop()
updateCollectionMenu()
updateDisplayItems()

document.getElementById('popupCheckbox').checked = !popup;
document.getElementById('clickCheckbox').checked = clickSell;
document.getElementById('newCardCheckbox').checked = newCardSetting;

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
        if (tab.classList.contains('collection')) {
            document.getElementById('collectionTab').classList.add('active')
        } else {
            tab.classList.add('active')
        }
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

// export save button
const exportState = document.querySelector('.exportGameState');
exportState.addEventListener('click', () => {
    exportGameState();
});

// import save button
const importState = document.querySelector('.importGameState');
importState.addEventListener('click', () => {
    document.getElementById('saveGame')
});


// sell item button
const sellItemButton = document.querySelector('.sellItem');
sellItemButton.addEventListener('click', () => {
    if (!selectedCard.locked) {
        sellItem(selectedCard.id)
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
    }
});

// add item to collection button
const addItemButton = document.querySelector('.addItem');
addItemButton.addEventListener('click', () => {
    if (!selectedCard.locked) {
        if (collection.hasOwnProperty(selectedCard.set)){
            if (!collection[selectedCard.set].collected.hasOwnProperty(selectedCard.num)) {
                addToCollection(selectedCard.id)
                const modals = document.querySelectorAll('.modal.active')
                modals.forEach(modal => {
                    closeModal(modal)
                })
            }
        }
    }
});

// lock item button
const lockItemButton = document.querySelector('.lockItem');
lockItemButton.addEventListener('click', () => {
    lockItem(selectedCard.id)
    updateSelectedCard()
});

// lock pack button
const lockPackButton = document.querySelector('.lockPack');
lockPackButton.addEventListener('click', () => {
    lockItem(selectedPack.id)
    updateSelectedPack()
});

// open pack button
const openPackButton = document.querySelector('.openPack');
openPackButton.addEventListener('click', () => {
    if (!selectedPack.locked) {
        const div = document.getElementById(selectedPack.id);
        _clickPack(selectedPack.id, selectedPack.set, div)
        if (openSuccess) {
            openSuccess = false
            const modals = document.querySelectorAll('.modal.active')
            modals.forEach(modal => {
                closeModal(modal)
            })
        }
    }
});

// add display item button
const addDisplayButton = document.querySelector('.addDisplay');
addDisplayButton.addEventListener('click', () => {
    if (Object.keys(displayCase).length < maxDisCase) {
        if (!selectedCard.locked) {
            addToDisplay(selectedCard.id)
            const modals = document.querySelectorAll('.modal.active')
            modals.forEach(modal => {
                closeModal(modal)
            })
        }
    }else {
        updateSelectedCard()
    }
});

// remove display item button
const removeDisplayButton = document.querySelector('.removeDisplay');
removeDisplayButton.addEventListener('click', () => {
    removeDisplay(selectedCard.id)
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})


// settings dropdown
const settingBtn = document.querySelector('.settings');
const settingMenu = document.querySelector('.settingsMenu');
let menuOpen = false;
settingBtn.addEventListener('click', () => {
    if (!menuOpen) {
        settingMenu.classList.add('open');
        menuOpen = true;
        clearState.innerHTML = "Clear Game Save";
        gameSave.innerHTML = "Save";
        clearSave = 0;
    } else {
        settingBtn.classList.remove('open');
        settingMenu.classList.remove('open');
        menuOpen = false;
    }
});

// hamburger menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const tabCont = document.getElementsByClassName('tab-content')[0]
const tabContainer = document.getElementsByClassName('tabContainer')[0]
toggleButton.addEventListener('click', () => {
    tabCont.classList.toggle('active')
    tabContainer.classList.toggle('active')
})

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

$('#newCardCheckbox').change(function() {
    if (this.checked) {
        newCardSetting = true;
    } else {
        newCardSetting = false;
    }
    resetInventory()
    saveGameState()
});

// prevent scrolling
window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);
function preventMotion(event)
{
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}

// modal close
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        closeModal(button.closest('.modal'))
    })
})


$(document).keydown(function(event){
    if(event.which=="17")
        cntrlIsPressed = true;
});

$(document).keyup(function(){
    cntrlIsPressed = false;
});

$(document).keydown(function(event){
    if(event.which=="16")
        shiftIsPressed = true;
});

$(document).keyup(function(){
    shiftIsPressed = false;
});

// display pack shop
for (let i in Object.keys(packs)){
    if (i == 0 || i == 4) {
    }else {
        updatePack(Object.keys(packs)[i]);
    }
    i++;
}

// default pack
drawPack(packSel);
document.getElementById("pack").setAttribute("onclick", "openPack('"+packSel+"')");
document.getElementById(packSel + "Opt").classList.add("active");

// functions
function accept () {
    wallet += moneyPerClick;
    totalMoneyAccepted += moneyPerClick;
    updateWallet();
    updateStats();
}

function addToCollection(itemId) {
    const info = inventory[itemId];
    if (!info.locked) {
        if (!info.jumbo) {
            if (collection.hasOwnProperty(info.set)){
                if (!collection[info.set].collected.hasOwnProperty(info.num)){
                    collection[info.set].collected[info.num] = {
                        name: info.name,
                        holo: info.holo,
                        num: info.num,
                        img: info.img
                    }
                    collection[info.set].collectedTotal ++;
                    const div = document.getElementById(itemId);
                    if (inventory[itemId].set != 'swshPromo' && inventory[itemId].set != 'futsalPromo') {
                        updatePack(inventory[itemId].set)
                    }
                    div.parentNode.removeChild(div);
                    value -= inventory[itemId].price;
                    delete inventory[itemId];
                    resetInventory()
                    updateInv()
                    updateValue()
                    updateCollectionMenu()
                    saveGameState()
                }
            }
        }else {
            // jumbo collection
        }
    }
}

function addToDisplay(itemId) {
    displayCase[itemId] = inventory[itemId];
    const div = document.getElementById(itemId);
    div.parentNode.removeChild(div);
    value -= inventory[itemId].price;
    delete inventory[itemId];
    resetInventory()
    updateInv()
    updateValue()
    updateDisplayItems()
    saveGameState()
}

function clearGameState() {
    localStorage.removeItem("savegame");
    console.log("Game save deleted!");
    location.reload();
}

function clickDisplay(itemId) {
    if (cntrlIsPressed || shiftIsPressed) {
        removeDisplay(itemId)
    } else {
        openModal('displayModal')
        selectedCard = displayCase[itemId]
        updateSelectedCard()
    }
}

function clickItem(itemId) {
    const div = document.getElementById(itemId);
    if (cntrlIsPressed) {
        if (clickSell) {
            lockItem(itemId)
        }else {
            sellItem(itemId);
        }
    }else if (shiftIsPressed){
        addToCollection(itemId);
    }else {
        if (clickSell) {
            sellItem(itemId)
        }else {
            openModal('cardModal')
            selectedCard = inventory[itemId]
            updateSelectedCard()
        }
    }
}

function clickPack(itemId, pack) {
    const div = document.getElementById(itemId);
    if (cntrlIsPressed || shiftIsPressed) {
        if (!inventory[itemId].locked) {
            if (clickSell) {
                lockItem(itemId)
            }else {
                _clickPack(itemId, pack, div)
            }
        }
    }else {
        if (clickSell) {
            if (!inventory[itemId].locked) {
                _clickPack(itemId, pack, div)
            }
        }else {
            openModal('packModal')
            selectedPack = inventory[itemId]
            updateSelectedPack()
        }
    }
}

function _clickPack(itemId, pack, div) {
    if (openPack(pack, true)) {
        openSuccess = true
        div.parentNode.removeChild(div);
        inv -= 1;
        delete inventory[itemId];
    }

    updateInv()
    updateValue();
    updateStats();
    saveGameState();
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function drawInventory() {
    for (let x in inventory) {
        if (inventory[x].type == "pack") {
            drawItem("", "", inventory[x].id, "", true, inventory[x].set)
        }else {
            const selectedCard = itemDisp(inventory[x].name, inventory[x].price, inventory[x].img);
            // console.log(selectedCard)
            console.log(inventory[x])
            drawItem(selectedCard, raritySwitch(inventory[x].rarity), inventory[x].id, inventory[x].holo);
        }
    }
}

function drawItem(array, rarity, itemId, holo, isPack, pack) {
    // console.log(array)
    if (isPack) {
        $(".inventoryItems").append('<div class ="inventoryItem pack" id="'+ itemId +'" title="' + packs[pack].name + '"><span class="'+ lockedCheck(itemId) +'"></span><img src="' + inventory[itemId].img + '"> </div>')
        document.getElementById(itemId).setAttribute("onclick", "clickPack('"+itemId+"','"+pack+"')");
        inv += 1;
    }else {
        const name = array[0];
        const price = "$" + array[1].toFixed(2);
        const img = array[2];
        $(".inventoryItems").append('<div class="inventoryItem ' + rarity + revCheck(holo)+'" id="'+ itemId +'" title="' + name + '"><div class="cardPrice">' + price + '</div><span class="'+ lockedCheck(itemId) +'"></span><span class="'+ newCheck(itemId) +'"></span><img src=' + img + '> </div>');
        document.getElementById(itemId).setAttribute("onclick", "clickItem('"+itemId+"')");
        if (inventory[itemId].jumbo) {
            inv += 4
        }else {
            inv +=1;
        }
    }
    if (inventory[itemId].locked) document.getElementById(itemId).classList.add('locked');
    if (inventory[itemId].jumbo) document.getElementById(itemId).classList.add('jumbo');
}

function drawPack(pack) {
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
        random = 1+".png";
    }

    document.getElementById("packDisplayImage").src = packs[pack].img+random;
    document.getElementById("packName").innerHTML = packs[pack].name;
    document.getElementById("packPrice").innerHTML = "Price: $"+packs[pack].price.toFixed(2);
}

let exportGameState = () => {
    const content = saveGameState();
    const filename = "PTCGClicker.txt"
    const blob = new Blob([content], {
        type: "text/plain;charset=utf-8"
    });

    // saveAs(blob, filename);

    let newLink = document.createElement("a");
    newLink.download = filename;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(blob);
    }
    else {
        newLink.href = window.URL.createObjectURL(blob);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click();
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

function importGameState (file) {
    inventoryClear()
    const saveGame = JSON.parse(file)
    loadData(saveGame)
    drawInventory();
    saveGameState()
    console.log("Game Save found. Successfully imported.");
    location.reload();
}

function inventoryClear() {
    inventory = {};
    $('.inventoryItems').html("");
}

function itemDisp(name, price, img) {
    const temp = [];
    temp.push(name, price, img);
    return temp;
}

function loadData(saveData) {
    // inv = saveData["inv"];
    maxInv = saveData["maxInv"];
    maxDisCase = saveData["maxDisCase"];
    wallet = saveData["wallet"];
    value = saveData["value"];
    moneyPerClick = saveData["moneyPerClick"];
    packSel = saveData["packSel"];
    // itemCounter = saveData["itemCounter"];
    inventory = saveData["inventory"];
    inventoryUpgPrice = saveData["inventoryUpgPrice"];
    inventoryUpgrades = saveData["inventoryUpgrades"];
    displayUpgPrice = saveData["displayUpgPrice"];
    displayUpgrades = saveData["displayUpgrades"];
    clickUpgPrice = saveData["clickUpgPrice"];
    clickUpgrades = saveData["clickUpgrades"];
    collection = saveData["collection"];
    displayCase = saveData["displayCase"];

    popup = saveData["popup"];
    clickSell = saveData["clickSell"];
    newCardSetting = saveData["newCardSetting"];

    totalMoneyAccepted = saveData["totalMoneyAccepted"];
    totalMoneySpent = saveData["totalMoneySpent"];
    totalCardsSold = saveData["totalCardsSold"];
    totalPacksOpened = saveData["totalPacksOpened"];
    totalEnergyPulled = saveData["totalEnergyPulled"];
    totalCommonsPulled = saveData["totalCommonsPulled"];
    totalUncommonsPulled = saveData["totalUncommonsPulled"];
    totalReversePulled = saveData["totalReversePulled"];
    totalReverseSecretsPulled = saveData["totalReverseSecretsPulled"];
    totalRaresPulled = saveData["totalRaresPulled"];
    totalHoloRaresPulled = saveData["totalHoloRaresPulled"];
    totalFullArtsPulled = saveData["totalFullArtsPulled"];
    totalUltraRaresPulled = saveData["totalUltraRaresPulled"];
    totalSecretRaresPulled = saveData["totalSecretRaresPulled"];
}

function loadGameState() {
    if (localStorage.getItem("savegame") !== null) {
        inventoryClear();
        const saveGame = JSON.parse(localStorage.getItem("savegame"));
        //console.log(saveGame);

        loadData(saveGame)
        drawInventory();

        console.log("Game Save found. Successfully loaded.");
    } else {
        console.log("No save game detected.")
    }
}

function lockedCheck(itemId) {
    if (inventory[itemId].locked) {
        return "lockedOverlay";
    }else {
        return "";
    }
}

function lockItem(itemId) {
    const div = document.getElementById(itemId)
    if (div.classList.contains('locked')) {
        div.classList.remove('locked');
        inventory[itemId].locked = false;
    } else {
        div.classList.add('locked');
        inventory[itemId].locked = true;
    }
    saveGameState()
    resetInventory()
}

function newCheck(itemId) {
    const info = inventory[itemId];
    if (info.rarity >= 0){
        if (!info.jumbo) {
            if (collection.hasOwnProperty(info.set)){
                if (!collection[info.set].collected.hasOwnProperty(info.num)){
                    inventory[itemId].newCard = true;
                    if (newCardSetting) {
                        return "new";
                    }else {
                        return "";
                    }
                }
            }
        }else {
            // jumbo collection
        }
    }
    inventory[itemId].newCard = false;
    return "";
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

function openCard(rarity, cardNum, pack, reverse, isPack, jumbo) {
    if (jumbo == null) jumbo = false;
    if (!isPack){
        const cardSel = "card" + cardNum;
        // console.log(cardTot);
        let card = cards[pack][rarity][cardSel];
        let itemId = "item" + recycleCounter();

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
                jumbo: jumbo,
                newCard: false
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
                jumbo: jumbo,
                newCard: false
            }
            if (jumbo) {
                let temp = inventory[itemId].name;
                const array = temp.split("|");
                temp = array[0] + "(Jumbo) |" + array[1];
                inventory[itemId].name = temp;
            }
        }
        const selectedCard = itemDisp(inventory[itemId].name, inventory[itemId].price, inventory[itemId].img);
        drawItem(selectedCard, raritySwitch(inventory[itemId].rarity), itemId, inventory[itemId].holo);
        value += inventory[itemId].price;
    }else {
        let itemId = "item" + recycleCounter();

        const min = 1;
        const max = packs[pack].imgNum;
        if (max != 1) {
            if (lastRand === undefined) {
                random = Math.floor(Math.random() * (max - min + 1)) + min;
            }else {
                random = Math.floor(Math.random() * (max - min    )) + min;
                if (random >= lastRand) random += 1;
            }
            lastRand = random;
            random = random+".png";
        }else {
            random = "1"+".png";
        }
        const packImg = packs[pack].img+random;

        inventory[itemId] = {
            id: itemId,
            set: pack,
            name: packs[pack].name,
            num: -10,
            price: 0,
            rarity: -2,
            type: "pack",
            holo: 0,
            img: packImg,
            locked: false,
            jumbo: jumbo,
            new: false
        }
        drawItem("", "", itemId, "", isPack, pack)
    }

    // console.log(inventory);
    updateInv();
    updateValue();
}

function openCollection(evt, colName) {


    // Declare all variables
    let i, tabcontent, collection;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    collection = document.getElementsByClassName("collection");
    for (i = 0; i < collection.length; i++) {
        collection[i].className = collection[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(colName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openEnergy() {
    random = Math.floor(Math.random() * ObjectLength(cards.energy));

    let card = cards.energy[Object.keys(cards.energy)[random]];
    let itemId = "item"+recycleCounter();

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
        jumbo: false,
        newCard: false
    }

    const selectedCard = itemDisp(inventory[itemId].name, inventory[itemId].price, inventory[itemId].img);
    drawItem(selectedCard, raritySwitch(inventory[itemId].rarity), itemId, inventory[itemId].holo);

    value += inventory[itemId].price;
    updateInv();
    updateValue();
}

function openModal(modalId) {
    const modal = document.getElementById(modalId)
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

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

    let i = 0;
    while (i < packs[pack].contents[0]) {
        openEnergy();
        totalEnergyPulled++;
        i++;
    }
    i = 0;
    randCard("common", packs[pack].contents[1], pack)
    while (i < packs[pack].contents[1]) {
        openCard("common", selectedCards[i], pack);
        totalCommonsPulled ++;
        i++;
    }
    i = 0;
    randCard("uncommon", packs[pack].contents[1], pack)
    while (i < packs[pack].contents[2]) {
        openCard("uncommon", selectedCards[i], pack);
        totalUncommonsPulled ++;
        i++;
    }
    i = 0;
    while (i < packs[pack].contents[3]) {
        randReverse(pack);
        i++;
    }
    i = 0;
    while (i < packs[pack].contents[4]) {
        randRare(pack);
        i++;
    }

    updateWallet();
    updateStats();
    saveGameState();
    return true;
}

function purchaseProduct(prod) {
    const prodIndex = product[prod]
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

function randCard(rarity, cardPulls, pack) {
    const min = 1;
    const max = ObjectLength(cards[pack][rarity]);
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

function randRare(pack) {
    let randNum = Math.random();
    if (randNum >= 0.6){
        // normal rare
        randCard("rare", 1, pack)
        openCard("rare", selectedCards[0], pack);
        totalRaresPulled ++;
    }else if (randNum >= 0.25){
        // holo rare
        randCard("holoRare", 1, pack)
        openCard("holoRare", selectedCards[0], pack);
        totalHoloRaresPulled ++;
    }else if (randNum >= 0.015){
        // ultra rare
        randNum = Math.random();
        if (randNum >= 0.2) {
            randCard("ultraRare", 1, pack)
            openCard("ultraRare", selectedCards[0], pack);
            totalUltraRaresPulled ++;
        } else {
            // full art
            randCard("fullArt", 1, pack)
            openCard("fullArt", selectedCards[0], pack);
            totalFullArtsPulled ++;
        }
    }else{
        // secret rare
        randCard("secretRare", 1, pack)
        openCard("secretRare", selectedCards[0], pack);
        totalSecretRaresPulled ++;
    }
}

function randReverse(pack) {
    const randNum = Math.random();
    if (ObjectLength(cards[pack].reverseSecret) === 0){
        const tempRarity = selectReverseRarity();
        randCard(tempRarity, 1, pack)
        openCard(tempRarity, selectedCards[0], pack, true);
        totalReversePulled ++;
    }else {
        if (randNum >= 0.3){
            // normal reverse
            const tempRarity = selectReverseRarity();
            randCard(tempRarity, 1, pack)
            openCard(tempRarity, selectedCards[0], pack, true);
            totalReversePulled ++;
        }else{
            // secret reverse
            randCard("reverseSecret", 1, pack)
            openCard("reverseSecret", selectedCards[0], pack);
            totalReverseSecretsPulled ++;
        }
    }
}

function randSel2(item1, item2) {
    const randNum = Math.random()
    if (randNum >= 0.5) {
        eval(item1)
    }else {
        eval(item2)
    }
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

function readFile(input) {
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        importGameState(reader.result);
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}

function recycleCounter() {
    const keys = Object.keys(inventory)
    const displayKeys = Object.keys(displayCase)
    const temp = keys.concat(displayKeys)
    itemCounter = 0;
    while (true) {
        if (temp.length == 0) {
            return 0
        } else if (!temp.includes("item"+itemCounter)) {
            return itemCounter;
        } else {
            itemCounter ++;
        }
    }
}

function removeDisplay(itemId) {
    inventory[itemId] = displayCase[itemId];
    value += inventory[itemId].price;
    delete displayCase[itemId];
    updateInv()
    updateValue()
    resetInventory()
    updateDisplayItems()
    saveGameState()
    document.getElementById(itemId).setAttribute("onclick", "clickItem('"+itemId+"')");
}

function resetInventory() {
    $('.inventoryItems').html("");
    inv = 0;
    drawInventory()
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

function saveGameState() {
    const string = {
        // "inv": inv,
        "packSel": packSel,
        // "itemCounter": itemCounter,
        "inventory": inventory,
        "maxInv": maxInv,
        "wallet": wallet,
        "value": value,
        "maxDisCase": maxDisCase,
        "moneyPerClick": moneyPerClick,
        "collection": collection,
        "displayCase": displayCase,
        "inventoryUpgPrice": inventoryUpgPrice,
        "inventoryUpgrades": inventoryUpgrades,
        "displayUpgPrice": displayUpgPrice,
        "displayUpgrades": displayUpgrades,
        "clickUpgPrice": clickUpgPrice,
        "clickUpgrades": clickUpgrades,

        "popup": popup,
        "clickSell": clickSell,
        "newCardSetting": newCardSetting,

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

    return JSON.stringify(string);
}

function selectPack(selection) {
    packSel = selection;
    let packDel = [];
    drawPack(packSel);
    for (let x in Object.keys(packs)) {
        packDel.push(Object.keys(packs)[x]);
        const element = document.getElementById(packDel[x] + "Opt");
        if (element.classList.contains("active")) {
            element.classList.remove("active");
        }
    }
    document.getElementById("pack").setAttribute("onclick", "openPack('"+packSel+"')");
    document.getElementById(packSel + "Opt").classList.add("active");

    saveGameState();
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

function sortToggle(method) {
    if (cntrlIsPressed) {
        sortDirection = 'back';
    }else {
        sortDirection = 'forw';
    }
    sortInventory(method)
}

function updateInv() {
    document.getElementById("inv").innerHTML = "<span class=\"infoName\">Inventory Space: </span>"+inv+"/"+maxInv;
}

function updateCollectionItems(pack) {
    let j = 1;
    let tempId = "#"+pack+"Col";
    document.getElementById(pack+"Col").innerHTML = '';
    while (j <= packs[pack].total) {
        if (pack == 'swshPromo') {
            $(tempId).append("<div class='colItem' id='colItem"+pack+j+"'><img src='"+ packs[pack].cardImg + zeroFill(j) +".png'></div>");
        }else {
            $(tempId).append("<div class='colItem' id='colItem"+pack+j+"'><img src='"+ packs[pack].cardImg + j +".png'></div>");
        }
        if (!collection[pack].collected.hasOwnProperty(j)) {
            document.querySelector('#colItem' + pack + j + ' > img').setAttribute('class', 'unobtained')
        } else {
            document.querySelector('#colItem' + pack + j).setAttribute('title', collection[pack].collected[j].name.replace(' (Reverse)', ''))
            if (collection[pack].collected[j].holo != 2) {
                // document.querySelector('#colItem' + pack + j).classList.add(revCheck(collection[pack].collected[j].holo))
            }
        }
        j ++;
    }
}

function updateCollectionMenu() {
    let keyArray = Object.keys(packs);
    for (let i in keyArray) {
        document.getElementById(keyArray[i]+"Amt").innerHTML = "Collected: "+collection[keyArray[i]].collectedTotal+"/"+packs[keyArray[i]].cards;
    }
}

function updateDisplayItems() {
    $('.displayItems').html("");
    let temp = Object.keys(displayCase);
    for (let i in temp) {
        $('#displayItems').append('<div class="displayItem ' + raritySwitch(displayCase[temp[i]].rarity) + revCheck(displayCase[temp[i]].holo)+'" id="'+ displayCase[temp[i]].id +'" title="' + displayCase[temp[i]].name + '"><img src="'+ displayCase[temp[i]].img +'"></div>');
        document.getElementById(displayCase[temp[i]].id).setAttribute("onclick", "clickDisplay('"+displayCase[temp[i]].id+"')");
    }
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

function updateProductShop() {
    for (let i in Object.keys(product)){
        document.getElementById("product"+i+"Nme").innerHTML = product["prod"+i].name;
        document.getElementById("product"+i+"Dsc").innerHTML = product["prod"+i].desc;
        document.getElementById("product"+i+"Prc").innerHTML = "Price: $"+product["prod"+i].price.toFixed(2);
    }
}

function updateSelectedCard() {
    document.getElementById('modal-card').innerHTML = '<div class="modal-card-display ' + raritySwitch(selectedCard.rarity) + revCheck(selectedCard.holo)+'" title="' + name + '"><img src=' + selectedCard.img + '></div>';
    document.getElementById('modal-display').innerHTML = '<div class="modal-card-display ' + raritySwitch(selectedCard.rarity) + revCheck(selectedCard.holo)+'" title="' + name + '"><img src=' + selectedCard.img + '></div>';
    document.getElementById('sellItem').innerHTML = "Sell ($" + selectedCard.price.toFixed(2) + ")";
    document.getElementById('selectItemHeader').innerHTML = selectedCard.name
    document.getElementById('selectDisplayHeader').innerHTML = selectedCard.name

    if (Object.keys(displayCase).length == maxDisCase) {
        document.querySelector('.addDisplay').classList.add('noselect')
    }else {
        if (selectedCard.locked) {
            document.querySelector('.addDisplay').classList.add('noselect')
        }else {
            document.querySelector('.addDisplay').classList.remove('noselect')
        }
    }

    if (selectedCard.locked) {
        document.querySelector('.lockItem').innerHTML = 'Unlock'
        document.querySelector('.sellItem').classList.add('noselect')
        document.querySelector('.addItem').classList.add('noselect')
    }else {
        document.querySelector('.lockItem').innerHTML = 'Lock'
        document.querySelector('.sellItem').classList.remove('noselect')
        document.querySelector('.addItem').classList.remove('noselect')
    }

    if (collection.hasOwnProperty(selectedCard.set)) {
        if (collection[selectedCard.set].collected.hasOwnProperty(selectedCard.num)) {
            document.querySelector('.addItem').classList.add('noselect')
        }
    }else {
        document.querySelector('.addItem').classList.add('noselect')
    }
}

function updateSelectedPack() {
    const cardSum = packs[selectedPack.set].contents.reduce((partialSum, a) => partialSum + a, 0);
    document.getElementById('modal-pack').innerHTML = '<div class="modal-pack-display"><img src="'+ selectedPack.img +'"></div>';
    document.getElementById('openPack').innerHTML = "Open (" + cardSum + " cards)";
    document.getElementById('selectPackHeader').innerHTML = selectedPack.name

    if (selectedPack.locked) {
        document.querySelector('.lockPack').innerHTML = 'Unlock'
        document.querySelector('.openPack').classList.add('noselect')
    }else {
        document.querySelector('.lockPack').innerHTML = 'Lock'
        document.querySelector('.openPack').classList.remove('noselect')
    }

    inv += cardSum;
    if (inv > maxInv) {
        document.querySelector('.openPack').classList.add('noselect')
    }
    inv -= cardSum;
}

function updateShopItems() {
    document.getElementById("shopInvUpgPrc").innerHTML = "Price: $"+inventoryUpgPrice.toFixed(2);
    document.getElementById("shopInvUpgAmt").innerHTML = "Current: "+maxInv;
    document.getElementById("shopDispUpgPrc").innerHTML = "Price: $"+displayUpgPrice.toFixed(2);
    document.getElementById("shopDispUpgAmt").innerHTML = "Current: "+maxDisCase;
    document.getElementById("shopClkUpgPrc").innerHTML = "Price: $"+clickUpgPrice.toFixed(2);
    document.getElementById("shopClkUpgAmt").innerHTML = "Current: $"+moneyPerClick.toFixed(2);
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

function updateValue() {
    value = Math.abs(value);
    document.getElementById("value").innerHTML = "Value: $"+value.toFixed(2);
}

function updateWallet() {
    document.getElementById("wallet").innerHTML = "<span class=\"infoName\">Wallet:</span> $"+wallet.toFixed(2);
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

function upgradeDisplay() {
    wallet -= displayUpgPrice;
    if (wallet >= 0) {
        totalMoneySpent += displayUpgPrice;
        maxDisCase ++;
        displayUpgrades ++;
        displayUpgPrice *= 1.05;
    }else {
        wallet += displayUpgPrice;
    }
    updateInv();
    updateWallet();
    updateShopItems();
    updateStats();
    saveGameState();
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

// auto save
setInterval(saveGameState, 30000);