import React from "react";
import { AffecteTerrain } from "./AffecteTerrain";
import { Button } from '@rmwc/button';
import { TextField} from '@rmwc/textfield';

// Hook ?? plutot que classe composant
// https://rmwc.io/
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
                <Button raised label="Annuler le résultat du match"/>
                <Button label="Abandonner les modifications" />
                <Button raised label="Enregistrer les modifications" />
            </div>
        </div>);
    }
}

function Bloc(props: { valeur: React.ReactNode; }){
    return (<div style={{display: 'inline-block', margin: '0 0 0 5px'}}>{props.valeur}</div>);
}

class SaisieSet extends React.Component{
    render(){
        return (
            <div style={{display: 'inline-block', margin: '0 0 0 5px'}}>
                <TextField type="number" name="setA"
                    style={{margin: '0 0 0 5px'}}
                    min="0" max="30"/> 
                <TextField type="number" name="setB"
                    min="0" max="30"
                    style={{margin: '0 0 0 5px'}}/>
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
            <TextField type="time" maxLength={5} size={5} pattern={this._modeleHeure}/>
        );
    }
}