<template>
    <div id="app">
        <div class="container-fluid m-0 m-lg-0 vh-100">
            <div class="row" id="appContainer">
                <div id="appContainer">
                    <div class="row">
                        <div class="col-lg-12">
                            <div id="header">
                                <h1>Travelling Knight</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-1"></div>
                        <div class="col-lg-10">
                            <div id="mainContent" class="m-5">
                                <!-- <div class="row">
                                    <div class="col-lg-6 col-6">
                                        <div class="row">
                                            <div class="col-lg-3 col-3">
                                                <div class="chessBoardPlates">
                                                    <img src="./assets/images/grass.png" class="chessBoardPlatesImage">
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-3">
                                                <div class="chessBoardPlates">
                                                    <img src="./assets/images/grass.png" class="chessBoardPlatesImage">
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-3">
                                                <div class="chessBoardPlates">
                                                    <img src="./assets/images/grass.png" class="chessBoardPlatesImage">
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-3">
                                                <div class="chessBoardPlates">
                                                    <img src="./assets/images/grass.png" class="chessBoardPlatesImage">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-6">
                                        <div class="row">
                                            <div class="col-lg-3 col-3">
                                                <div class="chessBoardPlates">
                                                    <img src="./assets/images/grass.png" class="chessBoardPlatesImage">
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-3">
                                                <div class="chessBoardPlates">
                                                    <img src="./assets/images/grass.png" class="chessBoardPlatesImage">
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-3">
                                                <div class="chessBoardPlates">
                                                    <img src="./assets/images/grass.png" class="chessBoardPlatesImage">
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-3">
                                                <div class="chessBoardPlates">
                                                    <img src="./assets/images/grass.png" class="chessBoardPlatesImage">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import chessBoardPlateImageAsset from './assets/images/lilypad2.png';

    export default {
        name: 'App',
        mounted()
        {
            this.LoadBoard();
        },
        methods: 
        {
            LoadBoard()
            {
                const mainContent = document.querySelector("#mainContent");

                for(let i = 0; i < 8; i++)
                {
                    const chessBoardPlateRowContainer = document.createElement("div");

                    for(let j = 0; j < 8; j++)
                    {
                        const chessBoardPlateImage = document.createElement("img");
                        chessBoardPlateImage.src = chessBoardPlateImageAsset;
                        chessBoardPlateImage.className = "chessBoardPlatesImage";

                        const chessBoardPlate = document.createElement("div");
                        chessBoardPlate.className = "chessBoardPlates";
                        chessBoardPlate.appendChild(chessBoardPlateImage);
                        
                        chessBoardPlateRowContainer.appendChild(chessBoardPlate);
                    }

                    mainContent.appendChild(chessBoardPlateRowContainer);
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

    #mainContent
    {
        border-radius: 10px;
        padding: 30px;
        text-align: center;
    }

    .chessBoardPlates
    {
        width: 50px;
        height: 50px;
        display: inline-block;
        margin: 2px;
    }

    .chessBoardPlatesImage
    {
        width: 100%;
    }

</style>
