import React from "react";
import { AffecteTerrain } from "./AffecteTerrain";

export class SaisieScore extends React.Component {   
    render(){
        const match = 
        { 
            numeroDeMatchDansDeroulement : 1,
            numeroDeMatchDansEcheancier : 1,
            formatTableau : "Ronde Suisse",
            nomDuTableau : "SH Pou B",
            tour : "T1 Tr 1",
            JoueurA : "LEBRUN Adam - U11-Pou - EBNP",
            JoueurB : "BELLANGER OLLIVIER Dany - U11-Pou - NBC",
            HeureDeDebut : new Date(2020, 8, 19, 12, 2, 40),
            HeureDeFin : undefined,

        }

        return (
        <div>
            <Bloc valeur={match.numeroDeMatchDansDeroulement} /> 
            <Bloc valeur={match.numeroDeMatchDansEcheancier} /> 
            <Bloc valeur={match.formatTableau} /> 
            <Bloc valeur={match.nomDuTableau} />
            <Bloc valeur={match.tour} />
            <Bloc valeur={match.JoueurA} />
            <SaisieSet/> 
            <Bloc valeur={match.JoueurB} />
            <div style={{display: 'inline-block', margin: '0 0 0 5px'}}>
                {/* <Heure valeur={match.HeureDeDebut}/> 
                <Heure valeur={match.HeureDeFin}/> 
                 */}
                <Heure /> 
                <Heure /> 

            </div>
            <div style={{display: 'inline-block', margin: '0 0 0 5px'}}>
                <AffecteTerrain />
            </div>
            <div style={{display: 'inline-block', margin: '0 0 0 5px'}}>
                <button>Annuler le résultat du match</button>
                <button>Abandonner les modifications</button>
                <button>Enregistrer les modifications</button>
            </div>
        </div>);
    }
}

function Bloc(props: { valeur: React.ReactNode; }){
    return (<div style={{display: 'inline-block', margin: '0 0 0 5px'}}>{props.valeur}</div>);
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
            <div style={{display: 'inline-block', margin: '0 0 0 5px'}}>
                <input type="text" name="setA"
                    minLength={2} maxLength={2} size={2} 
                    pattern="[0-9]*"
                    style={{margin: '0 0 0 5px'}}
                    onChange={this.texteSaisi}/> 
                <input type="text" name="setB"
                    minLength={2} maxLength={2} size={2} 
                    pattern="[0-9]*"
                    style={{margin: '0 0 0 5px'}}
                    onChange={this.texteSaisi}/>
            </div>
        );
    }
}

class Heure extends React.Component{
    private _modeleHeure = "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$";
    constructor(props: Readonly<{valeur:Date}>){
        super(props);
        this.state = {valeur:undefined};
    }
    render(){
        return (
            <input type="text" maxLength={5} size={5} pattern={this._modeleHeure}/>
        );
        //  value={this.state.valeur}
    }
}