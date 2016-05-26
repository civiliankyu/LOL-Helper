app.controller('homeController', ['$scope', '$state', 
	function($scope, $state) {
		console.log("Home Controller Loaded");

		$scope.champions = [
			{
				id :		1,
				name:		"aatrox",
				position:	"top",
				img: "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Aatrox.png",
				price : {
					rp : 975,
					ip : 6300
				},
				skills : {
					q : {
						name : "Dark Flight",
						desc : "Aatrox takes flight and slams down at a targeted location, dealing damage and knocking up enemies at the center of impact. Aatrox takes flight and slams down at target location, dealing 70/115/160/205/250 (+60% bonus Attack Damage) physical damage and knocking up enemies at the center of impact for 1 second."
					},
					w : {
						name : "Blood Thirst / Blood Price",
						desc : "While toggled on Aatrox deals bonus damage every third subsequent attack at the expense of his own Health. While toggled off Aatrox restores Health every third subsequent attack. Toggle Off: Blood Thirst: Every third attack, Aatrox restores 20/25/30/35/40 (+25% bonus Attack Damage) Health, increased by 200% when below half Health. Toggle On: Blood Price: Every third attack, Aatrox deals 60/95/130/165/200 (+100% bonus Attack Damage) bonus physical damage and loses Health."
					}
				}
			},
			{
				id :		2,
				name:		"ahri",
				position:	"mid",
				img:	"http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Ahri.png",
				price : {
					rp : 880,
					ip : 4800
				},
				skills : {

				}
			},
			{
				id :		3,
				name:		"akali",
				position:	"mid, top",
				img: "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Akali.png",
				price : {
					rp : 790,
					ip : 3150
				},
				skills :{

				}
			},
			{
				id :		4,
				name:	"alistar",
				position: "support",
				img: "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Alistar.png",
				price : {
					rp:585,
					ip:1350

				}
			},
			{
				id:		5,
				name:	"amumu",
				position:	"jungle",
				img:	"http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Amumu.png",
				price : {
					rp:260,
					ip:450

				}


			},
			{
				id:		6,
				name:	"anivia",
				position:	"mid",
				img:	"http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Anivia.png",
				price : {
					rp: 790,
					ip: 3150

				}

			},
			{
				id:		7,
				name:	"annie",
				position:	"mid",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Annie.png",
				price : {
					rp: 260,
					ip:450
				}

			},
			{
				id:		8,
				name:	"ashe",
				position:	"adc",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Ashe.png",
				price : {
					rp: 260,
					ip:450
				}

			},
			{
				id:		9,
				name:	"aurelion sol",
				position:	"mid",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/AurelionSol.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		10,
				name:	"azir",
				position:	"mid",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Azir.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		11,
				name:	"bard",
				position:	"support",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Bard.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		12,
				name:	"blitzcrank",
				position:	"support",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Blitzcrank.png",
				price : {
					rp: 790,
					ip:3150
				}

			},
			{
				id:		13,
				name:	"brand",
				position:	"mid,support",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Brand.png",
				price : {
					rp: 880,
					ip:4800
				}

			},
			{
				id:		14,
				name:	"braum",
				position:	"support",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Braum.png",
				price : {
					rp: 975,
					ip:450
				}

			},
			{
				id:		15,
				name:	"caitlyn",
				position:	"adc",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Caitlyn.png",
				price : {
					rp: 880,
					ip:4800
				}

			},
			{
				id:		16,
				name:	"cassiopeia",
				position:	"mid",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Cassiopeia.png",
				price : {
					rp: 880,
					ip:4800
				}

			},
			{
				id:		17,
				name:	"cho gath",
				position:	"mid,top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Chogath.png",
				price : {
					rp: 260,
					ip:450
				}

			}
		];

		$scope.doSomething = function () {
			console.log("I did something");
		};

		var champions_size = $scope.champions.length;
		var max_row = Math.ceil(champions_size / 4);

		console.log(champions_size, max_row);

		function populateData() {
			var html = "";
			var current_champion = 0;

			for (row = 0; row < max_row; row++) {
				html += "<div class='row'>";
				for (col = 0; col < 4; col++) {
					if ($scope.champions[current_champion]) {
						html += "<div class='col-md-3 col-lg-3 col-xs-3'>"
							+ "<img class='champion-grid-img' src='" + $scope.champions[current_champion].img + "'>"
							+ "<div class='champion-grid-name'>" + $scope.champions[current_champion].name + "</div>"
							+ "</div>";
						current_champion++;
					}
				}
				html += "</div>"
			}
			$('#champion-grid').html(html);
		}


		$(document).ready(function () {
			populateData();
		});

}]);