const args=require('parse-cli-arguments')({
    debug:true,
    options:{
        origem:{defaultOption:true,type:'',flag:true,defaultValue:0},
        destino:{type:'',flag:true,defaultValue:0},
        tempo:{type:'',flag:true,defaultValue:0}
    }
})

function calcVal(params) {
    var minutos = params.minutos;
    var valor = params.valor;
    var tempo = params.tempo;

    var complano,semplano;
    // origem / destino inválido;
    if(valor === -1) {
        complano='-';
        semplano='-';
    } else {
        var restante = tempo > minutos ? tempo-minutos : 0;
        complano=(restante*(valor*1.1)).toFixed(2);
        semplano=(tempo*valor).toFixed(2);
    }
    return {
        complano,
        semplano
    }
} // calcVal

function fmtNum(num) {
    if(num == '-') return num;
    num=num+'';
    var index=num.indexOf('.');
    var decs=num.substr(index+1);
    num=num.substr(0,index);
    num=num.split('').reverse().join('').replace(/[\d]{3}/g,'$&.').split('').reverse().join('').replace(/^\./,'');

    return 'R$ '+num+','+decs;
}

let {tempo,origem,destino} = args;
tempo=parseInt(tempo) || 0;
destino=parseInt(destino) || 0;
origem=parseInt(origem) || 0;

const planos=[
    {nome: 'Fale Muito 30', minutos: 30},
    {nome: 'Fale Muito 60', minutos: 60},
    {nome: 'Fale Muito 120', minutos: 120},
    {nome: 'Normal', minutos: 0}
];


const valores=[
    {
        origem:11,
        destino:16,
        valor:1.90
    },
    {
        origem:16,
        destino:11,
        valor:2.90
    },
    {
        origem:11,
        destino:17,
        valor:1.70
    },
    {
        origem:17,
        destino:11,
        valor:2.70
    },
    {
        origem:11,
        destino:18,
        valor:0.90
    },
    {
        origem:18,
        destino:11,
        valor:1.90
    }
];

const obj=valores.find(function(elem) {
    return elem.origem === origem && elem.destino === destino;
});
const valor = obj ? obj.valor : -1;

var arrRet=[];

planos.forEach(elem=>{
    var objVal=calcVal({
        minutos:elem.minutos,
        valor:valor,
        tempo:tempo
    });
    arrRet.push({
        plano:elem.nome,
        valor:fmtNum(objVal.complano)
    });
});

console.log(arrRet);