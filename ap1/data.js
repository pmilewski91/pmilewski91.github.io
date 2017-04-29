var data = [];
var user = {
	"name" : "",
	"pass" : "",
	"id" : ""
}


function checkUser(name, pass){
	 user = {
		"name" : name,
		"pass" : pass,
		"id" : ""
	}
	let loggedIn = false;
	$.ajax({
		url: 'https://api.mlab.com/api/1/databases/przepisy/collections/users?apiKey=Sj7Ov5G_CDq68W2dPY5mNBIOybU14QLw',
		success: function(result){
			for(let dbUser of result){
				if(user.name == dbUser.name && user.pass == dbUser.pass){
					$('#loading').css({'display':'none'});
					user.id = dbUser._id.$oid;
					getData();
					loggedIn = true;
					$('navigation').css({'display': 'block'});
					$('#lastAddShow').css({'display': 'flex'});
					$('#loginPanel, #bg-login').css({'display': 'none'});
					document.querySelector('#welcomeUser').innerHTML="Witaj "+user.name;

				}
			}
			if(!loggedIn){
				alert("Niepoprawne dane do logowania");
				$('#loading').css({'display':'none'});
			}
		 },
		error: function(){
			alert('Bład połączenia z bazą danych!');
		}});
}

function getData(){
	$('#loading').css({'display':'block'});
	$.ajax({
		url: `https://api.mlab.com/api/1/databases/przepisy/collections/przepisy_${user.id}?apiKey=Sj7Ov5G_CDq68W2dPY5mNBIOybU14QLw`,
		success: function(result){
			data = [];
			for(let przepis of result){
				data.push(przepis);
			}
			upComponents();
			$('#loading').css({'display':'none'});
		 },
		error: function(){
			alert('Bład połączenia z bazą danych!');
			$('#loading').css({'display':'none'});
		}});
};
