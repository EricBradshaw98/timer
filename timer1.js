//take user input
const args = process.argv.slice(2);
//sort user input in order

const setAlarms = (alarms) => {
  alarms.sort((a, b) => a - b);

//loops input and creates beep
  for (const alarm of alarms) {
    if (alarm > 0 && Number.isInteger(alarm)){ //check if number
      setTimeout(() => {
        process.stdout.write('\x07'); //system sound
        console.log(`Beep! ${alarm} seconds`);
      }, alarm *1000);
      //edge case for invalid
    } else {
      console.log(`Invalid alarm duration: ${alarm}`);
    }
    
      }
    };

    //edge case
    if (args.length === 0) {
      console.log("Please provide at least one alarm duration (in seconds).");
      //
    } else {
      setAlarms(args.map(Number));
    }
  
