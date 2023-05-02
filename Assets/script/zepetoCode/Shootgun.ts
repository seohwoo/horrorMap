import { ZepetoScriptBehaviour } from "ZEPETO.Script";
import { GameObject, Object, Quaternion, Time, Transform } from "UnityEngine";

export default class Shootgun extends ZepetoScriptBehaviour {
  public bullet: GameObject;
  public time: float;
  public startpos: Transform;

  private elapsedtime: float;

  Start() {
    this.elapsedtime = 0;
  }

  Update() {
    this.elapsedtime += Time.deltaTime;

    if (this.time < this.elapsedtime) {
      Object.Instantiate(
        this.bullet,
        this.startpos.position,
        Quaternion.identity
      );
      this.elapsedtime = 0;
    }
  }
}
