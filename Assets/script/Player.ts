import {
  ForceMode,
  Input,
  Rigidbody,
  Time,
  Transform,
  Vector3,
} from "UnityEngine";
import { ZepetoScriptBehaviour } from "ZEPETO.Script";

export default class Player extends ZepetoScriptBehaviour {
  public speed: float;
  public rigid: Rigidbody;

  public moveVec: Vector3 = Vector3.zero;

  Start() {
    this.rigid = this.GetComponent<Rigidbody>();
  }

  Update() {
    this.moveVec.x = Input.GetAxisRaw("Horizontal");
    this.moveVec.z = Input.GetAxisRaw("Vertical");
  }

  FixedUpdate() {
    this.transform.Translate(
      this.moveVec.x * this.speed * Time.deltaTime,
      0,
      this.moveVec.z * this.speed * Time.deltaTime
    );
  }
}
