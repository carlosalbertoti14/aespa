//CONFIGURAÇÃO DO ANIVERSÁRIO
document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll('#DIVniver img');
    const mesAtual = new Date().getMonth() + 1; // mês atual (1 a 12)
    let encontrouAniversariante = false;

    const nivernome = [
        { nome: "WINTER", url: "url('midia/aespa_PERFIL_BG_winter.jpg')" },
        { nome: "KARINA", url: "url('midia/aespa_PERFIL_BG_karina.jpg')" },
        { nome: "NINGNING", url: "url('midia/aespa_PERFIL_BG_ningning.jpg')" },
        { nome: "GISELLE", url: "url('midia/aespa_PERFIL_BG_giselle')" },

    ];


    //configuração do aniversariante do dia
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const mesHoje = hoje.getMonth() + 1;
    const diamesHoje = `${diaAtual}/${mesHoje}`;
    let encontrouAniversarianteDoDia = false;


    imagens.forEach(img => {
        const alt = img.alt.trim(); // Ex: "Nome 17/10"
        const partes = alt.split(" ");
        if (partes.length === 2) {
            const nomeAniversariante = partes[0];
            const dataAniversario = partes[1];

/*             alert(dataAniversario)
            alert(diamesHoje) */

            if (dataAniversario ===  diamesHoje) {
                const aniversarianteDoDia = nivernome.find(item => item.nome.toLowerCase() === nomeAniversariante.toLowerCase());
                const secNiver = document.getElementById("SECniver");
                const divNiver = document.getElementById("DIVniver");

                if (aniversarianteDoDia) {
                    if (secNiver && divNiver) {
                     
                        secNiver.style.backgroundImage = aniversarianteDoDia.url;
                        
                        //atera o texto h4

                        //ativando h4

                        document.getElementById("felizniver").style.display = "block";

                        //fim ativando h4
                            
                            const mensagemAniversarioDiv = document.getElementById("felizniver");
                            if (mensagemAniversarioDiv) {
                                mensagemAniversarioDiv.innerHTML = `<h4 id="felizniver"> Feliz aniversário, ${nomeAniversariante}! Hoje, é o seu dia mais FELIZ!!!</h4>`;

                            fogosVideo.style.display = "block"; // <-------------------- ATIVA O VÍDEO AQUI
                            }

                        img.style.display = "block"; // Esconde a imagem original do aniversariante do dia

                    }
                }
            }
        }
    });

    //fim da configuração do aniversariante do mes


    imagens.forEach(img => {
        const alt = img.alt.trim(); // Ex: "Rami 17/10"
        const partes = alt.split(" ");
        if (partes.length === 2) {
            const mesAniversario = parseInt(partes[1].split("/")[1]);

            if (mesAniversario === mesAtual && !encontrouAniversarianteDoDia) {
                img.style.display = "inline-block";
                encontrouAniversariante = true;
                
            } else if (!encontrouAniversarianteDoDia) {
                img.style.display = "none";
            }
        } else {
            if (!encontrouAniversarianteDoDia) {
                img.style.display = "none";
            }
        }
    });

    // Só exibe a section se encontrou aniversariante
    if (encontrouAniversariante || encontrouAniversarianteDoDia) {
        document.getElementById("SECniver").style.display = "block";
    }
});




//FIM DA CONFIGURAÇÃO DO ANIVERSÁRIO
