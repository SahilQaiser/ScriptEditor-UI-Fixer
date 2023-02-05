// statistics-container
// sciptContainer
// updateScript button
(() => {
  let readModeBtnAdded = document.getElementById("readModeBtn") != null ? true : false;
  console.log("ReadMode Button Added : " + readModeBtnAdded);

  const scriptContainerDiv = document.getElementById("sciptContainerDiv");
  const ltDivBlock = document.getElementsByClassName("control-bar")[0];

  if (readModeBtnAdded == false && ltDivBlock != null) {
    const btn = document.createElement("button");
    btn.id = "readModeBtn";
    btn.innerText = "Read Mode Off";
    btn.classList.add("btn", "btn-warning", "super", "l10");
    ltDivBlock.appendChild(btn);
  }
  const deleteScriptBtn = document.getElementById("deleteScript");
  if (deleteScriptBtn) {
    deleteScriptBtn.classList.remove("btn-success");
    deleteScriptBtn.classList.add("btn-danger");
  }

  const btn = document.getElementById("readModeBtn");
  if (btn) {
    btn.onclick = () => {
        const readModeOn = btn.innerText === "Read Mode On" ? true : false;
        console.log("readModeOn : " + readModeOn);
        if (typeof scriptContainerDiv !== "undefined" && document.getElementById("multiVersionSelect") != null) {
            console.log("scriptContainerDiv not null");
            let scriptContainer = scriptContainerDiv.getElementsByClassName("CodeMirror")[0];
            let statisticsContainer = document.getElementById("statistics-container");
            if (readModeOn == false) {
                scriptContainer.classList.add("full-screen");
                statisticsContainer.classList.add("hide");
                statisticsContainer.classList.remove("show");
                btn.innerText = "Read Mode On";
                btn.classList.add("btn-info");
                btn.classList.remove("btn-warn");
            } 
            else {
                scriptContainer.classList.remove("full-screen");
                statisticsContainer.classList.add("show");
                statisticsContainer.classList.remove("hide");
                btn.innerText = "Read Mode Off";
                btn.classList.remove("btn-info");
                btn.classList.add("btn-warning");
            }
        } else {
            console.log("scriptContainer null or script not loaded yet");
        }
      };
  }
})();