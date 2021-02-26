//DOCTYPE javascript//

let taglines = [
    "Never knowingly understated",
    "Games, brains and other things",
    "I know writers who use subtext, and they're all cowards",
	"I do bad things to spreadsheets",
	"Mostly writing, partly not"
]

let rareMessages = [
	"Congratulations, you have found the secret message",
	"Your tagline is on another website",
	"Birds are real, the earth is a sphere, vaccines work",
	"You're jazzing to the bleep tone of a life support machine",
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

document.write(taglines[getRandomInt(0,taglines.length)])

