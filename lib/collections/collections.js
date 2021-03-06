// This is the collection holding all the players in the game
Players = new Mongo.Collection("players");
// userId: the _id of the user
// name: The players name, can be drawn from username of user
// role: The players role id, set at the start of the game and used to
//       set the players behavior during the game
// status: This will hold information about a players status, for
//         example, if they are cursed/silenced/saved etc...
// alive: A boolean setting the player to be alive or dead
// joined: A boolean for if the player has joined the game or not
// ready: A boolean used while in the lobby to indicate readyness to
//        start the game
// voteChoice: This is the choice this player has made for the current vote,
//             whatever that is. 0 = abstain, 1 = for, 2 = against.
// doNothing: This is where the vote for is the player wants to do nothing during day goes
// seenNewEvents: This is used to show everyone the new events of what happened previously
// seenNightResults: This is to indicate that the player is ready to see the new events from,
//                   the cycle that just happened.
// nightActionDone: This is the boolean that shows if the players has finished their night stuff
// effect: The effect that has been added to this player (for example a doctor could add "save",
//         and then if the werewolves choice is that player, the save effect will prevent them dying.)
// seenDeath: This is to signify that the player has agreed that they have seen they are dead!
// deathDetails: This contains the cycle number and the type of death this player experienced.
// target: This is used for times when there are multiple of a kind of role (e.g. werewolves),
//         but they need separate targets. This is where the targets ID is stored
// seenEndgame: This is the boolean for if this player has seen the endgame screen

Roles = new Mongo.Collection("roles");
// name: The human readable name of the role
// votes: Store the number of votes the role got for later calculations
// order: The order that the votes puts the role relative to the others
// enabled: After calculating the votes, is this role going to be in game?
// critical: A boolean that determines if this is a necessary role (e.g. Villager and Werewolf)
//           If this is true, then they are not voted on and not part of that calculation.
// target: This is where the player id of the target of this roles night activities is stored.

RoleVotes = new Mongo.Collection("votes");
// roleId: The role Id the vote corresponds to
// playerId: The player that made the vote
// vote: The value of the vote that the player made for this role

GameVariables = new Mongo.Collection("gameVars");
// id: The variable name
// name: The human readable variable name
// value: The value of the variable
// enabled: Is the value currently important?

EventList = new Mongo.Collection("eventList");
// id: The event id
// type: The type of event, could be (death (vDeath, wwDeath), info, warning, etc...)
// text: The text that will be printed to the screen for players to read
// cycleNumber: The cycle number this event occurred in, to filter what's shown
// timeAdded: A date for when the event was created

ServerChecks = new Mongo.Collection("serverChecks");
