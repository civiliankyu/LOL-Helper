app.controller('homeController', ['$scope', '$state', 
	function($scope, $state) {
		console.log("Home Controller Loaded");

		$scope.champions = [
			{
				id :		1,
				name:		"Aatrox",
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
				name:		"Ahri",
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
				name:		"Akali",
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
				name:	"Alistar",
				position: "support",
				img: "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Alistar.png",
				price : {
					rp:585,
					ip:1350

				}
			},
			{
				id:		5,
				name:	"Amumu",
				position:	"jungle",
				img:	"http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Amumu.png",
				price : {
					rp:260,
					ip:450

				}


			},
			{
				id:		6,
				name:	"Anivia",
				position:	"mid",
				img:	"http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Anivia.png",
				price : {
					rp: 790,
					ip: 3150

				}

			},
			{
				id:		7,
				name:	"Annie",
				position:	"mid",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Annie.png",
				price : {
					rp: 260,
					ip:450
				}

			},
			{
				id:		8,
				name:	"Ashe",
				position:	"adc",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Ashe.png",
				price : {
					rp: 260,
					ip:450
				}

			},
			{
				id:		9,
				name:	"Aurelion sol",
				position:	"mid",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/AurelionSol.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		10,
				name:	"Azir",
				position:	"mid",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Azir.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		11,
				name:	"Bard",
				position:	"support",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Bard.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		12,
				name:	"Blitzcrank",
				position:	"support",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Blitzcrank.png",
				price : {
					rp: 790,
					ip:3150
				}

			},
			{
				id:		13,
				name:	"Brand",
				position:	"mid,support",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Brand.png",
				price : {
					rp: 880,
					ip:4800
				}

			},
			{
				id:		14,
				name:	"Braum",
				position:	"support",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Braum.png",
				price : {
					rp: 975,
					ip:450
				}

			},
			{
				id:		15,
				name:	"Caitlyn",
				position:	"adc",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Caitlyn.png",
				price : {
					rp: 880,
					ip:4800
				}

			},
			{
				id:		16,
				name:	"Cassiopeia",
				position:	"mid",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Cassiopeia.png",
				price : {
					rp: 880,
					ip:4800
				}

			},
			{
				id:		17,
				name:	"Cho Gath",
				position:	"mid,top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Chogath.png",
				price : {
					rp: 585,
					ip:1350
				}

			},
			{
				id:		18,
				name: "Corki",
				position:	"adc",
				img :	"http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Corki.png",
				price : {
					rp: 790,
					ip: 3150
				}
			},
			{
				id:		19,
				name:	"Darius",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Darius.png",
				price : {
					rp: 880,
					ip:4800
				}

			},
			{
				id:		20,
				name:	"Diana",
				position:	"mid",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Diana.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		21,
				name:	"Dr.Mundo",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/DrMundo.png",
				price : {
					rp: 585,
					ip:1350
				}

			},
			{
				id:		22,
				name:	"Draven",
				position:	"adc",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Draven.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		23,
				name:	"Ekko",
				position:	"jungle,top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Ekko.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		24,
				name:	"Elise",
				position:	"jungle",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Elise.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		25,
				name:	"Evelynn",
				position:	"jungle",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Evelynn.png",
				price : {
					rp: 1350,
					ip:585
				}

			},
			{
				id:		26,
				name:	"Ezreal",
				position:	"adc",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Ezreal.png",
				price : {
					rp: 880,
					ip:4800
				}

			},
			{
				id:		27,
				name:	"Fiddlesticks",
				position:	"jungle",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/FiddleSticks.png",
				price : {
					rp: 585,
					ip:1350
				}

			},
			{
				id:		28,
				name:	"Fiora",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Fiora.png",
				price : {
					rp: 880,
					ip:4800
				}

			},
			{
				id:		29,
				name:	"Fizz",
				position:	"mid",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Fizz.png",
				price : {
					rp: 880,
					ip:4800
				}

			},
            {
                id:		30,
                name:	"Galio",
                position:	"mid",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Galio.png",
                price : {
                    rp: 880,
                    ip:4800
                }

            },






        ],

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

}
]);