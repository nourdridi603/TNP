export class Produits{
    public get datefabrication(): Date {
        return this._datefabrication;
    }
    public set datefabrication(value: Date) {
        this._datefabrication = value;
    }
    public get disponibility(): boolean {
        return this._disponibility;
    }
    public set disponibility(value: boolean) {
        this._disponibility = value;
    }
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    public get picture(): string {
        return this._picture;
    }
    public set picture(value: string) {
        this._picture = value;
    }
    public get titre(): string {
        return this._titre;
    }
    public set titre(value: string) {
        this._titre = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get qte(): number {
        return this._qte;
    }
    public set qte(value: number) {
        this._qte= value;
    }
    public get marque(): string {
        return this._marque;
    }
    public set marque(value: string) {
        this._marque = value;
    }
    constructor(private _id: number,private _titre: string,private _picture: string , private _marque: string,private _prix: number,private _disponibility: boolean,private _qte: number ,private _datefabrication: Date){

        
    }
}