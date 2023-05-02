import { Object, Time } from "UnityEngine";
import { ZepetoScriptBehaviour } from "ZEPETO.Script";

export default class Bullet extends ZepetoScriptBehaviour {
  public speed: float;
  public time: float;

  private elaspedtime: float;

  Start() {
    this.elaspedtime = 0;
  }

  Update() {
    this.elaspedtime += Time.deltaTime;

    if (this.time < this.elaspedtime) {
      Object.Destroy(this.gameObject);
    }
    this.transform.Translate(0, 0, -this.speed * Time.deltaTime);
  }
}
