/**
 * EVERSAFE SUITE API CONTROLLER (Code.gs)
 * Handles all Cross-Origin API requests coming from external web deployments.
 */

function doPost(e) {
  try {
    // Parse incoming string data stream cleanly
    var requestData = JSON.parse(e.postData.contents);
    var route = requestData.route;
    
    // API ROUTING ENGINE Matrix
    if (route === "verifyUserPasscode") {
      var passkey = requestData.passkey;
      var authResult = verifyUserPasscode(passkey);
      return sendJsonResponse(authResult);
    }
    
    if (route === "recordFieldData") {
      var sheetName = requestData.sheetName;
      var payload = requestData.payload;
      var recordResult = recordFieldData(sheetName, payload);
      return sendJsonResponse({ success: true, message: recordResult });
    }
    
    if (route === "uploadFieldFile") {
      var base64Data = requestData.base64Data;
      var filename = requestData.filename;
      var uploadResult = uploadFieldFile(base64Data, filename);
      return sendJsonResponse(uploadResult);
    }
    
    return sendJsonResponse({ success: false, error: "Invalid API route requested." });
    
  } catch (err) {
    return sendJsonResponse({ success: false, error: "Critical Script Exception: " + err.toString() });
  }
}

/**
 * Global API Response utility framework supporting CORS preflight handshakes
 */
function sendJsonResponse(objectPayload) {
  return ContentService.createTextOutput(JSON.stringify(objectPayload))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Core Operational Handlers (Mirrors existing verification matrices)
 */
function verifyUserPasscode(passkey) {
  var targetKey = "EVERSAFE2026"; // Change to your preferred master access crew passkey
  if (passkey === targetKey) {
    return { success: true, authorizedUser: "Crew Lead Alpha" };
  } else {
    return { success: false, error: "Access Key Invalid. Authorization Denied." };
  }
}

function recordFieldData(sheetName, payloadArray) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  
  // Failsafe sheet instantiator if missing inside workbook
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(["API_LOG_TIMESTAMP", "Payload Field 1", "Payload Field 2", "Payload Field 3"]);
  }
  
  // Inject internal runtime metadata track stamp to position 0
  var timestamp = new Date();
  payloadArray.unshift(timestamp);
  
  sheet.appendRow(payloadArray);
  return "Asset row registered successfully inside workbook sheet: " + sheetName;
}

function uploadFieldFile(base64DataString, cleanFilename) {
  try {
    var splitData = base64DataString.split(",");
    var contentType = splitData[0].split(";")[0].split(":")[1];
    var rawBase64 = splitData[1];
    
    var decodedBlob = Utilities.newBlob(Utilities.base64Decode(rawBase64), contentType, cleanFilename);
    
    // Locates or creates your vault uploads folder root cleanly
    var folders = DriveApp.getFoldersByName("EverSafe_Vault_Uploads");
    var folder;
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder("EverSafe_Vault_Uploads");
    }
    
    var file = folder.createFile(decodedBlob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    return { success: true, fileUrl: file.getUrl() };
  } catch (e) {
    return { success: false, error: e.toString() };
  }
}
