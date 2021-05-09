import dayjs from 'dayjs'

const DAY_MILLISECONDS = 86400000

export const computeDateToShow = (payloadDate) => {
  const nowDate = dayjs(dayjs(new Date()).format('YYYY-MM-DD'))
  const parsedPayloadDate = dayjs(payloadDate)
  const diff = parsedPayloadDate.diff(nowDate)

  if (diff === 0) {
    return 'today'
  } else if (diff > 0) {
    if (diff <= DAY_MILLISECONDS) {
      return 'tomorrow'
    } else {
      return 'latest'
    }
  } else if (diff < 0) {
    if (Math.abs(diff) <= DAY_MILLISECONDS) {
      return 'yesterday'
    } else {
      return 'older'
    }
  }
}
