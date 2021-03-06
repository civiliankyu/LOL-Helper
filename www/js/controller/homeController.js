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
                position:	"jungle",
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
			{
				id:		68,
				name:	"Pantheon",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Pantheon.png",
				price : {

				}

			},
			{
				id:		68,
				name:	"Poppy",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Poppy.png",
				price : {

				}

			},{
				id:		69,
				name:	"Quinn",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Quinn.png",
				price : {

				}

			},{
				id:		70,
				name:	"Rammus",
				position:	"jungle",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Rammus.png",
				price : {

				}

			},{
				id:		71,
				name:	"Rek'Sai",
				position:	"jungle",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/RekSai.png",
				price : {

				}

			},{
				id:		72,
				name:	"Reneckton",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Renekton.png",
				price : {

				}

			},{
				id:		73,
				name:	"Rengar",
				position:	"jungle",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Rengar.png",
				price : {

				}

			},{
				id:		74,
				name:	"Riven",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Riven.png",
				price : {

				}

			},{
				id:		75,
				name:	"Rumble",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Rumble.png",
				price : {

				}

			},{
				id:		76,
				name:	"Ryze",
				position:	"mid,top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Ryze.png",
				price : {

				}

			},{
				id:		77,
				name:	"Sejuani",
				position:	"jungle",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Sejuani.png",
				price : {

				}

			},{
				id:		78,
				name:	"Shaco",
				position:	"jungle",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Shaco.png",
				price : {

				}

			},{
				id:		79,
				name:	"Shen",
				position:	"top",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Shen.png",
				price : {

				}

			},
            {
				id:		80,
				name:	"Shyvana",
				position:	"jungle",
				img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Shyvana.png",
				price : {

				}

			},
            {
                id:		81,
                name:	"Singed",
                position:	"top",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Singed.png",
                price : {

                }

            },
            {
                id:		82,
                name:	"Sion",
                position:	"top, jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Sion.png",
                price : {

                }

            },

            {
                id:		83,
                name:	"Sivir",
                position:	"adc",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Sivir.png",
                price : {

                }

            },
            {
                id:		84,
                name:	"Skarner",
                position:	"jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Skarner.png",
                price : {

                }

            },
            {
                id:		85,
                name:	"Sona",
                position:	"support",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Sona.png",
                price : {

                }

            },
            {
                id:		86,
                name:	"Soraka",
                position:	"support",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Soraka.png",
                price : {

                }

            },
            {
                id:		87,
                name:	"Swain",
                position:	"mid, top",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Swain.png",
                price : {

                }

            },
            {
                id:		88,
                name:	"Syndra",
                position:	"mid, top",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Syndra.png",
                price : {

                }

            },
            {
                id:		89,
                name:	"TahmKench",
                position:	"support",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/TahmKench.png",
                price : {

                }

            },
            {
                id:		90,
                name:	"Taliyah",
                position:	"jungle, mid",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Taliyah.png",
                price : {

                }

            },
            {
                id:		91,
                name:	"Talon",
                position:	"mid",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Talon.png",
                price : {

                }

            },
            {
                id:		92,
                name:	"Taric",
                position:	"support",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Taric.png",
                price : {

                }

            },
            {
                id:		93,
                name:	"Teemo",
                position:	"top, jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Teemo.png",
                price : {

                }

            },
            {
                id:		94,
                name:	"Thresh",
                position:	"support",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Thresh.png",
                price : {

                }

            },
            {
                id:		95,
                name:	"Tristana",
                position:	"adc",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Tristana.png",
                price : {

                }

            },
            {
                id:		96,
                name:	"Trundle",
                position:	"top",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Trundle.png",
                price : {

                }

            },
            {
                id:		97,
                name:	"Tryndamere",
                position:	"top, jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Tryndamere.png",
                price : {

                }

            },
            {
                id:		98,
                name:	"TwistedFate",
                position:	"mid",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/TwistedFate.png",
                price : {

                }

            },
            {
                id:		99,
                name:	"Twitch",
                position:	"jungle, adc",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Twitch.png",
                price : {

                }

            },
            {
                id:		100,
                name:	"Udyr",
                position:	"jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Udyr.png",
                price : {

                }

            },
            {
                id:		101,
                name:	"Urgot",
                position:	"mid",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Urgot.png",
                price : {

                }

            },
            {
                id:		102,
                name:	"Varus",
                position:	"adc",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Varus.png",
                price : {

                }

            },
            {
                id:		103,
                name:	"Vayne",
                position:	"adc",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Vayne.png",
                price : {

                }

            },
            {
                id:		104,
                name:	"Veigar",
                position:	"mid",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Veigar.png",
                price : {

                }

            },
            {
                id:		105,
                name:	"Velkoz",
                position:	"mid",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Velkoz.png",
                price : {

                }

            },
            {
                id:		106,
                name:	"Vi",
                position:	"jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Vi.png",
                price : {

                }

            },
            {
                id:		107,
                name:	"Viktor",
                position:	"mid",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Viktor.png",
                price : {

                }

            },
            {
                id:		108,
                name:	"Vladimir",
                position:	"top",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Vladimir.png",
                price : {

                }

            },
            {
                id:		109,
                name:	"Volibear",
                position:	"top, jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Volibear.png",
                price : {

                }

            },
            {
                id:		110,
                name:	"Warwick",
                position:	"jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Warwick.png",
                price : {

                }

            },
            {
                id:		111,
                name:	"Wukong",
                position:	"top",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/MonkeyKing.png",
                price : {

                }

            },
            {
                id:		112,
                name:	"Xerath",
                position:	"mid",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Xerath.png",
                price : {

                }

            },
            {
                id:		113,
                name:	"XinZhao",
                position:	"top, jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/XinZhao.png",
                price : {

                }

            },
            {
                id:		114,
                name:	"Yasuo",
                position:	"mid",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Yasuo.png",
                price : {

                }

            },
            {
                id:		115,
                name:	"Yorick",
                position:	"top",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Yorick.png",
                price : {

                }

            },
            {
                id:		116,
                name:	"Zac",
                position:	"jungle",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Zac.png",
                price : {

                }

            },
            {
                id:		117,
                name:	"Zed",
                position:	"mid",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Zed.png",
                price : {

                }

            },
            {
                id:		118,
                name:	"Ziggs",
                position:	"mid, adc",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Ziggs.png",
                price : {

                }

            },
            {
                id:		119,
                name:	"Zilean",
                position:	"mid",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Zilean.png",
                price : {

                }

            },
            {
                id:		120,
                name:	"Zyra",
                position:	"mid, support",
                img : "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Zyra.png",
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