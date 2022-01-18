<template>
    <div id="app">
        <div class="container-fluid vh-100">
            <div class="row" id="appContainer">
                <div class="row">
                    <div class="col-lg-3">
                        <div id="header">
                            <h1>Froggy Knight</h1>
                        </div>
                        <div class="controllingPanel">
                            <div class="row">
                                <div class="col-lg-12">
                                    Start Place :
                                </div>
                                <div class="col-lg-12">
                                    <input type="text" id="txtStartPlace" class="form-control" maxlength="2" value="A1" autocomplete="off">
                                </div>
                                <div class="col-lg-12 d-flex justify-content-end mt-3">
                                    <button id="btnPlaceFrog" class="btn btn-success" @click="PlaceFrog()">Place Frog 🐸</button>
                                </div>
                            </div>
                        </div>
                        <div class="controllingPanel">
                            <div class="row">
                                <div class="col-lg-12">
                                    End Place :
                                </div>
                                <div class="col-lg-12">
                                    <input type="text" id="txtEndPlace" class="form-control" maxlength="2" value="B3" autocomplete="off">
                                </div>
                                <div class="col-lg-12 d-flex justify-content-end mt-3">
                                    <button id="btnPlaceFrog" class="btn btn-primary" @click="StartTravel()">Start Travel ✈</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div id="mainContent" class="m-5 m-lg-0"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import chessBoardPlateImageAsset from './assets/images/lilypad2.png';
    import frogAsset from './assets/images/frog.png';

    export default {
        name: 'App',
        data()
        {
            return {
                frogXStart : 1,
                frogYStart : 1,
                frogXEnd : 2,
                frogYEnd : 3,
                minimumMovesCount : 100,
                isAlreadyArrive : false,
                allMoves : []
            }
        },
        mounted()
        {

            this.LoadBoard();
            this.LoadFrogPosition(this.frogXStart, this.frogYStart);
        },
        methods: 
        {
            LoadBoard()
            {
                const mainContent = document.querySelector("#mainContent");
                mainContent.innerHTML = "";

                for(let i = 0; i < 9; i++)
                {
                    const chessBoardPlateRowContainer = document.createElement("div");
                    chessBoardPlateRowContainer.className = "d-flex justify-content-center";

                    for(let j = 0; j < 9; j++)
                    {
                        const chessBoardPlate = document.createElement("div");
                        chessBoardPlate.className = "chessBoardPlates d-flex align-items-center justify-content-center";

                        if(j == 0 && i != 8)
                        {
                            chessBoardPlate.innerHTML = 8 - i;
                        }
                        else if(i == 8)
                        {
                            if(j != 0)
                            {
                                chessBoardPlate.innerHTML = String.fromCharCode(j + 64);
                            }
                        }
                        else
                        {
                            const chessBoardPlateImage = document.createElement("img");
                            chessBoardPlateImage.id = "chessBoardPlateImage-" + j + "" + (8 - i);
                            chessBoardPlateImage.src = chessBoardPlateImageAsset;
                            chessBoardPlateImage.className = "chessBoardPlatesImage";

                            chessBoardPlate.appendChild(chessBoardPlateImage);
                            if(j == 1 && 8 - i == 1)
                            {
                                const frog = document.createElement("img");
                                frog.src = frogAsset;
                                frog.id = "frogImage";

                                chessBoardPlate.appendChild(frog);
                            }
                        }

                        chessBoardPlateRowContainer.appendChild(chessBoardPlate);
                    }

                    mainContent.appendChild(chessBoardPlateRowContainer);
                }
            },
            LoadFrogPosition(x, y)
            {
                const frog = document.querySelector("#frogImage");
                frog.style.transform = "translate(" + (x - 1) * 69 + "px, " + (y - 1) * -69 + "px)";
                frog.style.animation = "frogJump 1.5s ease-in-out";

                setTimeout(() =>
                {
                    frog.style.animation = "";
                }, 1400);
            },
            PlaceFrog()
            {
                const txtStartPlace = document.querySelector("#txtStartPlace");
                if(txtStartPlace.value != "" && txtStartPlace.value.length == 2)
                {
                    const frogXStartInput = txtStartPlace.value[0].charCodeAt(0) - 64;
                    const frogYStartInput = parseInt(txtStartPlace.value[1]);

                    if((frogXStartInput >= 1 && frogXStartInput <= 8) && (frogYStartInput >= 1 && frogYStartInput <= 8))
                    {
                        this.frogXStart = frogXStartInput;
                        this.frogYStart = frogYStartInput;

                        this.LoadFrogPosition(this.frogXStart, this.frogYStart);
                    }
                    else
                    {
                        alert("Start place invalid ...");
                        txtStartPlace.focus();
                    }
                }
                else
                {
                    alert("Start place invalid ...");
                    txtStartPlace.focus();
                }
            },
            StartTravel()
            {
                this.isAlreadyArrive = false;
                this.minimumMovesCount = 100;
                this.allMoves = [];

                const txtStartPlace = document.querySelector("#txtStartPlace");
                if(txtStartPlace.value != "" && txtStartPlace.value.length == 2)
                {
                    const frogXStartInput = txtStartPlace.value[0].charCodeAt(0) - 64;
                    const frogYStartInput = parseInt(txtStartPlace.value[1]);

                    if((frogXStartInput >= 1 && frogXStartInput <= 8) && (frogYStartInput >= 1 && frogYStartInput <= 8))
                    {
                        const txtEndPlace = document.querySelector("#txtEndPlace");
                        if(txtEndPlace.value != "" && txtEndPlace.value.length == 2)
                        {
                            const frogXEndInput = txtEndPlace.value[0].charCodeAt(0) - 64;
                            const frogYEndInput = parseInt(txtEndPlace.value[1]);

                            if((frogXEndInput >= 1 && frogXEndInput <= 8) && (frogYEndInput >= 1 && frogYEndInput <= 8))
                            {
                                this.frogXStart = frogXStartInput;
                                this.frogYStart = frogYStartInput;
                                this.frogXEnd = frogXEndInput;
                                this.frogYEnd = frogYEndInput;

                                const chessBoardPlateImages = document.querySelectorAll(".chessBoardPlatesImage");
                                chessBoardPlateImages.forEach((item) =>
                                {
                                    item.style.filter = "brightness(70%)";
                                });

                                this.LoadFrogPosition(this.frogXStart, this.frogYStart);
                                this.Travel(this.frogXStart, this.frogYStart, 0);

                                const movesNeeded = [];
                                const lastMove = this.allMoves[this.allMoves.findIndex(a => a.afterX == this.frogXEnd && a.afterY == this.frogYEnd && a.count == this.minimumMovesCount)];

                                movesNeeded.unshift(lastMove);
                                
                                let beforeMoveX = lastMove.beforeX;
                                let beforeMoveY = lastMove.beforeY;
                                let moveCount = lastMove.count;
                                while(moveCount > 1)
                                {
                                    moveCount--;

                                    const beforeMove = this.allMoves[this.allMoves.findIndex(a => a.afterX == beforeMoveX && a.afterY == beforeMoveY && a.count == moveCount)];
                                    beforeMoveX = beforeMove.beforeX;
                                    beforeMoveY = beforeMove.beforeY;

                                    movesNeeded.unshift(beforeMove);
                                }

                                movesNeeded.forEach((move, index) =>
                                {
                                    const fromPlate = document.querySelector("#chessBoardPlateImage-" + move.beforeX + "" + move.beforeY);
                                    fromPlate.style.filter = "brightness(100%)";

                                    const toPlate = document.querySelector("#chessBoardPlateImage-" + move.afterX + "" + move.afterY);
                                    toPlate.style.filter = "brightness(100%)";

                                    setTimeout(() => 
                                    {
                                        this.LoadFrogPosition(move.afterX, move.afterY);
                                    }, (index + 1) * 1500);
                                });
                            }
                            else
                            {
                                alert("End place invalid ...");
                                txtEndPlace.focus();
                            }
                        }
                        else
                        {
                            alert("End place invalid ...");
                            txtEndPlace.focus();
                        }
                    }
                    else
                    {
                        alert("Start place invalid ...");
                        txtStartPlace.focus();
                    }
                }
                else
                {
                    alert("Start place invalid ...");
                    txtStartPlace.focus();
                }
            },
            CheckArrive(x, y, count)
            {
                if(x == this.frogXEnd && y == this.frogYEnd)
                {
                    if(count < this.minimumMovesCount)
                    {
                        this.minimumMovesCount = count;
                    }

                    this.isAlreadyArrive = true;
                }
                else
                {
                    this.isAlreadyArrive = false;
                }
            },
            Travel(x, y, count)
            {
                this.CheckArrive(x, y, count);

                if(count > 6)
                {
                    return;
                }

                if(this.isAlreadyArrive == true)
                {
                    return;
                }

                if(this.frogXEnd > x)
                {
                    if(this.frogYEnd > y)
                    {
                        // Move Up
                        if(y + 2 <= 8)
                        {
                            // Move Up Right
                            if(x + 1 <= 8)
                            {
                                this.Travel(x + 1, y + 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 1,
                                    afterY : y + 2,
                                    moveName : "upright",
                                    count : count + 1
                                });
                            }
                        }

                        // Move Right
                        if(x + 2 <= 8)
                        {	
                            // Move Right Up
                            if(y + 1 <= 8)
                            {
                                this.Travel(x + 2, y + 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 2,
                                    afterY : y + 1,
                                    moveName : "rightup",
                                    count : count + 1
                                });
                            }
                        }

                        // Move Up
                        if(y + 2 <= 8)
                        {
                            // Move Up Left
                            if(x - 1 >= 1)
                            {
                                this.Travel(x - 1, y + 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 1,
                                    afterY : y + 2,
                                    moveName : "upleft",
                                    count : count + 1
                                });
                            }
                        }

                        // Move Right
                        if(x + 2 <= 8)
                        {	
                            // Move Right Down
                            if(y - 1 >= 1)
                            {
                                this.Travel(x + 2, y - 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 2,
                                    afterY : y - 1,
                                    moveName : "rightdown",
                                    count : count + 1
                                });
                            }
                        }

                        // Move Down
                        if(y - 2 >= 1)
                        {
                            // Move Down Left
                            if(x - 1 >= 1)
                            {
                                this.Travel(x - 1, y - 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 1,
                                    afterY : y - 2,
                                    moveName : "downleft",
                                    count : count + 1
                                });
                            }
                        }
                    }
                    else if(this.frogYEnd < y)
                    {
                        // Move Down
                        if(y - 2 >= 1)
                        {
                            // Move Down Right
                            if(x + 1 <= 8)
                            {
                                this.Travel(x + 1, y - 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 1,
                                    afterY : y - 2,
                                    moveName : "downright",
                                    count : count + 1
                                });
                            }
                        }

                        // Move Right
                        if(x + 2 <= 8)
                        {
                            // Move Right Down
                            if(y - 1 >= 1)
                            {
                                this.Travel(x + 2, y - 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 2,
                                    afterY : y - 1,
                                    moveName : "rightdown",
                                    count : count + 1
                                });
                            }
                        }

                        // Move Right
                        if(x + 2 <= 8)
                        {	
                            // Move Right Up
                            if(y + 1 <= 8)
                            {
                                this.Travel(x + 2, y + 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 2,
                                    afterY : y + 1,
                                    moveName : "rightup",
                                    count : count + 1
                                });
                            }
                        }

                        // Move Down
                        if(y - 2 >= 1)
                        {
                            // Move Down Left
                            if(x - 1 >= 1)
                            {
                                this.Travel(x - 1, y - 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 1,
                                    afterY : y - 2,
                                    moveName : "downleft",
                                    count : count + 1
                                });
                            }
                        }

                        // Move Up
                        if(y + 2 <= 8)
                        {
                            // Move Up left
                            if(x - 1 >= 1)
                            {
                                this.Travel(x - 1, y + 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 1,
                                    afterY : y + 2,
                                    moveName : "upleft",
                                    count : count + 1
                                });
                            }
                        }
                    }
                    else if(this.frogYEnd == y)
                    {
                        // Move Down
                        if(y - 2 >= 1)
                        {
                            // Move Down Right
                            if(x + 1 <= 8)
                            {
                                this.Travel(x + 1, y - 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 1,
                                    afterY : y - 2,
                                    moveName : "downright",
                                    count : count + 1
                                });
                            }
                        }

                        // Move Right
                        if(x + 2 <= 8)
                        {
                            // Move Right Down
                            if(y - 1 >= 1)
                            {
                                this.Travel(x + 2, y - 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 2,
                                    afterY : y - 1,
                                    moveName : "rightdown",
                                    count : count + 1
                                });
                            }
                        }

                        // Move Up
                        if(y + 2 <= 8)
                        {
                            // Move Up Right
                            if(x + 1 <= 8)
                            {
                                this.Travel(x + 1, y + 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 1,
                                    afterY : y + 2,
                                    moveName : "upright",
                                    count : count + 1
                                });
                            }
                        }

                        // Move Right
                        if(x + 2 <= 8)
                        {	
                            // Move Right Up
                            if(y + 1 <= 8)
                            {
                                this.Travel(x + 2, y + 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 2,
                                    afterY : y + 1,
                                    moveName : "rightup",
                                    count : count + 1
                                });
                            }
                        }

                        // Move Up
                        if(y + 2 <= 8)
                        {
                            // Move Up left
                            if(x - 1 >= 1)
                            {
                                this.Travel(x - 1, y + 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 1,
                                    afterY : y + 2,
                                    moveName : "upleft",
                                    count : count + 1
                                });
                            }
                        }
                    }
                }
                else if(this.frogXEnd < x)
                {
                    if(this.frogYEnd > y)
                    {
                        // Move Left
                        if(x - 2 >= 1)
                        {
                            // Move Left Up
                            if(y + 1 <= 8)
                            {
                                this.Travel(x - 2, y + 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 2,
                                    afterY : y + 1,
                                    moveName : "leftup",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Up
                        if(y + 2 <= 8)
                        {
                            // Move Up left
                            if(x - 1 >= 1)
                            {
                                this.Travel(x - 1, y + 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 1,
                                    afterY : y + 2,
                                    moveName : "upleft",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Up
                        if(y + 2 <= 8)
                        {
                            // Move Up Right
                            if(x + 1 <= 8)
                            {
                                this.Travel(x + 1, y + 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 1,
                                    afterY : y + 2,
                                    moveName : "upright",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Left
                        if(x - 2 >= 1)
                        {	
                            // Move Left Down
                            if(y - 1 >= 1)
                            {
                                this.Travel(x - 2, y - 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 2,
                                    afterY : y - 1,
                                    moveName : "leftdown",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Down
                        if(y - 2 >= 1)
                        {
                            // Move Down Right
                            if(x + 1 <= 8)
                            {
                                this.Travel(x + 1, y - 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 1,
                                    afterY : y - 2,
                                    moveName : "downright",
                                    count : count + 1
                                });
                            }
                        }
                    }
                    else if(this.frogYEnd < y)
                    {
                        // Move Left
                        if(x - 2 >= 1)
                        {	
                            // Move Left Down
                            if(y - 1 >= 1)
                            {
                                this.Travel(x - 2, y - 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 2,
                                    afterY : y - 1,
                                    moveName : "leftdown",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Down
                        if(y - 2 >= 1)
                        {
                            // Move Down Left
                            if(x - 1 >= 1)
                            {
                                this.Travel(x - 1, y - 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 1,
                                    afterY : y - 2,
                                    moveName : "downleft",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Up
                        if(y + 2 <= 8)
                        {
                            // Move Up Right
                            if(x + 1 <= 8)
                            {
                                this.Travel(x + 1, y + 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 1,
                                    afterY : y + 2,
                                    moveName : "upright",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Left
                        if(x - 2 >= 1)
                        {
                            // Move Left Up
                            if(y + 1 <= 8)
                            {
                                this.Travel(x - 2, y + 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 2,
                                    afterY : y + 1,
                                    moveName : "leftup",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Down
                        if(y - 2 >= 1)
                        {
                            // Move Down Right
                            if(x + 1 <= 8)
                            {
                                this.Travel(x + 1, y - 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 1,
                                    afterY : y - 2,
                                    moveName : "downright",
                                    count : count + 1
                                });
                            }
                        }
                    }
                    else if(this.frogYEnd == y)
                    {
                        // Move Left
                        if(x - 2 >= 1)
                        {	
                            // Move Left Down
                            if(y - 1 >= 1)
                            {
                                this.Travel(x - 2, y - 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 2,
                                    afterY : y - 1,
                                    moveName : "leftdown",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Down
                        if(y - 2 >= 1)
                        {
                            // Move Down Left
                            if(x - 1 >= 1)
                            {
                                this.Travel(x - 1, y - 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 1,
                                    afterY : y - 2,
                                    moveName : "downleft",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Left
                        if(x - 2 >= 1)
                        {
                            // Move Left Up
                            if(y + 1 <= 8)
                            {
                                this.Travel(x - 2, y + 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 2,
                                    afterY : y + 1,
                                    moveName : "leftup",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Up
                        if(y + 2 <= 8)
                        {
                            // Move Up left
                            if(x - 1 >= 1)
                            {
                                this.Travel(x - 1, y + 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 1,
                                    afterY : y + 2,
                                    moveName : "upleft",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Up
                        if(y + 2 <= 8)
                        {
                            // Move Up Right
                            if(x + 1 <= 8)
                            {
                                this.Travel(x + 1, y + 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 1,
                                    afterY : y + 2,
                                    moveName : "upright",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Down
                        if(y - 2 >= 1)
                        {
                            // Move Down Right
                            if(x + 1 <= 8)
                            {
                                this.Travel(x + 1, y - 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 1,
                                    afterY : y - 2,
                                    moveName : "downright",
                                    count : count + 1
                                });
                            }
                        }
                    }
                }
                else if(this.frogXEnd == x)
                {
                    if(this.frogYEnd > y)
                    {
                        // Move Left
                        if(x - 2 >= 1)
                        {
                            // Move Left Up
                            if(y + 1 <= 8)
                            {
                                this.Travel(x - 2, y + 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 2,
                                    afterY : y + 1,
                                    moveName : "leftup",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Up
                        if(y + 2 <= 8)
                        {
                            // Move Up left
                            if(x - 1 >= 1)
                            {
                                this.Travel(x - 1, y + 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 1,
                                    afterY : y + 2,
                                    moveName : "upleft",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Up
                        if(y + 2 <= 8)
                        {
                            // Move Up Right
                            if(x + 1 <= 8)
                            {
                                this.Travel(x + 1, y + 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 1,
                                    afterY : y + 2,
                                    moveName : "upright",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Right
                        if(x + 2 <= 8)
                        {	
                            // Move Right Up
                            if(y + 1 <= 8)
                            {
                                this.Travel(x + 2, y + 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 2,
                                    afterY : y + 1,
                                    moveName : "rightup",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Right
                        if(x + 2 <= 8)
                        {
                            // Move Right Down
                            if(y - 1 >= 1)
                            {
                                this.Travel(x + 2, y - 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 2,
                                    afterY : y - 1,
                                    moveName : "rightdown",
                                    count : count + 1
                                });
                            }
                        }
                    }
                    else if(this.frogYEnd < y)
                    {
                        // Move Left
                        if(x - 2 >= 1)
                        {	
                            // Move Left Down
                            if(y - 1 >= 1)
                            {
                                this.Travel(x - 2, y - 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 2,
                                    afterY : y - 1,
                                    moveName : "leftdown",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Down
                        if(y - 2 >= 1)
                        {
                            // Move Down Left
                            if(x - 1 >= 1)
                            {
                                this.Travel(x - 1, y - 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x - 1,
                                    afterY : y - 2,
                                    moveName : "downleft",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Down
                        if(y - 2 >= 1)
                        {
                            // Move Down Right
                            if(x + 1 <= 8)
                            {
                                this.Travel(x + 1, y - 2, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 1,
                                    afterY : y - 2,
                                    moveName : "downright",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Right
                        if(x + 2 <= 8)
                        {
                            // Move Right Down
                            if(y - 1 >= 1)
                            {
                                this.Travel(x + 2, y - 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 2,
                                    afterY : y - 1,
                                    moveName : "rightdown",
                                    count : count + 1
                                });
                            }
                        }
    
                        // Move Right
                        if(x + 2 <= 8)
                        {
                            // Move Right Up
                            if(y + 1 <= 8)
                            {
                                this.Travel(x + 2, y + 1, count + 1);
                                this.allMoves.push({
                                    beforeX : x,
                                    beforeY : y,
                                    afterX : x + 2,
                                    afterY : y + 1,
                                    moveName : "rightup",
                                    count : count + 1
                                });
                            }
                        }
                    }
                    else if(this.frogYEnd == y)
                    {
                        if(count < this.minimumMovesCount)
                        {
                            this.minimumMovesCount = count;
                            return;
                        }
                    }
                }
            }
        }
    }

</script>
<style>

    @import 'assets/css/Bootstrap.css';

    @keyframes waterFlows {
        0%
        {
            background-image: url("assets/images/water2-blur.jpg");
        }

        50%
        {
            background-image: url("assets/images/water1-blur.jpg");
        }

        100%
        {
            background-image: url("assets/images/water2-blur.jpg");
        }
    }

    @keyframes lilyPadMoves {
        0%
        {
            transform: translateY(0px);
        }

        50%
        {
            transform: translateY(-4px);
        }

        100%
        {
            transform: translateY(0px);
        }
    }

    @keyframes frogJump {
        0%
        {
            width: 50%;
        }

        50%
        {
            width: 90%;
        }

        100%
        {
            width: 50%;
        }
    }

    #appContainer
    {
        animation: waterFlows 2s ease-in-out infinite;
        background-repeat: repeat;
        transition: all 1s ease-in-out;
    }

    #header
    {
        padding-top: 30px;
        padding-left: 30px;
        color: white;
        text-shadow: rgba(0, 0, 0, 0.35) 5px 5px 5px;
    }

    .controllingPanel
    {
        background-color: rgba(255, 255, 255, 0.9);
        margin: 30px 0 0 30px;
        border-radius: 5px;
        padding: 20px;
    }

    #mainContent
    {
        border-radius: 10px;
        padding: 30px;
    }

    .chessBoardPlates
    {
        width: 65px;
        height: 65px;
        margin: 2px;
        user-select: none;
        position: relative;
        color: white;
        font-weight: bold;
        font-size: 18px;
    }

    #frogImage
    {
        width: 50%;
        position: absolute;
        z-index: 2;
        transition: all 1.5s ease-in-out;
    }

    .chessBoardPlatesImage
    {
        width: 100%;
        z-index: 1;
        position: absolute;
        animation: lilyPadMoves 4s ease-in-out infinite;
        filter : brightness(100%);
        transition: all 1s ease-in-out;
    }

</style>
