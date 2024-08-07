export class SlotsController {
  host
  value
  constructor(host, timeout = 1000) {
    ;(this.host = host).addController(this)
  }
  hostConnected() {
    this.value = Array.from(this.host.querySelectorAll('[slot]') || []).map(({ slot }) => slot)
    // TODO: 目前只在connected监听是否存在slot，后续可以增加slotchange事件监听动态更新（能监听slot从有到无，但是监听不到新的slot进来）
  }
}
