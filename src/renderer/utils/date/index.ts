import dayjs from "dayjs"

dayjs.extend(require('dayjs/plugin/customParseFormat'))

export default {
  getAge: (birthdate: string): string => String(dayjs().diff(dayjs(birthdate, 'DD/MM/YYYY'), 'year')),
  isBetween: (startTime: string, endTime: string): boolean => {
    const currentTime = new Date()

    let startClass = new Date(currentTime.getTime())
    startClass.setHours(Number(startTime.split(":")[0]))
    startClass.setMinutes(Number(startTime.split(":")[1]))
    startClass.setSeconds(0)

    let endClass = new Date(currentTime.getTime())
    endClass.setHours(Number(endTime.split(":")[0]))
    endClass.setMinutes(Number(endTime.split(":")[1]))
    endClass.setSeconds(0)

    return (startClass < currentTime) && (endClass > currentTime)
  }
}
