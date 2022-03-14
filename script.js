function pegarDados(){
    document.querySelector(".final").style.display = "block";
    let pFaixa=document.getElementById('pFaixa').value;
    let sFaixa=document.getElementById('sFaixa').value;
    let tFaixa=document.getElementById('tFaixa').value;
    let quaFaixa=document.getElementById('quaFaixa').value;
    let quiFaixa=document.getElementById('quiFaixa').value;
    let con = parseFloat(pFaixa + sFaixa + tFaixa);
    let result = con * quaFaixa;
    let tol0 = result * quiFaixa;
    let tol1 = result - tol0;
    let tol2 = result + tol0;
    document.getElementById('result').innerHTML = result + ' Omhs' + ' com tolerância mínima de ' + tol1 + ' Omhs e máxima de ' + tol2 + ' Omhs';
}

