<template>
    <div id="app">
        <div class="container-fluid vh-100">
            <div class="row" id="appContainer">
                <div class="row">
                    <div class="col-lg-12">
                        <div id="header">
                            <h1>Travelling Knight</h1>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3">
                        <div class="controllingPanel">
                            <div class="row">
                                <div class="col-lg-12">
                                    Start Place :
                                </div>
                                <div class="col-lg-12">
                                    <input type="text" id="txtStartPlace" class="form-control" maxlength="2">
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
                                    <input type="text" id="txtEndPlace" class="form-control" maxlength="2">
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
        mounted()
        {
            const frogX = 2;
            const frogY = 5;

            this.LoadBoard(frogX, frogY);
        },
        methods: 
        {
            LoadBoard(frogX, frogY)
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
                            chessBoardPlateImage.src = chessBoardPlateImageAsset;
                            chessBoardPlateImage.className = "chessBoardPlatesImage";

                            chessBoardPlate.appendChild(chessBoardPlateImage);
                            if(j == frogX && 8 - i == frogY)
                            {
                                const frog = document.createElement("img");
                                frog.src = frogAsset;
                                frog.className = "frogImage";

                                chessBoardPlate.appendChild(frog);
                            }
                        }

                        chessBoardPlateRowContainer.appendChild(chessBoardPlate);
                    }

                    mainContent.appendChild(chessBoardPlateRowContainer);
                }
            },
            PlaceFrog()
            {
                const txtStartPlace = document.querySelector("#txtStartPlace");
                if(txtStartPlace.value != "" && txtStartPlace.value.length == 2)
                {
                    const frogX = txtStartPlace.value[0].charCodeAt(0) - 64;
                    const frogY = txtStartPlace.value[1];

                    this.LoadBoard(frogX, frogY);
                }
            },
            StartTravel()
            {
                
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
            transform: translateY(-3px);
        }

        100%
        {
            transform: translateY(0px);
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

    .frogImage
    {
        width: 50%;
        position: absolute;
        z-index: 2;
    }

    .chessBoardPlatesImage
    {
        width: 100%;
        z-index: 1;
        position: absolute;
        animation: lilyPadMoves 4s ease-in-out infinite;
    }

</style>
