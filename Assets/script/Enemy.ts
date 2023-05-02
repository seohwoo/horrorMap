import * as UnityEngine from "UnityEngine";
import { NavMeshAgent } from "UnityEngine.AI";
import { ZepetoCharacter, ZepetoPlayers } from "ZEPETO.Character.Controller";
import { ZepetoScriptBehaviour } from "ZEPETO.Script";

export default class Enemy extends ZepetoScriptBehaviour {
  public target: UnityEngine.Transform;

  public rigid: UnityEngine.Rigidbody;
  public boxCollider: UnityEngine.BoxCollider;
  public nav: NavMeshAgent;

  private _localCharacter: ZepetoCharacter;

  Start() {
    this.rigid = this.GetComponent<UnityEngine.Rigidbody>();
    this.boxCollider = this.GetComponent<UnityEngine.BoxCollider>();
    this.nav = this.GetComponent<NavMeshAgent>();
    this._localCharacter =
      ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character;
  }

  Update() {
    this.nav.SetDestination(this.target.position);
  }
}
