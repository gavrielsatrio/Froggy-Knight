<template>
    <div id="app">
        <div class="container-fluid">
            <div class="row vh-100" id="appContainer">
                <div class="col-lg-12 h-100">
                    <div id="mainPage" class="row h-100 pages">
                        <div class="col-lg-4">
                            <div class="mainControllingPanel">
                                <div class="row">
                                    <h2 id="mainControllingPanelHeader">Set Your Frog</h2>
                                    <div class="col-lg-12 mt-3">
                                        Start Place :
                                    </div>
                                    <div class="col-lg-12">
                                        <input type="text" id="txtStartPlace" class="form-control text-uppercase" maxlength="2" value="A1" autocomplete="off">
                                    </div>
                                    <div class="col-lg-12 mt-3">
                                        End Place :
                                    </div>
                                    <div class="col-lg-12">
                                        <input type="text" id="txtEndPlace" class="form-control text-uppercase" maxlength="2" value="B3" autocomplete="off" @keyup.enter="StartTravel()">
                                    </div>
                                    <div class="col-lg-12 d-flex justify-content-end mt-3">
                                        <button id="btnPlaceFrog" class="btn btn-primary" @click="StartTravel()">Start Travel ✈</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div id="mainChessBoard"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 h-100">
                    <div id="introductionPage" class="row h-100 align-items-center pages">
                        <div class="col-lg-12">
                            <div id="introductionTitleContainer" class="w-100 d-flex justify-content-center">
                                <img id="introductionTitle" src="./assets/images/titlewhite.svg">
                            </div>
                            <div id="introductionDescContainer" class="w-100">
                                <p id="introductionDesc" class="px-lg-5 px-5">There will be a frog that demonstrates how a knight moves from one place to another place. The knight frog will takes the shortest path to the desired destination.</p>
                                <button class="btn" id="btnJumpToMain" @click="JumpToMainPage()">Let's Jump Into It</button>
                            </div>
                        </div>
                        <img src="./assets/images/frog.svg" id="introductionLoadingFrogImage">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import chessBoardPlateImageAsset from './assets/images/lilypad2.svg';
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
            this.ShowIntroductionPage();
            // this.JumpToMainPage();
            // this.LoadBoard();
        },
        methods: 
        {
            ShowIntroductionPage()
            {
                setTimeout(() => 
                {
                    document.querySelector("#introductionTitle").style.transform = "translate(0px, 0px)";
                }, 100);

                setTimeout(() => 
                {
                    document.querySelector("#introductionDesc").style.transform = "translate(0px, 0px)";
                }, 800);

                setTimeout(() => 
                {
                    document.querySelector("#btnJumpToMain").style.opacity = "1";
                }, 1600);
            },
            JumpToMainPage()
            {
                const frogLoading = document.querySelector("#introductionLoadingFrogImage");
                frogLoading.style.transform = "translate(-50%, 0%)";
                frogLoading.style.animation = "frogLoadingJump 1.5s ease-in-out";

                setTimeout(() =>
                {
                    frogLoading.style.animation = "";

                    setTimeout(() => 
                    {
                        frogLoading.style.transform = "translate(-50%, -100vh)";
                        frogLoading.style.animation = "frogLoadingJump 1.5s ease-in-out 0s 1";

                        setTimeout(() => 
                        {
                            frogLoading.style.opacity = "0";
                        }, 350);

                        setTimeout(() => 
                        {
                            const introductionPage = document.querySelector("#introductionPage");
                            introductionPage.style.transform = "translate(0%, 0%)";
                            introductionPage.style.opacity = "0";

                            const mainPage = document.querySelector("#mainPage");
                            mainPage.style.transform = "translate(0px, 0%)";
                            mainPage.style.opacity = "1";

                            setTimeout(() => 
                            {
                                this.LoadBoard();
                            }, 1200);
                        }, 600);
                    }, 300);
                }, 1400);
            },
            LoadBoard()
            {
                const mainChessBoard = document.querySelector("#mainChessBoard");
                mainChessBoard.innerHTML = "";

                for(let i = 0; i < 9; i++)
                {
                    const chessBoardPlateRowContainer = document.createElement("div");
                    chessBoardPlateRowContainer.className = "d-flex justify-content-start";

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
                        
                        setTimeout(() => 
                        {
                            chessBoardPlateRowContainer.appendChild(chessBoardPlate);
                            setTimeout(() => 
                            {
                                chessBoardPlate.style.transform = "scale(100%)";
                            }, 100);
                        }, 150 * (j + 1) + (50 * i));
                    }

                    mainChessBoard.appendChild(chessBoardPlateRowContainer);
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
            StartTravel()
            {
                this.isAlreadyArrive = false;
                this.minimumMovesCount = 100;
                this.allMoves = [];

                const txtStartPlace = document.querySelector("#txtStartPlace");
                if(txtStartPlace.value != "" && txtStartPlace.value.length == 2)
                {
                    let frogXStartInput = txtStartPlace.value[0].charCodeAt(0) - 64;
                    if(txtStartPlace.value[0].charCodeAt(0) >= 97)
                    {
                        frogXStartInput -= 32;
                    }

                    const frogYStartInput = parseInt(txtStartPlace.value[1]);

                    if((frogXStartInput >= 1 && frogXStartInput <= 8) && (frogYStartInput >= 1 && frogYStartInput <= 8))
                    {
                        const txtEndPlace = document.querySelector("#txtEndPlace");
                        if(txtEndPlace.value != "" && txtEndPlace.value.length == 2)
                        {
                            let frogXEndInput = txtEndPlace.value[0].charCodeAt(0) - 64;
                            if(txtEndPlace.value[0].charCodeAt(0) >= 97)
                            {
                                frogXEndInput -= 32;
                            }
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

                                if(this.allMoves.length == 0)
                                {
                                    document.querySelector("#chessBoardPlateImage-" + this.frogXStart + "" + this.frogYStart).style.filter = "brightness(100%)";
                                    return;
                                }

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

    /*           */
    /* Animation */
    /*           */

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
            transform: translateY(0px) scale(100%);
        }

        50%
        {
            transform: translateY(-4px) scale(105%);
        }

        100%
        {
            transform: translateY(0px) scale(100%);
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

    @keyframes frogLoadingJump {
        0%
        {
            width: 80px;
            height: 80px;
        }

        50%
        {
            width: 120px;
            height: 120px;
        }

        100%
        {
            width: 80px;
            height: 80px;
        }
    }

    /*       */
    /* Fonts */
    /*       */

    @font-face {
        font-family: linotte-light;
        src: url("./assets/fonts/linotte_light.otf");
    }

    @font-face {
        font-family: linotte-regular;
        src: url("./assets/fonts/linotte_regular.otf");
    }

    @font-face {
        font-family: linotte-bold;
        src: url("./assets/fonts/linotte_bold.otf");
    }





    /*                  */
    /* Parent Container */
    /*                  */

    #appContainer
    {
        animation: waterFlows 2s ease-in-out infinite;
        background-repeat: repeat;
        transition: all 1s ease-in-out;
        overflow: hidden;
    }

    .pages
    {
        transition: 1.5s all ease-in-out;
    }






    /*           */
    /* Main Page */
    /*           */

    #mainPage
    {
        transform: translate(0, -100%);
        opacity: 0;
        overflow: hidden;
        font-family: linotte-light;
    }

    #mainControllingPanelHeader
    {
        font-family: linotte-bold;
    }

    #mainChessBoard
    {
        margin-top: 30px;
        margin-left: 30px;
    }

    .mainControllingPanel
    {
        background-color: rgba(255, 255, 255, 0.9);
        margin: 30px 0 0 30px;
        border-radius: 5px;
        padding: 20px;
        box-shadow: -5px 5px 5px rgba(20, 20, 20, 0.15);
    }

    .chessBoardPlates
    {
        width: 65px;
        height: 65px;
        margin: 2px;
        user-select: none;
        position: relative;
        color: white;
        font-family: linotte-bold;
        font-size: 18px;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.35);
        transition: all 0.5s ease-in-out;
        transform: scale(0%);
    }

    #frogImage
    {
        width: 50%;
        position: absolute;
        z-index: 2;
        transition: all 1.5s ease-in-out;
        scale: 0%;
    }

    .chessBoardPlatesImage
    {
        width: 65px;
        z-index: 1;
        position: absolute;
        animation: lilyPadMoves 4s ease-in-out infinite;
        filter : brightness(100%);
        transition: all 1s ease-in-out;
    }





    /*                   */
    /* Introduction Page */
    /*                   */

    #introductionPage
    {
        transform: translate(0%, -100%);
        /* background-image: linear-gradient(to bottom, #449da5, #146571); */
        background-image: url("./assets/images/background-water.svg");
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 1;
    }

    #introductionTitleContainer
    {
        overflow: hidden;
    }

    #introductionTitle
    {
        width: 75%;
        transition: all 1.25s ease-in-out;
        transform: translate(0, 100%);
        user-select: none;
    }

    #introductionDescContainer
    {
        margin-top: 24px;
        overflow: hidden;
        text-align: center;
    }

    #introductionDesc
    {
        color: rgb(245, 245, 245);
        font-family: linotte-light;
        font-size: 24px;
        transform: translate(0, -100%);
        transition: all 1.25s ease-in-out;
    }

    #introductionLoadingFrogImage
    {
        position: absolute;
        z-index: 1;
        width: 80px;
        height: 80px;
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, 160px);
        transition: all 1s ease-in-out;
        /* filter: brightness(110%); */
        opacity: 1;
    }

    #btnJumpToMain
    {
        margin-top: 16px;
        background-color: #04a74d;
        border: 1px solid rgb(20, 108, 67);
        color: white;
        font-size: 18px;
        transition: all 0.15s ease-in-out;
        opacity: 0;
        font-family: linotte-regular;
    }

    #btnJumpToMain:hover
    {
        background-color: #00602B;
    }

    #btnJumpToMain:focus
    {
        outline: none;
        box-shadow: none;
        background-color: #00602B;
    }

</style>
