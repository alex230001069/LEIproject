/*const nameChamp = document.getElementById('nameChamp');

const enviarName = document.getElementById("sendName");




async function getIconChamp(){
    console.log("teste");
    console.log(nameChamp.value);

    iconChamp.src = 'https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/'+ nameChamp.value+'.png';
    
}*/


// Helper to get random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1; //Pra não calhar o 0
}

async function fillTeamButtons() {
    const container = document.getElementById('button-container');
    container.innerHTML = ''; //Isto limpa o container

    for (let i = 1; i <= 6; i++) {
        const idTeam = getRandomInt(60);
        
        try {
            const response = await fetch(`https://v3.football.api-sports.io/teams?id=${idTeam}`, {
                "method": "GET",
                "headers": {
                    "x-apisports-key": "0fc8c78b4a67bec892a0a377c63f9dd1"
                }
            });

            if (!response.ok) throw new Error("Erro na API");

            const data = await response.json();
            

            if (data.response && data.response.length > 0) {

            if(data.response[0].team.national == false){

            const logoUrl = data.response[0].team.logo; //imagem do clube
                
            // cria o botão
            const btn = document.createElement('button');
            btn.className = 'my-custom-button';
                
            // css para o butão
            btn.style.backgroundImage = `url('${logoUrl}')`;
            btn.style.backgroundSize = 'cover';
            btn.style.width = '100px';
            btn.style.height = '100px';

            btn.onclick = () => {
                console.log(`You clicked team: ${data.response[0].team.name}`);
            };

            container.appendChild(btn);

            }
            else{
                i--;
            }
            }
            else{
                i--;
            }
        
        } catch (error) {
            console.error("Failed to fetch team:", error);
        }
    }
    
}



fillTeamButtons();