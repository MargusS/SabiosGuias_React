const infoText = [
    {
        title: "La Isleta",
        info1: "Abierta al mar desde el puerto hasta las Canteras.",
        info2: "En sus inicios barrio de pescadores y antiguos",
        info3: "arenales que ocupaban el istmo de lado a lado",
        info4: "Recorriendo sus calles conocerás la evolución",
        info5: "del barrio a través de la mano de nuestros sabios.",
        info6: ""
    },
    {
        title: "Castillo de La Luz",
        info1: "El castillo se encuentra en plena ciudad,",
        info2: "entre la playa de Las Canteras y el Puerto.",
        info3: "Esta fortificación antigua de la provincia",
        info4: "se defendió de ataques piratas en épocas pasadas.",
        info5: "Actualmente está declarado Monumento Histórico.",
        info6: ""
    },
    {
        title: "Real Club Victoria",
        info1: "Club centenario fundado a principios del siglo XX",
        info2: "El nombre de Victoria en honor a la Reina Victoria",
        info3: "y sus colores en homenaje al equipo de fútbol ",
        info4: "de Newcastle donde estudió interno el futbolista",
        info5: "Pepe Conçalves, fundador del club.",
        info6: "Junto a otros equipos formo la union deportiva."
    },
    {
        title: "Factoria Escobio",
        info1: "Esta fábrica se encontraba en la actual ",
        info2: "plaza de La Puntilla. Fue inaugurada en 1917 ",
        info3: "y perduró hasta los años 50. ",
        info4: "Era una de muchos de los negocios que habían",
        info5: "relacionados con el pescado, en el Confital.",
        info6: ""
    }
]

AFRAME.registerComponent('draw-canvas', {
    schema: {
        pos: { type: 'number' }
    },

    init: function () {
        this.canvas = document.getElementById("my-canvas");
        this.ctx = this.canvas.getContext('2d');
        this.texture = null;

        this.el.addEventListener('loaded', e => {

            this.texture = new THREE.CanvasTexture(this.canvas);

            let mesh = this.el.getObject3D('mesh');
            mesh.material.map = this.texture;

        });

        drawTextInfo(this.ctx, this.data.pos);

    },

    tick: function () {
        if (this.texture) this.texture.needsUpdate = true;
    }
});

function drawTextInfo(ctx, pos) {
    ctx.fillStyle = "#ff6868"
    ctx.fillRect(0, 0, 350, 350);
    ctx.fillStyle = "#FFFFFF";
    if (pos == 0) {
        ctx.font = "30px Arial";
        ctx.fillText(infoText[pos].title, 125, 75);
        ctx.font = "15px Arial";
        ctx.fillText(infoText[pos].info1, 10, 125);
        ctx.fillText(infoText[pos].info2, 10, 150);
        ctx.fillText(infoText[pos].info3, 10, 175);
        ctx.fillText(infoText[pos].info4, 10, 200);
        ctx.fillText(infoText[pos].info5, 10, 225);
    }
    if (pos == 1) {
        ctx.font = "30px Arial";
        ctx.fillText(infoText[pos].title, 55, 75);
        ctx.font = "15px Arial";
        ctx.fillText(infoText[pos].info1, 10, 125);
        ctx.fillText(infoText[pos].info2, 10, 150);
        ctx.fillText(infoText[pos].info3, 10, 175);
        ctx.fillText(infoText[pos].info4, 10, 200);
        ctx.fillText(infoText[pos].info5, 10, 225);
    }
    if (pos == 2) {
        ctx.font = "30px Arial";
        ctx.fillText(infoText[pos].title, 55, 75);
        ctx.font = "15px Arial";
        ctx.fillText(infoText[pos].info1, 10, 125);
        ctx.fillText(infoText[pos].info2, 10, 150);
        ctx.fillText(infoText[pos].info3, 10, 175);
        ctx.fillText(infoText[pos].info4, 10, 200);
        ctx.fillText(infoText[pos].info5, 10, 225);
        ctx.fillText(infoText[pos].info6, 10, 250);
    }
    if (pos == 3) {
        ctx.font = "30px Arial";
        ctx.fillText(infoText[pos].title, 65, 75);
        ctx.font = "15px Arial";
        ctx.fillText(infoText[pos].info1, 10, 125);
        ctx.fillText(infoText[pos].info2, 10, 150);
        ctx.fillText(infoText[pos].info3, 10, 175);
        ctx.fillText(infoText[pos].info4, 10, 200);
        ctx.fillText(infoText[pos].info5, 10, 225);
        ctx.fillText(infoText[pos].info6, 10, 250);
    }


}
