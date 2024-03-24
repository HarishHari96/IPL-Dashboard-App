// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails
  return (
    <li className="match-card">
      <p className="team-name">{competingTeam}</p>
      <img
        className="image"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="result">{result}</p>
      <p className="status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
