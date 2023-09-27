function getTextArray() {
    let textArray = [];
    let timeStatusElements = document.querySelectorAll('#time-status.ytd-thumbnail-overlay-time-status-renderer');
  
    timeStatusElements.forEach(element => {
        let textElement = element.querySelector('#text');
        if (textElement) {
            textArray.push(textElement.textContent.trim());
        }
    });
  
    return textArray;
  }
  
function calculateTotalDuration() {
    let textArray = getTextArray();
    let totalSeconds = 0;
  
    textArray.forEach(time => {
        let parts = time.split(':').reverse();
        let seconds = parts[0] ? parseInt(parts[0]) : 0;
        let minutes = parts[1] ? parseInt(parts[1]) : 0;
        let hours = parts[2] ? parseInt(parts[2]) : 0;
  
        totalSeconds += seconds;
        totalSeconds += minutes * 60;
        totalSeconds += hours * 3600;
    });
  
    let totalMinutes = Math.floor(totalSeconds / 60);
    totalSeconds %= 60;
    let totalHours = Math.floor(totalMinutes / 60);
    totalMinutes %= 60;
    let totalDays = Math.floor(totalHours / 24);
    totalHours %= 24;
  
    return {
      days: totalDays,
      hours: totalHours,
      minutes: totalMinutes,
      seconds: totalSeconds
    };
  }
  
  let totalDuration = calculateTotalDuration();
  
  console.log(`Total duration is ${totalDuration.days} days, ${totalDuration.hours} hours, ${totalDuration.minutes} minutes, and ${totalDuration.seconds} seconds.`);
  