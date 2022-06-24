import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ModoEscuro {
    ativado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    toggle() {
        this.ativado.next(!this.ativado.value);
    }
}