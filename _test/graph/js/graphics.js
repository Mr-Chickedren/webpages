/**
* @type {HTMLCanvasElement}
*/
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

function line(fromeX,fromeY,ToX,ToY,lineWidth,color){
    ctx.beginPath();
    ctx.moveTo(fromeX,fromeY);
    ctx.lineTo(ToX,ToY);
    ctx.closePath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
}

function square(posX,posY,width,height,lineWidth,fill,lineColor,fillColor){
    ctx.beginPath();
    ctx.rect(posX,posY,width,height);
    ctx.closePath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    if(fill){
        ctx.fillStyle = fillColor;
        ctx.fill();
    }
    ctx.stroke();
}

function circle(posX,posY,radius,lineWidth,fill,lineColor,fillColor){
    ctx.beginPath();
    ctx.arc(posX,posY,radius,0,2*Math.PI,true);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    if(fill){
        ctx.fillStyle = fillColor;
        ctx.fill();
    }
    ctx.stroke();
}

function rotate(graph,centerX,centerY,angle){
    ctx.translate(centerX,centerY);
    ctx.rotate(angle);
    ctx.translate(-1*centerX,-1*centerY);

    graph;//できない　可変長でturu,falase,false,...引数[配列になる]

    ctx.translate(centerX,centerY);
    ctx.rotate(-1*angle);
    ctx.translate(-1*centerX,-1*centerY);
}

circle(100,100,50,6,true,"#acf","#fca");


line(200,200,300,250,6,"#000");
line(200,250,300,200,6,"#000");

