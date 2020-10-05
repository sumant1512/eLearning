import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor() {}

  encrypt(data: string) {
    let password = "w3lcom2blkcn!";
    return CryptoJS.AES.encrypt(data.trim(), password.trim()).toString();
  }

  decrypt(data: string) {
    let password = "w3lcom2blkcn!";
    return CryptoJS.AES.decrypt(data.trim(), password.trim()).toString(
      CryptoJS.enc.Utf8
    );
  }
}
