import './style.styl';

export default function($scope, $stateParams, Exercises) {
    'ngInject';

    $scope.toggleModal = function(){
        console.log($scope.new_log);
          $('#logexercisemodal').modal('show');
    };

    $scope.exercise_selected = false;

    $scope.new_log = {};


    // if ($stateParams.id != "") {
    //     $scope.team_id = $stateParams.id;
    //     $scope.team_selected = true;
    //
    //     Teams.getTeamById($scope.team_id).then(function(response){
    //         $scope.thisTeam = response.data;
    //         console.log(response.data);
    //         $scope.avatar = response.data.avatar;
    //         $scope.players = response.data.players;
    //     });
    // }







}
