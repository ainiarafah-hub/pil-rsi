function startDetection(){

    let jumlah = Math.floor(Math.random()*40);

    document.getElementById("count").innerHTML = jumlah;

    if(jumlah==30){

        document.getElementById("status").innerHTML="✅ Sesuai";

    }

    else if(jumlah<30){

        document.getElementById("status").innerHTML="❌ Kurang";

    }

    else{

        document.getElementById("status").innerHTML="⚠️ Berlebih";

    }

}