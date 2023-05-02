import { ZepetoScriptBehaviour } from "ZEPETO.Script";
import {
  SpawnInfo,
  ZepetoPlayers,
  LocalPlayer,
  ZepetoCharacter,
  ZepetoPlayer,
} from "ZEPETO.Character.Controller";
import { WorldService } from "ZEPETO.World";
import { Quaternion, Vector3 } from "UnityEngine";

export default class CharacterController extends ZepetoScriptBehaviour {
  @Header("로컬모드 여부 선택")
  public isLocal: bool = true;
  @Header("제페토 아이디. @ 빼고 넣기")
  public myId: string;
  @Header("캐릭터 생성 위치")
  public spawnPoint: Vector3;
  @Header("캐릭터 생성 회전값")
  public spawnRot: Vector3;

  Start() {
    // Set Character Spawn Position
    const spawnInfo = new SpawnInfo();
    spawnInfo.position = this.spawnPoint;
    // Set Character Spawn Rotation
    spawnInfo.rotation = Quaternion.Euler(this.spawnRot);

    if (this.isLocal) {
      ZepetoPlayers.instance.CreatePlayerWithZepetoId(
        "",
        this.myId,
        spawnInfo,
        true
      );
    } else {
      ZepetoPlayers.instance.CreatePlayerWithUserId(
        WorldService.userId,
        spawnInfo,
        true
      );
    }
    ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
      const player: LocalPlayer = ZepetoPlayers.instance.LocalPlayer;
    });
  }
}
