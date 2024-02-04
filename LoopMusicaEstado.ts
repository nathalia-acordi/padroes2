import { EstadoMusica } from "./IEstadoMusica";
import { Musica } from "./Musica";
import { Pausada } from "./Pausada";
import { Concluida } from "./Concluida";

export class LoopMusicaEstado implements EstadoMusica {
  pause(musica: Musica): void {
    console.log("Música pausada.");
    musica.setEstado(new Pausada());
  }

  stop(musica: Musica): void {
    console.log("Reprodução da música parada.");
    musica.setEstado(new Concluida());
  }
  play(musica: Musica): void {
    console.log("A música está sendo reproduzida em loop.");
  }
}
