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

    //---------------rearWall data with door------------------------
    if (wallType == EWallType.eInsideWallDoor) {
      var rearWallData = [
        new this.BABYLON.Vector3(-param1, 0, -3),
        // new this.BABYLON.Vector3(4.5, 0, -3),
        new this.BABYLON.Vector3(-0.5, 0, -3),	// rear door
        new this.BABYLON.Vector3(-0.5, 0, -0.75), // rear door
        new this.BABYLON.Vector3(0.5, 0, -0.75), // rear door
        new this.BABYLON.Vector3(0.5, 0, -3),	// rear door
        new this.BABYLON.Vector3(param1, 0, -3),
        new this.BABYLON.Vector3(param1, 0, 1),
        new this.BABYLON.Vector3(-param1, 0, 1)
      ];
    
      var rearFaceUV = [];
      rearFaceUV[0] = new this.BABYLON.Vector4(7 / 15, 0, 14 / 15, 1);
      rearFaceUV[1] = new this.BABYLON.Vector4(14 / 15, 0, 1, 1);
      rearFaceUV[2] = new this.BABYLON.Vector4(0, 0, 7 / 15, 1);

      var wallmat1 = new this.BABYLON.StandardMaterial("wallmaterial", scene);
      wallmat1.diffuseTexture = new this.BABYLON.Texture(
        "http://i.imgur.com/2b1C7UH.jpg",
        scene
      );
    
      var rearWall = this.BABYLON.MeshBuilder.CreatePolygon(
        "east",
        {
          shape: rearWallData,
          depth: 0.1,
          faceUV: rearFaceUV,
          sideOrientation: this.BABYLON.Mesh.DOUBLESIDE
        },
        scene
      );
      rearWall.rotation.x = -Math.PI / 2;
      rearWall.position = new this.BABYLON.Vector3(0, 1, 9.15);
      rearWall.material = wallmat1;
      return rearWall;
    } 

    //-----------------frontwall data with window-------------------------
    else if (wallType == EWallType.eOutsideWallWindow2) {
      var frontWall1Data = [
        new this.BABYLON.Vector3(-param1, 0, -3),
        new this.BABYLON.Vector3(-4.3, 0, -3),
        new this.BABYLON.Vector3(-0.5, 0, -3),
        new this.BABYLON.Vector3(param1, 0, -3),
        new this.BABYLON.Vector3(param1, 0, 1),
        new this.BABYLON.Vector3(-param1, 0, 1)
      ];
    
      var frontWindow1Holes = [];
      frontWindow1Holes[0] = [
        new this.BABYLON.Vector3(-2.15, 0, -2.3),
        new this.BABYLON.Vector3(2, 0, -2.3),
        new this.BABYLON.Vector3(2, 0, -0.3),
        new this.BABYLON.Vector3(-2.15, 0, -0.3)
      ];
    
      var faceUV = new Array(3);
      faceUV[0] = new this.BABYLON.Vector4(0, 0, 7 / 15, 1);

      var wallmat2 = new this.BABYLON.StandardMaterial("wallmaterial", scene);
      wallmat2.diffuseTexture = new this.BABYLON.Texture(
        "http://i.imgur.com/2b1C7UH.jpg",
        scene
      );
    
      var frontWall = this.BABYLON.MeshBuilder.CreatePolygon(
        "west",{ shape: frontWall1Data,depth: 0.15,holes: frontWindow1Holes,faceUV: faceUV, sideOrientation: this.BABYLON.Mesh.DOUBLESIDE},scene
      );
      frontWall.rotation.x = -Math.PI / 2;
      frontWall.position = new this.BABYLON.Vector3(0, 1, -1);
      frontWall.material = wallmat2;
      return frontWall;
    }

    //-------------------rightWall data-------------------------
    else if (wallType == EWallType.eInsideWallSimple) {
      var rightWallData = [
        new this.BABYLON.Vector3(-param1, 0, -3),
        new this.BABYLON.Vector3(param1, 0, -3),
        new this.BABYLON.Vector3(param1, 0, 1),
        new this.BABYLON.Vector3(3.1, 0, 1),
        new this.BABYLON.Vector3(0, 0, 1),
        new this.BABYLON.Vector3(-param1, 0, 1)
      ];
    
       var rightSideFaceUV = new Array(3);
    
       rightSideFaceUV[2] = new this.BABYLON.Vector4(7 / 15, 0, 14 / 15, 1);
       rightSideFaceUV[1] = new this.BABYLON.Vector4(14 / 15, 0, 1, 1);
       rightSideFaceUV[0] = new this.BABYLON.Vector4(0, 0, 7 / 15, 1); 

      
      var wallmat3 = new this.BABYLON.StandardMaterial("wallmaterial", scene);
      wallmat3.diffuseTexture = new this.BABYLON.Texture(
        "http://i.imgur.com/2b1C7UH.jpg",
        scene
      );
    
      var rightWall = this.BABYLON.MeshBuilder.CreatePolygon(
        "north",
        { shape: rightWallData, depth: 0.1 , faceUV: rightSideFaceUV, sideOrientation: this.BABYLON.Mesh.DOUBLESIDE  },
        scene
      );
      rightWall.rotation.z = Math.PI / 2;
      rightWall.rotation.x = -Math.PI / 2;
      rightWall.position = new this.BABYLON.Vector3(-4.9, 1, 4.15);
      rightWall.material = wallmat3;
      return rightWall;
    } 

    //------------leftWall data with windows-----------------------
    else if (wallType == EWallType.eOutsideWallWindow1) {
      var leftWallData = [
        new this.BABYLON.Vector3(-param1, 0, -3),
        new this.BABYLON.Vector3(param1, 0, -3),
        new this.BABYLON.Vector3(param1, 0, 1),
        new this.BABYLON.Vector3(3.1, 0, 1),
        new this.BABYLON.Vector3(0, 0, 1),
        new this.BABYLON.Vector3(-param1, 0, 1)
      ];
    
      var sideWindowHoles = [];
      sideWindowHoles[0] = [
        new this.BABYLON.Vector3(-2.15, 0, -2.3),
        new this.BABYLON.Vector3(2, 0, -2.3),
        new this.BABYLON.Vector3(2, 0, -0.3),
        new this.BABYLON.Vector3(-2.15, 0, -0.3)
      ];
    
      var leftSideFaceUV = new Array(3);
    
      leftSideFaceUV[0] = new this.BABYLON.Vector4(0, 0, 7 / 15, 1);
      leftSideFaceUV[1] = new this.BABYLON.Vector4(14 / 15, 0, 1, 1);
      leftSideFaceUV[2] = new this.BABYLON.Vector4(7 / 15, 0, 14 / 15, 1);

      var wallmat4 = new this.BABYLON.StandardMaterial("wallmaterial", scene);
      wallmat4.diffuseTexture = new this.BABYLON.Texture(
        "http://i.imgur.com/2b1C7UH.jpg",
        scene
      );
    
      var leftWall = this.BABYLON.MeshBuilder.CreatePolygon(
        "south",
        { shape: leftWallData, depth: 0.1,	holes: sideWindowHoles, faceUV: leftSideFaceUV, sideOrientation: this.BABYLON.Mesh.DOUBLESIDE },
        scene
      );
      leftWall.rotation.z = -Math.PI / 2;
      leftWall.rotation.x = -Math.PI / 2;
      leftWall.position = new this.BABYLON.Vector3(5, 1, 4.15);
    
      leftWall.material = wallmat4;
      return leftWall;
    } 
    
    //-------------------floor data-------------------
    else if (wallType == EWallType.eFloor) {
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
    
      var floor = this.BABYLON.MeshBuilder.CreatePolygon(
        "floor",
        {
          shape: firstfloorData,
          depth: 0.1,
          faceUV: floorFaceUV,
          sideOrientation: this.BABYLON.Mesh.DOUBLESIDE
        },
        scene
      );
      floor.position =  new this.BABYLON.Vector3(0, -2, -1);
      return floor;
    } 
    
    //-------------------ceiling data-------------------------------
    else {
      var ceilingData = [
        new this.BABYLON.Vector3(-param1, 0, 0),
        new this.BABYLON.Vector3(param1, 0, 0),
        new this.BABYLON.Vector3(param1, 0, 6),
        new this.BABYLON.Vector3(param1, 0, 6),
        new this.BABYLON.Vector3(param1, 0, 10),
        new this.BABYLON.Vector3(-param1, 0, 10)
      ];
     
      var ceilingFaceUV = new Array(3);
      ceilingFaceUV[0] = new this.BABYLON.Vector4(0, 0, 0.5, 1);
      ceilingFaceUV[2] = new this.BABYLON.Vector4(0.5, 0, 1, 1);

      var ceiling = this.BABYLON.MeshBuilder.CreatePolygon(
        "ceiling",
        { shape: ceilingData, depth: 0.1, faceUV: ceilingFaceUV,  sideOrientation: this.BABYLON.Mesh.DOUBLESIDE },
        scene
      );
      ceiling.position = new this.BABYLON.Vector3(0, 1.8, -0.9);
    
      // ceiling.material = wallmat;
    
      return ceiling;
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
    var window = this.BABYLON.MeshBuilder.CreatePolygon("window", {
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
    var window = this.BABYLON.MeshBuilder.CreatePolygon("window", {
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
