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
			{
				id:		31,
				name:	"Gangplank",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Gangplank.png",
				price : {
					rp: 790,
					ip:3150
				}

			},
			{
				id:		32,
				name:	"Garen",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Garen.png",
				price : {
					rp: 260,
					ip:450
				}

			},
			{
				id:		33,
				name:	"Gnar",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Gnar.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		34,
				name:	"Hecarim",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Hecarim.png",
				price : {
					rp: 880,
					ip:4800
				}

			},
			{
				id:		35,
				name:	"Heimerdinger",
				position:	"mid,top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Heimerdinger.png",
				price : {
					rp: 790,
					ip:3150
				}

			},
			{
				id:		36,
				name:	"Illaoi",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Illaoi.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		37,
				name:	"Irelia",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Irelia.png",
				price : {
					rp: 880,
					ip:4800
				}

			},
			{
				id:		38,
				name:	"Janna",
				position:	"support",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Janna.png",
				price : {
					rp: 585,
					ip:1350
				}

			},
			{
				id:		39,
				name:	"Jayce",
				position:	"mid,top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Jayce.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		40,
				name:	"Jhin",
				position:	"adc",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Jhin.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		41,
				name:	"Jinx",
				position:	"adc",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Jinx.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		41,
				name:	"Kalista",
				position:	"adc",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Kalista.png",
				price : {
					rp: 975,
					ip:6300
				}

			},
			{
				id:		41,
				name:	"Karma",
				position:	"mid,support",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Karma.png",
				price : {
					rp: 585,
					ip:1350
				}

			},
			{
				id:		42,
				name:	"Katarina",
				position:	"mid",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Katarina.png",
				price : {
					rp: 790,
					ip:3150
				}

			},
			{
				id:		43,
				name:	"Kayle",
				position:	"mid,top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Kayle.png",
				price : {
					rp: 260,
					ip:450
				}

			},
			{
				id:		44,
				name:	"Kennen",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Kennen.png",
				price : {
					rp: 880,
					ip:4800
				}

			},
			{
				id:		45,
				name:	"Khazix",
				position:	"jungle",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Khazix.png",
				price : {

				}

			},
			{
				id:		46,
				name:	"Kindred",
				position:	"jungle",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Kindred.png",
				price : {

				}

			},
			{
				id:		47,
				name:	"LeeSin",
				position:	"jungle",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/LeeSin.png",
				price : {

				}

			},
			{
				id:		48,
				name:	"Leona",
				position:	"support",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Leona.png",
				price : {

				}

			},
			{
				id:		49,
				name:	"Lissandra",
				position:	"mid, top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Lissandra.png",
				price : {

				}

			},
            {
                id:		50,
                name:	"Lucian",
                position:	"adc",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Lucian.png",
                price : {

                }

            },
            {
                id:		51,
                name:	"Lulu",
                position:	"top",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Lulu.png",
                price : {

                }

            },
            {
                id:		52,
                name:	"Lux",
                position:	"adc, mid, support",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Lux.png",
                price : {

                }

            },
            {
                id:		53,
                name:	"Malphite",
                position:	"top",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Malphite.png",
                price : {

                }

            },
            {
                id:		54,
                name:	"Malzahar",
                position:	"mid, jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Malzahar.png",
                price : {

                }

            },
            {
                id:		55,
                name:	"Maokai",
                position:	"jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Maokai.png",
                price : {

                }

            },
            {
                id:		56,
                name:	"Master Yi",
                position:	"jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/MasterYi.png",
                price : {

                }

            },
            {
                id:		57,
                name:	"Miss Fortune",
                position:	"adc",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/MissFortune.png",
                price : {

                }

            },
            {
                id:		58,
                name:	"Mordekaiser",
                position:	"top",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Mordekaiser.png",
                price : {

                }

            },
            {
                id:		59,
                name:	"Morgana",
                position:	"support",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Morgana.png",
                price : {

                }

            },
            {
                id:		60,
                name:	"Nami",
                position:	"support",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Nami.png",
                price : {

                }

            },
            {
                id:		61,
                name:	"Nasus",
                position:	"top",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Nasus.png",
                price : {

                }

            },
            {
                id:		62,
                name:	"Nautilus",
                position:	"top, support, jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Nautilus.png",
                price : {

                }

            },
            {
                id:		63,
                name:	"Nidalee",
                position:	"mid, top, jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Nidalee.png",
                price : {

                }

            },
            {
                id:		64,
                name:	"Nocturne",
                position:	"mid, jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Nocturne.png",
                price : {

                }

            },
            {
                id:		65,
                name:	"Nunu",
                position:	"mid, jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Nunu.png",
                price : {

                }

            },
            {
                id:		66,
                name:	"Olaf",
                position:	"top",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Olaf.png",
                price : {

                }

            },
            {
                id:		67,
                name:	"Orianna",
                position:	"mid",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Orianna.png",
                price : {

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