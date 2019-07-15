import { Component, Injectable, OnInit, Inject } from "@angular/core";
import { RoomService } from "./service/room.service";
import { WallFactoryService } from "./service/wallfactory.service";
import { EWallType } from "./service/EWallType";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "BabylonTest";

  constructor(
    @Inject("BABYLON") private BABYLON: any,
    private roomService: RoomService,
    private wallFactory: WallFactoryService
  ) {}

  ngOnInit() {
    var canvas = document.getElementById("renderCanvas"); // Get the canvas element
    var engine = new this.BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

    var scene = this.createScene(engine, canvas); //Call the createScene function

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function() {
      scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function() {
      engine.resize();
    });

    // var box = this.BABYLON.MeshBuilder.CreateBox("Box", scene);
    // var sphere = this.BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.25 }, scene, true);
    // box.rotation.y = Math.PI / 4;
    // box.position = new this.BABYLON.Vector3(1, 2, 3);
    
    // var matrix = box.computeWorldMatrix(true);  // force calculation of world matrix
    // var local_pos = new this.BABYLON.Vector3(0, 0.5, 0); //top middle of box relative to box
    // local_pos.addInPlace(new this.BABYLON.Vector3(1, 1, 1)); //translate by (1, 1, 1)
    // var global_pos = this.BABYLON.Vector3.TransformCoordinates(local_pos, matrix); //calculate world position
    // sphere.position = global_pos; //position sphere relative to world
    // this.showWorldAxis(scene, 20);

    this.roomService.getStockwerk("1.OG").subscribe(
      stockwerk => {
        stockwerk.raeume.forEach(room => {

          var SPS = new this.BABYLON.SolidParticleSystem('SPS', scene);

          var rearWall = this.wallFactory.createWall(scene,EWallType.eInsideWallDoor, room.presentation.length, room.presentation.width );
          var frontWall = this.wallFactory.createWall(scene, EWallType.eOusideWallWindow2, room.presentation.length, room.presentation.width);
          var rightWall = this.wallFactory.createWall(scene, EWallType.eInsideWallSimple, room.presentation.length, room.presentation.width );
          var leftWall = this.wallFactory.createWall(scene, EWallType.eOutsideWallWindow1, room.presentation.length, room.presentation.width );
          var floor = this.wallFactory.createWall(scene, EWallType.eFloor, room.presentation.length, room.presentation.width);
          var ceiling = this.wallFactory.createWall(scene, EWallType.eCeiling, room.presentation.length, room.presentation.width );

          var mesh = new this.BABYLON.Mesh.MergeMeshes([rearWall, frontWall, rightWall, leftWall, floor, ceiling], true, true, undefined,true);
          mesh.position = new this.BABYLON.Vector3(room.presentation.x, room.presentation.y, room.presentation.z);
        });
        
      },
      errors => {
        console.log(errors);
        alert("Fail to load room data");
      }
    );
    // var windowFTUM = this.wallFactory.windowMaker(4.15, 2, 4, 0.15, 0.1);
    // windowFTUM.position.x = -2.15;
    // windowFTUM.position.y = 0.3;
    // windowFTUM.position.z = -0.1;

    // var windowRTUL = this.wallFactory.windowMaker1(3, 2, 2, 0.15, 0.1);
    // windowRTUL.position.x = 4.5;
    // windowRTUL.position.y = -0.3;
    // windowRTUL.position.z = 5.6;

    // var backDoor = this.wallFactory.doorMaker(1, 2.25, 0.1);
    // // backDoor.rotation.y = Math.PI / 2;
    // backDoor.position.x = -0.5;
    // backDoor.position.y = -1;
    // backDoor.position.z = 8.9;

    // var doormat = new this.BABYLON.StandardMaterial("door", scene);
    //  doormat.diffuseColor = new this.BABYLON.Color3(82 / 255, 172 / 255, 106 / 255);
    //  backDoor.material = doormat;
  }

  createScene(engine: any, canvas: any): any {
    // Create the scene space
    var scene = new this.BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new this.BABYLON.ArcRotateCamera(
      "Camera",
      -Math.PI / 2,
      Math.PI / 3,
      50,
      new this.BABYLON.Vector3(0, 0, 4.5),
      scene
    );
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new this.BABYLON.HemisphericLight(
      "light1",
      new this.BABYLON.Vector3(10, 10, 0),
      scene
    );
    // var light2 = new this.BABYLON.PointLight("light2", new this.BABYLON.Vector3(0, 1, -1), scene);
    return scene;
  }
}
