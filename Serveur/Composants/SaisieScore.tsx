import React from "react";
import { AffecteTerrain } from "./AffecteTerrain";

export class SaisieScore extends React.Component {
    render(){
        const numeroDeMatchDansDeroulement = 1;
        const numeroDeMatchDansEcheancier = 1;
        const formatTableau = "Ronde Suisse";
        const nomDuTableau = "SH Pou B";
        const tour = "T1 Tr 1";

        return (
        <div>{numeroDeMatchDansDeroulement} {numeroDeMatchDansEcheancier} {formatTableau} {nomDuTableau} {tour} 
            LEBRUN Adam - U11-Pou - EBNP 
            <SaisieSet/>
            BELLANGER OLLIVIER Dany - U11-Pou - NBC
            <input type="text" maxLength={5} size={5} pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"/> 
            <input type="text" maxLength={5} size={5} pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"/> 
            <AffecteTerrain />
            <button>Annuler le résultat du match</button>
            <button>Abandonner les modifications</button>
            <button>Enregistrer les modifications</button>
        </div>);
    }
}

class SaisieSet extends React.Component{
    texteSaisi(evenement: React.ChangeEvent<HTMLInputElement>){
        const texteSaisi = (evenement.target as any).value;
        // if (texteSaisi.length == 2){
        //     document.querySelector('input[name=setB').focus();
        // }
        // console.log(texteSaisi);

        if (texteSaisi === '' || /^[0-9\b]+$/.test(texteSaisi)){
            // Number

        }
    }
    render(){
        return (
            <span>
                <input type="text" name="setA"
                    minLength={2} 
                    maxLength={2} 
                    size={2} 
                    pattern="[0-9]*"
                    onChange={this.texteSaisi}/> 
                <input type="text" name="setB"
                    minLength={2} 
                    maxLength={2} 
                    size={2} 
                    pattern="[0-9]*"
                    onChange={this.texteSaisi}/>
            </span>
        );
    }

}


