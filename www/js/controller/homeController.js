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
					e : {
						name : "Blood Thirst / Blood Price",
						desc : "While toggled on Aatrox deals bonus damage every third subsequent attack at the expense of his own Health. While toggled off Aatrox restores Health every third subsequent attack. Toggle Off: Blood Thirst: Every third attack, Aatrox restores 20/25/30/35/40 (+25% bonus Attack Damage) Health, increased by 200% when below half Health. Toggle On: Blood Price: Every third attack, Aatrox deals 60/95/130/165/200 (+100% bonus Attack Damage) bonus physical damage and loses Health."
					}

				}
			},
            {
                id: 2,
                name: "test",
                position:"test1",
                img: "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Ahri.png",
                price : {
                    rp: 975,
                    ip: 6300
                }


            }

		];

		$scope.users = [];

		$scope.doSomething = function () {
			console.log("I did something");
		};

		// $.ajax({
		//   url: 'https://randomuser.me/api/',
		//   data: {results : 5},
		//   dataType: 'json',
		//   success: function(data){
		//   	//console.log(data);
		//   	$scope.users = data.results;
		//   	console.log($scope.users);
		//   }
		// }).then(function () {
		// 	$scope.$apply();
		// });
}]);