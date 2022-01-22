var exchangeTime = (time) => {
  const currentDate = new Date().toLocaleDateString();
  const oneDay = 24 * 60 * 60 * 1000;
  const millisecond = new Date(`${currentDate} ${time}:00`).getTime();
  console.log(time, new Date(`${currentDate} ${time}:00`).toLocaleString())
  return [millisecond, millisecond - oneDay]
}

var findMinDifference = function (timePoints) {
  const allTime = timePoints.reduce((all, currentTime) => {

    return [...all, ...exchangeTime(currentTime)];
  }, []).sort()

  let minTime = 24 * 60 * 60 * 1000;
  for (let i = 0; i < allTime.length - 1; i++) {
    const difference = allTime[i + 1] - allTime[i];
    if (minTime > difference) {
      minTime = difference
    }
  }

  return minTime / 1000 / 60;
};

const result = findMinDifference(["23:59", "00:00", '18:30', '6:12'])
console.log(result)