import { createFile } from "./createFile.mjs";
import { updateFile } from "./updateFile.mjs";
import { showFile } from "./showFile.mjs";
import { deleteFile } from "./deleteFile.mjs";


async function start() {
    await createFile("Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js.");
    await showFile();
     console.log("--------------")
    await updateFile("Conteúdo modificado...")
    await showFile()
    console.log("--------------")
    await deleteFile()
    }

start()