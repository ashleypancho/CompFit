import './style.styl';

export default function($scope, $stateParams, Teams, Users, Challenges, $state) {
    'ngInject';

    $scope.toggleModal = function(){
        console.log($scope.new_team);
          $('#createteammodal').modal('show');
    };
    $scope.team_id = -1;
    $scope.team_name = "";
    $scope.avatar = "/img/team_avatars/default-team.png";
    $scope.players = [];
    $scope.players_dropdown = false;
    $scope.team_selected = false;

    $scope.new_team = {};


    $scope.getDayDifference = function(date1_obj,date2_obj) {
        var date2 = new Date(date2_obj);
        var date1 = new Date(date1_obj);
        var timeDiff = date2.getTime() - date1.getTime();
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    };

    $scope.getDaysLeft = function(challenge) {
        return getDayDifference(new Date(),challenge.end_date)+1;
    };


    if ($stateParams.id == "") {
        Teams.getTeamsForUser(Users.getCurrentUser()).then(function(response){
            var teams = response.data;
            if (teams !== undefined) {
                if (teams[0] !== undefined) {
                    $state.go('app.team', {'id': teams[0].team_id});
                }
            }
        });
    }
    else {
        $scope.team_id = $stateParams.id;
        $scope.team_selected = true;
        Teams.getTeamById($scope.team_id).then(function(response){
            $scope.thisTeam = response.data;
            console.log(response.data);
            $scope.avatar = response.data.avatar;
            $scope.players = response.data.players;
            $scope.team_name = response.data.team_name;
            $scope.captain_id = response.data.captain_id;
            $scope.isCaptain = Users.getCurrentUser() == response.data.captain_id;
            console.log($scope.isCaptain);
        });
        Challenges.getChallengesForTeam($scope.team_id).then(function(response){
            $scope.challenges = response.data;
            console.log("challenges: ",response);
        });
    }

    $scope.getTeamProgress = function(challenge) {
        if (challenge.task_type == 'Individual') {
            return (100 * challenge.user_team.team_progress/challenge.repetitions/challenge.user_team.players.length).toFixed(0);
        }
        else {
            return (100 * challenge.user_team.team_progress/challenge.repetitions).toFixed(0);
        }
    };

    $scope.getOppoTeamProgress = function(challenge) {
        if (challenge.task_type == 'Individual') {
            return (100 * challenge.oppo_team.team_progress/challenge.repetitions/challenge.oppo_team.players.length).toFixed(0);
        }
        else {
            return (100 * challenge.oppo_team.team_progress/challenge.repetitions).toFixed(0);
        }
    };

    $scope.getUserProgress = function(challenge) {
        if (challenge.task_type == 'Individual') {
            return (100 * challenge.user_progress/challenge.repetitions).toFixed(0);
        }
        else {
            return (100 * challenge.user_progress/challenge.repetitions/challenge.user_team.num_members).toFixed(1);
        }
    };
}
