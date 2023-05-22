import MatchesService from './matches.service';
import TeamService from './team.service';
import { createLeaderBoard } from './utils/createLeaderBoard';

export default class LeaderBoardService {
  static async CreateLeaderBoard(param: string) {
    const teams = await TeamService.getAll();
    const matches = await MatchesService.getAll();
    const finishedMatches = matches.filter((e) => e.inProgress.toString() === 'false');
    const leaderBoard = createLeaderBoard(teams, finishedMatches, param);

    const leaderBoardOrderly = leaderBoard.sort((a: any, b: any) => b.goalsFavor - a.goalsFavor)
      .sort((a: any, b: any) => b.goalsBalance - a.goalsBalance)
      .sort((a: any, b: any) => b.totalPoints - a.totalPoints);
    return leaderBoardOrderly;
  }
}
