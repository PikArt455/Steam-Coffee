reservation coter html
<section id="cld">
        <section id='enteteCld'>
            <h1 id='cldT'>JANVIER</h1>
            <section id="avantEtapres">
                <button id='avant' class="cldBtn">◄</button>
                <button id='apres' class="cldBtn" style="margin-left: 20%" >►</button>
            </section>
        </section>

        <section id="cldBoite">
            <div id="jours">
                <div class="jour">lun</div>
                <div class="jour">mar</div>
                <div class="jour">mer</div>
                <div class="jour">jeu</div>
                <div class="jour">ven</div>
                <div class="jour">sam</div>
                <div class="jour">dim</div>
            </div>

            <div id="semaine1">
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
            </div>

            <div id="semaine2" class="semaine">
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
            </div>

            <div id="semaine3" class="semaine">
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
            </div>

            <div id="semaine4" class="semaine">
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
            </div>

            <div id="semaine5" class="semaine">
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
            </div>

            <div id="semaine6" class="semaine">
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
            </div>

        </section>
    </section>


coter CSS 

.form-label{
    color: $primary;
    font-family: Arial, Helvetica, sans-serif;

}

#cld{
    width: 60%;
    height: 80%;
    background-color: rgb(118,118,118);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

#enteteCld{
    width: 100%;
    height: 18%;
    background-color: rgb(124 124 124);
    display: flex;
    flex-direction: column;
}

#cldT{
    width: 100%;
    height: 66.666%;
    color: white;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
#avantEtapres{
    width: 100%;
    height: 33.333%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(60, 60, 60);
}

.cldBtn{
    width: 40%;
    height: 100%;
    border: none;
    background-color: rgb(90, 90, 90);
    color: white;
    outline: none;
    transition: 0.2s;
}

.cldBtn:hover{
    background-color: rgb(75, 75, 75);
}

#cldBoite{
    width: 100%;
    height: 82%;
    background-color: rgb(143,  143, 143);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#jours{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.jour{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0;
    font-size: 18px;
}

.semaine{
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;  
}

.case{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s;
    color: white;
    margin: 0;
    font-size: 19px;
}

.case:hover{
    background-color: rgb(110, 110, 110);
}

