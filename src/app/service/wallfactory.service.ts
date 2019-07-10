import { Injectable, Inject } from "@angular/core";
import { EWallType } from "./EWallType";

@Injectable({
  providedIn: "root"
})
export class WallFactoryService {
  edgeThickness: number;
  backDoor: any;

  constructor(@Inject("BABYLON") private BABYLON: any) {}

  createWall(
    scene: any,
    wallType: EWallType,
    param1: number,
    param2: number
  ): any {
    if (wallType == EWallType.eInsideWallDoor) {
      var rearWallData = [
        new this.BABYLON.Vector3(-param1, 0, -3),
        // new this.BABYLON.Vector3(5.5, 0, -3),
        new this.BABYLON.Vector3(-0.5, 0, -3), // rear door
        new this.BABYLON.Vector3(-0.5, 0, -0.75), // rear door
        new this.BABYLON.Vector3(0.5, 0, -0.75), // rear door
        new this.BABYLON.Vector3(0.5, 0, -3), // rear door
        new this.BABYLON.Vector3(param1, 0, -3),
        new this.BABYLON.Vector3(param1, 0, 2),
        new this.BABYLON.Vector3(-param1, 0, 2)
      ];
      var rearFaceUV = new Array(3);
      rearFaceUV[0] = new this.BABYLON.Vector4(7 / 15, 0, 14 / 15, 1);
      rearFaceUV[1] = new this.BABYLON.Vector4(14 / 15, 0, 1, 1);
      rearFaceUV[2] = new this.BABYLON.Vector4(0, 0, 7 / 15, 1);

      var wallmat = new this.BABYLON.StandardMaterial("wallmaterial", scene);
      wallmat.diffuseTexture = new this.BABYLON.Texture(
        "http://i.imgur.com/2b1C7UH.jpg",
        scene
      );

      var rearWall = this.BABYLON.MeshBuilder.ExtrudePolygon(
        "east",
        { shape: rearWallData, depth: 0.1, faceUV: rearFaceUV },
        scene
      );
      rearWall.position = new this.BABYLON.Vector3(0, 2, 10);
      rearWall.rotation.x = -Math.PI / 2;
      // rearWall.material = wallmat;
      return rearWall;
    } else if (wallType == EWallType.eOusideWallWindow2) {
      var frontWallData = [
        // rear wall with 3 windows
        new this.BABYLON.Vector3(-param1, 0, -3),
        new this.BABYLON.Vector3(-4.3, 0, -3),
        new this.BABYLON.Vector3(-0.5, 0, -3),
        new this.BABYLON.Vector3(param1, 0, -3),
        new this.BABYLON.Vector3(param1, 0, 2),
        new this.BABYLON.Vector3(-param1, 0, 2)
      ];

      var frontWindow1Holes = [];
      frontWindow1Holes[0] = [
        new this.BABYLON.Vector3(-4.15, 0, -1.8),
        new this.BABYLON.Vector3(4, 0, -1.8),
        new this.BABYLON.Vector3(4, 0, 1),
        new this.BABYLON.Vector3(-4.15, 0, 1)
      ];
      var frontFaceUV = [];
      frontFaceUV[0] = new this.BABYLON.Vector4(7 / 15, 0, 14 / 15, 1);
      frontFaceUV[1] = new this.BABYLON.Vector4(14 / 15, 0, 1, 1);
      frontFaceUV[2] = new this.BABYLON.Vector4(0, 0, 7 / 15, 1);

      var wallmat = new this.BABYLON.StandardMaterial("wallmaterial", scene);
      wallmat.diffuseTexture = new this.BABYLON.Texture(
        "http://i.imgur.com/2b1C7UH.jpg",
        scene
      );

      var frontWall = this.BABYLON.MeshBuilder.ExtrudePolygon(
        "west",
        {
          shape: frontWallData,
          depth: 0.15,
          holes: frontWindow1Holes,
          faceUV: frontFaceUV
        },
        scene
      );
      frontWall.rotation.x = Math.PI / 2;
      frontWall.position = new this.BABYLON.Vector3(0, 1, 0);
      // frontWall.material = wallmat;
      return frontWall;
    } else if (wallType == EWallType.eInsideWallSimple) {
      var rightWallData = [
        new this.BABYLON.Vector3(-5, 0, -3),
        new this.BABYLON.Vector3(5, 0, -3),
        new this.BABYLON.Vector3(5, 0, 2),
        new this.BABYLON.Vector3(3.1, 0, 2),
        new this.BABYLON.Vector3(0, 0, 2),
        new this.BABYLON.Vector3(-5, 0, 2)
      ];
      var rightFaceUV = new Array(3);
      rightFaceUV[2] = new this.BABYLON.Vector4(7 / 15, 0, 14 / 15, 1);
      rightFaceUV[1] = new this.BABYLON.Vector4(14 / 15, 0, 1, 1);
      rightFaceUV[0] = new this.BABYLON.Vector4(0, 0, 7 / 15, 1);

      var wallmat = new this.BABYLON.StandardMaterial("wallmaterial", scene);
      wallmat.diffuseTexture = new this.BABYLON.Texture(
        "http://i.imgur.com/2b1C7UH.jpg",
        scene
      );

      var rightWall = this.BABYLON.MeshBuilder.ExtrudePolygon(
        "north",
        { shape: rightWallData, depth: 0.1, faceUV: rightFaceUV },
        scene
      );
      rightWall.rotation.z = Math.PI / 2;
      rightWall.rotation.x = -Math.PI / 2;
      rightWall.position = new this.BABYLON.Vector3(-5, 2, 5);
      // rightWall.material = wallmat;
      return rightWall;
    } else if (wallType == EWallType.eOutsideWallWindow1) {
      var leftWallData = [
        new this.BABYLON.Vector3(-5, 0, -3),
        new this.BABYLON.Vector3(5, 0, -3),
        new this.BABYLON.Vector3(5, 0, 2),
        new this.BABYLON.Vector3(3.1, 0, 2),
        new this.BABYLON.Vector3(0, 0, 2),
        new this.BABYLON.Vector3(-5, 0, 2)
      ];

      var sideWindowHoles = [];
      sideWindowHoles[0] = [
        new this.BABYLON.Vector3(-4.15, 0, -1.8),
        new this.BABYLON.Vector3(4, 0, -1.8),
        new this.BABYLON.Vector3(4, 0, 1),
        new this.BABYLON.Vector3(-4.15, 0, 1)
      ];

      var leftFaceUV = new Array(3);
      leftFaceUV[0] = new this.BABYLON.Vector4(0, 0, 7 / 15, 1);
      leftFaceUV[1] = new this.BABYLON.Vector4(14 / 15, 0, 1, 1);
      leftFaceUV[2] = new this.BABYLON.Vector4(7 / 15, 0, 14 / 15, 1);

      var wallmat = new this.BABYLON.StandardMaterial("wallmaterial", scene);
      wallmat.diffuseTexture = new this.BABYLON.Texture(
        "http://i.imgur.com/2b1C7UH.jpg",
        scene
      );

      var leftWall = this.BABYLON.MeshBuilder.ExtrudePolygon(
        "south",
        {
          shape: leftWallData,
          depth: 0.1,
          holes: sideWindowHoles,
          faceUV: leftFaceUV
        },
        scene
      );
      leftWall.rotation.z = -Math.PI / 2;
      leftWall.rotation.x = -Math.PI / 2;
      leftWall.position = new this.BABYLON.Vector3(5, 2, 5);
      // leftWall.material = wallmat;
      return leftWall;
    } else if (wallType == EWallType.eFloor) {
      var firstfloorData = [
        new this.BABYLON.Vector3(-param1, 0, 0),
        new this.BABYLON.Vector3(param1, 0, 0),
        new this.BABYLON.Vector3(param1, 0, 6),
        new this.BABYLON.Vector3(param1, 0, 6),
        new this.BABYLON.Vector3(param1, 0, 10.2),
        new this.BABYLON.Vector3(-param1, 0, 10.2)
      ];

      var floorFaceUV = new Array(3);
      floorFaceUV[0] = new this.BABYLON.Vector4(0, 0, 0.5, 1);
      floorFaceUV[2] = new this.BABYLON.Vector4(0.5, 0, 1, 1);

      var floor = this.BABYLON.MeshBuilder.ExtrudePolygon(
        "floor",
        { shape: firstfloorData, depth: 0.1, faceUV: floorFaceUV },
        scene
      );
      floor.position = new this.BABYLON.Vector3(0, -0.9, -0.1);
      return floor;
    } else {
      var ceilingData = [
        new this.BABYLON.Vector3(-param1, 0, 0),
        new this.BABYLON.Vector3(param1, 0, 0),
        new this.BABYLON.Vector3(param1, 0, 6),
        new this.BABYLON.Vector3(param1, 0, 6),
        new this.BABYLON.Vector3(param1, 0, 10.2),
        new this.BABYLON.Vector3(-param1, 0, 10.2)
      ];

      var ceiling = this.BABYLON.MeshBuilder.ExtrudePolygon(
        "ceiling",
        { shape: ceilingData, depth: 0.1 },
        scene
      );
      ceiling.position = new this.BABYLON.Vector3(0, 3.9, -0.1);
      // ceiling.material = wallmat;
      return ceiling;

      var wallmat = new this.BABYLON.StandardMaterial("wallmaterial", scene);
      wallmat.diffuseColor = new this.BABYLON.Color3(
        240 / 255,
        223 / 255,
        203 / 255,
        scene
      );
    }
  }

  windowMaker(width, height, frames, frameDepth, frameThickness): any {
    var windowShape = [
      new this.BABYLON.Vector3(0, 0, 0),
      new this.BABYLON.Vector3(width, 0, 0),
      new this.BABYLON.Vector3(width, 0, height),
      new this.BABYLON.Vector3(0, 0, height)
    ];
    var glassWidth = (width - (frames + 1) * frameThickness) / frames;
    var glassTopHeight = height / 3 - frameThickness;
    var glassBotHeight = 2 * glassTopHeight;
    var glass = [];
    var acf = frameThickness;
    for (var f = 0; f < frames; f++) {
      glass[2 * f] = [];
      glass[2 * f].push(
        new this.BABYLON.Vector3(acf, 0, 2 * frameThickness + glassBotHeight)
      );
      glass[2 * f].push(
        new this.BABYLON.Vector3(
          acf + glassWidth,
          0,
          2 * frameThickness + glassBotHeight
        )
      );
      glass[2 * f].push(
        new this.BABYLON.Vector3(
          acf + glassWidth,
          0,
          2 * frameThickness + glassBotHeight + glassTopHeight
        )
      );
      glass[2 * f].push(
        new this.BABYLON.Vector3(
          acf,
          0,
          2 * frameThickness + glassBotHeight + glassTopHeight
        )
      );
      glass[2 * f + 1] = [];
      glass[2 * f + 1].push(new this.BABYLON.Vector3(acf, 0, frameThickness));
      glass[2 * f + 1].push(
        new this.BABYLON.Vector3(acf + glassWidth, 0, frameThickness)
      );
      glass[2 * f + 1].push(
        new this.BABYLON.Vector3(
          acf + glassWidth,
          0,
          frameThickness + glassBotHeight
        )
      );
      glass[2 * f + 1].push(
        new this.BABYLON.Vector3(acf, 0, frameThickness + glassBotHeight)
      );
      acf += frameThickness + glassWidth;
    }
    var window = this.BABYLON.MeshBuilder.ExtrudePolygon("window", {
      shape: windowShape,
      holes: glass,
      depth: frameDepth
    });
    window.rotation.x = -Math.PI / 2;
    // window.rotation.z = 1;
    return window;
  }

  windowMaker1(width, height, frames, frameDepth, frameThickness): any {
    var windowShape = [
      new this.BABYLON.Vector3(0, 0, 0),
      new this.BABYLON.Vector3(width, 0, 0),
      new this.BABYLON.Vector3(width, 0, height),
      new this.BABYLON.Vector3(0, 0, height)
    ];
    var glassWidth = (width - (frames + 1) * frameThickness) / frames;
    var glassTopHeight = height / 3 - frameThickness;
    var glassBotHeight = 2 * glassTopHeight;
    var glass = [];
    var acf = frameThickness;
    for (var f = 0; f < frames; f++) {
      glass[2 * f] = [];
      glass[2 * f].push(
        new this.BABYLON.Vector3(acf, 0, 2 * frameThickness + glassBotHeight)
      );
      glass[2 * f].push(
        new this.BABYLON.Vector3(
          acf + glassWidth,
          0,
          2 * frameThickness + glassBotHeight
        )
      );
      glass[2 * f].push(
        new this.BABYLON.Vector3(
          acf + glassWidth,
          0,
          2 * frameThickness + glassBotHeight + glassTopHeight
        )
      );
      glass[2 * f].push(
        new this.BABYLON.Vector3(
          acf,
          0,
          2 * frameThickness + glassBotHeight + glassTopHeight
        )
      );
      glass[2 * f + 1] = [];
      glass[2 * f + 1].push(new this.BABYLON.Vector3(acf, 0, frameThickness));
      glass[2 * f + 1].push(
        new this.BABYLON.Vector3(acf + glassWidth, 0, frameThickness)
      );
      glass[2 * f + 1].push(
        new this.BABYLON.Vector3(
          acf + glassWidth,
          0,
          frameThickness + glassBotHeight
        )
      );
      glass[2 * f + 1].push(
        new this.BABYLON.Vector3(acf, 0, frameThickness + glassBotHeight)
      );
      acf += frameThickness + glassWidth;
    }
    var window = this.BABYLON.MeshBuilder.ExtrudePolygon("window", {
      shape: windowShape,
      holes: glass,
      depth: frameDepth
    });
    window.rotation.x = -Math.PI / 2;
    window.rotation.z = 1.6;
    return window;
  }

  doorMaker(width, height, depth): any {
    var doorShape = [
      new this.BABYLON.Vector3(0, 0, 0),
      new this.BABYLON.Vector3(width, 0, 0),
      new this.BABYLON.Vector3(width, 0, height),
      new this.BABYLON.Vector3(0, 0, height)
    ];
    this.edgeThickness = width / 8;
    var panelWidth = width - 2 * this.edgeThickness;
    var panelBotHeight = (height - 3 * this.edgeThickness) / 1.75;
    var panelTopHeight = 0.75 * panelBotHeight;
    var panel = [];
    panel[0] = [];
    panel[0].push(
      new this.BABYLON.Vector3(
        this.edgeThickness,
        0,
        2 * this.edgeThickness + panelBotHeight
      )
    );
    panel[0].push(
      new this.BABYLON.Vector3(
        this.edgeThickness + panelWidth,
        0,
        2 * this.edgeThickness + panelBotHeight
      )
    );
    panel[0].push(
      new this.BABYLON.Vector3(
        this.edgeThickness + panelWidth,
        0,
        2 * this.edgeThickness + panelBotHeight + panelTopHeight
      )
    );
    panel[0].push(
      new this.BABYLON.Vector3(
        this.edgeThickness,
        0,
        2 * this.edgeThickness + panelBotHeight + panelTopHeight
      )
    );
    panel[1] = [];
    panel[1].push(
      new this.BABYLON.Vector3(this.edgeThickness, 0, this.edgeThickness)
    );
    panel[1].push(
      new this.BABYLON.Vector3(
        this.edgeThickness + panelWidth,
        0,
        this.edgeThickness
      )
    );
    panel[1].push(
      new this.BABYLON.Vector3(
        this.edgeThickness + panelWidth,
        0,
        this.edgeThickness + panelBotHeight
      )
    );
    panel[1].push(
      new this.BABYLON.Vector3(
        this.edgeThickness,
        0,
        this.edgeThickness + panelBotHeight
      )
    );
    var door = new this.BABYLON.MeshBuilder.ExtrudePolygon("door", {
      shape: doorShape,
      holes: panel,
      depth: depth
    });
    door.rotation.x = -Math.PI / 2;
    var panelB = new this.BABYLON.MeshBuilder.CreateBox("p1b", {
      width: panelWidth,
      height: panelBotHeight,
      depth: depth / 2
    });
    panelB.position.x = this.edgeThickness + panelWidth / 2;
    panelB.position.y = this.edgeThickness + panelBotHeight / 2;
    panelB.position.z = depth / 2;
    var panelT = this.BABYLON.MeshBuilder.CreateBox("p1t", {
      width: panelWidth,
      height: panelTopHeight,
      depth: depth / 2
    });
    panelT.position.x = this.edgeThickness + panelWidth / 2;
    panelT.position.y =
      2 * this.edgeThickness + panelBotHeight + panelTopHeight / 2;
    panelT.position.z = depth / 2;

    return this.BABYLON.Mesh.MergeMeshes([door, panelB, panelT], true);
  }
}
