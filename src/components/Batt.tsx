import { useBattery } from "react-use"

const Demo = () => {
  const batteryState = useBattery()

  if (!batteryState.isSupported) {
    return (
      <div>
        <strong>Battery sensor</strong>: <span>not supported</span>
      </div>
    )
  }

  if (!batteryState.fetched) {
    return (
      <div>
        <strong>Battery sensor</strong>: <span>supported</span> <br />
        <strong>Battery state</strong>: <span>fetching</span>
      </div>
    )
  }

  return (
    <div>
      <strong>Battery sensor</strong>:&nbsp;&nbsp; <span>supported</span> <br />
      <strong>Battery state</strong>: <span>fetched</span> <br />
      <strong>Charge level</strong>:&nbsp;&nbsp;{" "}
      <span>{(batteryState.level * 100).toFixed(0)}%</span> <br />
      <strong>Charging</strong>:&nbsp;&nbsp;{" "}
      <span>{batteryState.charging ? "yes" : "no"}</span> <br />
      <strong>Charging time</strong>:&nbsp;&nbsp;
      <span>
        {batteryState.chargingTime ? batteryState.chargingTime : "finished"}
      </span>{" "}
      <br />
      <strong>Discharging time</strong>:&nbsp;&nbsp;{" "}
      <span>{batteryState.dischargingTime}</span>
    </div>
  )
}
export default Demo
