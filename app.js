//--------Express freamwork ornegi * siralama acisinda çok onemli dikkat..------------
//---------ejs(embedded javascript nodejs freamwork'ün bir paketi)-------------
var express = require("express");
var app =express();

app.use(express.static("public"));
app.set("view engine","ejs");//ejs'leri otomatik olarak uzantısına set ettik.





app.get('/',function (req,res) {
	res.render("home");//ejs(embedded javascript url'deki parametreleri okuyabiliriz. )
});

app.get("/test/:herhangiBiseygelebilir/yorum/:", function (req,res) {
	res.send("Bu bir yorum bolumudur.");
});



app.get("/test",function (req,res) {
	res.send("Bu bir test denemesidir.");
});

app.get("/test/:bisey",function (req,res) {
    var testParametre = req.params.bisey;
	res.render("test", {testParametre});
});



app.get("*", function (req,res) {//genel bi respons döndürme
	res.send("Sayfa Bulunamadi !!!");
});



var server = app.listen(3000,function () {
	console.log("Sunucu suanda port numarasinda: %d ", server.address().port);
});