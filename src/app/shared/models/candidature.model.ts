export class CandidatureModel{
    id! : number;
    id_offre!: number;
    titre_offre!: string;
    description_offre!: string;
    duree_offre!: string;
    salaire_offre!: string;
    date_creation_offre?: string;
    id_interimaire!: string;
    nom_interimaire?: string;
    cv_interimaire?: string;
    nom_entreprise?: string;
    status_acceptation ! : number;
    date_creation? : string;
}