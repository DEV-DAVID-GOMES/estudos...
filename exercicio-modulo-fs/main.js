import { createFile, updateFile, showFile, deleteFile} from "./modules.js";

async function start() {
    await createFile("Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js")
    await showFile()
    console.log("--------------------------------------------------------------")
    await updateFile("Conteúdo modificado...")
    await showFile()
    console.log("--------------------------------------------------------------")
    await deleteFile()
    
}
start();