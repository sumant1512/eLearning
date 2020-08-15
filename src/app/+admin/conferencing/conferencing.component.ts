import { Component, OnInit } from "@angular/core";
declare var RTCMutliconnection: any;

@Component({
  selector: "app-conferencing",
  templateUrl: "./conferencing.component.html",
  styleUrls: ["./conferencing.component.css"],
})
export class ConferencingComponent implements OnInit {
  connection;
  constructor() {}

  ngOnInit() {
    this.connection = new RTCMutliconnection();
  }

  openRoom(act) {
    if (act === "open-room") {
      this.connection.open(act),
        function (isRoomOpened, roomid, error) {
          if (isRoomOpened === true) {
            this.showRoomURL(this.connection.sessionid);
          } else {
            // disableInputButtons(true);
            if (error === "Room not available") {
              alert(
                "Someone already created this room. Please either join or create a separate room."
              );
              return;
            }
            alert(error);
          }
        };
    } else if (act === "join-room") {
      this.connection.open(act),
        function (isRoomOpened, roomid, error) {
          if (error) {
            // disableInputButtons(true);
            if (error === "Room not available") {
              alert(
                "This room does not exist. Please either create it or wait for moderator to enter in the room."
              );
              return;
            }
            alert(error);
          }
        };
    } else {
      this.connection.openOrJoin(act, function (isRoomExist, roomid, error) {
        if (error) {
          // disableInputButtons(true);
          alert(error);
        } else if (this.connection.isInitiator === true) {
          // if room doesn't exist, it means that current user will create the room
          // showRoomURL(roomid);
        }
      });
    }
  }

  showRoomURL(roomid) {
    var roomHashURL = "#" + roomid;
    var roomQueryStringURL = "?roomid=" + roomid;

    var html = "<h2>Unique URL for your room:</h2><br>";

    html +=
      'Hash URL: <a href="' +
      roomHashURL +
      '" target="_blank">' +
      roomHashURL +
      "</a>";
    html += "<br>";
    html +=
      'QueryString URL: <a href="' +
      roomQueryStringURL +
      '" target="_blank">' +
      roomQueryStringURL +
      "</a>";

    var roomURLsDiv = document.getElementById("room-urls");
    roomURLsDiv.innerHTML = html;

    roomURLsDiv.style.display = "block";
  }
}
