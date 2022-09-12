
const firebaseConfig = {
    apiKey: "AIzaSyA-y1rPTGBQBWXAhtOzmY-1Bc34mCKslL4",
    authDomain: "garden-smart.firebaseapp.com",
    databaseURL: "https://garden-smart-default-rtdb.firebaseio.com",
    projectId: "garden-smart",
    storageBucket: "garden-smart.appspot.com",
    messagingSenderId: "1021799938505",
    appId: "1:1021799938505:web:834157ae32c35b3aac1018",
};

firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
var database = firebase.database();

var btnOn = document.getElementById("btnOnId_01");
var btnoff = document.getElementById("btnOffId_01");
var btnOn1 = document.getElementById("btnOnId_02");
var btnoff1 = document.getElementById("btnOffId_02");
var btnOn2 = document.getElementById("btnOnId_03");
var btnoff2 = document.getElementById("btnOffId_03");
// - get auto status from Firebase
database.ref("/TT_IoT/auto").on("value", function (snapshot) {
    var temp = snapshot.val();
    if (temp == 1) {
        document.getElementById("trangThaiAuto").innerHTML = "on";
    }
    else {
        document.getElementById("trangThaiAuto").innerHTML = 'off';
    }
});
//-get bump status from Firebase-----
database.ref("/TT_IoT/bom").on("value", function (snapshot) {
    var temp = snapshot.val();
    if (temp == 1) {
        document.getElementById("trangThaiBom").innerHTML = "on";
    }
    else {
        document.getElementById("trangThaiBom").innerHTML = 'off';
    }
});
//-get bump status from Firebase-----
database.ref("/TT_IoT/quat").on("value", function (snapshot) {
    var temp = snapshot.val();
    if (temp == 1) {
        document.getElementById("trangThaiQuat").innerHTML = "on";
    }
    else {
        document.getElementById("trangThaiQuat").innerHTML = 'off';
    }
});
//get Temp from Firebase-----
database.ref("/TT_IoT/Temp").on("value", function (snapshot) {
    var temp = snapshot.val();
    document.getElementById("nhietDo").innerHTML = temp;
});
//get Hum from Firebase-----
database.ref("/TT_IoT/Hum").on("value", function (snapshot) {
    var temp = snapshot.val();
    document.getElementById("doAm").innerHTML = temp;
});
//get max of temp
database.ref("/TT_IoT/maxOfTemp").on("value", function (snapshot) {
    var temp = snapshot.val();
    document.getElementById('results1').innerHTML = `Max of humidity: ${temp} &deg C`
});
//get max of hum
database.ref("/TT_IoT/maxOfHum").on("value", function (snapshot) {
    var temp = snapshot.val();
    document.getElementById('results').innerHTML = `Max of humidity: ${temp} %`
});
//=========================================================================
btnOn.onclick = function () {
    document.getElementById("trangThaiBom").innerHTML = "on"
    database.ref("/TT_IoT").update({
        "bom": 1
    })
}
btnoff.onclick = function () {
    document.getElementById("trangThaiBom").innerHTML = "off"
    database.ref("/TT_IoT").update({
        "bom": 0
    });
}
//==========================================================================
btnOn1.onclick = function () {
    document.getElementById("trangThaiQuat").innerHTML = "on"
    database.ref("/TT_IoT").update({
        "quat": 1
    })
}
btnoff1.onclick = function () {
    document.getElementById("trangThaiQuat").innerHTML = "off"
    database.ref("/TT_IoT").update({
        "quat": 0
    });
}
// ===========================================================
btnOn2.onclick = function () {
    document.getElementById("trangThaiAuto").innerHTML = "on"
    database.ref("/TT_IoT").update({
        "auto": 1
    })
}
btnoff2.onclick = function () {
    document.getElementById("trangThaiAuto").innerHTML = "off"
    database.ref("/TT_IoT").update({
        "auto": 0
    });
}
//get data form input----



function submitForm(event) {
    event.preventDefault();
    var ele = document.getElementById("valueInput1");
    if(document.getElementById("trangThaiAuto").innerHTML == "on"){
    document.getElementById('results1').innerHTML = `max of tempurature: ${ele.value} &deg C`
    //write date to firebase
    database.ref("/TT_IoT").update({
        "maxOfTemp": Number(ele.value)
    })
    }
    if(document.getElementById("trangThaiAuto").innerHTML == "off"){
        alert("turn on auto")
    }
}

function submitForm1(event) {
    event.preventDefault();
    var ele = document.getElementById("valueInput");
    if(document.getElementById("trangThaiAuto").innerHTML == "on"){
    document.getElementById('results').innerHTML = `Max of humidity: ${ele.value} %`
    database.ref("/TT_IoT").update({
        "maxOfHum": Number(ele.value)
    })
    }
    if(document.getElementById("trangThaiAuto").innerHTML == "off"){
        alert("turn on auto")
    }
}

