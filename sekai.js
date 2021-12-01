// Add Project Sekai hit sounds to TECHMANIA pattern
// Usage: node sekai.js <path>
const fs = require('fs')

const tech = JSON.parse(fs.readFileSync(process.argv[2]))

const getSoundByType = (type) => {
  let sound = 'se_live_flick.ogg'
  switch (type) {
    case 'Basic':
    case 'RepeatHead':
    case 'Repeat':
      sound = 'se_live_flick.ogg'
      break
    case 'ChainHead':
    case 'ChainNode':
      sound = 'se_live_connect.ogg'
      break
    case 'Hold':
      sound = 'se_live_long.ogg'
      break
    case 'Drag':
      sound = 'se_live_long.ogg'
      break
  }
  return sound
}

for (let i = 0; i < tech.patterns.length; i++) {
  for (let j = 0; j < tech.patterns[i].packedNotes.length; j++) {
    const temp = tech.patterns[i].packedNotes[j].split('|')

    if (temp[temp.length - 1].length > 0) continue

    if (temp[0] === 'E') {
      temp[temp.length - 1] = getSoundByType(temp[1])
    } else {
      temp[temp.length - 1] = getSoundByType(temp[0])
    }
    tech.patterns[i].packedNotes[j] = temp.join('|')
  }
  for (let j = 0; j < tech.patterns[i].packedHoldNotes.length; j++) {
    const temp = tech.patterns[i].packedHoldNotes[j].split('|')

    if (temp[temp.length - 1].length > 0) continue

    if (temp[0] === 'E') {
      temp[temp.length - 1] = getSoundByType(temp[1])
    } else {
      temp[temp.length - 1] = getSoundByType(temp[0])
    }
    tech.patterns[i].packedHoldNotes[j] = temp.join('|')
  }
  for (let j = 0; j < tech.patterns[i].packedDragNotes.length; j++) {
    const temp = tech.patterns[i].packedDragNotes[j].packedNote.split('|')

    if (temp[temp.length - 1].length > 0) continue

    if (temp[0] === 'E') {
      temp[temp.length - 1] = getSoundByType(temp[1])
    } else {
      temp[temp.length - 1] = getSoundByType(temp[0])
    }
    tech.patterns[i].packedDragNotes[j].packedNote = temp.join('|')
  }
}

fs.writeFileSync(process.argv[2], JSON.stringify(tech, null, 2))